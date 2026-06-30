// import { GraduationCap, Briefcase, Users } from "lucide-react";
// import { motion } from "framer-motion";
// import { useScrollAnimation } from "../hooks/useScrollAnimation";

// const services = [
//   {
//     icon: GraduationCap,
//     title: "Tailored Training",
//     description:
//       "We offer industry-driven courses designed by experts to meet real-world market demands.",
//   },

//   {
//     icon: Briefcase,
//     title: "Hands-on Placement",
//     description:
//       "Leveraging our vast network of top-tier corporate partners, we actively match your profile with roles that fit your skills and ambitions.",
//   },

//   {
//     icon: Users,
//     title: "Continuous Support",
//     description:
//       "From resume building to salary negotiations, we stand by you at every step of your professional journey.",
//   },
// ];

// function Approach() {
//   const { ref, isVisible } = useScrollAnimation();

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//         delayChildren: 0.1,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6, ease: "easeOut" },
//     },
//   };

//   return (
//     <section
//       ref={ref}
//       id="services"
//       className="py-5 pt-10 bg-gradient-to-br from-blue-50 via-white to-slate-50"
//     >
//       <div className="max-w-7xl mx-auto px-6">
//         <motion.div
//           className="text-center mb-16"
//           initial={{ opacity: 0, y: 20 }}
//           animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//           transition={{ duration: 0.6 }}
//         >
//           <motion.span
//             className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full mb-3"
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
//             transition={{ duration: 0.5 }}
//           >
//             Our Approach
//           </motion.span>

//           <motion.h2
//             className="text-3xl md:text-4xl font-bold text-slate-900"
//             initial={{ opacity: 0, y: 10 }}
//             animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             Tailored learning, placement, and career support.
//           </motion.h2>

//           <motion.p
//             className="text-lg mt-5 max-w-2xl mx-auto text-slate-600"
//             initial={{ opacity: 0 }}
//             animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
//             transition={{ duration: 0.6, delay: 0.3 }}
//           >
//             We combine expert-led training, hands-on placement guidance, and continuous mentoring to help you grow with confidence in today’s competitive market.
//           </motion.p>
//         </motion.div>

//         <motion.div
//           className="grid md:grid-cols-3 gap-8"
//           variants={containerVariants}
//           initial="hidden"
//           animate={isVisible ? "visible" : "hidden"}
//         >
//           {services.map((service) => {
//             const Icon = service.icon;

//             return (
//               <motion.div
//                 key={service.title}
//                 variants={itemVariants}
//                 className="rounded-3xl bg-white p-8 border border-slate-100 card-hover shadow-sm hover:shadow-lg transition-shadow"
//                 whileHover={{ y: -5 }}
//               >
//                 <motion.div
//                   className="w-14 h-14 rounded-xl bg-blue-50 flex justify-center items-center mb-6"
//                   initial={{ scale: 0 }}
//                   animate={isVisible ? { scale: 1 } : { scale: 0 }}
//                   transition={{ duration: 0.5, type: "spring" }}
//                 >
//                   <Icon size={28} className="text-blue-700" />
//                 </motion.div>

//                 <h3 className="font-bold text-xl mb-3">{service.title}</h3>

//                 <p className="text-slate-500 leading-7">
//                   {service.description}
//                 </p>
//               </motion.div>
//             );
//           })}
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// export default Approach;


import { GraduationCap, Briefcase, Users, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const services = [
  {
    icon: GraduationCap,
    title: "Tailored Training",
    description:
      "We offer industry-driven courses designed by experts to meet real-world market demands.",
    gradient: "from-blue-500 to-blue-600",
    bgGradient: "from-blue-50 to-blue-100/50",
  },
  {
    icon: Briefcase,
    title: "Hands-on Placement",
    description:
      "Leveraging our vast network of top-tier corporate partners, we actively match your profile with roles that fit your skills and ambitions.",
    gradient: "from-purple-500 to-purple-600",
    bgGradient: "from-purple-50 to-purple-100/50",
  },
  {
    icon: Users,
    title: "Continuous Support",
    description:
      "From resume building to salary negotiations, we stand by you at every step of your professional journey.",
    gradient: "from-emerald-500 to-emerald-600",
    bgGradient: "from-emerald-50 to-emerald-100/50",
  },
];

function Approach() {
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
      id="services"
      className="py-10 bg-gradient-to-br from-slate-50 via-white to-blue-50/30"
    >
      <div className="max-w-7xl mx-auto px-6">
         <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full mb-3"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
          >
            Our Approach
          </motion.span>

          <motion.h2
            className="text-3xl md:text-4xl font-bold text-slate-900"
            initial={{ opacity: 0, y: 10 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Tailored learning, placement, and career support.
          </motion.h2>

          <motion.p
            className="text-lg mt-5 max-w-2xl mx-auto text-slate-600"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            We combine expert-led training, hands-on placement guidance, and continuous mentoring to help you grow with confidence in today’s competitive market.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                variants={itemVariants}
                className={`relative rounded-2xl bg-gradient-to-br ${service.bgGradient} p-[1px] group`}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <div className="rounded-2xl bg-white p-8 h-full relative overflow-hidden">
                  {/* Decorative background icon */}
                  {/* <div className="absolute -right-8 -top-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                    <Icon size={120} className={`text-${service.gradient.split(' ')[0].replace('from-', '')}`} />
                  </div> */}

                  {/* Icon with gradient background */}
                  <motion.div
                    className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${service.gradient} flex justify-center items-center mb-6 shadow-lg shadow-${service.gradient.split(' ')[0].replace('from-', '')}/30 relative z-10`}
                    initial={{ scale: 0, rotate: -10 }}
                    animate={isVisible ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -10 }}
                    transition={{ duration: 0.5, type: "spring", delay: index * 0.1 }}
                  >
                    <Icon size={28} className="text-white" />
                  </motion.div>

                  <h3 className="font-bold text-xl mb-3 text-slate-900 group-hover:text-blue-600 transition-colors duration-300 relative z-10">
                    {service.title}
                  </h3>

                  <p className="text-slate-500 leading-7 relative z-10">
                    {service.description}
                  </p>

                  {/* Learn more link */}
                  <motion.div
                    className="mt-4 flex items-center gap-2 text-sm font-semibold text-blue-600 relative z-10"
                    initial={{ opacity: 0, x: -10 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  >
                    <span>Learn more</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </motion.div>

                  {/* Bottom gradient bar */}
                  {/* <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${service.gradient} w-0 group-hover:w-full transition-all duration-500`} /> */}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Approach;