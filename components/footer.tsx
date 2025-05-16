import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary-deep text-white">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Tagline */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="font-montserrat font-bold text-2xl">YMGrad</span>
            </Link>
            <p className="text-light-blue mb-6">Your Global Education Partner</p>
            <div className="flex space-x-4 mb-6">
              <Link href="#" className="hover:text-accent-gold transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="hover:text-accent-gold transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:text-accent-gold transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="hover:text-accent-gold transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="hover:text-accent-gold transition-colors">
                <Youtube size={20} />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
            <div className="space-y-2 text-sm">
              <p>Email: contact@ymgrad.com</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>123 Education Ave, New York, NY 10001</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm hover:text-accent-gold transition-colors">
                  Educational Consulting
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-accent-gold transition-colors">
                  Document Preparation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-accent-gold transition-colors">
                  Visa Support
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-accent-gold transition-colors">
                  Academic Enhancement
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-accent-gold transition-colors">
                  Immigration Pathways
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-accent-gold transition-colors">
                  Post-Admission Services
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-accent-gold transition-colors">
                  Career Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm hover:text-accent-gold transition-colors">
                  University Database
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-accent-gold transition-colors">
                  Visa Requirements
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-accent-gold transition-colors">
                  Scholarship Guide
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-accent-gold transition-colors">
                  Student Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-accent-gold transition-colors">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-accent-gold transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Legal */}
          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2 mb-6">
              <li>
                <Link href="#" className="text-sm hover:text-accent-gold transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-accent-gold transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-accent-gold transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-accent-gold transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-accent-gold transition-colors">
                  Partners
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-accent-gold transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>

            <h3 className="font-montserrat font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm hover:text-accent-gold transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-accent-gold transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-accent-gold transition-colors">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-accent-gold transition-colors">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-blue-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <select className="bg-blue-800 text-white rounded px-3 py-1 text-sm">
                <option value="en">English</option>
                <option value="es">Español</option>
                <option value="fr">Français</option>
                <option value="zh">中文</option>
              </select>
            </div>
            <p className="text-sm text-light-blue">© 2025 YMGrad Education Consulting. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
