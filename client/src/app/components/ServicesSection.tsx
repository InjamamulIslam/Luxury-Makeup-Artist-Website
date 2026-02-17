import { motion, useScroll, useTransform } from 'motion/react';
import { Crown, PartyPopper, Camera, Check, ArrowRight, Sparkles } from 'lucide-react';
import { useRef } from 'react';

const services = [
  {
    icon: Crown,
    title: 'Bridal Makeup',
    description: 'Transform into the most radiant version of yourself on your special day with our signature bridal makeup services.',
    features: ['Traditional & Contemporary', 'Pre-bridal consultation', 'Trial session included', 'Long-lasting finish'],
    image: '/images/bridal-outdoor-field.jpg',
    fallback: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80',
    gradient: 'from-[#B8967D] to-[#E8B4A8]',
    delay: 0,
  },
  {
    icon: PartyPopper,
    title: 'Party Makeup',
    description: 'Look stunning and camera-ready for any celebration with glamorous makeup that lasts all night.',
    features: ['Evening glam', 'Festival looks', 'Birthday specials', 'Custom color palette'],
    image: '/images/party-pink.jpg',
    fallback: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80',
    gradient: 'from-[#E8B4A8] to-[#D4A5A5]',
    delay: 0.2,
  },
  {
    icon: Camera,
    title: 'Photoshoot Makeup',
    description: 'Professional HD makeup designed specifically for photography, fashion shoots, and editorial work.',
    features: ['HD & airbrush', 'Editorial looks', 'Fashion shoots', 'Portfolio building'],
    image: '/images/bridal-purple.jpg',
    fallback: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&q=80',
    gradient: 'from-[#D4A5A5] to-[#B8967D]',
    delay: 0.4,
  },
];

export function ServicesSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  return (
    <section ref={sectionRef} className="relative py-32 px-6 overflow-hidden">
      {/* Animated Background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-[#FAF8F6] via-white to-[#FAF8F6]"
        style={{ y: backgroundY }}
      />

      {/* Floating Gradient Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(184,150,125,0.5) 0%, transparent 70%)',
        }}
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(232,180,168,0.5) 0%, transparent 70%)',
        }}
        animate={{
          x: [0, -100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            className="flex items-center justify-center gap-4 mb-6"
          >
            <motion.div 
              className="h-px bg-gradient-to-r from-transparent via-[#B8967D] to-transparent flex-1 max-w-xs"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            />
            <motion.span 
              className="text-[#B8967D] tracking-[0.3em] text-sm flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              SERVICES
              <Sparkles className="w-4 h-4" />
            </motion.span>
            <motion.div 
              className="h-px bg-gradient-to-l from-transparent via-[#B8967D] to-transparent flex-1 max-w-xs"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            />
          </motion.div>
          
          <motion.h2
            className="text-5xl md:text-7xl text-[#2D2424] mb-6"
            style={{ fontWeight: 300 }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Makeup Services
          </motion.h2>
          
          <motion.p
            className="text-[#8B7B70] max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Specialized makeup artistry tailored to your unique style and occasion
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: service.delay }}
              className="group relative h-full"
            >
              {/* Card Container */}
              <motion.div
                whileHover={{ y: -15, scale: 1.02 }}
                transition={{ duration: 0.4, type: 'spring', stiffness: 300 }}
                className="bg-white rounded-3xl shadow-xl overflow-hidden h-full flex flex-col relative"
              >
                {/* Hover Glow Effect */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 z-0`}
                />

                {/* Image Section */}
                <div className="relative h-72 overflow-hidden">
                  {/* Image */}
                  <motion.img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.6 }}
                    onError={(e) => { const img = e.target as HTMLImageElement; if (!img.dataset.fallbackUsed) { img.dataset.fallbackUsed = 'true'; img.src = service.fallback; } }}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-[#2D2424]/80 via-[#2D2424]/20 to-transparent`} />
                  
                  {/* Animated Shine Effect */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100"
                    initial={{ x: '-100%', y: '-100%' }}
                    whileHover={{ x: '100%', y: '100%' }}
                    transition={{ duration: 0.8 }}
                    style={{
                      background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)',
                    }}
                  />

                  {/* Icon Badge */}
                  <motion.div
                    className="absolute top-6 right-6 z-20"
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="relative">
                      <motion.div
                        className="absolute inset-0 bg-white rounded-2xl blur-md"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.5, 0.8, 0.5],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <div className="relative bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-lg">
                        <service.icon className="w-7 h-7 text-[#B8967D]" />
                      </div>
                    </div>
                  </motion.div>

                  {/* Floating Particles */}
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-white rounded-full"
                      style={{
                        left: `${20 + i * 15}%`,
                        top: `${30 + i * 10}%`,
                      }}
                      animate={{
                        y: [0, -20, 0],
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                    />
                  ))}
                </div>

                {/* Content Section */}
                <div className="p-8 flex-1 flex flex-col relative z-10">
                  {/* Title */}
                  <motion.h3
                    className="text-3xl text-[#2D2424] mb-4 group-hover:text-[#B8967D] transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    {service.title}
                  </motion.h3>

                  {/* Description */}
                  <p className="text-[#8B7B70] mb-6 leading-relaxed flex-grow">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <motion.li
                        key={feature}
                        className="flex items-center text-[#8B7B70] text-sm group/item"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: service.delay + 0.5 + i * 0.1 }}
                        whileHover={{ x: 5 }}
                      >
                        <motion.div
                          className="mr-3"
                          whileHover={{ scale: 1.3, rotate: 360 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Check className="w-4 h-4 text-[#B8967D]" />
                        </motion.div>
                        <span className="group-hover/item:text-[#2D2424] transition-colors">
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <motion.button
                    data-cursor-text="Book"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-4 bg-gradient-to-r ${service.gradient} text-white rounded-full relative overflow-hidden group/btn shadow-lg`}
                  >
                    {/* Button Background Animation */}
                    <motion.div
                      className="absolute inset-0 bg-white"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.5 }}
                      style={{ opacity: 0.2 }}
                    />
                    
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Book Now
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ArrowRight className="w-5 h-5" />
                      </motion.span>
                    </span>
                  </motion.button>
                </div>

                {/* Decorative Corner Elements */}
                <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-white/20 rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-white/20 rounded-br-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>

              {/* Floating Badge */}
              {index === 1 && (
                <motion.div
                  className="absolute -top-4 -right-4 bg-gradient-to-r from-[#B8967D] to-[#E8B4A8] text-white px-4 py-2 rounded-full text-sm shadow-xl z-20"
                  initial={{ scale: 0, rotate: -45 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    delay: 0.8,
                    type: 'spring',
                    y: {
                      duration: 2,
                      repeat: Infinity,
                    },
                  }}
                >
                  Popular
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.p
            className="text-[#8B7B70] mb-6"
            animate={{
              opacity: [0.7, 1, 0.7],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Can't decide? Let's discuss your perfect look
          </motion.p>
          
          <motion.button
            data-cursor-text="Contact"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 border-2 border-[#B8967D] text-[#B8967D] rounded-full hover:bg-[#B8967D] hover:text-white transition-all duration-300 shadow-lg hover:shadow-2xl"
          >
            Schedule a Consultation
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}