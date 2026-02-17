import { motion } from 'motion/react';
import { BookOpen, Award, GraduationCap, Clock, Users, CheckCircle } from 'lucide-react';

const courses = [
  {
    icon: BookOpen,
    title: 'Beginner Course',
    duration: '4 Weeks',
    students: 'Limited to 10',
    price: '₹15,000',
    image: '/images/academy-class.jpg',
    fallback: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80',
    features: [
      'Basic makeup techniques',
      'Product knowledge',
      'Face shapes & contouring',
      'Day & evening looks',
      'Hygiene & safety',
      'Certificate of completion',
    ],
  },
  {
    icon: Award,
    title: 'Advanced Course',
    duration: '8 Weeks',
    students: 'Limited to 8',
    price: '₹35,000',
    popular: true,
    image: '/images/bridal-green.jpg',
    fallback: 'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=800&q=80',
    features: [
      'HD & airbrush makeup',
      'Bridal makeup mastery',
      'Color theory advanced',
      'Editorial & fashion looks',
      'Portfolio building',
      'Advanced certification',
    ],
  },
  {
    icon: GraduationCap,
    title: 'Professional Certification',
    duration: '12 Weeks',
    students: 'Limited to 6',
    price: '₹60,000',
    image: '/images/academy-poster.jpg',
    fallback: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&q=80',
    features: [
      'Complete professional training',
      'Business & marketing',
      'Client management',
      'Advanced techniques',
      'Internship opportunities',
      'International certification',
    ],
  },
];

export function AcademySection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-[#FAF8F6] to-[#F5E6E0] relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-[#B8967D]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#E8B4A8]/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#B8967D] tracking-widest text-sm mb-4 block">ACADEMY</span>
          <h2 className="text-4xl md:text-5xl text-[#2D2424] mb-4" style={{ fontWeight: 300 }}>
            Makeup Courses
          </h2>
          <p className="text-[#8B7B70] max-w-2xl mx-auto">
            Transform your passion into a profession with our certified makeup courses
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              {course.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20 bg-[#B8967D] text-white px-4 py-1 rounded-full text-sm">
                  Most Popular
                </div>
              )}

              <div className="bg-white rounded-3xl shadow-xl overflow-hidden h-full flex flex-col">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2D2424]/50 to-transparent z-10" />
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => { const img = e.target as HTMLImageElement; if (!img.dataset.fallbackUsed) { img.dataset.fallbackUsed = 'true'; img.src = course.fallback; } }}
                  />
                  <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-sm p-3 rounded-full">
                    <course.icon className="w-6 h-6 text-[#B8967D]" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl text-[#2D2424] mb-4">{course.title}</h3>

                  <div className="flex items-center gap-6 mb-6 text-sm text-[#8B7B70]">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#B8967D]" />
                      {course.duration}
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-[#B8967D]" />
                      {course.students}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6 flex-1">
                    {course.features.map((feature) => (
                      <li key={feature} className="flex items-start text-[#8B7B70] text-sm">
                        <CheckCircle className="w-4 h-4 text-[#B8967D] mr-3 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="border-t border-[#F5E6E0] pt-6">
                    <div className="text-3xl text-[#B8967D] mb-4">{course.price}</div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-full py-3 rounded-full transition-colors ${
                        course.popular
                          ? 'bg-[#B8967D] text-white hover:bg-[#A0805E]'
                          : 'bg-[#F5E6E0] text-[#B8967D] hover:bg-[#E8B4A8]'
                      }`}
                    >
                      Enroll Now
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-lg"
        >
          <h3 className="text-2xl text-[#2D2424] mb-8 text-center">Why Choose Our Academy?</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              'Hands-on training with real clients',
              'International certification',
              'Lifetime support & guidance',
              'Job placement assistance',
            ].map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-[#B8967D]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-[#B8967D]" />
                </div>
                <p className="text-[#8B7B70]">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
