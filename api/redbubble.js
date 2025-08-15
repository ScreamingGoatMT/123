// api/redbubble.js
const SHOP_URL_DEFAULT = "https://www.redbubble.com/people/Grimmethy/shop?asc=u";
const SHOP_URL = process.env.REDBUBBLE_SHOP_URL || SHOP_URL_DEFAULT;

let cached = { t: 0, data: null };
const TTL_MS = 1000 * 60 * 60;

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  if (req.method === "OPTIONS") return res.status(200).end();

  const count = Math.max(1, Math.min(parseInt(req.query.count || "24", 10), 48));

  try {
    const now = Date.now();
    if (cached.data && now - cached.t < TTL_MS) {
      res.setHeader("Cache-Control", "public, s-maxage=300, stale-while-revalidate=600");
      return res.status(200).json(cached.data.slice(0, count));
    }

    const r = await fetch(SHOP_URL, { headers: { "User-Agent": "Mozilla/5.0" } });
    if (!r.ok) throw new Error(`Fetch ${r.status}`);
    const html = await r.text();

    let items = tryParseNextData(html) || parseNaive(html);
    items = dedupe(normalize(items)).slice(0, count);

    cached = { t: now, data: items };
    res.setHeader("Cache-Control", "public, s-maxage=300, stale-while-revalidate=600");
    return res.status(200).json(items);
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "Failed to load Redbubble items." });
  }

  // helper functions (same as Netlify version) ↓
  function tryParseNextData(html) {
    const m = html.match(/<script[^>]*>\s*window\.__NEXT_DATA__\s*=\s*({[\s\S]*?});?\s*<\/script>/)
             || html.match(/<script[^>]*id="__NEXT_DATA__"[^>]*>\s*({[\s\S]*?})\s*<\/script>/);
    if (!m) return null;
    try {
      const data = JSON.parse(m[1]);
      const candidates = findArrays(data).filter(a => a.length && typeof a[0] === "object");
      for (const arr of candidates) {
        const mapped = arr
          .map(p => ({
            title: p.title || p.name || p.productTitle || p.displayName,
            url: fullUrl(p.url || p.link || p.href),
            image: imageFromObj(p)
          }))
          .filter(x => x.title && x.url && x.image);
        if (mapped.length >= 6) return mapped;
      }
    } catch {}
    return null;
  }

  function parseNaive(html) {
    const out = [];
    const anchorRe = /<a\s+[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi;
    let aMatch;
    while ((aMatch = anchorRe.exec(html))) {
      const href = aMatch[1];
      if (!/redbubble\.com/.test(href) && !href.startsWith("/")) continue;
      if (!/(\/i\/|\/shop)/.test(href)) continue;
      const inner = aMatch[2];
      const imgMatch = inner.match(/<img[^>]*src="([^"]+)"[^>]*alt="([^"]*)"/i)
                    || inner.match(/<img[^>]*data-src="([^"]+)"[^>]*alt="([^"]*)"/i)
                    || inner.match(/<img[^>]*src="([^"]+)"/i);
      if (!imgMatch) continue;
      const img = imgMatch[1];
      const alt = (imgMatch[2] || "").trim();
      out.push({
        title: alt || "View on Redbubble",
        url: fullUrl(href),
        image: img.startsWith("//") ? "https:" + img : img
      });
    }
    return out;
  }

  function fullUrl(href) {
    if (href.startsWith("http")) return href;
    return new URL(href, "https://www.redbubble.com").toString();
  }
  function imageFromObj(p) {
    const candidates = [
      p.image, p.imageUrl, p.primaryImage, p.thumbnail, p.thumbUrl,
      p.media && p.media.src,
      p.images && p.images[0] && (p.images[0].url || p.images[0].src),
    ].filter(Boolean);
    let src = candidates[0];
    if (!src) return null;
    if (typeof src === "object") src = src.url || src.src;
    if (!src) return null;
    if (src.startsWith("//")) src = "https:" + src;
    return src;
  }
  function findArrays(obj, out = []) { if (Array.isArray(obj)) out.push(obj); else if (obj && typeof obj === "object") for (const k in obj) findArrays(obj[k], out); return out; }
  function normalize(items) { return items.map(x => ({ title: String(x.title || "View on Redbubble"), url: fullUrl(String(x.url)), image: String(x.image) })).filter(x => x.url.includes("redbubble.com") && x.image); }
  function dedupe(items) { const s = new Set(); return items.filter(it => { const k = it.url.replace(/(\?|#).*/, ""); if (s.has(k)) return false; s.add(k); return true; }); }
}
