import { motion } from 'motion/react';
import { Calendar, User, Phone, Mail, MessageSquare } from 'lucide-react';

export function BookingSection() {
  return (
    <section className="py-24 px-6 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FAF8F6] via-white to-[#F5E6E0]" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#B8967D]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E8B4A8]/10 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#B8967D] tracking-widest text-sm mb-4 block">BOOK NOW</span>
          <h2 className="text-4xl md:text-5xl text-[#2D2424] mb-4" style={{ fontWeight: 300 }}>
            Schedule Your Appointment
          </h2>
          <p className="text-[#8B7B70] max-w-2xl mx-auto">
            Fill out the form below and we'll get back to you within 24 hours
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Glassmorphism Card */}
          <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-12 border border-[#B8967D]/20">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="group">
                  <label className="flex items-center gap-2 text-[#2D2424] mb-3">
                    <User className="w-5 h-5 text-[#B8967D]" />
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-6 py-4 bg-white/80 border border-[#B8967D]/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#B8967D] transition-all placeholder:text-[#8B7B70]/50"
                  />
                </div>

                {/* Phone */}
                <div className="group">
                  <label className="flex items-center gap-2 text-[#2D2424] mb-3">
                    <Phone className="w-5 h-5 text-[#B8967D]" />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="w-full px-6 py-4 bg-white/80 border border-[#B8967D]/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#B8967D] transition-all placeholder:text-[#8B7B70]/50"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Email */}
                <div className="group">
                  <label className="flex items-center gap-2 text-[#2D2424] mb-3">
                    <Mail className="w-5 h-5 text-[#B8967D]" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="your.email@example.com"
                    className="w-full px-6 py-4 bg-white/80 border border-[#B8967D]/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#B8967D] transition-all placeholder:text-[#8B7B70]/50"
                  />
                </div>

                {/* Date */}
                <div className="group">
                  <label className="flex items-center gap-2 text-[#2D2424] mb-3">
                    <Calendar className="w-5 h-5 text-[#B8967D]" />
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    className="w-full px-6 py-4 bg-white/80 border border-[#B8967D]/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#B8967D] transition-all"
                  />
                </div>
              </div>

              {/* Service */}
              <div className="group">
                <label className="flex items-center gap-2 text-[#2D2424] mb-3">
                  <MessageSquare className="w-5 h-5 text-[#B8967D]" />
                  Select Service
                </label>
                <select className="w-full px-6 py-4 bg-white/80 border border-[#B8967D]/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#B8967D] transition-all text-[#2D2424]">
                  <option>Bridal Makeup</option>
                  <option>Party Makeup</option>
                  <option>Photoshoot Makeup</option>
                  <option>Beginner Course</option>
                  <option>Advanced Course</option>
                  <option>Professional Certification</option>
                </select>
              </div>

              {/* Message */}
              <div className="group">
                <label className="flex items-center gap-2 text-[#2D2424] mb-3">
                  <MessageSquare className="w-5 h-5 text-[#B8967D]" />
                  Additional Details
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell us more about your requirements..."
                  className="w-full px-6 py-4 bg-white/80 border border-[#B8967D]/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#B8967D] transition-all resize-none placeholder:text-[#8B7B70]/50"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 bg-gradient-to-r from-[#B8967D] to-[#E8B4A8] text-white rounded-full shadow-lg hover:shadow-xl transition-all text-lg"
              >
                Submit Booking Request
              </motion.button>

              <p className="text-center text-sm text-[#8B7B70] mt-4">
                We'll confirm your appointment within 24 hours
              </p>
            </form>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#B8967D]/10 rounded-full blur-2xl" />
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#E8B4A8]/10 rounded-full blur-2xl" />
        </motion.div>
      </div>
    </section>
  );
}
