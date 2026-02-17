import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#2D2424] to-[#3D3434] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl mb-4 text-[#E0D5C1]"
              style={{ fontWeight: 300 }}
            >
              Mafija Makeup Academy
            </motion.h3>
            <p className="text-[#F5E6E0]/70 mb-6 leading-relaxed">
              Transforming beauty dreams into reality. Professional makeup services and academy
              dedicated to enhancing your natural beauty and building confidence.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Instagram, href: '#' },
                { icon: Facebook, href: '#' },
                { icon: Youtube, href: '#' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 bg-[#B8967D] rounded-full flex items-center justify-center hover:bg-[#E8B4A8] transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#E8B4A8] mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['About', 'Services', 'Portfolio', 'Academy', 'Testimonials', 'Contact'].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-[#F5E6E0]/70 hover:text-[#E8B4A8] transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-[#E8B4A8] mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#B8967D] flex-shrink-0 mt-0.5" />
                <span className="text-[#F5E6E0]/70 text-sm">
                  123 Beauty Street, Fashion District, Mumbai 400001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#B8967D] flex-shrink-0" />
                <a
                  href="tel:+919876543210"
                  className="text-[#F5E6E0]/70 text-sm hover:text-[#E8B4A8] transition-colors"
                >
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#B8967D] flex-shrink-0" />
                <a
                  href="mailto:hello@mafija.com"
                  className="text-[#F5E6E0]/70 text-sm hover:text-[#E0D5C1] transition-colors"
                >
                  hello@mafija.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#B8967D]/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#F5E6E0]/50 text-sm flex items-center gap-2">
            © 2026 Mafija Makeup Academy. Made with
            <Heart className="w-4 h-4 fill-[#E8B4A8] text-[#E8B4A8]" />
          </p>
          <div className="flex gap-6 text-sm text-[#F5E6E0]/50">
            <a href="#" className="hover:text-[#E8B4A8] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#E8B4A8] transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
