import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import Masonry from 'react-responsive-masonry';
import { X, ZoomIn, Sparkles, Filter } from 'lucide-react';

const categories = ['All', 'Bridal', 'Party', 'HD', 'Editorial'];

const portfolioItems = [
  { id: 1, category: 'Bridal', image: '/images/bridal-blue.jpg', fallback: 'https://images.unsplash.com/photo-1595255944489-cd0864f6b09b?w=800&q=80', title: 'Classic Bridal' },
  { id: 2, category: 'Party', image: '/images/party-pink.jpg', fallback: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&q=80', title: 'Glam Party Look' },
  { id: 3, category: 'HD', image: '/images/bridal-green.jpg', fallback: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800&q=80', title: 'HD Perfection' },
  { id: 4, category: 'Editorial', image: '/images/bridal-outdoor-red.jpg', fallback: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80', title: 'Editorial Glam' },
  { id: 5, category: 'Bridal', image: '/images/bridal-purple.jpg', fallback: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80', title: 'Royal Bride' },
  { id: 6, category: 'Party', image: '/images/bridal-outdoor-field.jpg', fallback: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&q=80', title: 'Night Out' },
  { id: 7, category: 'HD', image: '/images/client-with-artist.jpg', fallback: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80', title: 'Camera Ready' },
  { id: 8, category: 'Editorial', image: '/images/bridal-blue.jpg', fallback: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=800&q=80', title: 'Fashion Forward' },
  { id: 9, category: 'Bridal', image: '/images/bridal-purple.jpg', fallback: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&q=80', title: 'Ethereal Bride' },
];

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<{ image: string; title: string; fallback?: string } | null>(null);
  
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  const filteredItems =
    activeCategory === 'All'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <section ref={sectionRef} className="relative py-32 px-6 bg-white overflow-hidden">
      {/* Animated Background */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: backgroundY }}
      >
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#F5E6E0] rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-[#E8B4A8] rounded-full blur-3xl opacity-30" />
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div className="flex items-center justify-center gap-4 mb-6">
            <motion.div 
              className="h-px bg-gradient-to-r from-transparent via-[#B8967D] to-transparent flex-1 max-w-xs"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            />
            <motion.span 
              className="text-[#B8967D] tracking-[0.3em] text-sm flex items-center gap-2"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="w-4 h-4" />
              PORTFOLIO
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
            My Work
          </motion.h2>
          
          <motion.p
            className="text-[#8B7B70] max-w-2xl mx-auto text-lg mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            A glimpse of transformation stories and beauty journeys
          </motion.p>

          {/* Category Filters */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <div className="flex items-center gap-2 px-4 py-2 bg-[#F5E6E0]/50 rounded-full">
              <Filter className="w-4 h-4 text-[#B8967D]" />
              <span className="text-sm text-[#8B7B70]">Filter:</span>
            </div>
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full transition-all relative overflow-hidden ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-[#B8967D] to-[#E8B4A8] text-white shadow-xl'
                    : 'bg-white text-[#8B7B70] hover:bg-[#F5E6E0] shadow-md'
                }`}
              >
                {activeCategory === category && (
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    layoutId="activeFilter"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{category}</span>
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        {/* Masonry Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <Masonry columnsCount={3} gutter="1.5rem" className="masonry-grid">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ scale: 1.03, y: -5 }}
                  className="cursor-pointer group relative overflow-hidden rounded-3xl shadow-lg"
                  onClick={() => setSelectedImage({ image: item.image, title: item.title, fallback: item.fallback })}
                >
                  {/* Image Container */}
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-auto"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      onError={(e) => { const img = e.target as HTMLImageElement; if (!img.dataset.fallbackUsed) { img.dataset.fallbackUsed = 'true'; img.src = item.fallback; } }}
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2D2424]/90 via-[#2D2424]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Content Overlay */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileHover={{ y: 0, opacity: 1 }}
                        className="text-center"
                      >
                        <ZoomIn className="w-12 h-12 text-white mb-3 mx-auto" />
                        <h3 className="text-white text-xl mb-2">{item.title}</h3>
                        <span className="text-[#E8B4A8] text-sm">{item.category}</span>
                      </motion.div>
                    </div>

                    {/* Decorative Corner */}
                    <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-t-[#B8967D] border-l-[40px] border-l-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-500" />
                  </div>
                </motion.div>
              ))}
            </Masonry>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#2D2424]/95 backdrop-blur-xl z-[100] flex items-center justify-center p-6"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8, rotate: -90 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.8, rotate: 90 }}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              className="absolute top-8 right-8 text-white bg-gradient-to-r from-[#B8967D] to-[#E8B4A8] rounded-full p-4 hover:shadow-2xl transition-all z-10"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </motion.button>

            {/* Image Container */}
            <motion.div
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              className="relative max-w-6xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Decorative Frame */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#B8967D] via-[#E8B4A8] to-[#D4A5A5] rounded-3xl blur-xl opacity-50" />
              
              <div className="relative bg-white p-4 rounded-3xl shadow-2xl">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="max-w-full max-h-[80vh] object-contain rounded-2xl mx-auto"
                  onError={(e) => { const img = e.target as HTMLImageElement; if (!img.dataset.fallbackUsed && selectedImage.fallback) { img.dataset.fallbackUsed = 'true'; img.src = selectedImage.fallback; } }}
                />
                
                {/* Title */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-center mt-6"
                >
                  <h3 className="text-2xl text-[#2D2424] mb-2">{selectedImage.title}</h3>
                  <div className="flex items-center justify-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#B8967D]" />
                    <span className="text-[#8B7B70]">Swipe for more</span>
                    <Sparkles className="w-4 h-4 text-[#B8967D]" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
