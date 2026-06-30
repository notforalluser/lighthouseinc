// import { GraduationCap, Briefcase, Users } from "lucide-react";
// import { motion } from "framer-motion";
// import { useScrollAnimation } from "../hooks/useScrollAnimation";

// const services = [
//   {
//     icon: GraduationCap,

//     title: "Professional Training",

//     description: "Live-led programs, certification prep, and skill-building workshops for software, design, and business careers.",
//   },

//   {
//     icon: Briefcase,

//     title: "Career Services",

//     description: "Resume coaching, mock interviews, and job readiness support to help learners secure their first role.",
//   },

//   {
//     icon: Users,

//     title: "Employer Solutions",

//     description: "Talent sourcing, customized hiring events, and workforce development for growth-focused teams.",
//   },
// ];

// function WhyLighthousePage() {
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
//       className="py-5 pt-12 bg-gradient-to-br from-blue-50 via-white to-slate-50"
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
//             Why Lighthouse?
//           </motion.span>

//           <motion.h2
//             className="text-3xl md:text-4xl font-bold text-slate-900"
//             initial={{ opacity: 0, y: 10 }}
//             animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             Industry-focused learning, talent, and hiring.
//           </motion.h2>

//           <motion.p
//             className="text-lg mt-5 max-w-2xl mx-auto text-slate-600"
//             initial={{ opacity: 0 }}
//             animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
//             transition={{ duration: 0.6, delay: 0.3 }}
//           >
//             We support learners, employers, and training partners with practical programs, placement services, and recruitment support that work in the real world.
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

// export default WhyLighthousePage;




import { GraduationCap, Briefcase, Users, ArrowRight, Star, TrendingUp, Award, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useState } from "react";

// Sample images - replace with your actual image URLs
const images = {
  training: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop",
  career: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&h=600&fit=crop",
  employer: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
  hero: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&h=400&fit=crop",
};

const services = [
  {
    icon: GraduationCap,
    title: "Professional Training",
    description: "Live-led programs, certification prep, and skill-building workshops for software, design, and business careers.",
    image: images.training,
    stats: "95%",
    statLabel: "Placement Rate",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: Briefcase,
    title: "Career Services",
    description: "Resume coaching, mock interviews, and job readiness support to help learners secure their first role.",
    image: images.career,
    stats: "10K+",
    statLabel: "Careers Launched",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    icon: Users,
    title: "Employer Solutions",
    description: "Talent sourcing, customized hiring events, and workforce development for growth-focused teams.",
    image: images.employer,
    stats: "500+",
    statLabel: "Partner Companies",
    color: "from-emerald-500 to-emerald-600",
    bgColor: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
];

function WhyLighthousePage() {
  const { ref, isVisible } = useScrollAnimation();
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeTab, setActiveTab] = useState(0);

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

  // Quick stats data
  const quickStats = [
    { label: "Active Learners", value: "15K+", icon: Users },
    { label: "Success Rate", value: "94%", icon: TrendingUp },
    { label: "Awards Won", value: "25+", icon: Award },
  ];

  return (
    <section
      ref={ref}
      id="services"
      className="py-5 pt-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/50 relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-200/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section with enhanced design */}
        {/* <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-semibold rounded-full mb-4 shadow-lg shadow-blue-200"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
          >
            <Zap size={14} />
            Why Lighthouse?
          </motion.span>

          <motion.h2
            className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight"
            initial={{ opacity: 0, y: 10 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Industry-focused learning, <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
              talent, and hiring.
            </span>
          </motion.h2>

          <motion.p
            className="text-lg mt-5 max-w-2xl mx-auto text-slate-600"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            We support learners, employers, and training partners with practical programs, placement services, and recruitment support that work in the real world.
          </motion.p>
        </motion.div> */}

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
            Why Lighthouse?
          </motion.span>

          <motion.h2
            className="text-3xl md:text-4xl font-bold text-slate-900"
            initial={{ opacity: 0, y: 10 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Industry-focused learning, talent, and hiring.
          </motion.h2>

          <motion.p
            className="text-lg mt-5 max-w-2xl mx-auto text-slate-600"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            We support learners, employers, and training partners with practical programs, placement services, and recruitment support that work in the real world.
          </motion.p>
        </motion.div>

        {/* Quick Stats Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {quickStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex items-center gap-4 group hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon size={24} className="text-blue-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                  <p className="text-sm text-slate-500">{stat.label}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Main Services Cards with Images */}
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
                className="group relative"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                whileHover={{ y: -8 }}
              >
                {/* Card with image */}
                <div className="rounded-3xl bg-white overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100">
                  {/* Image Section */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent" />
                    
                    {/* Icon badge on image */}
                    <div className={`absolute top-4 left-4 w-12 h-12 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg`}>
                      <Icon size={24} className={service.iconColor} />
                    </div>

                    {/* Stats badge */}
                    <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5 shadow-lg">
                      <p className="text-xs font-bold text-slate-900">{service.stats}</p>
                      <p className="text-[10px] text-slate-500">{service.statLabel}</p>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-2 text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
                      {service.title}
                    </h3>

                    <p className="text-slate-500 leading-7 text-sm">
                      {service.description}
                    </p>

                    {/* Interactive CTA */}
                    <motion.div
                      className="mt-4 flex items-center gap-2 text-sm font-semibold text-blue-600"
                      initial={{ opacity: 0, x: -10 }}
                      animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    >
                      <span>Learn more</span>
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Interactive Feature Tabs Section */}
        <motion.div
          className="mt-20 bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <div className="p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
              Why choose our approach?
            </h3>
            
            {/* Tab Buttons */}
            <div className="flex flex-wrap gap-2 justify-center mb-8">
              {services.map((service, index) => (
                <button
                  key={service.title}
                  onClick={() => setActiveTab(index)}
                  className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                    activeTab === index
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-200'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  <service.icon size={16} />
                  {service.title}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">
                  {services[activeTab].title}
                </h4>
                <p className="text-slate-600 leading-7">
                  {services[activeTab].description}
                </p>
                <ul className="mt-4 space-y-2">
                  {[
                    "Expert-led programs",
                    "Real-world applications",
                    "Industry-recognized certifications",
                  ].map((item, idx) => (
                    <motion.li
                      key={idx}
                      className="flex items-center gap-2 text-sm text-slate-700"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <Star size={16} className="text-blue-600 flex-shrink-0" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img
                  src={services[activeTab].image}
                  alt={services[activeTab].title}
                  className="w-full h-64 object-cover"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default WhyLighthousePage;