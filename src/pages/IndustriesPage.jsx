// import { motion } from "framer-motion";
// import { useScrollAnimation } from "../hooks/useScrollAnimation";
// import {
//   ShoppingBag, Landmark, Cpu, Plane, GraduationCap, ArrowRight
// } from "lucide-react";
// import partnerLogo from "../assets/partner-logo.jpeg"; // replace with actual logo

// const industries = [
//   { icon: ShoppingBag, name: "Retail & E-commerce",        color: "#2563eb" },
//   { icon: Landmark,    name: "Banking & Financial Services", color: "#7c3aed" },
//   { icon: Cpu,         name: "Technology",                  color: "#0891b2" },
//   { icon: Plane,       name: "Travel, Hospitality & Cargo", color: "#059669" },
//   { icon: GraduationCap, name: "Education & Training",      color: "#d97706" },
// ];

// const partners = [
//   "Parishkar College",
//   "Ambuja Foundation",
//   "R K Pansari Jan Seva Trust",
// ];

// function IndustriesPage() {
//   const { ref, isVisible } = useScrollAnimation();

//   return (
//     <section ref={ref} id="industries" className="py-24 bg-white">
//       <div className="max-w-7xl mx-auto px-6 lg:px-10">

//         {/* Yellow label */}
//         <motion.span
//           initial={{ opacity: 0 }}
//           animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
//           transition={{ duration: 0.4 }}
//           className="inline-block bg-yellow-400 text-black text-[11px] font-bold tracking-widest uppercase px-3 py-1.5 mb-12"
//         >
//           Industries
//         </motion.span>

//         {/* ── Main two-column layout ── */}
//         <div className="grid lg:grid-cols-2 gap-16 items-start">

//           {/* ── LEFT: Industries list ── */}
//           <motion.div
//             initial={{ opacity: 0, x: -24 }}
//             animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -24 }}
//             transition={{ duration: 0.6, ease: "easeOut" }}
//           >
//             <p className="text-xs font-bold tracking-[3px] uppercase text-gray-400 mb-4">
//               Sectors we serve
//             </p>
//             <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight mb-10">
//               Built for every <br />
//               <span className="text-blue-600">industry's</span> needs.
//             </h2>

//             <div className="flex flex-col divide-y divide-gray-100">
//               {industries.map((item, i) => {
//                 const Icon = item.icon;
//                 return (
//                   <motion.div
//                     key={item.name}
//                     initial={{ opacity: 0, x: -16 }}
//                     animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -16 }}
//                     transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 + i * 0.08 }}
//                     whileHover={{ x: 6 }}
//                     className="group flex items-center justify-between py-5 cursor-pointer"
//                   >
//                     <div className="flex items-center gap-4">
//                       <div
//                         className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
//                         style={{ backgroundColor: `${item.color}15` }}
//                       >
//                         <Icon size={18} style={{ color: item.color }} />
//                       </div>
//                       <span className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-200">
//                         {item.name}
//                       </span>
//                     </div>
//                     <ArrowRight
//                       size={16}
//                       className="text-gray-300 group-hover:text-blue-500 transition-colors duration-200 flex-shrink-0"
//                     />
//                   </motion.div>
//                 );
//               })}
//             </div>
//           </motion.div>

//           {/* ── RIGHT: Industry Academia Association ── */}
//           <motion.div
//             initial={{ opacity: 0, x: 24 }}
//             animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 24 }}
//             transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
//             className="flex flex-col gap-8"
//           >
//             {/* Section heading */}
//             <div>
//               <p className="text-xs font-bold tracking-[3px] uppercase text-gray-400 mb-3">
//                 Our associations
//               </p>
//               <h3 className="text-2xl font-bold text-gray-900 leading-snug">
//                 Industry & Academia <br />
//                 <span className="text-blue-600">Association</span>
//               </h3>
//               <p className="mt-3 text-gray-500 text-sm leading-relaxed max-w-sm">
//                 We collaborate with leading institutions and foundations to ensure
//                 our programs stay rooted in real-world practice and community impact.
//               </p>
//             </div>

//             {/* Partner cards */}
//             <div className="flex flex-col gap-4">
//               {partners.map((partner, i) => (
//                 <motion.div
//                   key={partner}
//                   initial={{ opacity: 0, y: 12 }}
//                   animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
//                   transition={{ duration: 0.45, ease: "easeOut", delay: 0.25 + i * 0.1 }}
//                   whileHover={{ y: -3 }}
//                   className="group flex items-center justify-between bg-gray-50 hover:bg-blue-50 border border-gray-100 hover:border-blue-200 rounded-xl px-6 py-4 transition-all duration-250"
//                 >
//                   <div className="flex items-center gap-3">
//                     <div className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0" />
//                     <span className="text-sm font-semibold text-gray-800 group-hover:text-blue-700 transition-colors">
//                       {partner}
//                     </span>
//                   </div>
//                   <ArrowRight size={14} className="text-gray-300 group-hover:text-blue-400 transition-colors" />
//                 </motion.div>
//               ))}
//             </div>

//             {/* Logo block */}
//             <motion.div
//               initial={{ opacity: 0, y: 12 }}
//               animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
//               transition={{ duration: 0.5, delay: 0.55 }}
//               className="border border-dashed border-gray-200 rounded-2xl p-8 flex flex-col items-center justify-center gap-3 bg-gray-50/60"
//             >
//               <img
//                 src={partnerLogo}
//                 alt="Partner Logo"
//                 className="h-14 w-auto object-contain"
//                 onError={(e) => {
//                   e.target.style.display = "none";
//                   e.target.parentElement.querySelector(".logo-fallback").style.display = "flex";
//                 }}
//               />
//               <div
//                 className="logo-fallback hidden flex-col items-center gap-1"
//               >
//                 <div className="w-14 h-14 rounded-xl bg-gray-200 flex items-center justify-center">
//                   <span className="text-gray-400 text-xs font-bold">LOGO</span>
//                 </div>
//                 <span className="text-xs text-gray-400">Partner Logo</span>
//               </div>
//               <p className="text-xs text-gray-400 font-medium tracking-wide">
//                 Trusted institutional partner
//               </p>
//             </motion.div>

//           </motion.div>
//         </div>

//       </div>
//     </section>
//   );
// }

// export default IndustriesPage;




import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import {
  ShoppingBag, Landmark, Cpu, Plane, GraduationCap, ArrowRight,
  Building2, Users, Award, Star, TrendingUp, CheckCircle
} from "lucide-react";
import { useState } from "react";
import parishkarLogo from "../assets/parishkar.png"; // replace with actual logo

// Partner logos - Using professional SVG placeholders
const partnerLogos = {
  parishkar: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
  ambuja: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
  pansari: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
};

const industries = [
  { 
    icon: ShoppingBag, 
    name: "Retail & E-commerce", 
    color: "#2563eb",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
    description: "Digital transformation & customer experience solutions",
    stats: "150+ brands served"
  },
  { 
    icon: Landmark, 
    name: "Banking & Financial Services", 
    color: "#7c3aed",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600",
    description: "Compliance, risk management & fintech innovation",
    stats: "40+ financial institutions"
  },
  { 
    icon: Cpu, 
    name: "Technology", 
    color: "#0891b2",
    bgColor: "bg-cyan-50",
    iconColor: "text-cyan-600",
    description: "Software development, AI & cloud solutions",
    stats: "200+ tech projects"
  },
  { 
    icon: Plane, 
    name: "Travel, Hospitality & Cargo", 
    color: "#059669",
    bgColor: "bg-emerald-50",
    iconColor: "text-emerald-600",
    description: "Operations, logistics & guest experience management",
    stats: "75+ hospitality partners"
  },
  { 
    icon: GraduationCap, 
    name: "Education & Training", 
    color: "#d97706",
    bgColor: "bg-amber-50",
    iconColor: "text-amber-600",
    description: "Curriculum development & skill enhancement programs",
    stats: "1000+ students trained"
  },
];

const partners = [
  {
    name: "Parishkar College",
    logo: "https://images.unsplash.com/photo-1778526079007-bc5dd8f1a2a1?q=80&w=910&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "Academic Partner",
  },
  {
    name: "Ambuja Foundation",
    logo: partnerLogos.ambuja,
    type: "Corporate Foundation",
  },
  {
    name: "R K Pansari Jan Seva Trust",
    logo: partnerLogos.pansari,
    type: "NGO/Trust",
  },
];

function IndustriesPage() {
  const { ref, isVisible } = useScrollAnimation();
  const [hoveredIndustry, setHoveredIndustry] = useState(null);
  const [hoveredPartner, setHoveredPartner] = useState(null);

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
      id="industries"
      className="py-5 pt-12 bg-gradient-to-br from-slate-50 via-white to-blue-50/50 relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section - Matching WhyLighthousePage style */}
        {/* <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-block px-3 py-1 bg-yellow-400 text-black text-xs font-semibold rounded-full mb-3"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
          >
            Industries We Serve
          </motion.span>

          <motion.h2
            className="text-3xl md:text-4xl font-bold text-slate-900"
            initial={{ opacity: 0, y: 10 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Built for every <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              industry's needs.
            </span>
          </motion.h2>

          <motion.p
            className="text-lg mt-5 max-w-2xl mx-auto text-slate-600"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            We deliver tailored solutions across diverse sectors, helping businesses and institutions thrive in an ever-evolving landscape.
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
                    Industries We Serve
                  </motion.span>
        
                  <motion.h2
                    className="text-3xl md:text-4xl font-bold text-slate-900"
                    initial={{ opacity: 0, y: 10 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    Built for every industry need
                  </motion.h2>
        
                  <motion.p
                    className="text-lg mt-5 max-w-2xl mx-auto text-slate-600"
                    initial={{ opacity: 0 }}
                    animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    We deliver tailored solutions across diverse sectors, helping businesses and institutions thrive in an ever-evolving landscape.
                  </motion.p>
                </motion.div>

        {/* Industries Grid - Similar card style to WhyLighthousePage */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={industry.name}
                variants={itemVariants}
                className="relative group"
                onMouseEnter={() => setHoveredIndustry(index)}
                onMouseLeave={() => setHoveredIndustry(null)}
                whileHover={{ y: -5 }}
              >
                <div className="rounded-3xl bg-white p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                  <motion.div
                    className={`w-14 h-14 rounded-xl ${industry.bgColor} flex justify-center items-center mb-6`}
                    initial={{ scale: 0 }}
                    animate={isVisible ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.5, type: "spring", delay: index * 0.1 }}
                  >
                    <Icon size={28} className={industry.iconColor} />
                  </motion.div>

                  <h3 className="font-bold text-xl mb-2 text-slate-900 group-hover:text-blue-600 transition-colors">
                    {industry.name}
                  </h3>

                  <p className="text-slate-500 leading-7 text-sm">
                    {industry.description}
                  </p>

                  {/* Stats badge */}
                  <motion.div
                    className="mt-4 inline-flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-full"
                    initial={{ opacity: 0 }}
                    animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  >
                    <TrendingUp size={14} className="text-blue-600" />
                    <span className="text-xs font-semibold text-slate-700">{industry.stats}</span>
                  </motion.div>

                  {/* Animated border */}
                  <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-b-3xl transition-all duration-500 ${
                    hoveredIndustry === index ? 'w-full' : 'w-0'
                  }`} />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Industry & Academia Association Section - Similar to WhyLighthousePage's tab section */}
        <motion.div
          className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <div className="p-8 md:p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full" />
              <div>
                <p className="text-xs font-bold tracking-[2px] uppercase text-blue-600">
                  Our Associations
                </p>
                <h3 className="text-2xl font-bold text-slate-900">
                  Industry & Academia <span className="text-blue-600">Association</span>
                </h3>
              </div>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed max-w-2xl mb-8">
              We collaborate with leading institutions, foundations, and trusts to ensure
              our programs stay rooted in real-world practice and community impact.
            </p>

            {/* Partner Cards - Similar style to WhyLighthousePage */}
            <div className="grid md:grid-cols-3 gap-6">
              {partners.map((partner, index) => (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                  onMouseEnter={() => setHoveredPartner(index)}
                  onMouseLeave={() => setHoveredPartner(null)}
                  className="relative group"
                >
                  <div className="rounded-2xl bg-gradient-to-br from-slate-50 to-white p-6 border border-slate-100 hover:border-blue-200 transition-all duration-300 shadow-sm hover:shadow-lg h-full">
                    {/* Logo */}
                    <motion.div
                      className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center mb-4 mx-auto shadow-sm"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="w-12 h-12 object-contain"
                        onError={(e) => {
                          e.target.style.display = "none";
                          const fallback = e.target.parentElement.querySelector('.logo-fallback');
                          if (fallback) fallback.style.display = "flex";
                        }}
                      />
                      {/* <div className="logo-fallback hidden w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg items-center justify-center">
                        <Building2 size={24} className="text-blue-600" />
                      </div> */}
                    </motion.div>

                    <h4 className="font-bold text-slate-900 text-center group-hover:text-blue-600 transition-colors">
                      {partner.name}
                    </h4>
                    <p className="text-xs text-slate-500 text-center mt-1">{partner.type}</p>

                    {/* Trust badge */}
                    {/* <motion.div
                      className="mt-4 flex items-center justify-center gap-1"
                      initial={{ opacity: 0 }}
                      animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                    >
                      <CheckCircle size={14} className="text-emerald-500" />
                      <span className="text-xs text-slate-500">Verified Partner</span>
                    </motion.div> */}

                    {/* Hover indicator */}
                    <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 ${
                      hoveredPartner === index ? 'w-3/4' : 'w-0'
                    }`} />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats Row */}
            <motion.div
              className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-slate-100"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {[
                { label: "Partner Institutions", value: "50+", icon: Building2 },
                { label: "Students Impacted", value: "5000+", icon: Users },
                { label: "Industry Awards", value: "15+", icon: Award },
              ].map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <stat.icon size={24} className="text-blue-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                  <p className="text-xs text-slate-500">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default IndustriesPage;