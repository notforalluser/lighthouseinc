import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import employerSolutionsImage from "../assets/employer-solutions.jpeg"; // replace with your actual image

const benefits = [
  "Pre-screened candidates",
  "Custom hiring campaigns",
  "Training-backed talent",
  "Flexible hiring models",
];

function EmployerSolutions() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} id="employers" className="py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.7 }}
          >
            <motion.span
            className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full mb-3"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
          >
            EMPLOYER SOLUTIONS
          </motion.span>

            <motion.h2
              className="text-3xl md:text-4xl font-bold text-slate-900 mt-4"
              initial={{ opacity: 0, y: 10 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Recruit Top Digital Talent Faster
            </motion.h2>

            <motion.p
              className="mt-6 text-slate-600 leading-8"
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              From entry-level hires to specialist roles, we connect companies
              with candidates who have practical skills and workplace readiness.
            </motion.p>

            <motion.div
              className="grid grid-cols-2 gap-5 mt-10"
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {benefits.map((item, idx) => (
                <motion.div
                  key={item}
                  className="flex gap-3 items-center"
                  initial={{ opacity: 0, x: -10 }}
                  animate={
                    isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }
                  }
                  transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
                >
                  <CheckCircle2
                    size={20}
                    className="text-blue-700 flex-shrink-0"
                  />
                  <span className="text-slate-600">{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.7 }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.img
              src={employerSolutionsImage}
              className="rounded-3xl shadow-2xl h-[350px] w-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default EmployerSolutions;
