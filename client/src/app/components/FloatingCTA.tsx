import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Phone, Mail, Calendar } from 'lucide-react';

export function FloatingCTA() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed bottom-6 right-6 z-50">
          {/* Quick Actions Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.8 }}
                className="absolute bottom-20 right-0 bg-white rounded-2xl shadow-2xl p-4 space-y-3 min-w-[250px] max-h-[calc(100vh-120px)] overflow-y-auto"
              >
                <motion.a
                  href="tel:+919876543210"
                  whileHover={{ scale: 1.05, x: 5 }}
                  className="flex items-center gap-3 p-3 bg-[#F5E6E0] rounded-xl hover:bg-[#E8B4A8] transition-colors group"
                >
                  <div className="w-10 h-10 bg-[#B8967D] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-[#2D2424]">Call Now</div>
                    <div className="text-xs text-[#8B7B70]">+91 98765 43210</div>
                  </div>
                </motion.a>

                <motion.a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, x: 5 }}
                  className="flex items-center gap-3 p-3 bg-[#F5E6E0] rounded-xl hover:bg-[#E8B4A8] transition-colors group"
                >
                  <div className="w-10 h-10 bg-[#25D366] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-[#2D2424]">WhatsApp</div>
                    <div className="text-xs text-[#8B7B70]">Chat with us</div>
                  </div>
                </motion.a>

                <motion.a
                  href="mailto:hello@mafija.com"
                  whileHover={{ scale: 1.05, x: 5 }}
                  className="flex items-center gap-3 p-3 bg-[#F5E6E0] rounded-xl hover:bg-[#E8B4A8] transition-colors group"
                >
                  <div className="w-10 h-10 bg-[#B8967D] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-[#2D2424]">Email Us</div>
                    <div className="text-xs text-[#8B7B70]">hello@mafija.com</div>
                  </div>
                </motion.a>

                <motion.button
                  whileHover={{ scale: 1.05, x: 5 }}
                  onClick={() => {
                    document
                      .querySelector('#booking')
                      ?.scrollIntoView({ behavior: 'smooth' });
                    setIsOpen(false);
                  }}
                  className="flex items-center gap-3 p-3 bg-[#F5E6E0] rounded-xl hover:bg-[#E8B4A8] transition-colors group w-full"
                >
                  <div className="w-10 h-10 bg-[#B8967D] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Calendar className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm text-[#2D2424]">Book Appointment</div>
                    <div className="text-xs text-[#8B7B70]">Schedule now</div>
                  </div>
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main Button */}
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="w-16 h-16 bg-gradient-to-r from-[#B8967D] to-[#E8B4A8] rounded-full shadow-2xl flex items-center justify-center text-white relative"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-7 h-7" />
                </motion.div>
              ) : (
                <motion.div
                  key="message"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <MessageCircle className="w-7 h-7" />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Pulse Animation */}
            {!isOpen && (
              <span className="absolute inset-0 rounded-full bg-[#B8967D] animate-ping opacity-20" />
            )}
          </motion.button>
        </div>
      )}
    </AnimatePresence>
  );
}
