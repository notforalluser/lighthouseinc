import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

function SectionHeading({ subtitle, title, description }) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <motion.div 
      ref={ref}
      className="text-center max-w-3xl mx-auto mb-16"
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
    >
      <motion.p
        className="uppercase tracking-[4px] text-red-700 font-semibold mb-4"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {subtitle}
      </motion.p>

      <motion.h2
        className="heading-font text-5xl text-slate-900 mb-5"
        initial={{ opacity: 0, y: 10 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          className="text-slate-600 leading-8"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}

export default SectionHeading;
