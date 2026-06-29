import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

function CTA() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      id="cta"
      className="py-24 bg-gradient-to-r from-slate-900 via-slate-800 to-blue-800"
    >
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="heading-font text-5xl text-white mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Ready to Transform Your Workforce?
          </motion.h2>

          <motion.p
            className="text-white/70 text-lg leading-8 max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Talk to our team and discover the right training, placement, or
            hiring solution for your organization.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-5"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.a
              href="#services"
              className="bg-white text-slate-900 px-8 py-4 rounded-xl font-semibold hover:bg-slate-100 inline-flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.a>
            <motion.a
              href="#contact"
              className="border border-white/25 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/15 inline-flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default CTA;
