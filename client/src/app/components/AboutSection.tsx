import { motion, useScroll, useTransform } from 'motion/react';
import { Award, Heart, Users, Sparkles, Star, Crown } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useRef } from 'react';

const stats = [
  { icon: Award, label: 'Years Experience', value: '10+', color: '#B8967D' },
  { icon: Users, label: 'Happy Clients', value: '500+', color: '#E8B4A8' },
  { icon: Heart, label: 'Bridal Makeups', value: '200+', color: '#D4A5A5' },
  { icon: Sparkles, label: 'Students Trained', value: '300+', color: '#B8967D' },
];

export function AboutSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const imageRotate = useTransform(scrollYProgress, [0, 0.5], [-5, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.5], [100, 0]);
  const decorOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7], [0, 1, 0]);

  return (
    <section ref={sectionRef} className="relative py-32 px-6 bg-white overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div 
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl opacity-30"
        style={{
          background: 'radial-gradient(circle, rgba(245,230,224,0.8) 0%, transparent 70%)',
          opacity: decorOpacity,
        }}
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      <motion.div 
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(232,180,168,0.6) 0%, transparent 70%)',
          opacity: decorOpacity,
        }}
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Floating Decorative Shapes */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${10 + i * 12}%`,
            top: `${20 + (i % 3) * 30}%`,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        >
          {i % 2 === 0 ? (
            <Star className="w-6 h-6 text-[#B8967D]" />
          ) : (
            <Sparkles className="w-6 h-6 text-[#E8B4A8]" />
          )}
        </motion.div>
      ))}

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
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
              className="text-[#B8967D] tracking-[0.3em] text-sm relative"
              animate={{
                textShadow: [
                  '0 0 10px rgba(184,150,125,0)',
                  '0 0 20px rgba(184,150,125,0.3)',
                  '0 0 10px rgba(184,150,125,0)',
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              ABOUT ME
              <Crown className="w-4 h-4 absolute -top-6 left-1/2 -translate-x-1/2 text-[#B8967D]" />
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
            className="text-5xl md:text-7xl text-[#2D2424] mb-6 relative inline-block"
            style={{ fontWeight: 300 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Meet Your Artist
            <motion.div
              className="absolute -bottom-3 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#B8967D] to-transparent"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </motion.h2>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-20 items-center mb-24">
          {/* Image Column with Artistic Frame */}
          <motion.div
            style={{ scale: imageScale, rotate: imageRotate }}
            className="relative group"
          >
            {/* Animated Glow */}
            <motion.div
              className="absolute -inset-6 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              animate={{
                background: [
                  'linear-gradient(45deg, #B8967D, #E8B4A8)',
                  'linear-gradient(90deg, #E8B4A8, #D4A5A5)',
                  'linear-gradient(135deg, #D4A5A5, #B8967D)',
                  'linear-gradient(180deg, #B8967D, #E8B4A8)',
                ],
              }}
              transition={{ duration: 4, repeat: Infinity }}
              style={{ filter: 'blur(30px)' }}
            />

            {/* Decorative Frame */}
            <div className="absolute -inset-4 border-2 border-[#B8967D]/20 rounded-3xl" />
            <div className="absolute -inset-2 border border-[#E8B4A8]/30 rounded-2xl" />
            
            {/* Main Image */}
            <motion.div 
              className="relative rounded-2xl overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <ImageWithFallback
                src="/images/client-with-artist.jpg"
                fallbackSrc="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800&q=80"
                alt="Makeup Artist"
                className="w-full h-[600px] object-cover"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2D2424]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Corner Accents */}
              <div className="absolute top-4 left-4 w-12 h-12 border-l-2 border-t-2 border-white/50 rounded-tl-xl" />
              <div className="absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 border-white/50 rounded-br-xl" />
            </motion.div>

            {/* Floating Badge */}
            <motion.div
              className="absolute -bottom-6 -right-6 bg-gradient-to-br from-[#B8967D] to-[#E8B4A8] text-white px-8 py-4 rounded-2xl shadow-2xl"
              initial={{ opacity: 0, scale: 0, rotate: -45 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: 'spring' }}
              whileHover={{ rotate: 5, scale: 1.05 }}
            >
              <div className="text-center">
                <div className="text-3xl mb-1">10+</div>
                <div className="text-sm opacity-90">Years</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Text Column */}
          <motion.div style={{ y: textY }} className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.h3 
                className="text-4xl md:text-5xl text-[#2D2424] mb-4 relative inline-block"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                Mafija
                <Sparkles className="inline w-8 h-8 ml-3 text-[#B8967D]" />
              </motion.h3>
              
              <motion.div
                className="flex items-center gap-2 text-[#B8967D] mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                  >
                    <Star className="w-5 h-5 fill-[#B8967D]" />
                  </motion.div>
                ))}
                <span className="ml-2 text-[#8B7B70]">5.0 Rating</span>
              </motion.div>
            </motion.div>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              {[
                'With over a decade of experience in the beauty industry, I specialize in creating stunning, personalized looks that enhance your natural beauty and boost your confidence.',
                'From bridal transformations to editorial shoots, I bring artistry, precision, and passion to every client. I also run a certified makeup academy where I share my expertise with aspiring makeup artists.',
              ].map((text, i) => (
                <motion.p
                  key={i}
                  className="text-[#8B7B70] leading-relaxed text-lg relative pl-6"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.2 }}
                >
                  <motion.span
                    className="absolute left-0 top-2 w-2 h-2 bg-[#B8967D] rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.5,
                    }}
                  />
                  {text}
                </motion.p>
              ))}
            </motion.div>

            {/* Certifications */}
            <motion.div
              className="pt-6 border-t border-[#B8967D]/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
            >
              <p className="text-[#B8967D] mb-4 flex items-center gap-2">
                <Award className="w-5 h-5" />
                Certified by:
              </p>
              <ul className="space-y-3">
                {[
                  'International Makeup Academy, London',
                  'Professional Beauty Association',
                  'Advanced Airbrush Certification',
                ].map((cert, i) => (
                  <motion.li
                    key={cert}
                    className="flex items-center text-[#8B7B70] group cursor-pointer"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 + i * 0.1 }}
                    whileHover={{ x: 10 }}
                  >
                    <motion.span
                      className="w-2 h-2 bg-[#B8967D] rounded-full mr-3 group-hover:bg-[#E8B4A8]"
                      whileHover={{ scale: 1.5 }}
                    />
                    {cert}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Grid with Animated Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -10, 
                scale: 1.05,
                boxShadow: '0 20px 40px rgba(184,150,125,0.2)',
              }}
              className="relative group bg-white rounded-3xl p-8 shadow-lg overflow-hidden cursor-pointer"
            >
              {/* Animated Background */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(135deg, ${stat.color}10, ${stat.color}20)`,
                }}
              />

              {/* Shine Effect */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                }}
              />

              <div className="relative z-10 text-center">
                <motion.div
                  className="inline-block mb-4"
                  animate={{
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                >
                  <stat.icon 
                    className="w-10 h-10 mx-auto group-hover:scale-125 transition-transform duration-300" 
                    style={{ color: stat.color }}
                  />
                </motion.div>
                
                <motion.div 
                  className="text-4xl mb-2"
                  style={{ color: stat.color }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    type: 'spring',
                    stiffness: 200,
                    delay: index * 0.1 + 0.3,
                  }}
                >
                  {stat.value}
                </motion.div>
                
                <div className="text-sm text-[#8B7B70] group-hover:text-[#2D2424] transition-colors">
                  {stat.label}
                </div>
              </div>

              {/* Corner Decoration */}
              <div 
                className="absolute top-0 right-0 w-16 h-16 opacity-10"
                style={{
                  background: `radial-gradient(circle at top right, ${stat.color}, transparent)`,
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}