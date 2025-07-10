#!/usr/bin/env bash
set -e

echo "🚧 Cleaning old out/ directory..."
rm -rf out

echo "🛠️  Creating fresh out/ from static-site/..."
mkdir -p out
cp -a static-site/. out/

# If you have a _redirects file in static-site/, copy it too
if [ -f static-site/_redirects ]; then
  echo "📑 Copying Netlify redirects..."
  cp static-site/_redirects out/
fi

echo "✅ out/ rebuilt from static-site/"
