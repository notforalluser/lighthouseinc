// import { Compass, Eye, Sparkles, ArrowRight, Target, TrendingUp } from "lucide-react";
// import { motion, useScroll, useTransform, useInView } from "framer-motion";
// import { useRef, useEffect, useState } from "react";

// const cards = [
//   {
//     title: "Our Mission",
//     description:
//       "To empower learners with real-world skills and provide employers access to talent built for today's digital workforce.",
//     icon: Compass,
//     tag: "Mission",
//     stats: [
//       { label: "Impact", value: "10K+" },
//       { label: "Goal", value: "100% Success" },
//     ]
//   },
//   {
//     title: "Our Vision",
//     description:
//       "A future where skill, opportunity and hiring are connected through learning experiences that work for every learner and employer.",
//     icon: Eye,
//     tag: "Vision",
//     stats: [
//       { label: "Future", value: "2030" },
//       { label: "Reach", value: "Global" },
//     ]
//   },
// ];

// function MissionVision() {
//   const sectionRef = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);
  
//   const isInView = useInView(sectionRef, { 
//     once: false, 
//     amount: 0.2,
//     margin: "-50px"
//   });

//   useEffect(() => {
//     if (isInView) {
//       setIsVisible(true);
//     } else {
//       setIsVisible(false);
//     }
//   }, [isInView]);

//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start end", "end start"]
//   });

//   // Both cards animate simultaneously with the same transform values
//   const cardRotate = useTransform(scrollYProgress, [0, 0.15, 0.4, 0.6], [8, 4, 0, -2]);
//   const cardScale = useTransform(scrollYProgress, [0, 0.15, 0.4, 0.6], [0.85, 0.92, 1, 0.98]);
//   const cardOpacity = useTransform(scrollYProgress, [0, 0.1, 0.3, 0.6], [0, 0.5, 1, 1]);
//   const cardY = useTransform(scrollYProgress, [0, 0.15, 0.4, 0.6], [60, 30, 0, 10]);

//   // Individual card tilt effects (opposite directions for visual interest)
//   const card1Rotate = useTransform(scrollYProgress, [0, 0.15, 0.4, 0.6], [12, 6, 0, -3]);
//   const card2Rotate = useTransform(scrollYProgress, [0, 0.15, 0.4, 0.6], [-12, -6, 0, 3]);

//   // Background animation
//   const bgOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3]);

//   return (
//     <section
//       ref={sectionRef}
//       className="relative py-16 bg-gradient-to-b from-slate-50 via-white to-red-50/30 overflow-hidden"
//     >
//       {/* Animated Background Elements */}
//       <motion.div 
//         className="absolute inset-0 pointer-events-none"
//         style={{ opacity: bgOpacity }}
//       >
//         <div className="absolute top-0 right-0 w-72 h-72 bg-red-100/30 rounded-full blur-3xl animate-pulse" />
//         <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-100/20 rounded-full blur-3xl animate-pulse delay-1000" />
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-red-50/20 rounded-full blur-3xl" />
//       </motion.div>

//       {/* Floating Particles */}
//       <div className="absolute inset-0 pointer-events-none overflow-hidden">
//         {[...Array(6)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute w-1 h-1 bg-red-400/20 rounded-full"
//             animate={{
//               y: [0, -60, 0],
//               x: [0, Math.random() * 40 - 20, 0],
//               opacity: [0, 0.5, 0],
//             }}
//             transition={{
//               duration: 5 + Math.random() * 6,
//               repeat: Infinity,
//               delay: i * 0.6,
//               ease: "easeInOut",
//             }}
//             style={{
//               left: `${15 + i * 14}%`,
//               top: `${20 + Math.random() * 60}%`,
//             }}
//           />
//         ))}
//       </div>

//       {/* Header - Minimal padding */}
//       <motion.div 
//         className="text-center mb-8 relative z-10"
//         initial={{ opacity: 0, y: 20 }}
//         animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//         transition={{ duration: 0.5 }}
//       >
//         <motion.div
//           className="inline-block mb-2"
//           initial={{ scale: 0 }}
//           animate={isVisible ? { scale: 1 } : { scale: 0 }}
//           transition={{ duration: 0.4, type: "spring" }}
//         >
//           <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 border border-red-200">
//             <Sparkles size={12} className="text-red-600" />
//             <span className="text-[10px] font-medium text-red-700 uppercase tracking-wider">
//               Our Purpose
//             </span>
//           </span>
//         </motion.div>

//         <motion.h2 
//           className="text-3xl md:text-4xl font-bold text-slate-900"
//           initial={{ opacity: 0, y: 10 }}
//           animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
//           transition={{ duration: 0.5, delay: 0.05 }}
//         >
//           Guiding Our <span className="text-red-600">Future</span>
//         </motion.h2>

//         <motion.p 
//           className="mt-1.5 text-slate-600 max-w-2xl mx-auto text-sm"
//           initial={{ opacity: 0 }}
//           animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
//           transition={{ duration: 0.5, delay: 0.1 }}
//         >
//           Our mission and vision drive everything we do at Lighthouse Inc.
//         </motion.p>
//       </motion.div>

//       <div className="max-w-6xl mx-auto px-6 relative z-10">
//         <div className="grid md:grid-cols-2 gap-6">
//           {/* Card 1 - Mission */}
//           <motion.div
//             style={{
//               rotate: card1Rotate,
//               scale: cardScale,
//               opacity: cardOpacity,
//               y: cardY,
//             }}
//             className="relative"
//           >
//             <motion.div
//               className="relative bg-gradient-to-br from-red-50/80 to-white rounded-2xl p-6 shadow-lg border border-red-200/50 hover:border-red-300 transition-all duration-400 h-full group overflow-hidden"
//               whileHover={{ y: -4, boxShadow: "0 20px 40px -12px rgba(220,38,38,0.2)" }}
//             >
//               {/* Animated gradient overlay */}
//               <motion.div
//                 className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
//                 initial={false}
//               />

//               <div className="relative z-10">
//                 <motion.div
//                   className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center mb-3 group-hover:bg-red-600 transition-colors duration-400"
//                   initial={{ scale: 0, rotate: -45 }}
//                   animate={
//                     isVisible
//                       ? { scale: 1, rotate: 0 }
//                       : { scale: 0, rotate: -45 }
//                   }
//                   transition={{ duration: 0.4, type: "spring", delay: 0.1 }}
//                 >
//                   <Compass size={22} className="text-red-600 group-hover:text-white transition-colors duration-400" />
//                 </motion.div>

//                 <div className="flex items-center gap-2 mb-2">
//                   <span className="text-[9px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-red-100 text-red-700">
//                     {cards[0].tag}
//                   </span>
//                   <motion.div
//                     animate={isVisible ? { scale: [1, 1.2, 1] } : { scale: 1 }}
//                     transition={{ duration: 1.5, repeat: Infinity }}
//                   >
//                     <Sparkles size={10} className="text-red-400" />
//                   </motion.div>
//                 </div>

//                 <motion.h2
//                   className="text-xl font-bold text-slate-900 mb-2"
//                   initial={{ opacity: 0 }}
//                   animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
//                   transition={{ duration: 0.4, delay: 0.15 }}
//                 >
//                   {cards[0].title}
//                 </motion.h2>

//                 <motion.p
//                   className="text-slate-600 leading-relaxed text-sm"
//                   initial={{ opacity: 0 }}
//                   animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
//                   transition={{ duration: 0.4, delay: 0.2 }}
//                 >
//                   {cards[0].description}
//                 </motion.p>

//                 {/* Stats */}
//                 <motion.div
//                   className="mt-4 pt-3 border-t border-red-100 grid grid-cols-2 gap-2"
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
//                   transition={{ duration: 0.4, delay: 0.25 }}
//                 >
//                   {cards[0].stats.map((stat, idx) => (
//                     <div key={idx} className="bg-red-50/50 rounded-lg p-2 text-center">
//                       <p className="text-base font-bold text-red-600">{stat.value}</p>
//                       <p className="text-[9px] text-slate-500">{stat.label}</p>
//                     </div>
//                   ))}
//                 </motion.div>

//                 <motion.div
//                   className="mt-3 flex items-center gap-1.5 text-red-600 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//                   initial={{ x: -5 }}
//                   whileHover={{ x: 0 }}
//                 >
//                   <span>Learn more</span>
//                   <ArrowRight size={12} />
//                 </motion.div>
//               </div>
//             </motion.div>
//           </motion.div>

//           {/* Card 2 - Vision */}
//           <motion.div
//             style={{
//               rotate: card2Rotate,
//               scale: cardScale,
//               opacity: cardOpacity,
//               y: cardY,
//             }}
//             className="relative"
//           >
//             <motion.div
//               className="relative bg-gradient-to-br from-red-50/80 to-white rounded-2xl p-6 shadow-lg border border-red-200/50 hover:border-red-300 transition-all duration-400 h-full group overflow-hidden"
//               whileHover={{ y: -4, boxShadow: "0 20px 40px -12px rgba(220,38,38,0.2)" }}
//             >
//               {/* Animated gradient overlay */}
//               <motion.div
//                 className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
//                 initial={false}
//               />

//               <div className="relative z-10">
//                 <motion.div
//                   className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center mb-3 group-hover:bg-red-600 transition-colors duration-400"
//                   initial={{ scale: 0, rotate: 45 }}
//                   animate={
//                     isVisible
//                       ? { scale: 1, rotate: 0 }
//                       : { scale: 0, rotate: 45 }
//                   }
//                   transition={{ duration: 0.4, type: "spring", delay: 0.15 }}
//                 >
//                   <Eye size={22} className="text-red-600 group-hover:text-white transition-colors duration-400" />
//                 </motion.div>

//                 <div className="flex items-center gap-2 mb-2">
//                   <span className="text-[9px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-red-100 text-red-700">
//                     {cards[1].tag}
//                   </span>
//                   <motion.div
//                     animate={isVisible ? { scale: [1, 1.2, 1] } : { scale: 1 }}
//                     transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
//                   >
//                     <Sparkles size={10} className="text-red-400" />
//                   </motion.div>
//                 </div>

//                 <motion.h2
//                   className="text-xl font-bold text-slate-900 mb-2"
//                   initial={{ opacity: 0 }}
//                   animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
//                   transition={{ duration: 0.4, delay: 0.2 }}
//                 >
//                   {cards[1].title}
//                 </motion.h2>

//                 <motion.p
//                   className="text-slate-600 leading-relaxed text-sm"
//                   initial={{ opacity: 0 }}
//                   animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
//                   transition={{ duration: 0.4, delay: 0.25 }}
//                 >
//                   {cards[1].description}
//                 </motion.p>

//                 {/* Stats */}
//                 <motion.div
//                   className="mt-4 pt-3 border-t border-red-100 grid grid-cols-2 gap-2"
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
//                   transition={{ duration: 0.4, delay: 0.3 }}
//                 >
//                   {cards[1].stats.map((stat, idx) => (
//                     <div key={idx} className="bg-red-50/50 rounded-lg p-2 text-center">
//                       <p className="text-base font-bold text-red-600">{stat.value}</p>
//                       <p className="text-[9px] text-slate-500">{stat.label}</p>
//                     </div>
//                   ))}
//                 </motion.div>

//                 <motion.div
//                   className="mt-3 flex items-center gap-1.5 text-red-600 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//                   initial={{ x: -5 }}
//                   whileHover={{ x: 0 }}
//                 >
//                   <span>Learn more</span>
//                   <ArrowRight size={12} />
//                 </motion.div>
//               </div>
//             </motion.div>
//           </motion.div>
//         </div>

//         {/* Bottom decorative line - Minimal */}
//         <motion.div
//           className="mt-10 flex justify-center"
//           initial={{ opacity: 0 }}
//           animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//         >
//           <div className="flex items-center gap-2">
//             <div className="w-12 h-px bg-red-200" />
//             <div className="flex gap-1">
//               <div className="w-1 h-1 rounded-full bg-red-400 animate-pulse" />
//               <div className="w-1 h-1 rounded-full bg-red-400 animate-pulse delay-150" />
//               <div className="w-1 h-1 rounded-full bg-red-400 animate-pulse delay-300" />
//             </div>
//             <div className="w-12 h-px bg-red-200" />
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// export default MissionVision;








// import { Compass, Eye, Sparkles, ArrowRight } from "lucide-react";
// import { motion, useScroll, useTransform, useInView } from "framer-motion";
// import { useRef, useEffect, useState } from "react";

// const cards = [
//   {
//     title: "Our Mission",
//     description:
//       "To empower learners with real-world skills and provide employers access to talent built for today's digital workforce.",
//     icon: Compass,
//     tag: "Mission",
//     stats: [
//       { label: "Impact", value: "10K+" },
//       { label: "Goal", value: "100% Success" },
//     ]
//   },
//   {
//     title: "Our Vision",
//     description:
//       "A future where skill, opportunity and hiring are connected through learning experiences that work for every learner and employer.",
//     icon: Eye,
//     tag: "Vision",
//     stats: [
//       { label: "Future", value: "2030" },
//       { label: "Reach", value: "Global" },
//     ]
//   },
// ];

// function MissionVision() {
//   const sectionRef = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);
  
//   const isInView = useInView(sectionRef, { 
//     once: false, 
//     amount: 0.2,
//     margin: "-50px"
//   });

//   useEffect(() => {
//     if (isInView) {
//       setIsVisible(true);
//     } else {
//       setIsVisible(false);
//     }
//   }, [isInView]);

//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start end", "end start"]
//   });

//   // Cards start tilted and become straight as you scroll
//   // Initially tilted (15-20 degrees), then straighten to 0
//   const cardScale = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.7], [0.75, 0.85, 1, 1]);
//   const cardOpacity = useTransform(scrollYProgress, [0, 0.15, 0.4, 0.7], [0, 0.6, 1, 1]);
//   const cardY = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.7], [80, 40, 0, 0]);

//   // Individual card tilt effects - starting tilted and becoming straight
//   const card1Rotate = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.7], [20, 12, 3, 0]);
//   const card2Rotate = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.7], [-20, -12, -3, 0]);

//   // Background animation
//   const bgOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3]);

//   return (
//     <section
//       ref={sectionRef}
//       className="relative py-16 bg-gradient-to-b from-slate-50 via-white to-red-50/30 overflow-hidden"
//     >
//       {/* Animated Background Elements */}
//       <motion.div 
//         className="absolute inset-0 pointer-events-none"
//         style={{ opacity: bgOpacity }}
//       >
//         <div className="absolute top-0 right-0 w-72 h-72 bg-red-100/30 rounded-full blur-3xl animate-pulse" />
//         <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-100/20 rounded-full blur-3xl animate-pulse delay-1000" />
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-red-50/20 rounded-full blur-3xl" />
//       </motion.div>

//       {/* Floating Particles */}
//       <div className="absolute inset-0 pointer-events-none overflow-hidden">
//         {[...Array(6)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute w-1 h-1 bg-red-400/20 rounded-full"
//             animate={{
//               y: [0, -60, 0],
//               x: [0, Math.random() * 40 - 20, 0],
//               opacity: [0, 0.5, 0],
//             }}
//             transition={{
//               duration: 5 + Math.random() * 6,
//               repeat: Infinity,
//               delay: i * 0.6,
//               ease: "easeInOut",
//             }}
//             style={{
//               left: `${15 + i * 14}%`,
//               top: `${20 + Math.random() * 60}%`,
//             }}
//           />
//         ))}
//       </div>

//       {/* Header - Minimal padding */}
//       <motion.div 
//         className="text-center mb-8 relative z-10"
//         initial={{ opacity: 0, y: 20 }}
//         animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//         transition={{ duration: 0.5 }}
//       >
//         <motion.div
//           className="inline-block mb-2"
//           initial={{ scale: 0 }}
//           animate={isVisible ? { scale: 1 } : { scale: 0 }}
//           transition={{ duration: 0.4, type: "spring" }}
//         >
//           <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 border border-red-200">
//             <Sparkles size={12} className="text-red-600" />
//             <span className="text-[10px] font-medium text-red-700 uppercase tracking-wider">
//               Our Purpose
//             </span>
//           </span>
//         </motion.div>

//         <motion.h2 
//           className="text-3xl md:text-4xl font-bold text-slate-900"
//           initial={{ opacity: 0, y: 10 }}
//           animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
//           transition={{ duration: 0.5, delay: 0.05 }}
//         >
//           Guiding Our <span className="text-red-600">Future</span>
//         </motion.h2>

//         <motion.p 
//           className="mt-1.5 text-slate-600 max-w-2xl mx-auto text-sm"
//           initial={{ opacity: 0 }}
//           animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
//           transition={{ duration: 0.5, delay: 0.1 }}
//         >
//           Our mission and vision drive everything we do at Lighthouse Inc.
//         </motion.p>
//       </motion.div>

//       <div className="max-w-6xl mx-auto px-6 relative z-10">
//         <div className="grid md:grid-cols-2 gap-6">
//           {/* Card 1 - Mission */}
//           <motion.div
//             style={{
//               rotate: card1Rotate,
//               scale: cardScale,
//               opacity: cardOpacity,
//               y: cardY,
//             }}
//             className="relative"
//           >
//             <motion.div
//               className="relative bg-gradient-to-br from-red-50/80 to-white rounded-2xl p-6 shadow-lg border border-red-200/50 hover:border-red-300 transition-all duration-400 h-full group overflow-hidden"
//               whileHover={{ y: -4, boxShadow: "0 20px 40px -12px rgba(220,38,38,0.2)" }}
//             >
//               {/* Animated gradient overlay */}
//               <motion.div
//                 className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
//                 initial={false}
//               />

//               <div className="relative z-10">
//                 <motion.div
//                   className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center mb-3 group-hover:bg-red-600 transition-colors duration-400"
//                   initial={{ scale: 0, rotate: -45 }}
//                   animate={
//                     isVisible
//                       ? { scale: 1, rotate: 0 }
//                       : { scale: 0, rotate: -45 }
//                   }
//                   transition={{ duration: 0.4, type: "spring", delay: 0.1 }}
//                 >
//                   <Compass size={22} className="text-red-600 group-hover:text-white transition-colors duration-400" />
//                 </motion.div>

//                 <div className="flex items-center gap-2 mb-2">
//                   <span className="text-[9px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-red-100 text-red-700">
//                     {cards[0].tag}
//                   </span>
//                   <motion.div
//                     animate={isVisible ? { scale: [1, 1.2, 1] } : { scale: 1 }}
//                     transition={{ duration: 1.5, repeat: Infinity }}
//                   >
//                     <Sparkles size={10} className="text-red-400" />
//                   </motion.div>
//                 </div>

//                 <motion.h2
//                   className="text-xl font-bold text-slate-900 mb-2"
//                   initial={{ opacity: 0 }}
//                   animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
//                   transition={{ duration: 0.4, delay: 0.15 }}
//                 >
//                   {cards[0].title}
//                 </motion.h2>

//                 <motion.p
//                   className="text-slate-600 leading-relaxed text-sm"
//                   initial={{ opacity: 0 }}
//                   animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
//                   transition={{ duration: 0.4, delay: 0.2 }}
//                 >
//                   {cards[0].description}
//                 </motion.p>

//                 {/* Stats */}
//                 <motion.div
//                   className="mt-4 pt-3 border-t border-red-100 grid grid-cols-2 gap-2"
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
//                   transition={{ duration: 0.4, delay: 0.25 }}
//                 >
//                   {cards[0].stats.map((stat, idx) => (
//                     <div key={idx} className="bg-red-50/50 rounded-lg p-2 text-center">
//                       <p className="text-base font-bold text-red-600">{stat.value}</p>
//                       <p className="text-[9px] text-slate-500">{stat.label}</p>
//                     </div>
//                   ))}
//                 </motion.div>

//                 <motion.div
//                   className="mt-3 flex items-center gap-1.5 text-red-600 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//                   initial={{ x: -5 }}
//                   whileHover={{ x: 0 }}
//                 >
//                   <span>Learn more</span>
//                   <ArrowRight size={12} />
//                 </motion.div>
//               </div>
//             </motion.div>
//           </motion.div>

//           {/* Card 2 - Vision */}
//           <motion.div
//             style={{
//               rotate: card2Rotate,
//               scale: cardScale,
//               opacity: cardOpacity,
//               y: cardY,
//             }}
//             className="relative"
//           >
//             <motion.div
//               className="relative bg-gradient-to-br from-red-50/80 to-white rounded-2xl p-6 shadow-lg border border-red-200/50 hover:border-red-300 transition-all duration-400 h-full group overflow-hidden"
//               whileHover={{ y: -4, boxShadow: "0 20px 40px -12px rgba(220,38,38,0.2)" }}
//             >
//               {/* Animated gradient overlay */}
//               <motion.div
//                 className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
//                 initial={false}
//               />

//               <div className="relative z-10">
//                 <motion.div
//                   className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center mb-3 group-hover:bg-red-600 transition-colors duration-400"
//                   initial={{ scale: 0, rotate: 45 }}
//                   animate={
//                     isVisible
//                       ? { scale: 1, rotate: 0 }
//                       : { scale: 0, rotate: 45 }
//                   }
//                   transition={{ duration: 0.4, type: "spring", delay: 0.15 }}
//                 >
//                   <Eye size={22} className="text-red-600 group-hover:text-white transition-colors duration-400" />
//                 </motion.div>

//                 <div className="flex items-center gap-2 mb-2">
//                   <span className="text-[9px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-red-100 text-red-700">
//                     {cards[1].tag}
//                   </span>
//                   <motion.div
//                     animate={isVisible ? { scale: [1, 1.2, 1] } : { scale: 1 }}
//                     transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
//                   >
//                     <Sparkles size={10} className="text-red-400" />
//                   </motion.div>
//                 </div>

//                 <motion.h2
//                   className="text-xl font-bold text-slate-900 mb-2"
//                   initial={{ opacity: 0 }}
//                   animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
//                   transition={{ duration: 0.4, delay: 0.2 }}
//                 >
//                   {cards[1].title}
//                 </motion.h2>

//                 <motion.p
//                   className="text-slate-600 leading-relaxed text-sm"
//                   initial={{ opacity: 0 }}
//                   animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
//                   transition={{ duration: 0.4, delay: 0.25 }}
//                 >
//                   {cards[1].description}
//                 </motion.p>

//                 {/* Stats */}
//                 <motion.div
//                   className="mt-4 pt-3 border-t border-red-100 grid grid-cols-2 gap-2"
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
//                   transition={{ duration: 0.4, delay: 0.3 }}
//                 >
//                   {cards[1].stats.map((stat, idx) => (
//                     <div key={idx} className="bg-red-50/50 rounded-lg p-2 text-center">
//                       <p className="text-base font-bold text-red-600">{stat.value}</p>
//                       <p className="text-[9px] text-slate-500">{stat.label}</p>
//                     </div>
//                   ))}
//                 </motion.div>

//                 <motion.div
//                   className="mt-3 flex items-center gap-1.5 text-red-600 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//                   initial={{ x: -5 }}
//                   whileHover={{ x: 0 }}
//                 >
//                   <span>Learn more</span>
//                   <ArrowRight size={12} />
//                 </motion.div>
//               </div>
//             </motion.div>
//           </motion.div>
//         </div>

//         {/* Bottom decorative line - Minimal */}
//         <motion.div
//           className="mt-10 flex justify-center"
//           initial={{ opacity: 0 }}
//           animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//         >
//           <div className="flex items-center gap-2">
//             <div className="w-12 h-px bg-red-200" />
//             <div className="flex gap-1">
//               <div className="w-1 h-1 rounded-full bg-red-400 animate-pulse" />
//               <div className="w-1 h-1 rounded-full bg-red-400 animate-pulse delay-150" />
//               <div className="w-1 h-1 rounded-full bg-red-400 animate-pulse delay-300" />
//             </div>
//             <div className="w-12 h-px bg-red-200" />
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// export default MissionVision;













import { Compass, Eye, Sparkles, ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const cards = [
  {
    title: "Our Mission",
    description:
      "To empower learners with real-world skills and provide employers access to talent built for today's digital workforce.",
    icon: Compass,
    tag: "Mission",
    stats: [
      { label: "Impact", value: "10K+" },
      { label: "Goal", value: "100% Success" },
    ]
  },
  {
    title: "Our Vision",
    description:
      "A future where skill, opportunity and hiring are connected through learning experiences that work for every learner and employer.",
    icon: Eye,
    tag: "Vision",
    stats: [
      { label: "Future", value: "2030" },
      { label: "Reach", value: "Global" },
    ]
  },
];

function MissionVision() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  
  const isInView = useInView(sectionRef, { 
    once: false, 
    amount: 0.3,
    margin: "-100px"
  });

  useEffect(() => {
    if (isInView) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [isInView]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Cards straighten quickly when in center of viewport
  // Tightened range for faster, more responsive animation
  const cardScale = useTransform(scrollYProgress, [0, 0.25, 0.45, 0.6], [0.7, 0.85, 1, 1]);
  const cardOpacity = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6], [0, 0.5, 1, 1]);
  const cardY = useTransform(scrollYProgress, [0, 0.25, 0.45, 0.6], [100, 50, 0, 0]);

  // Individual card tilt - quick straightening in center
  const card1Rotate = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.55], [25, 15, 5, 0]);
  const card2Rotate = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.55], [-25, -15, -5, 0]);

  // Background animation
  const bgOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3]);

  return (
    <section
      ref={sectionRef}
      className="relative py-16 bg-gradient-to-b from-slate-50 via-white to-red-50/30 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: bgOpacity }}
      >
        <div className="absolute top-0 right-0 w-72 h-72 bg-red-100/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-100/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-red-50/20 rounded-full blur-3xl" />
      </motion.div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-red-400/20 rounded-full"
            animate={{
              y: [0, -60, 0],
              x: [0, Math.random() * 40 - 20, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 6,
              repeat: Infinity,
              delay: i * 0.6,
              ease: "easeInOut",
            }}
            style={{
              left: `${15 + i * 14}%`,
              top: `${20 + Math.random() * 60}%`,
            }}
          />
        ))}
      </div>

      {/* Header - Minimal padding */}
      <motion.div 
        className="text-center mb-8 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="inline-block mb-2"
          initial={{ scale: 0 }}
          animate={isVisible ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.4, type: "spring" }}
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 border border-red-200">
            <Sparkles size={12} className="text-red-600" />
            <span className="text-[10px] font-medium text-red-700 uppercase tracking-wider">
              Our Purpose
            </span>
          </span>
        </motion.div>

        <motion.h2 
          className="heading-font text-3xl md:text-4xl font-bold text-slate-900"
          initial={{ opacity: 0, y: 10 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          Guiding Our <span className="text-red-600">Future</span>
        </motion.h2>

        <motion.p 
          className="mt-1.5 text-slate-600 max-w-2xl mx-auto text-sm"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Our mission and vision drive everything we do at Lighthouse Inc.
        </motion.p>
      </motion.div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Card 1 - Mission */}
          <motion.div
            style={{
              rotate: card1Rotate,
              scale: cardScale,
              opacity: cardOpacity,
              y: cardY,
            }}
            className="relative"
          >
            <motion.div
              className="relative bg-gradient-to-br from-red-50/80 to-white rounded-2xl p-6 shadow-lg border border-red-200/50 hover:border-red-300 transition-all duration-400 h-full group overflow-hidden"
              whileHover={{ y: -4, boxShadow: "0 20px 40px -12px rgba(220,38,38,0.2)" }}
            >
              {/* Animated gradient overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={false}
              />

              <div className="relative z-10">
                <motion.div
                  className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center mb-3 group-hover:bg-red-600 transition-colors duration-400"
                  initial={{ scale: 0, rotate: -45 }}
                  animate={
                    isVisible
                      ? { scale: 1, rotate: 0 }
                      : { scale: 0, rotate: -45 }
                  }
                  transition={{ duration: 0.4, type: "spring", delay: 0.1 }}
                >
                  <Compass size={22} className="text-red-600 group-hover:text-white transition-colors duration-400" />
                </motion.div>

                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[9px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-red-100 text-red-700">
                    {cards[0].tag}
                  </span>
                  <motion.div
                    animate={isVisible ? { scale: [1, 1.2, 1] } : { scale: 1 }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <Sparkles size={10} className="text-red-400" />
                  </motion.div>
                </div>

                <motion.h2
                  className="text-xl font-bold text-slate-900 mb-2"
                  initial={{ opacity: 0 }}
                  animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.4, delay: 0.15 }}
                >
                  {cards[0].title}
                </motion.h2>

                <motion.p
                  className="text-slate-600 leading-relaxed text-sm"
                  initial={{ opacity: 0 }}
                  animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  {cards[0].description}
                </motion.p>

                {/* Stats */}
                {/* <motion.div
                  className="mt-4 pt-3 border-t border-red-100 grid grid-cols-2 gap-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.4, delay: 0.25 }}
                >
                  {cards[0].stats.map((stat, idx) => (
                    <div key={idx} className="bg-red-50/50 rounded-lg p-2 text-center">
                      <p className="text-base font-bold text-red-600">{stat.value}</p>
                      <p className="text-[9px] text-slate-500">{stat.label}</p>
                    </div>
                  ))}
                </motion.div> */}

                {/* <motion.div
                  className="mt-3 flex items-center gap-1.5 text-red-600 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ x: -5 }}
                  whileHover={{ x: 0 }}
                >
                  <span>Learn more</span>
                  <ArrowRight size={12} />
                </motion.div> */}
              </div>
            </motion.div>
          </motion.div>

          {/* Card 2 - Vision */}
          <motion.div
            style={{
              rotate: card2Rotate,
              scale: cardScale,
              opacity: cardOpacity,
              y: cardY,
            }}
            className="relative"
          >
            <motion.div
              className="relative bg-gradient-to-br from-red-50/80 to-white rounded-2xl p-6 shadow-lg border border-red-200/50 hover:border-red-300 transition-all duration-400 h-full group overflow-hidden"
              whileHover={{ y: -4, boxShadow: "0 20px 40px -12px rgba(220,38,38,0.2)" }}
            >
              {/* Animated gradient overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={false}
              />

              <div className="relative z-10">
                <motion.div
                  className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center mb-3 group-hover:bg-red-600 transition-colors duration-400"
                  initial={{ scale: 0, rotate: 45 }}
                  animate={
                    isVisible
                      ? { scale: 1, rotate: 0 }
                      : { scale: 0, rotate: 45 }
                  }
                  transition={{ duration: 0.4, type: "spring", delay: 0.15 }}
                >
                  <Eye size={22} className="text-red-600 group-hover:text-white transition-colors duration-400" />
                </motion.div>

                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[9px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-red-100 text-red-700">
                    {cards[1].tag}
                  </span>
                  <motion.div
                    animate={isVisible ? { scale: [1, 1.2, 1] } : { scale: 1 }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
                  >
                    <Sparkles size={10} className="text-red-400" />
                  </motion.div>
                </div>

                <motion.h2
                  className="text-xl font-bold text-slate-900 mb-2"
                  initial={{ opacity: 0 }}
                  animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  {cards[1].title}
                </motion.h2>

                <motion.p
                  className="text-slate-600 leading-relaxed text-sm"
                  initial={{ opacity: 0 }}
                  animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.4, delay: 0.25 }}
                >
                  {cards[1].description}
                </motion.p>

                {/* Stats */}
                {/* <motion.div
                  className="mt-4 pt-3 border-t border-red-100 grid grid-cols-2 gap-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  {cards[1].stats.map((stat, idx) => (
                    <div key={idx} className="bg-red-50/50 rounded-lg p-2 text-center">
                      <p className="text-base font-bold text-red-600">{stat.value}</p>
                      <p className="text-[9px] text-slate-500">{stat.label}</p>
                    </div>
                  ))}
                </motion.div> */}

                {/* <motion.div
                  className="mt-3 flex items-center gap-1.5 text-red-600 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ x: -5 }}
                  whileHover={{ x: 0 }}
                >
                  <span>Learn more</span>
                  <ArrowRight size={12} />
                </motion.div> */}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom decorative line - Minimal */}
        <motion.div
          className="mt-10 flex justify-center"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center gap-2">
            <div className="w-12 h-px bg-red-200" />
            <div className="flex gap-1">
              <div className="w-1 h-1 rounded-full bg-red-400 animate-pulse" />
              <div className="w-1 h-1 rounded-full bg-red-400 animate-pulse delay-150" />
              <div className="w-1 h-1 rounded-full bg-red-400 animate-pulse delay-300" />
            </div>
            <div className="w-12 h-px bg-red-200" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default MissionVision;