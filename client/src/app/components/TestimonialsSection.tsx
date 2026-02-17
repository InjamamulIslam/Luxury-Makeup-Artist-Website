import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Anjali Mehta',
    role: 'Bride',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2',
    rating: 5,
    text: 'Mafija made me feel like a princess on my wedding day! Her attention to detail and understanding of what I wanted was incredible. I received so many compliments!',
  },
  {
    name: 'Neha Singh',
    role: 'Academy Student',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
    rating: 5,
    text: 'The professional course transformed my career! The training is world-class, and Mafija is an amazing mentor. I now run my own successful makeup studio.',
  },
  {
    name: 'Riya Sharma',
    role: 'Fashion Model',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    rating: 5,
    text: 'I have worked with many makeup artists, but Mafija stands out. Her editorial work is exceptional and she knows exactly how to create camera-perfect looks.',
  },
  {
    name: 'Kavita Patel',
    role: 'Bride',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb',
    rating: 5,
    text: 'From my engagement to my wedding, Mafija created stunning looks for every occasion. Professional, punctual, and absolutely talented!',
  },
  {
    name: 'Priyanka Gupta',
    role: 'Corporate Client',
    image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91',
    rating: 5,
    text: 'I get my makeup done by Mafija for all important events. She understands my style perfectly and always delivers beyond expectations.',
  },
  {
    name: 'Simran Kaur',
    role: 'Academy Student',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1',
    rating: 5,
    text: 'The advanced course gave me skills I never thought I could master. Mafija is patient, knowledgeable, and truly passionate about teaching.',
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#E8B4A8]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#F5E6E0]/40 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#B8967D] tracking-widest text-sm mb-4 block">TESTIMONIALS</span>
          <h2 className="text-4xl md:text-5xl text-[#2D2424] mb-4" style={{ fontWeight: 300 }}>
            Client Stories
          </h2>
          <p className="text-[#8B7B70] max-w-2xl mx-auto">
            Hear what our beautiful clients have to say about their experience
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-gradient-to-br from-white to-[#F5E6E0]/30 p-8 rounded-3xl shadow-lg relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="w-16 h-16 text-[#B8967D]" />
              </div>

              {/* Profile */}
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover ring-4 ring-[#F5E6E0]"
                />
                <div>
                  <h4 className="text-[#2D2424]">{testimonial.name}</h4>
                  <p className="text-sm text-[#8B7B70]">{testimonial.role}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#B8967D] text-[#B8967D]" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-[#8B7B70] leading-relaxed italic relative z-10">
                "{testimonial.text}"
              </p>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 flex flex-wrap justify-center items-center gap-8 text-center"
        >
          <div className="flex items-center gap-2">
            <Star className="w-6 h-6 fill-[#B8967D] text-[#B8967D]" />
            <span className="text-2xl text-[#B8967D]">4.9/5</span>
            <span className="text-[#8B7B70]">Average Rating</span>
          </div>
          <div className="w-px h-8 bg-[#B8967D]/30" />
          <div className="flex items-center gap-2">
            <span className="text-2xl text-[#B8967D]">500+</span>
            <span className="text-[#8B7B70]">Happy Clients</span>
          </div>
          <div className="w-px h-8 bg-[#B8967D]/30" />
          <div className="flex items-center gap-2">
            <span className="text-2xl text-[#B8967D]">100%</span>
            <span className="text-[#8B7B70]">Satisfaction Rate</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
