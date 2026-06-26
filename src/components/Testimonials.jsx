import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const testimonials = [
  {
    name: "Aditi Sharma",
    designation: "Product Designer",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200",
    review:
      "Lighthouse helped me land a role in a top digital agency after just eight weeks of guided training.",
  },
  {
    name: "Rohan Mehra",
    designation: "HR Lead",
    image: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=200",
    review:
      "Our hiring team filled multiple roles faster thanks to Lighthouse candidate screening.",
  },
  {
    name: "Neha Kapoor",
    designation: "Operations Manager",
    image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=200",
    review:
      "The program helped our team recruit skilled candidates who were ready immediately.",
  },
];

function Testimonials() {
  const { ref, isVisible } = useScrollAnimation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      ref={ref}
      id="testimonials"
      className="py-18 bg-gradient-to-b from-red-50/40 via-white to-slate-50"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <motion.p
            className="uppercase tracking-[4px] text-red-700 font-semibold"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Success Stories
          </motion.p>

          <motion.h2
            className="heading-font text-3xl md:text-4xl font-bold text-slate-900 mt-4"
            initial={{ opacity: 0, y: 10 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            What Our Clients Say
          </motion.h2>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {testimonials.map((item) => (
            <motion.div
              key={item.name}
              variants={itemVariants}
              className="bg-white rounded-3xl p-8 border border-slate-100 shadow-md card-hover hover:shadow-lg transition-shadow"
              whileHover={{ y: -8 }}
            >
              <motion.div
                className="flex gap-1 text-amber-400 mb-5"
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                {[1, 2, 3, 4, 5].map((star) => (
                  <motion.div
                    key={star}
                    initial={{ scale: 0 }}
                    animate={isVisible ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.4, delay: star * 0.05 }}
                  >
                    <Star size={16} fill="currentColor" />
                  </motion.div>
                ))}
              </motion.div>

              <motion.p
                className="text-slate-600 leading-7 mb-8"
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                "{item.review}"
              </motion.p>

              <motion.div
                className="flex items-center gap-4"
                initial={{ opacity: 0, x: -20 }}
                animate={
                  isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                }
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <motion.img
                  src={item.image}
                  className="w-12 h-12 rounded-full object-cover"
                  whileHover={{ scale: 1.1 }}
                />

                <div>
                  <motion.h4
                    className="font-semibold"
                    initial={{ opacity: 0 }}
                    animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    {item.name}
                  </motion.h4>

                  <motion.p
                    className="text-sm text-slate-500"
                    initial={{ opacity: 0 }}
                    animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.6, delay: 0.45 }}
                  >
                    {item.designation}
                  </motion.p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Testimonials;
