import { motion } from 'motion/react';
import { Instagram, Heart, MessageCircle } from 'lucide-react';

const instagramPosts = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f',
    likes: 1234,
    comments: 89,
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937',
    likes: 2156,
    comments: 124,
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e',
    likes: 987,
    comments: 56,
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552',
    likes: 3421,
    comments: 198,
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1595255944489-cd0864f6b09b',
    likes: 1876,
    comments: 143,
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796',
    likes: 1543,
    comments: 92,
  },
];

export function InstagramSection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-[#FAF8F6] to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#B8967D] tracking-widest text-sm mb-4 block">FOLLOW US</span>
          <h2 className="text-4xl md:text-5xl text-[#2D2424] mb-4" style={{ fontWeight: 300 }}>
            @MafijaMakeupAcademy
          </h2>
          <p className="text-[#8B7B70] max-w-2xl mx-auto mb-8">
            Get daily inspiration and behind-the-scenes glimpses on Instagram
          </p>
          <motion.a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#B8967D] to-[#E8B4A8] text-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
          >
            <Instagram className="w-5 h-5" />
            Follow on Instagram
          </motion.a>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {instagramPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative group cursor-pointer overflow-hidden rounded-2xl aspect-square"
            >
              <img
                src={post.image}
                alt={`Instagram post ${post.id}`}
                className="w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2D2424]/80 via-[#2D2424]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white flex gap-6">
                  <div className="flex items-center gap-2">
                    <Heart className="w-6 h-6 fill-white" />
                    <span>{post.likes.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageCircle className="w-6 h-6 fill-white" />
                    <span>{post.comments}</span>
                  </div>
                </div>
              </div>

              {/* Instagram Icon */}
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                <Instagram className="w-5 h-5 text-white" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
