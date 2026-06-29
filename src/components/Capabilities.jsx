// import { motion } from "framer-motion";

// import { Activity, Zap, ShieldCheck, Globe } from "lucide-react";

// import { useScrollAnimation } from "../hooks/useScrollAnimation";

// const items = [
//   {
//     icon: Activity,
//     title: "Real-time Skill Tracking",
//     description: "Track learner progress and employer-fit metrics through connected performance dashboards."
//   },

//   {
//     icon: Zap,
//     title: "Accelerated Hiring",
//     description: "Connect qualified candidates with employers using structured hiring pathways and screening support."
//   },

//   {
//     icon: ShieldCheck,
//     title: "Validated Outcomes",
//     description: "We ensure every learner is ready for the workplace with employer-aligned validation and support plans."
//   },

//   {
//     icon: Globe,
//     title: "Scalable Cohorts",
//     description: "Run flexible programs for distributed learners, instructor-led cohorts, and employer cohorts."
//   },
// ];

// function Capabilities() {
//   const { ref, isVisible } = useScrollAnimation();

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.15,
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
//       className="py-28 bg-gradient-to-b from-blue-50 via-blue-50/40 to-white"
//     >
//       <div className="max-w-7xl mx-auto px-6">
//         <motion.div
//           className="text-center mb-16"
//           initial={{ opacity: 0, y: 20 }}
//           animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//           transition={{ duration: 0.6 }}
//         >
//             <motion.p
//             className="uppercase tracking-[4px] text-blue-600 font-semibold"
//             initial={{ opacity: 0 }}
//             animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//           >
//             Built for faster growth
//           </motion.p>

//           <motion.h2
//             className="heading-font text-4xl mt-4"
//             initial={{ opacity: 0 }}
//             animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//           >
//             Core capabilities designed for modern teams.
//           </motion.h2>

//           <motion.p
//             className="mt-4 text-slate-600"
//             initial={{ opacity: 0 }}
//             animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             Accelerate training, hiring, and placement with intelligent experiences tuned for learners and employers.
//           </motion.p>
//         </motion.div>

//         <motion.div
//           className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
//           variants={containerVariants}
//           initial="hidden"
//           animate={isVisible ? "visible" : "hidden"}
//         >
//           {items.map((item) => {
//             const Icon = item.icon;

//             return (
//               <motion.div
//                 key={item.title}
//                 variants={itemVariants}
//                 className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100 card-hover hover:shadow-xl transition-shadow"
//                 whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
//               >
//                 <motion.div
//                   className="w-14 h-14 rounded-2xl bg-blue-100 flex justify-center items-center mb-5"
//                   initial={{ scale: 0, rotate: -45 }}
//                   animate={
//                     isVisible
//                       ? { scale: 1, rotate: 0 }
//                       : { scale: 0, rotate: -45 }
//                   }
//                   transition={{ duration: 0.5, type: "spring" }}
//                 >
//                   <Icon size={28} className="text-blue-700" />
//                 </motion.div>

//                 <motion.h3
//                   className="font-semibold text-lg"
//                   initial={{ opacity: 0 }}
//                   animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
//                   transition={{ duration: 0.6, delay: 0.3 }}
//                 >
//                   {item.title}
//                 </motion.h3>
                
//                 <p className="text-slate-500 leading-7">
//                   {item.description}
//                 </p>
//               </motion.div>
//             );
//           })}
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// export default Capabilities;








// import { motion, useScroll, useTransform, useInView } from "framer-motion";
// import { useRef, useState, useEffect } from "react";
// import { 
//     Activity, 
//     Zap, 
//     ShieldCheck, 
//     Globe, 
//     ArrowRight,
//     Users2,
//     Rocket,
//     TrendingUp,
//     Award,
//     Clock,
//     Briefcase,
//     CheckCircle,
//     Target,
//     Sparkles
// } from "lucide-react";

// const items = [
//     {
//         icon: Activity,
//         title: "Real-time Skill Tracking",
//         description: "Track learner progress and employer-fit metrics through connected performance dashboards.",
//         tag: "Analytics",
//         color: "from-blue-500 to-cyan-400",
//         bgColor: "bg-blue-50",
//         iconColor: "text-blue-600",
//         borderColor: "border-blue-200",
//         features: [
//             "Live performance dashboards",
//             "Employer-fit metrics tracking",
//             "Progress analytics",
//             "Skill gap identification"
//         ]
//     },
//     {
//         icon: Zap,
//         title: "Accelerated Hiring",
//         description: "Connect qualified candidates with employers using structured hiring pathways and screening support.",
//         tag: "Efficiency",
//         color: "from-purple-500 to-pink-400",
//         bgColor: "bg-purple-50",
//         iconColor: "text-purple-600",
//         borderColor: "border-purple-200",
//         features: [
//             "Structured hiring pathways",
//             "Automated screening",
//             "Candidate matching",
//             "Interview scheduling"
//         ]
//     },
//     {
//         icon: ShieldCheck,
//         title: "Validated Outcomes",
//         description: "We ensure every learner is ready for the workplace with employer-aligned validation and support plans.",
//         tag: "Quality",
//         color: "from-green-500 to-emerald-400",
//         bgColor: "bg-green-50",
//         iconColor: "text-green-600",
//         borderColor: "border-green-200",
//         features: [
//             "Employer-aligned validation",
//             "Workplace readiness assessment",
//             "Support plans",
//             "Outcome tracking"
//         ]
//     },
//     {
//         icon: Globe,
//         title: "Scalable Cohorts",
//         description: "Run flexible programs for distributed learners, instructor-led cohorts, and employer cohorts.",
//         tag: "Scale",
//         color: "from-orange-500 to-blue-400",
//         bgColor: "bg-orange-50",
//         iconColor: "text-orange-600",
//         borderColor: "border-orange-200",
//         features: [
//             "Distributed learning programs",
//             "Instructor-led cohorts",
//             "Employer cohorts",
//             "Flexible scaling"
//         ]
//     }
// ];

// function Capabilities() {
//     const sectionRef = useRef(null);
//     const [activeIndex, setActiveIndex] = useState(0);
//     const containerRef = useRef(null);
    
//     const { scrollYProgress } = useScroll({
//         target: sectionRef,
//         offset: ["start start", "end end"]
//     });

//     // Calculate which card should be active based on scroll position
//     const progress = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0, 1, 2, 3, 4]);
    
//     useEffect(() => {
//         const unsubscribe = progress.on("change", (value) => {
//             const index = Math.min(Math.floor(value), items.length - 1);
//             setActiveIndex(index);
//         });
//         return () => unsubscribe();
//     }, [progress]);

//     // Card container variants
//     const cardVariants = {
//         hidden: { opacity: 0, x: -50 },
//         visible: (index) => ({
//             opacity: activeIndex >= index ? 1 : 0.4,
//             x: 0,
//             scale: activeIndex === index ? 1 : 0.95,
//             transition: { duration: 0.5 }
//         })
//     };

//     // Content variants
//     const contentVariants = {
//         hidden: { opacity: 0, x: 50 },
//         visible: {
//             opacity: 1,
//             x: 0,
//             transition: { duration: 0.6, ease: "easeOut" }
//         },
//         exit: {
//             opacity: 0,
//             x: -30,
//             transition: { duration: 0.4 }
//         }
//     };

//     return (
//         <section
//             ref={sectionRef}
//             className="relative bg-gradient-to-b from-white via-blue-50/30 to-white min-h-[500vh]"
//             style={{ height: "500vh" }}
//         >
//             {/* Sticky container */}
//             <div className="sticky top-0 h-screen overflow-hidden">
              
//                 <div className="max-w-7xl mx-auto px-6 h-full flex items-center">
//                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full">
                        
//                         {/* Left Side - Cards */}
//                         <div className="flex flex-col justify-center space-y-4 py-8">
//                             {items.map((item, index) => {
//                                 const Icon = item.icon;
//                                 const isActive = activeIndex === index;
//                                 const isPast = activeIndex > index;

//                                 return (
//                                     <motion.div
//                                         key={item.title}
//                                         custom={index}
//                                         variants={cardVariants}
//                                         initial="hidden"
//                                         animate="visible"
//                                         className={`relative p-4 rounded-2xl border-2 transition-all duration-500 cursor-pointer ${
//                                             isActive 
//                                                 ? `${item.bgColor} ${item.borderColor} shadow-lg scale-100`
//                                                 : isPast
//                                                 ? 'bg-white border-slate-200 opacity-60 scale-95'
//                                                 : 'bg-white border-slate-200 opacity-40 scale-90'
//                                         }`}
//                                         onClick={() => {
//                                             // Scroll to position for this card
//                                             const targetProgress = index / (items.length - 1);
//                                             window.scrollTo({
//                                                 top: sectionRef.current.offsetTop + targetProgress * window.innerHeight * 2,
//                                                 behavior: 'smooth'
//                                             });
//                                         }}
//                                     >
//                                         <div className="flex items-center gap-4">
//                                             <div className={`p-3 rounded-xl ${isActive ? item.bgColor : 'bg-slate-100'}`}>
//                                                 <Icon className={`w-6 h-6 ${isActive ? item.iconColor : 'text-slate-400'}`} />
//                                             </div>
//                                             <div className="flex-1">
//                                                 <div className="flex items-center gap-3">
//                                                     <h3 className={`font-semibold text-lg ${isActive ? 'text-slate-900' : 'text-slate-600'}`}>
//                                                         {item.title}
//                                                     </h3>
//                                                     {isActive && (
//                                                         <motion.span
//                                                             initial={{ scale: 0 }}
//                                                             animate={{ scale: 1 }}
//                                                             className="text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700"
//                                                         >
//                                                             Active
//                                                         </motion.span>
//                                                     )}
//                                                 </div>
//                                                 <span className={`text-xs font-medium uppercase tracking-wider ${isActive ? item.iconColor : 'text-slate-400'}`}>
//                                                     {item.tag}
//                                                 </span>
//                                             </div>
//                                             {isActive && (
//                                                 <motion.div
//                                                     initial={{ scale: 0 }}
//                                                     animate={{ scale: 1 }}
//                                                     className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"
//                                                 />
//                                             )}
//                                         </div>

//                                         {/* Progress indicator */}
//                                         {isActive && (
//                                             <motion.div
//                                                 initial={{ scaleX: 0 }}
//                                                 animate={{ scaleX: 1 }}
//                                                 className={`absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl bg-gradient-to-r ${item.color}`}
//                                                 style={{ originX: 0 }}
//                                             />
//                                         )}
//                                     </motion.div>
//                                 );
//                             })}

//                             {/* Card counter */}
//                             <div className="flex items-center justify-center gap-2 mt-2">
//                                 {items.map((_, index) => (
//                                     <motion.div
//                                         key={index}
//                                         className={`h-1.5 rounded-full transition-all duration-500 ${
//                                             activeIndex >= index ? 'bg-blue-500 w-8' : 'bg-slate-300 w-4'
//                                         }`}
//                                     />
//                                 ))}
//                             </div>
//                         </div>

//                         {/* Right Side - Content */}
//                         <div className="flex items-center justify-center">
//                             <motion.div
//                                 key={activeIndex}
//                                 variants={contentVariants}
//                                 initial="hidden"
//                                 animate="visible"
//                                 exit="exit"
//                                 className="w-full max-w-lg"
//                             >
//                                 {items.map((item, index) => {
//                                     const Icon = item.icon;
//                                     if (activeIndex !== index) return null;

//                                     return (
//                                         <div className="bg-white rounded-3xl p-8 shadow-2xl border border-slate-100">
//                                             <div className="flex items-center gap-3 mb-4">
//                                                 <div className={`p-3 rounded-xl ${item.bgColor}`}>
//                                                     <Icon className={`w-8 h-8 ${item.iconColor}`} />
//                                                 </div>
//                                                 <span className={`text-xs font-medium px-3 py-1 rounded-full ${item.bgColor} ${item.iconColor}`}>
//                                                     {item.tag}
//                                                 </span>
//                                             </div>

//                                             <h2 className="text-3xl font-bold text-slate-900 mb-3">
//                                                 {item.title}
//                                             </h2>

//                                             <p className="text-slate-600 text-lg leading-relaxed mb-6">
//                                                 {item.description}
//                                             </p>

//                                             <div className="space-y-3 mb-6">
//                                                 {item.features.map((feature, idx) => (
//                                                     <motion.div
//                                                         key={idx}
//                                                         initial={{ opacity: 0, x: 20 }}
//                                                         animate={{ opacity: 1, x: 0 }}
//                                                         transition={{ delay: idx * 0.1 }}
//                                                         className="flex items-center gap-3"
//                                                     >
//                                                         <CheckCircle className={`w-5 h-5 ${item.iconColor}`} />
//                                                         <span className="text-slate-700">{feature}</span>
//                                                     </motion.div>
//                                                 ))}
//                                             </div>

//                                             <motion.a
//                                                 href="#contact"
//                                                 className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl font-semibold shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 transition-all duration-300 hover:scale-105"
//                                                 whileHover={{ scale: 1.05 }}
//                                             >
//                                                 Learn More
//                                                 <ArrowRight size={18} />
//                                             </motion.a>
//                                         </div>
//                                     );
//                                 })}
//                             </motion.div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default Capabilities;





// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef, useState, useEffect } from "react";
// import { 
//     Activity, 
//     Zap, 
//     ShieldCheck, 
//     Globe, 
//     ArrowRight,
//     CheckCircle
// } from "lucide-react";

// const items = [
//     {
//         icon: Activity,
//         title: "Real-time Skill Tracking",
//         description: "Track learner progress and employer-fit metrics through connected performance dashboards.",
//         tag: "Analytics",
//         bgColor: "bg-blue-50",
//         iconColor: "text-blue-600",
//         borderColor: "border-blue-200",
//         features: [
//             "Live performance dashboards",
//             "Employer-fit metrics tracking",
//             "Progress analytics",
//             "Skill gap identification"
//         ]
//     },
//     {
//         icon: Zap,
//         title: "Accelerated Hiring",
//         description: "Connect qualified candidates with employers using structured hiring pathways and screening support.",
//         tag: "Efficiency",
//         bgColor: "bg-blue-50",
//         iconColor: "text-blue-600",
//         borderColor: "border-blue-200",
//         features: [
//             "Structured hiring pathways",
//             "Automated screening",
//             "Candidate matching",
//             "Interview scheduling"
//         ]
//     },
//     {
//         icon: ShieldCheck,
//         title: "Validated Outcomes",
//         description: "We ensure every learner is ready for the workplace with employer-aligned validation and support plans.",
//         tag: "Quality",
//         bgColor: "bg-blue-50",
//         iconColor: "text-blue-600",
//         borderColor: "border-blue-200",
//         features: [
//             "Employer-aligned validation",
//             "Workplace readiness assessment",
//             "Support plans",
//             "Outcome tracking"
//         ]
//     },
//     {
//         icon: Globe,
//         title: "Scalable Cohorts",
//         description: "Run flexible programs for distributed learners, instructor-led cohorts, and employer cohorts.",
//         tag: "Scale",
//         bgColor: "bg-blue-50",
//         iconColor: "text-blue-600",
//         borderColor: "border-blue-200",
//         features: [
//             "Distributed learning programs",
//             "Instructor-led cohorts",
//             "Employer cohorts",
//             "Flexible scaling"
//         ]
//     }
// ];

// function Capabilities() {
//     const sectionRef = useRef(null);
//     const [activeIndex, setActiveIndex] = useState(0);
    
//     const { scrollYProgress } = useScroll({
//         target: sectionRef,
//         offset: ["start start", "end end"]
//     });

//     const progress = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0, 1, 2, 3, 4]);
    
//     useEffect(() => {
//         const unsubscribe = progress.on("change", (value) => {
//             const index = Math.min(Math.floor(value), items.length - 1);
//             setActiveIndex(index);
//         });
//         return () => unsubscribe();
//     }, [progress]);

//     const cardVariants = {
//         hidden: { opacity: 0, x: -30 },
//         visible: (index) => ({
//             opacity: activeIndex >= index ? 1 : 0.4,
//             x: 0,
//             scale: activeIndex === index ? 1 : 0.95,
//             transition: { duration: 0.4 }
//         })
//     };

//     const contentVariants = {
//         hidden: { opacity: 0, x: 30 },
//         visible: {
//             opacity: 1,
//             x: 0,
//             transition: { duration: 0.5, ease: "easeOut" }
//         },
//         exit: {
//             opacity: 0,
//             x: -20,
//             transition: { duration: 0.3 }
//         }
//     };

//     return (
//         <section
//             ref={sectionRef}
//             className="relative bg-white min-h-[500vh]"
//             style={{ height: "500vh" }}
//         >
//             {/* Sticky container */}
//             <div className="sticky top-0 h-screen overflow-hidden">
//                 <div className="max-w-7xl mx-auto px-6 h-full flex items-center">
//                     <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 w-full">
                        
//                         {/* Left Side - Cards - 30% */}
//                         <div className="lg:col-span-3 flex flex-col justify-center space-y-3 py-6">
//                             {items.map((item, index) => {
//                                 const Icon = item.icon;
//                                 const isActive = activeIndex === index;
//                                 const isPast = activeIndex > index;

//                                 return (
//                                     <motion.div
//                                         key={item.title}
//                                         custom={index}
//                                         variants={cardVariants}
//                                         initial="hidden"
//                                         animate="visible"
//                                         className={`relative p-3 rounded-xl border-2 transition-all duration-400 cursor-pointer ${
//                                             isActive 
//                                                 ? `${item.bgColor} ${item.borderColor} shadow-md scale-100`
//                                                 : isPast
//                                                 ? 'bg-white border-slate-200 opacity-50 scale-95'
//                                                 : 'bg-white border-slate-200 opacity-30 scale-90'
//                                         }`}
//                                         onClick={() => {
//                                             const targetProgress = index / (items.length - 1);
//                                             window.scrollTo({
//                                                 top: sectionRef.current.offsetTop + targetProgress * window.innerHeight * 2,
//                                                 behavior: 'smooth'
//                                             });
//                                         }}
//                                     >
//                                         <div className="flex items-center gap-3">
//                                             <div className={`p-2 rounded-lg ${isActive ? 'bg-blue-100' : 'bg-slate-100'}`}>
//                                                 <Icon className={`w-5 h-5 ${isActive ? 'text-blue-600' : 'text-slate-400'}`} />
//                                             </div>
//                                             <div className="flex-1 min-w-0">
//                                                 <div className="flex items-center gap-2">
//                                                     <h3 className={`font-medium text-sm truncate ${isActive ? 'text-slate-900' : 'text-slate-600'}`}>
//                                                         {item.title}
//                                                     </h3>
//                                                     {/* {isActive && (
//                                                         <motion.span
//                                                             initial={{ scale: 0 }}
//                                                             animate={{ scale: 1 }}
//                                                             className="text-[8px] px-1.5 py-0.5 rounded-full bg-blue-100 text-blue-700 whitespace-nowrap"
//                                                         >
//                                                             Active
//                                                         </motion.span>
//                                                     )} */}
//                                                 </div>
//                                                 <span className={`text-[9px] font-medium uppercase tracking-wider ${isActive ? 'text-blue-600' : 'text-slate-400'}`}>
//                                                     {item.tag}
//                                                 </span>
//                                             </div>
//                                             {isActive && (
//                                                 <motion.div
//                                                     initial={{ scale: 0 }}
//                                                     animate={{ scale: 1 }}
//                                                     className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"
//                                                 />
//                                             )}
//                                         </div>

//                                         {isActive && (
//                                             <motion.div
//                                                 initial={{ scaleX: 0 }}
//                                                 animate={{ scaleX: 1 }}
//                                                 className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-xl bg-gradient-to-r from-blue-600 to-blue-400"
//                                                 style={{ originX: 0 }}
//                                             />
//                                         )}
//                                     </motion.div>
//                                 );
//                             })}

//                             {/* Card counter */}
//                             <div className="flex items-center justify-center gap-1.5 mt-1">
//                                 {items.map((_, index) => (
//                                     <motion.div
//                                         key={index}
//                                         className={`h-1 rounded-full transition-all duration-400 ${
//                                             activeIndex >= index ? 'bg-blue-500 w-6' : 'bg-slate-300 w-3'
//                                         }`}
//                                     />
//                                 ))}
//                             </div>
//                         </div>

//                         {/* Right Side - Content - 70% */}
//                         <div className="lg:col-span-7 flex items-center justify-center">
//                             <motion.div
//                                 key={activeIndex}
//                                 variants={contentVariants}
//                                 initial="hidden"
//                                 animate="visible"
//                                 exit="exit"
//                                 className="w-full max-w-2xl"
//                             >
//                                 {items.map((item, index) => {
//                                     const Icon = item.icon;
//                                     if (activeIndex !== index) return null;

//                                     return (
//                                         <div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-100">
//                                             <div className="flex items-center gap-3 mb-3">
//                                                 <div className={`p-2.5 rounded-xl ${item.bgColor}`}>
//                                                     <Icon className={`w-7 h-7 ${item.iconColor}`} />
//                                                 </div>
//                                                 <span className={`text-[10px] font-medium px-2.5 py-1 rounded-full ${item.bgColor} ${item.iconColor}`}>
//                                                     {item.tag}
//                                                 </span>
//                                             </div>

//                                             <h2 className="text-2xl font-bold text-slate-900 mb-2">
//                                                 {item.title}
//                                             </h2>

//                                             <p className="text-slate-600 text-sm leading-relaxed mb-4">
//                                                 {item.description}
//                                             </p>

//                                             <div className="space-y-2 mb-5">
//                                                 {item.features.map((feature, idx) => (
//                                                     <motion.div
//                                                         key={idx}
//                                                         initial={{ opacity: 0, x: 15 }}
//                                                         animate={{ opacity: 1, x: 0 }}
//                                                         transition={{ delay: idx * 0.08 }}
//                                                         className="flex items-center gap-2.5"
//                                                     >
//                                                         <CheckCircle className={`w-4 h-4 ${item.iconColor}`} />
//                                                         <span className="text-slate-700 text-sm">{feature}</span>
//                                                     </motion.div>
//                                                 ))}
//                                             </div>

//                                             <motion.a
//                                                 href="#contact"
//                                                 className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg font-semibold shadow-md shadow-blue-600/30 hover:shadow-blue-600/50 transition-all duration-300 hover:scale-105 text-sm"
//                                                 whileHover={{ scale: 1.05 }}
//                                             >
//                                                 Learn More
//                                                 <ArrowRight size={16} />
//                                             </motion.a>
//                                         </div>
//                                     );
//                                 })}
//                             </motion.div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default Capabilities;









import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { 
    Activity, 
    Zap, 
    ShieldCheck, 
    Globe, 
    ArrowRight,
    CheckCircle,
    Sparkles
} from "lucide-react";

const items = [
    {
        icon: Activity,
        title: "Real-time Skill Tracking",
        description: "Track learner progress and employer-fit metrics through connected performance dashboards.",
        tag: "Analytics",
        bgColor: "bg-blue-50",
        iconColor: "text-blue-600",
        borderColor: "border-blue-200",
        features: [
            "Live performance dashboards",
            "Employer-fit metrics tracking",
            "Progress analytics",
            "Skill gap identification"
        ]
    },
    {
        icon: Zap,
        title: "Accelerated Hiring",
        description: "Connect qualified candidates with employers using structured hiring pathways and screening support.",
        tag: "Efficiency",
        bgColor: "bg-blue-50",
        iconColor: "text-blue-600",
        borderColor: "border-blue-200",
        features: [
            "Structured hiring pathways",
            "Automated screening",
            "Candidate matching",
            "Interview scheduling"
        ]
    },
    {
        icon: ShieldCheck,
        title: "Validated Outcomes",
        description: "We ensure every learner is ready for the workplace with employer-aligned validation and support plans.",
        tag: "Quality",
        bgColor: "bg-blue-50",
        iconColor: "text-blue-600",
        borderColor: "border-blue-200",
        features: [
            "Employer-aligned validation",
            "Workplace readiness assessment",
            "Support plans",
            "Outcome tracking"
        ]
    },
    {
        icon: Globe,
        title: "Scalable Cohorts",
        description: "Run flexible programs for distributed learners, instructor-led cohorts, and employer cohorts.",
        tag: "Scale",
        bgColor: "bg-blue-50",
        iconColor: "text-blue-600",
        borderColor: "border-blue-200",
        features: [
            "Distributed learning programs",
            "Instructor-led cohorts",
            "Employer cohorts",
            "Flexible scaling"
        ]
    }
];

function Capabilities() {
    const sectionRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"]
    });

    const progress = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0, 1, 2, 3, 4]);
    
    useEffect(() => {
        const unsubscribe = progress.on("change", (value) => {
            const index = Math.min(Math.floor(value), items.length - 1);
            setActiveIndex(index);
        });
        return () => unsubscribe();
    }, [progress]);

    const cardVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: (index) => ({
            opacity: activeIndex >= index ? 1 : 0.4,
            x: 0,
            scale: activeIndex === index ? 1 : 0.95,
            transition: { duration: 0.4 }
        })
    };

    const contentVariants = {
        hidden: { opacity: 0, x: 30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        },
        exit: {
            opacity: 0,
            x: -20,
            transition: { duration: 0.3 }
        }
    };

    return (
        <section
            ref={sectionRef}
            className="relative bg-white min-h-[500vh]"
            style={{ height: "500vh" }}
        >
            {/* Sticky container */}
            <div className="sticky top-0 h-screen overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
                    
                    {/* Heading Section - Added */}
                    <motion.div 
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <motion.div
                            className="inline-block mb-3"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.5, type: "spring" }}
                        >
                            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200">
                                <Sparkles size={14} className="text-blue-600" />
                                <span className="text-xs font-medium text-blue-700 uppercase tracking-wider">
                                    Built for faster growth
                                </span>
                            </span>
                        </motion.div>

                        <motion.h2 
                            className="heading-font text-3xl md:text-4xl font-bold text-slate-900 mb-3"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            Core capabilities designed for <span className="text-blue-600">modern teams.</span>
                        </motion.h2>

                        <motion.p 
                            className="text-slate-600 text-sm max-w-2xl mx-auto"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            Accelerate training, hiring, and placement with intelligent experiences tuned for learners and employers.
                        </motion.p>
                    </motion.div>

                    {/* Main Content - Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 w-full">
                        
                        {/* Left Side - Cards - 30% */}
                        <div className="lg:col-span-3 flex flex-col justify-center space-y-3 py-6">
                            {items.map((item, index) => {
                                const Icon = item.icon;
                                const isActive = activeIndex === index;
                                const isPast = activeIndex > index;

                                return (
                                    <motion.div
                                        key={item.title}
                                        custom={index}
                                        variants={cardVariants}
                                        initial="hidden"
                                        animate="visible"
                                        className={`relative p-3 rounded-xl border-2 transition-all duration-400 cursor-pointer ${
                                            isActive 
                                                ? `${item.bgColor} ${item.borderColor} shadow-md scale-100`
                                                : isPast
                                                ? 'bg-white border-slate-200 opacity-50 scale-95'
                                                : 'bg-white border-slate-200 opacity-30 scale-90'
                                        }`}
                                        onClick={() => {
                                            const targetProgress = index / (items.length - 1);
                                            window.scrollTo({
                                                top: sectionRef.current.offsetTop + targetProgress * window.innerHeight * 2,
                                                behavior: 'smooth'
                                            });
                                        }}
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className={`p-2 rounded-lg ${isActive ? 'bg-blue-100' : 'bg-slate-100'}`}>
                                                <Icon className={`w-5 h-5 ${isActive ? 'text-blue-600' : 'text-slate-400'}`} />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center gap-2">
                                                    <h3 className={`font-medium text-sm truncate ${isActive ? 'text-slate-900' : 'text-slate-600'}`}>
                                                        {item.title}
                                                    </h3>
                                                </div>
                                                <span className={`text-[9px] font-medium uppercase tracking-wider ${isActive ? 'text-blue-600' : 'text-slate-400'}`}>
                                                    {item.tag}
                                                </span>
                                            </div>
                                            {isActive && (
                                                <motion.div
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"
                                                />
                                            )}
                                        </div>

                                        {isActive && (
                                            <motion.div
                                                initial={{ scaleX: 0 }}
                                                animate={{ scaleX: 1 }}
                                                className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-xl bg-gradient-to-r from-blue-600 to-blue-400"
                                                style={{ originX: 0 }}
                                            />
                                        )}
                                    </motion.div>
                                );
                            })}

                            {/* Card counter */}
                            <div className="flex items-center justify-center gap-1.5 mt-1">
                                {items.map((_, index) => (
                                    <motion.div
                                        key={index}
                                        className={`h-1 rounded-full transition-all duration-400 ${
                                            activeIndex >= index ? 'bg-blue-500 w-6' : 'bg-slate-300 w-3'
                                        }`}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Right Side - Content - 70% */}
                        <div className="lg:col-span-7 flex items-center justify-center">
                            <motion.div
                                key={activeIndex}
                                variants={contentVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="w-full max-w-2xl"
                            >
                                {items.map((item, index) => {
                                    const Icon = item.icon;
                                    if (activeIndex !== index) return null;

                                    return (
                                        <div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-100">
                                            <div className="flex items-center gap-3 mb-3">
                                                <div className={`p-2.5 rounded-xl ${item.bgColor}`}>
                                                    <Icon className={`w-7 h-7 ${item.iconColor}`} />
                                                </div>
                                                <span className={`text-[10px] font-medium px-2.5 py-1 rounded-full ${item.bgColor} ${item.iconColor}`}>
                                                    {item.tag}
                                                </span>
                                            </div>

                                            <h2 className="text-2xl font-bold text-slate-900 mb-2">
                                                {item.title}
                                            </h2>

                                            <p className="text-slate-600 text-sm leading-relaxed mb-4">
                                                {item.description}
                                            </p>

                                            <div className="space-y-2 mb-5">
                                                {item.features.map((feature, idx) => (
                                                    <motion.div
                                                        key={idx}
                                                        initial={{ opacity: 0, x: 15 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: idx * 0.08 }}
                                                        className="flex items-center gap-2.5"
                                                    >
                                                        <CheckCircle className={`w-4 h-4 ${item.iconColor}`} />
                                                        <span className="text-slate-700 text-sm">{feature}</span>
                                                    </motion.div>
                                                ))}
                                            </div>

                                            <motion.a
                                                href="#contact"
                                                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg font-semibold shadow-md shadow-blue-600/30 hover:shadow-blue-600/50 transition-all duration-300 hover:scale-105 text-sm"
                                                whileHover={{ scale: 1.05 }}
                                            >
                                                Learn More
                                                <ArrowRight size={16} />
                                            </motion.a>
                                        </div>
                                    );
                                })}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Capabilities;