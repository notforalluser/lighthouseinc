import { GraduationCap, Briefcase, Users } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const services = [
  {
    icon: GraduationCap,

    title: "Professional Training",

    description: "Live-led programs, certification prep, and skill-building workshops for software, design, and business careers.",
  },

  {
    icon: Briefcase,

    title: "Career Services",

    description: "Resume coaching, mock interviews, and job readiness support to help learners secure their first role.",
  },

  {
    icon: Users,

    title: "Employer Solutions",

    description: "Talent sourcing, customized hiring events, and workforce development for growth-focused teams.",
  },
];

function Services() {
  const { ref, isVisible } = useScrollAnimation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      ref={ref}
      id="services"
      className="py-28 bg-gradient-to-br from-red-50 via-white to-slate-50"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <motion.p
            className="uppercase tracking-[4px] text-red-600 font-semibold"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            What we do
          </motion.p>

          <motion.h2
            className="heading-font text-4xl mt-4"
            initial={{ opacity: 0, y: 10 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Industry-focused learning, talent, and hiring.
          </motion.h2>

          <motion.p
            className="mt-5 max-w-2xl mx-auto text-slate-600"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            We support learners, employers, and training partners with practical programs, placement services, and recruitment support that work in the real world.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                variants={itemVariants}
                className="rounded-3xl bg-white p-8 border border-slate-100 card-hover shadow-sm hover:shadow-lg transition-shadow"
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className="w-14 h-14 rounded-xl bg-red-50 flex justify-center items-center mb-6"
                  initial={{ scale: 0 }}
                  animate={isVisible ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.5, type: "spring" }}
                >
                  <Icon size={28} className="text-red-700" />
                </motion.div>

                <h3 className="font-bold text-xl mb-3">{service.title}</h3>

                <p className="text-slate-500 leading-7">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Services;
