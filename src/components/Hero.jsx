// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";
// import {
//   ArrowRight,
//   CheckCircle,
//   Play,
//   Users,
//   Award,
//   Zap,
//   Sparkles,
//   TrendingUp,
//   Briefcase,
//   GraduationCap,
//   Star,
//   ChevronDown,
// } from "lucide-react";

// const heroImages = [
//   "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=80",
//   "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1400&q=80",
//   "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80",
//   "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1400&q=80",
// ];

// const stats = [
//   { value: "15K+", label: "Learners Trained", icon: GraduationCap },
//   { value: "92%", label: "Placement Rate", icon: TrendingUp },
//   { value: "20+", label: "Partner Companies", icon: Briefcase },
// ];

// const features = [
//   "Industry-aligned curriculum",
//   "Expert-led training",
//   "Placement assistance",
//   "Real-world projects",
// ];

// function Hero() {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     const interval = window.setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % heroImages.length);
//     }, 6000);

//     return () => window.clearInterval(interval);
//   }, []);

//   return (
//     <header
//       id="welcome"
//       className="relative min-h-screen flex items-center bg-slate-950 text-white overflow-hidden font-sans"
//     >
//       <div className="absolute inset-0 overflow-hidden">
//         {heroImages.map((src, index) => (
//           <img
//             key={src}
//             src={src}
//             alt={`Hero slide ${index + 1}`}
//             className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
//               index === currentSlide ? "opacity-100" : "opacity-0"
//             }`}
//           />
//         ))}
//         <div className="absolute inset-0 bg-slate-950/70" />
//       </div>
//       <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-20 lg:pt-32 w-full">
//         <div className="grid lg:grid-cols-2 gap-6 items-center">
//           {/* Left Content */}
//           <div className="space-y-6 max-w-2xl">
//             {/* Main Heading */}
//             <motion.h1
//               initial={{ opacity: 0, y: 40 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, ease: "easeOut" }}
//               className="text-5xl sm:text-6xl lg:text-7xl xl:text-[72px] font-bold leading-[1.05] tracking-tight"
//             >
//               <span className="block text-white">
//                 Empowering talent with
//               </span>
//               <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-200">
//                 career ready skills
//               </span>
//             </motion.h1>

//             {/* Description */}
//             <motion.p
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.1 }}
//               className="text-base sm:text-lg text-slate-200 max-w-[560px] leading-relaxed"
//             >
//               Training, placement, and employer solutions that transform raw potential into industry-ready professionals.
//             </motion.p>

//             {/* Interactive Learn More Button */}
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               className="flex flex-wrap items-center gap-4"
//             >
//               <motion.a
//                 href="#about"
//                 className="group relative overflow-hidden inline-flex items-center gap-3 bg-white/10 text-white border border-white/20 px-6 py-3 rounded-2xl font-semibold text-base shadow-lg shadow-slate-950/20"
//                 whileHover={{ scale: 1.03 }}
//                 whileTap={{ scale: 0.98 }}
//               >
//                 <span className="relative z-10 flex items-center gap-2">
//                   Learn More
//                   <ArrowRight
//                     className="group-hover:translate-x-1 transition-transform"
//                     size={18}
//                   />
//                 </span>
//                 <motion.div
//                   className="absolute inset-0 bg-white/10"
//                   initial={{ opacity: 0 }}
//                   whileHover={{ opacity: 1 }}
//                   transition={{ duration: 0.3 }}
//                 />
//               </motion.a>
//             </motion.div>

//             {/* Interactive Stats Row */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.4 }}
//               className="flex flex-wrap gap-8 pt-4"
//             >
//               {stats.map((stat, index) => {
//                 const Icon = stat.icon;
//                 return (
//                   <motion.div
//                     key={index}
//                     className="flex items-center gap-3"
//                     whileHover={{ y: -2 }}
//                   >
//                     <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center">
//                       <Icon className="text-blue-600" size={20} />
//                     </div>
//                     <div>
//                       <motion.div
//                         className="text-xl font-bold text-black"
//                         whileHover={{ scale: 1.05 }}
//                       >
//                         {stat.value}
//                       </motion.div>
//                       <div className="text-xs text-gray-500">{stat.label}</div>
//                     </div>
//                   </motion.div>
//                 );
//               })}
//             </motion.div>

//             {/* Trust Signals */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.5 }}
//               className="flex items-center gap-6 pt-2"
//             >
//               <div className="flex -space-x-2">
//                 {[1, 2, 3, 4].map((i) => (
//                   <motion.div
//                     key={i}
//                     className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center text-xs font-medium text-gray-700 shadow-sm"
//                     whileHover={{ scale: 1.1, y: -3 }}
//                     transition={{ type: "spring", stiffness: 300 }}
//                   >
//                     {String.fromCharCode(64 + i)}
//                   </motion.div>
//                 ))}
//                 <motion.div
//                   className="w-10 h-10 rounded-full border-2 border-white bg-blue-600 flex items-center justify-center text-xs font-medium text-white shadow-sm"
//                   whileHover={{ scale: 1.1, y: -3 }}
//                 >
//                   +
//                 </motion.div>
//               </div>
//               <div>
//                 <div className="flex items-center gap-1">
//                   {[1, 2, 3, 4, 5].map((i) => (
//                     <motion.span
//                       key={i}
//                       initial={{ opacity: 0, scale: 0 }}
//                       animate={{ opacity: 1, scale: 1 }}
//                       transition={{ delay: 0.6 + i * 0.05 }}
//                       className="text-blue-500 text-sm"
//                     >
//                       ★
//                     </motion.span>
//                   ))}
//                   <span className="text-black font-medium ml-2">4.9</span>
//                 </div>
//                 <p className="text-xs text-gray-500">
//                   Trusted by 500+ companies
//                 </p>
//               </div>
//             </motion.div>
//           </div>

//           {/* Right Side - Image with Interactive Elements */}
//           <div className="relative lg:block">
//             {/* Main Image Card */}
//             <motion.div
//               initial={{ opacity: 0, scale: 0.9, y: 30 }}
//               animate={{ opacity: 1, scale: 1, y: 0 }}
//               transition={{
//                 duration: 0.8,
//                 delay: 0.3,
//                 type: "spring",
//                 stiffness: 100,
//               }}
//               className="relative"
//             >
//               {/* Animated rotating gradient ring - Red only */}
//               <motion.div
//                 className="absolute -inset-8 rounded-full border-2 border-blue-200/30"
//                 animate={{ rotate: 360 }}
//                 transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
//               />
//               <motion.div
//                 className="absolute -inset-6 rounded-full border-2 border-blue-100/20"
//                 animate={{ rotate: -360 }}
//                 transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//               />

//               <div className="relative bg-white/90 backdrop-blur-sm border border-gray-200 rounded-3xl overflow-hidden shadow-2xl">
//                 {/* Image */}
//                 <img
//                   src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop"
//                   alt="Team collaboration"
//                   className="w-full h-[350px] object-cover"
//                 />

//                 {/* Gradient Overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1.2 }}
//         className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 -bottom-8"
//       >
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5, delay: 0.7 }}
//           style={{
//             borderTop: "1px solid #1E1E1E",
//             overflow: "hidden",
//             position: "relative",
//             padding: "14px 0",
//           }}
//         >
//           <motion.div
//             animate={{ x: ["0%", "-50%"] }}
//             transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
//             style={{
//               display: "flex",
//               gap: "0",
//               whiteSpace: "nowrap",
//             }}
//           >
//             {[...Array(2)].map((_, di) => (
//               <div key={di} style={{ display: "flex", gap: "0" }}>
//                 {[
//                   "Industry-aligned curriculum",
//                   "Expert-led training",
//                   "Real-world projects",
//                   "Placement support",
//                   "Hiring solutions",
//                   "Career mentorship",
//                   "Live sessions",
//                   "Resume reviews",
//                 ].map((item, i) => (
//                   <span
//                     key={i}
//                     style={{
//                       display: "inline-flex",
//                       alignItems: "center",
//                       gap: "20px",
//                       padding: "0 28px",
//                       color: "#444",
//                       fontSize: "12px",
//                       letterSpacing: "0.06em",
//                       textTransform: "uppercase",
//                     }}
//                   >
//                     {item}
//                     <span
//                       style={{
//                         width: "4px",
//                         height: "4px",
//                         borderRadius: "50%",
//                         background: "#B8FF47",
//                         display: "inline-block",
//                         flexShrink: 0,
//                       }}
//                     />
//                   </span>
//                 ))}
//               </div>
//             ))}
//           </motion.div>
//         </motion.div>

//         <span className="text-[10px] uppercase tracking-[4px] text-zinc-500 font-mono -mt-2">
//           Scroll to explore
//         </span>
//         <motion.div
//           animate={{ y: [0, 10, 0] }}
//           transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
//         >
//           <ChevronDown size={20} className="text-zinc-500" />
//         </motion.div>
//       </motion.div>
//     </header>
//   );
// }

// export default Hero;



import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";

const heroImages = [
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1400&q=80",
];

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 6000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <header
      id="welcome"
      className="relative min-h-screen flex items-center justify-center bg-slate-950 text-white overflow-hidden font-sans"
    >
      {/* Background Slideshow */}
      <div className="absolute inset-0 overflow-hidden">
        {heroImages.map((src, index) => (
          <img
            key={src}
            src={src}
            alt={`Hero slide ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-slate-950/70" />
      </div>

      {/* Animated Rotating Gradient Rings - Behind the text */}
      {/* <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-[600px] h-[600px] md:w-[800px] md:h-[800px]">
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-blue-400/20"
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute inset-8 rounded-full border-2 border-cyan-400/15"
            animate={{ rotate: -360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute inset-16 rounded-full border-2 border-sky-400/10"
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          />
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/5 via-cyan-400/5 to-sky-500/5 blur-3xl" />
        </div>
      </div> */}

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl sm:text-6xl lg:text-7xl xl:text-[72px] font-bold leading-[1.05] tracking-tight"
        >
          <span className="block text-white">
            Empowering talent with
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-200">
            career ready skills
          </span>
        </motion.h1>

        {/* Let's Talk Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8"
        >
          <motion.a
            href="#contact"
            className="group relative overflow-hidden inline-flex items-center gap-3 bg-white/10 text-white border border-white/20 px-8 py-1 rounded-2xl font-semibold text-lg shadow-lg shadow-slate-950/20 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              Let's Talk
              <ArrowRight
                className="group-hover:translate-x-1 transition-transform"
                size={20}
              />
            </span>
            <motion.div
              className="absolute inset-0 bg-white/10"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 bottom-8"
      >
        <span className="text-[10px] uppercase tracking-[4px] text-zinc-400 font-mono">
          Scroll to explore
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={20} className="text-zinc-400" />
        </motion.div>
      </motion.div>
    </header>
  );
}

export default Hero;