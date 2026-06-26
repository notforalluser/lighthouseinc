import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const stats = [
  { label: "Alumni Placed", target: 5000, suffix: "+" },
  { label: "Companies Served", target: 3500, suffix: "+" },
  { label: "Industry Tracks", target: 200, suffix: "+" },
  { label: "Hiring Partners", target: 150, suffix: "+" },
];

function Stats() {
  const [counts, setCounts] = useState(stats.map(() => 0));
  const { ref, isVisible } = useScrollAnimation();

  useEffect(() => {
    if (!isVisible) return;

    const timers = stats.map((item, idx) => {
      let current = 0;
      const step = Math.ceil(item.target / 60);
      return window.setInterval(() => {
        current += step;
        if (current >= item.target) {
          current = item.target;
          window.clearInterval(timers[idx]);
        }
        setCounts((prev) => {
          const next = [...prev];
          next[idx] = current;
          return next;
        });
      }, 25);
    });

    return () => timers.forEach((id) => window.clearInterval(id));
  }, [isVisible]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, type: "spring" },
    },
  };

  return (
    <section 
      ref={ref}
      className="py-18 bg-gradient-to-b from-slate-900 via-red-700 to-red-500"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <motion.p 
            className="uppercase tracking-[4px] text-red-200 font-semibold mb-4"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Trusted by ambitious learners
          </motion.p>
          <motion.h2 
            className="font-display text-4xl text-white mb-4"
            initial={{ opacity: 0, y: 10 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Trusted by ambitious learners
          </motion.h2>
          <motion.p 
            className="text-white/70 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Thousands of learners and partners depend on our training, placement, and employer hiring solutions.
          </motion.p>
        </motion.div>
        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {stats.map((item, index) => (
            <motion.div 
              key={item.label} 
              variants={itemVariants}
              className="rounded-3xl p-10 bg-white/10 border border-white/10 shadow-xl text-center hover:bg-white/15 transition-colors"
              whileHover={{ y: -5 }}
            >
              <motion.p 
                className="text-5xl font-bold text-white"
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6 }}
              >
                {counts[index].toLocaleString()}{item.suffix}
              </motion.p>
              <motion.p 
                className="mt-3 text-white/70 text-sm uppercase tracking-[0.16em] font-medium"
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {item.label}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Stats
