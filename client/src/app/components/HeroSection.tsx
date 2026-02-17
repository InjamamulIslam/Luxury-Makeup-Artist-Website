import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowDown } from 'lucide-react';
import { useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function HeroSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="/images/hero-bridal.jpg"
          fallbackSrc="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=1920&q=80"
          alt="Makeup Artist Background"
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient Overlays for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF9F7]/95 via-[#FAF9F7]/85 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF9F7]/90 via-transparent to-[#FAF9F7]/80" />
        <div className="absolute inset-0 bg-[#F4EFE9]/20" />
      </div>

      {/* Animated Gradient Background */}
      <motion.div 
        className="absolute inset-0 z-[1]"
        style={{ opacity }}
      >
        {/* Animated Gradient Orbs */}
        <motion.div
          className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full blur-3xl opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(184,150,125,0.4) 0%, transparent 70%)',
          }}
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        
        <motion.div
          className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full blur-3xl opacity-15"
          style={{
            background: 'radial-gradient(circle, rgba(224,213,193,0.5) 0%, transparent 70%)',
          }}
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Flowing Wave Pattern */}
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 30c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10-10-4.477-10-10zm0 0c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10 10 4.477 10 10z' fill='%23B8967D' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }}
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </motion.div>

      {/* Content with Parallax */}
      <motion.div 
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
        style={{ y, scale, opacity }}
      >
        {/* Decorative Top Element */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8"
        >
          <motion.div
            className="flex items-center justify-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#B8967D]" />
            <span className="text-[#B8967D] tracking-[0.3em] text-sm whitespace-nowrap">LUXURY MAKEUP ARTISTRY</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#B8967D]" />
          </motion.div>
        </motion.div>

        {/* Main Heading with Gradient Animation */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-6xl md:text-8xl mb-8 text-[#2D2424] tracking-tight relative"
          style={{ fontWeight: 300, letterSpacing: '-0.03em' }}
        >
          <motion.span
            className="inline-block"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{
              backgroundImage: 'linear-gradient(90deg, #2D2424 0%, #B8967D 50%, #2D2424 100%)',
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Enhancing Beauty.
          </motion.span>
          <br />
          <motion.span
            className="inline-block relative"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <span className="text-[#B8967D] relative" style={{ fontWeight: 400 }}>
              Creating Confidence.
              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#B8967D] via-[#E0D5C1] to-transparent"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
                style={{ transformOrigin: 'left' }}
              />
            </span>
          </motion.span>
        </motion.h1>

        {/* Subheading with Reveal Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mb-12 relative"
        >
          <motion.p
            className="text-xl md:text-2xl text-[#7A6B63] max-w-3xl mx-auto leading-relaxed"
            style={{ fontWeight: 300 }}
          >
            Professional makeup artistry for your{' '}
            <span className="text-[#B8967D] italic">special moments</span> and expert makeup academy
            to transform your <span className="text-[#B8967D] italic">passion</span> into a career
          </motion.p>
          
          {/* Decorative Dots */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 rounded-full bg-[#B8967D]"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* CTA Buttons with Hover Effects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <motion.button
            data-cursor-text="Book"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-10 py-5 bg-gradient-to-r from-[#B8967D] to-[#E0D5C1] text-white rounded-full shadow-2xl overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#E0D5C1] to-[#B8967D]"
              initial={{ x: '100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10 flex items-center gap-2 text-lg">
              Book Appointment
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </span>
            <div className="absolute inset-0 bg-white/20 blur-xl group-hover:blur-2xl transition-all" />
          </motion.button>
          
          <motion.button
            data-cursor-text="Learn"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-10 py-5 bg-white text-[#B8967D] rounded-full shadow-2xl border-2 border-[#B8967D] overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#B8967D] to-[#E0D5C1] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 text-lg font-medium group-hover:text-white transition-colors duration-300">
              Join Makeup Classes
            </span>
          </motion.button>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 text-[#7A6B63]"
        >
          {['500+ Happy Clients', 'Certified Professional', 'Award Winning'].map((badge, i) => (
            <motion.div
              key={badge}
              className="flex items-center gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 + i * 0.2 }}
            >
              <motion.div
                className="w-2 h-2 bg-[#B8967D] rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
              />
              <span className="text-sm tracking-wide">{badge}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Animated Scroll Indicator - Fixed at bottom */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <motion.div
          className="flex flex-col items-center cursor-pointer group"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-6 h-6 text-[#B8967D] group-hover:text-[#E0D5C1] transition-colors" />
        </motion.div>
      </motion.div>

      {/* Decorative Corner Elements */}
      <motion.div
        className="absolute top-8 left-8 w-32 h-32 border-l-2 border-t-2 border-[#B8967D]/30 rounded-tl-3xl"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      />
      <motion.div
        className="absolute bottom-8 right-8 w-32 h-32 border-r-2 border-b-2 border-[#B8967D]/30 rounded-br-3xl"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      />
    </section>
  );
}
