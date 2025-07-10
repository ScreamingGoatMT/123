import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, ImageIcon, Mail, MapPin, ExternalLink } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section id="home" className="relative h-screen w-full">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-black/70 z-0"
          style={{
            backgroundImage: "url('/hero-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundBlend: "overlay",
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 md:px-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">Experience The New Reality</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, excepturi. At recusandae sit perferendis
            autem, iste tempora nostrum numquam sapiente!
          </p>
          <Button
            asChild
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-black transition-colors bg-transparent"
          >
            <Link href="/#mission">Explore Us</Link>
          </Button>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-20 bg-black text-white px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Mission</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-zinc-900 p-8 rounded-lg text-center">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <img src="/1.svg" alt="Quality Collectibles Icon" className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Quality Collectibles</h3>
              <p className="text-gray-300">
                We source and curate only the highest quality collectibles for our customers, ensuring authenticity and
                value.
              </p>
            </div>
            <div className="bg-zinc-900 p-8 rounded-lg text-center">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <img src="/2.svg" alt="Community Focus Icon" className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Community Focus</h3>
              <p className="text-gray-300">
                Building a community of passionate collectors who share knowledge, experiences, and the joy of
                collecting.
              </p>
            </div>
            <div className="bg-zinc-900 p-8 rounded-lg text-center">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <img src="/3.svg" alt="Education & Expertise Icon" className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Education & Expertise</h3>
              <p className="text-gray-300">
                Providing expert knowledge and educational resources to help collectors make informed decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Merch Section */}
      <section id="merch" className="py-20 bg-zinc-900 text-white px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Merch</h2>
          <div className="text-center mb-8">
            <p className="text-gray-300 mb-6">
              Check out our exclusive merchandise collection featuring unique designs for collectors and enthusiasts.
            </p>
            <Button asChild className="bg-white text-black hover:bg-gray-200 inline-flex items-center">
              <a href="https://redbubble.com/your-store" target="_blank" rel="noopener noreferrer">
                Shop Merch <ExternalLink className="ml-2" size={16} />
              </a>
            </Button>
          </div>

          {/* Scrollable Gallery */}
          <div className="overflow-x-auto">
            <div className="flex space-x-4 pb-4" style={{ width: "max-content" }}>
              {[...Array(8)].map((_, i) => (
                <div key={i} className="flex-shrink-0 w-64 h-64 bg-gray-800 rounded-lg relative group overflow-hidden">
                  <img
                    src={`/merch-${i + 1}.jpg`}
                    alt={`Merch Item ${i + 1}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = "none"
                      e.target.nextSibling.style.display = "flex"
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
                    <ImageIcon size={32} className="text-gray-600" />
                  </div>
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Button variant="outline" size="sm" className="text-white border-white bg-transparent" asChild>
                      <a href="https://redbubble.com/your-store" target="_blank" rel="noopener noreferrer">
                        Shop Now
                      </a>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile scroll hint */}
          <div className="md:hidden text-center mt-4">
            <p className="text-gray-400 text-sm">← Scroll to see more items →</p>
          </div>
        </div>
      </section>

      {/* Event Calendar Section */}
      <section id="event-calendar" className="py-20 bg-black text-white px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Event Calendar</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-zinc-900 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Calendar className="mr-3 text-gray-400" />
                <div>
                  <h3 className="text-xl font-semibold">Collector's Convention</h3>
                  <p className="text-gray-400">July 15-17, 2025</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Join us for the annual Collector's Convention featuring rare collectibles, guest speakers, and
                networking opportunities.
              </p>
              <div className="flex items-center text-gray-400">
                <MapPin size={16} className="mr-1" />
                <span>Convention Center, Downtown</span>
              </div>
            </div>
            <div className="bg-zinc-900 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Calendar className="mr-3 text-gray-400" />
                <div>
                  <h3 className="text-xl font-semibold">Exclusive Preview Night</h3>
                  <p className="text-gray-400">August 5, 2025</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Be the first to see our new collection before it's available to the public. Limited spots available.
              </p>
              <div className="flex items-center text-gray-400">
                <MapPin size={16} className="mr-1" />
                <span>Screaming Goat Gallery</span>
              </div>
            </div>
            <div className="bg-zinc-900 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Calendar className="mr-3 text-gray-400" />
                <div>
                  <h3 className="text-xl font-semibold">Collector's Workshop</h3>
                  <p className="text-gray-400">September 10, 2025</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Learn from experts about authentication, preservation, and valuation of collectibles.
              </p>
              <div className="flex items-center text-gray-400">
                <MapPin size={16} className="mr-1" />
                <span>Community Center</span>
              </div>
            </div>
            <div className="bg-zinc-900 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Calendar className="mr-3 text-gray-400" />
                <div>
                  <h3 className="text-xl font-semibold">Holiday Showcase</h3>
                  <p className="text-gray-400">December 1-24, 2025</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Special holiday exhibition featuring festive collectibles and gift ideas for collectors.
              </p>
              <div className="flex items-center text-gray-400">
                <MapPin size={16} className="mr-1" />
                <span>Screaming Goat Gallery</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-zinc-900 text-white px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="aspect-square bg-gray-800 rounded-lg relative group overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <ImageIcon size={32} className="text-gray-600" />
                </div>
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Button variant="outline" size="sm" className="text-white border-white bg-transparent">
                    View
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button variant="outline" className="border-white text-white bg-transparent">
              View All
            </Button>
          </div>
        </div>
      </section>

      {/* Rentals Section */}
      <section id="rentals" className="py-20 bg-black text-white px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Rentals</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Standard Package",
                price: "$99",
                features: ["5 collectibles", "1 week rental", "Free shipping"],
              },
              {
                title: "Premium Package",
                price: "$199",
                features: ["10 collectibles", "2 week rental", "Free shipping", "Insurance included"],
              },
              {
                title: "Collector's Package",
                price: "$299",
                features: [
                  "15 collectibles",
                  "1 month rental",
                  "Free shipping",
                  "Insurance included",
                  "Curator's selection",
                ],
              },
            ].map((pkg, index) => (
              <div key={index} className="bg-zinc-900 p-6 rounded-lg border border-gray-800">
                <h3 className="text-xl font-semibold mb-2">{pkg.title}</h3>
                <p className="text-3xl font-bold mb-4">{pkg.price}</p>
                <ul className="space-y-2 mb-6">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <span className="mr-2">✓</span> {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full">Rent Now</Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about-us" className="py-20 bg-black text-white px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">About Us</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-800 aspect-video rounded-lg"></div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Our Story</h3>
              <p className="text-gray-300 mb-4">
                Screaming Goat Collectibles was founded in 2020 by a group of passionate collectors who wanted to create
                a community around their shared love for unique and valuable items.
              </p>
              <p className="text-gray-300 mb-4">
                What started as a small online forum has grown into a full-service collectibles business, offering
                curated collections, authentication services, and community events.
              </p>
              <p className="text-gray-300">
                Our team consists of experts in various collecting fields, from vintage toys to limited edition art
                prints, ensuring that we can provide knowledgeable guidance to collectors of all interests.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-zinc-900 text-white px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Get In Touch</h3>
              <p className="text-gray-300 mb-6">
                Have questions about our collectibles or services? We'd love to hear from you. Fill out the form or use
                the contact information below.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <MapPin className="mr-3 text-gray-400 mt-1" />
                  <div>
                    <h4 className="font-medium">Address</h4>
                    <p className="text-gray-400">123 Collector's Avenue, Suite 456, Collectible City, CC 12345</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="mr-3 text-gray-400 mt-1" />
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-gray-400">info@screaminggoatcollectibles.com</p>
                  </div>
                </div>
              </div>

              {/* Social Media Buttons */}
              <div>
                <h4 className="font-medium mb-4">Follow Us</h4>
                <div className="grid grid-cols-4 gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-white border-gray-600 hover:border-white bg-transparent p-2"
                    asChild
                  >
                    <a href="https://discord.gg/your-server" target="_blank" rel="noopener noreferrer" title="Discord">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
                      </svg>
                    </a>
                  </Button>

                  <Button
                    variant="outline"
                    size="sm"
                    className="text-white border-gray-600 hover:border-white bg-transparent p-2"
                    asChild
                  >
                    <a href="https://twitter.com/your-handle" target="_blank" rel="noopener noreferrer" title="Twitter">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    </a>
                  </Button>

                  <Button
                    variant="outline"
                    size="sm"
                    className="text-white border-gray-600 hover:border-white bg-transparent p-2"
                    asChild
                  >
                    <a
                      href="https://pinterest.com/your-profile"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Pinterest"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z" />
                      </svg>
                    </a>
                  </Button>

                  <Button
                    variant="outline"
                    size="sm"
                    className="text-white border-gray-600 hover:border-white bg-transparent p-2"
                    asChild
                  >
                    <a
                      href="https://instagram.com/your-handle"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Instagram"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.017 0C8.396 0 7.989.013 6.77.072 5.56.132 4.708.333 3.999.63c-.738.319-1.363.74-1.988 1.365-.625.625-1.046 1.25-1.365 1.988C.333 4.708.132 5.56.072 6.77.013 7.989 0 8.396 0 12.017c0 3.624.013 4.09.072 5.311.06 1.216.261 2.062.558 2.788.319.738.74 1.363 1.365 1.988.625.625 1.25 1.046 1.988 1.365.726.296 1.572.497 2.788.558C7.989 23.987 8.396 24 12.017 24c3.624 0 4.09-.013 5.311-.072 1.216-.06 2.062-.262 2.788-.558.738-.319 1.363-.74 1.988-1.365.625-.625 1.25 1.046 1.365-1.988.296-.726.497-1.572.558-2.788.059-1.22.072-1.687.072-5.311 0-3.621-.013-4.028-.072-5.25-.061-1.216-.262-2.062-.558-2.786-.319-.738-.74-1.363-1.365-1.988C19.38.74 18.755.319 18.017.63c-.726-.297-1.572-.498-2.788-.558C14.028.013 13.621 0 12.017 0zM12.017 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0 3.654c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.757 6.163 6.162 6.163 3.405 0 6.162-2.758 6.162-6.163 0-3.402-2.757-6.162-6.162-6.162zM12.017 16c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.408-10.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>
                  </Button>

                  <Button
                    variant="outline"
                    size="sm"
                    className="text-white border-gray-600 hover:border-white bg-transparent p-2"
                    asChild
                  >
                    <a href="https://facebook.com/your-page" target="_blank" rel="noopener noreferrer" title="Facebook">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </a>
                  </Button>

                  <Button
                    variant="outline"
                    size="sm"
                    className="text-white border-gray-600 hover:border-white bg-transparent p-2"
                    asChild
                  >
                    <a href="https://tiktok.com/@your-handle" target="_blank" rel="noopener noreferrer" title="TikTok">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                      </svg>
                    </a>
                  </Button>

                  <Button
                    variant="outline"
                    size="sm"
                    className="text-white border-gray-600 hover:border-white bg-transparent p-2"
                    asChild
                  >
                    <a
                      href="https://youtube.com/@your-channel"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="YouTube"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                    </a>
                  </Button>
                </div>
              </div>
            </div>
            <div>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 bg-black text-white rounded-md"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 bg-black text-white rounded-md"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block mb-2 text-sm font-medium">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 bg-black text-white rounded-md"
                    placeholder="Subject"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-black text-white rounded-md"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <Button className="w-full">Send Message</Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black text-gray-400 px-4 md:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Screaming Goat</h3>
            <p>Premium collectibles for enthusiasts.</p>
          </div>
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/#home" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#mission" className="hover:text-white transition-colors">
                  Mission
                </Link>
              </li>
              <li>
                <Link href="/#merch" className="hover:text-white transition-colors">
                  Merch
                </Link>
              </li>
              <li>
                <Link href="/#event-calendar" className="hover:text-white transition-colors">
                  Event Calendar
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">More</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/#rentals" className="hover:text-white transition-colors">
                  Rentals
                </Link>
              </li>
              <li>
                <Link href="/#about-us" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Instagram
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Facebook
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-zinc-800 text-center">
          <p>&copy; {new Date().getFullYear()} Screaming Goat Collectibles. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
