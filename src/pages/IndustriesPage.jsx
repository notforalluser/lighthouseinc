// import { motion } from "framer-motion";
// import { useScrollAnimation } from "../hooks/useScrollAnimation";
// import { 
//   Car, Landmark, Wifi, Zap, Gamepad2, 
//   Building2, Heart, ShieldCheck, Tv, 
//   ShoppingBag, Cpu, Plane 
// } from "lucide-react";

// const industries = [
//   { icon: Car, name: "Automotive", desc: "Support for teams navigating changing skill demands and hiring expectations." },
//   { icon: Landmark, name: "Banking & Financial Services", desc: "Specialized solutions for compliance-driven financial environments." },
//   { icon: Wifi, name: "Communications", desc: "Agile workforce strategies for the evolving communications sector." },
//   { icon: Zap, name: "Energy & Utilities", desc: "Sustainable talent solutions for the energy transition." },
//   { icon: Gamepad2, name: "Gaming", desc: "Creative and technical talent for the gaming industry." },
//   { icon: Building2, name: "Government", desc: "Public sector solutions built for mission and impact." },
//   { icon: Heart, name: "Healthcare", desc: "Human-centered solutions that honor mission, compliance, and care." },
//   { icon: ShieldCheck, name: "Insurance", desc: "Risk-focused talent and training for insurance companies." },
//   { icon: Tv, name: "Media", desc: "Content and digital talent for the media landscape." },
//   { icon: ShoppingBag, name: "Retail & E-commerce", desc: "Customer-facing and operations-focused team support." },
//   { icon: Cpu, name: "Technology", desc: "Agile workforce and learning strategies for fast-moving organizations." },
//   { icon: Plane, name: "Travel, Hospitality & Cargo", desc: "Service-oriented solutions for travel and logistics." },
// ];

// function IndustriesPage() {
//   const { ref, isVisible } = useScrollAnimation();

//   return (
//     <section ref={ref} className="min-h-screen py-20 relative overflow-hidden">
//       {/* Modern Animated Gradient Background */}
//       <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50/30">
//         <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-r from-blue-400/20 to-blue-600/10 blur-3xl animate-pulse" />
//         <div className="absolute bottom-[-30%] left-[-10%] w-[700px] h-[700px] rounded-full bg-gradient-to-r from-blue-300/10 to-blue-500/10 blur-3xl animate-pulse delay-1000" />
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-blue-200/10 to-blue-400/10 blur-3xl animate-pulse delay-500" />
//       </div>

//       <div className="max-w-7xl mx-auto px-6 relative z-10">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//           transition={{ duration: 0.6 }}
//           className="text-center max-w-4xl mx-auto mb-12"
//         >
//           <motion.span
//             className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full mb-3"
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
//             transition={{ duration: 0.5 }}
//           >
//             Industries We Serve
//           </motion.span>
//           <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
//             Tailored Strategies Across <span className="text-blue-600">Sectors</span>
//           </h1>
//           <p className="text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto">
//             We build solutions for the realities of each industry, from automotive and healthcare 
//             to technology and travel, so the experience feels relevant and practical.
//           </p>
//         </motion.div>

//         {/* Industry Highlights */}
//         <div className="grid md:grid-cols-3 gap-4 mb-12">
//           {[
//             { text: "Sector-specific insight and positioning" },
//             { text: "Flexible support for different hiring and training needs" },
//             { text: "Specialized expertise for high-growth environments" },
//           ].map((item, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 15 }}
//               animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
//               transition={{ duration: 0.5, delay: index * 0.08 }}
//               whileHover={{ y: -3 }}
//               className="group relative bg-white/70 backdrop-blur-sm border border-blue-100/50 rounded-xl p-4 transition-all duration-300"
//             >
//               <div className="absolute inset-0 rounded-xl bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//               <div className="relative z-10 flex items-center gap-3">
//                 <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
//                 <p className="text-slate-700 text-sm font-medium">{item.text}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Industries Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
//           {industries.map((industry, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 15 }}
//               animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
//               transition={{ duration: 0.4, delay: index * 0.04 }}
//               whileHover={{ y: -3 }}
//               className="group relative bg-white/80 backdrop-blur-sm border border-blue-100/50 rounded-xl p-5 transition-all duration-300"
//             >
//               <div className="absolute inset-0 rounded-xl bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//               <div className="relative z-10">
//                 <div className="p-2 bg-blue-600 rounded-lg w-fit mb-3 group-hover:scale-105 transition-transform duration-300">
//                   <industry.icon className="w-4 h-4 text-white" />
//                 </div>
//                 <h3 className="text-base font-semibold text-slate-900 mb-1">{industry.name}</h3>
//                 <p className="text-slate-600 text-sm leading-relaxed">{industry.desc}</p>
//                 <div className="mt-3 h-0.5 w-8 bg-blue-600 rounded-full group-hover:w-16 transition-all duration-300" />
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Partnerships Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 15 }}
//           animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
//           transition={{ duration: 0.5, delay: 0.3 }}
//           className="mt-12 bg-white/80 backdrop-blur-sm border border-blue-100/50 rounded-2xl p-6 md:p-8"
//         >
//           <h2 className="text-xl font-bold text-slate-900 mb-4 text-center">
//             Industry & Academia <span className="text-blue-600">Association</span>
//           </h2>
//           <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//             {[
//               "Parishkar College",
//               "Ambuja Foundation",
//               "R K Pansari Jan Seva Trust",
//             ].map((partner, index) => (
//               <div key={index} className="bg-blue-50/40 border border-blue-100/30 rounded-xl p-4 text-center">
//                 <p className="font-semibold text-slate-800 text-sm">{partner}</p>
//               </div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// export default IndustriesPage;





import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { 
  Car, Landmark, Wifi, Zap, Gamepad2, 
  Building2, Heart, ShieldCheck, Tv, 
  ShoppingBag, Cpu, Plane, ArrowRight,
  Globe, TrendingUp, Briefcase
} from "lucide-react";

const industries = [
  { icon: Car, name: "Automotive", desc: "Support for teams navigating changing skill demands and hiring expectations.", image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=400&h=300&fit=crop" },
  { icon: Landmark, name: "Banking & Financial Services", desc: "Specialized solutions for compliance-driven financial environments.", image: "https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?w=400&h=300&fit=crop" },
  { icon: Wifi, name: "Communications", desc: "Agile workforce strategies for the evolving communications sector.", image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=300&fit=crop" },
  { icon: Zap, name: "Energy & Utilities", desc: "Sustainable talent solutions for the energy transition.", image: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=400&h=300&fit=crop" },
  { icon: Gamepad2, name: "Gaming", desc: "Creative and technical talent for the gaming industry.", image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=400&h=300&fit=crop" },
  { icon: Building2, name: "Government", desc: "Public sector solutions built for mission and impact.", image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=300&fit=crop" },
  { icon: Heart, name: "Healthcare", desc: "Human-centered solutions that honor mission, compliance, and care.", image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop" },
  { icon: ShieldCheck, name: "Insurance", desc: "Risk-focused talent and training for insurance companies.", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop" },
  { icon: Tv, name: "Media", desc: "Content and digital talent for the media landscape.", image: "https://images.unsplash.com/photo-1495020689067-958852a7765e?w=400&h=300&fit=crop" },
  { icon: ShoppingBag, name: "Retail & E-commerce", desc: "Customer-facing and operations-focused team support.", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop" },
  { icon: Cpu, name: "Technology", desc: "Agile workforce and learning strategies for fast-moving organizations.", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop" },
  { icon: Plane, name: "Travel, Hospitality & Cargo", desc: "Service-oriented solutions for travel and logistics.", image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=400&h=300&fit=crop" },
];

function IndustriesPage() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="min-h-screen py-20 relative overflow-hidden">
      {/* Modern Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50/30">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-r from-blue-400/20 to-blue-600/10 blur-3xl animate-pulse" />
        <div className="absolute bottom-[-30%] left-[-10%] w-[700px] h-[700px] rounded-full bg-gradient-to-r from-blue-300/10 to-blue-500/10 blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-blue-200/10 to-blue-400/10 blur-3xl animate-pulse delay-500" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-12"
        >
          <motion.span
            className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full mb-3"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
          >
            Industries We Serve
          </motion.span>
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
            Tailored Strategies Across <span className="text-blue-600">Sectors</span>
          </h1>
          <p className="text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto">
            We build solutions for the realities of each industry, from automotive and healthcare 
            to technology and travel, so the experience feels relevant and practical.
          </p>
        </motion.div>

        {/* Hero Image Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative rounded-2xl overflow-hidden h-56 md:h-72 mb-12 group"
        >
          <img 
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&h=800&fit=crop"
            alt="Diverse industries"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 via-blue-900/40 to-transparent" /> */}
          <div className="absolute inset-0 flex items-center">
            <div className="px-6 md:px-10">
              <div className="flex items-center gap-2 mb-2">
                <Globe className="w-5 h-5 text-blue-300" />
                <span className="text-blue-200 text-xs font-semibold uppercase tracking-wider">Global Reach</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Transforming Industries <br />
                <span className="text-blue-300">Through Talent & Innovation</span>
              </h2>
              <p className="text-blue-100 text-sm max-w-xl">
                Specialized solutions across 12+ industries, helping organizations build future-ready teams.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Industry Highlights */}
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          {[
            { icon: TrendingUp, text: "Sector-specific insight and positioning" },
            { icon: Briefcase, text: "Flexible support for different hiring and training needs" },
            { icon: Globe, text: "Specialized expertise for high-growth environments" },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -3 }}
              className="group relative bg-white/70 backdrop-blur-sm border border-blue-100/50 rounded-xl p-4 transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-xl bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10 flex items-center gap-3">
                <div className="p-2 bg-blue-600 rounded-lg">
                  <item.icon className="w-3.5 h-3.5 text-white" />
                </div>
                <p className="text-slate-700 text-sm font-medium">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Industries Grid with Images */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              whileHover={{ y: -5 }}
              className="group relative bg-white/80 backdrop-blur-sm border border-blue-100/50 rounded-xl overflow-hidden transition-all duration-300"
            >
              <div className="relative h-32 overflow-hidden">
                <img 
                  src={industry.image}
                  alt={industry.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent" /> */}
                <div className="absolute bottom-2 left-3">
                  <div className="p-1.5 bg-blue-600 rounded-lg w-fit">
                    <industry.icon className="w-3.5 h-3.5 text-white" />
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-sm font-semibold text-slate-900 mb-1">{industry.name}</h3>
                <p className="text-slate-600 text-xs leading-relaxed">{industry.desc}</p>
                <div className="mt-2 h-0.5 w-8 bg-blue-600 rounded-full group-hover:w-12 transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Partnerships Section with Image */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 grid md:grid-cols-3 gap-6 bg-white/80 backdrop-blur-sm border border-blue-100/50 rounded-2xl p-6 md:p-8"
        >
          <div className="md:col-span-2">
            <h2 className="text-xl font-bold text-slate-900 mb-4">
              Industry & Academia <span className="text-blue-600">Association</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "Parishkar College",
                "Ambuja Foundation",
                "R K Pansari Jan Seva Trust",
              ].map((partner, index) => (
                <motion.div 
                  key={index} 
                  className="bg-blue-50/40 border border-blue-100/30 rounded-xl p-4 text-center"
                  whileHover={{ y: -2, scale: 1.02 }}
                >
                  <p className="font-semibold text-slate-800 text-sm">{partner}</p>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden h-40 md:h-auto group">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop"
              alt="Partnership"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent" /> */}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center p-8 rounded-2xl bg-blue-50/40 border border-blue-200/30"
        >
          <h3 className="text-xl font-bold text-slate-900 mb-2">
            Ready to Transform Your <span className="text-blue-600">Industry?</span>
          </h3>
          <p className="text-slate-600 text-sm max-w-2xl mx-auto mb-4">
            Let's build the workforce of tomorrow with solutions tailored to your sector.
          </p>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="px-6 py-2.5 bg-blue-600 text-white rounded-lg font-semibold text-sm transition-all inline-flex items-center gap-2"
          >
            Explore Our Solutions
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

export default IndustriesPage;