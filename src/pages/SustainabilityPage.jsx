// import { motion } from "framer-motion";
// import { useScrollAnimation } from "../hooks/useScrollAnimation";
// import { Leaf, Heart, Globe, Shield, Recycle, Users, Handshake } from "lucide-react";

// function SustainabilityPage() {
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
//             Sustainability
//           </motion.span>
//           <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
//             Responsible Growth With <span className="text-blue-600">Lasting Impact</span>
//           </h1>
//           <p className="text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto">
//             Sustainability is part of how we build meaningful programs, partnerships, and 
//             opportunities that continue to create value over time.
//           </p>
//         </motion.div>

//         {/* Highlights */}
//         <div className="grid md:grid-cols-3 gap-4 mb-12">
//           {[
//             { icon: Globe, text: "A long-term view of growth and impact" },
//             { icon: Heart, text: "Practices that respect people, purpose, and community" },
//             { icon: Recycle, text: "Solutions that are resilient and adaptable" },
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
//               <div className="relative z-10 flex items-start gap-3">
//                 <div className="p-2 bg-blue-600 rounded-lg flex-shrink-0">
//                   <item.icon className="w-4 h-4 text-white" />
//                 </div>
//                 <p className="text-slate-700 text-sm font-medium">{item.text}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Cards */}
//         <div className="grid md:grid-cols-2 gap-4 mb-12">
//           {[
//             { icon: Handshake, title: "Responsible partnerships", text: "We choose collaborations that reflect strong values and shared purpose." },
//             { icon: Users, title: "Community-minded growth", text: "Our work is shaped to create lasting opportunity for people and organizations alike." },
//             { icon: Shield, title: "Future resilience", text: "We focus on building systems and relationships that stand the test of time." },
//             { icon: Leaf, title: "Ethical progress", text: "Every engagement is guided by care, integrity, and thoughtful execution." },
//           ].map((card, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 15 }}
//               animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
//               transition={{ duration: 0.5, delay: 0.2 + index * 0.08 }}
//               whileHover={{ y: -3 }}
//               className="group relative bg-white/80 backdrop-blur-sm border border-blue-100/50 rounded-xl p-5 transition-all duration-300"
//             >
//               <div className="absolute inset-0 rounded-xl bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//               <div className="relative z-10">
//                 <div className="p-2 bg-blue-600 rounded-lg w-fit mb-3 group-hover:scale-105 transition-transform duration-300">
//                   <card.icon className="w-4 h-4 text-white" />
//                 </div>
//                 <h3 className="text-base font-semibold text-slate-900 mb-1">{card.title}</h3>
//                 <p className="text-slate-600 text-sm leading-relaxed">{card.text}</p>
//                 <div className="mt-3 h-0.5 w-8 bg-blue-600 rounded-full group-hover:w-16 transition-all duration-300" />
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Responsibility Statement */}
//         <motion.div
//           initial={{ opacity: 0, y: 15 }}
//           animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
//           transition={{ duration: 0.5, delay: 0.5 }}
//           className="bg-blue-50/40 border border-blue-200/30 rounded-2xl p-8 text-center"
//         >
//           <h2 className="text-xl font-bold text-slate-900 mb-2">Our Responsibility</h2>
//           <p className="text-sm text-slate-600 max-w-3xl mx-auto">
//             An ethical business maximizing value for all stakeholders, committed to 
//             creating lasting positive impact through thoughtful partnerships and practices.
//           </p>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// export default SustainabilityPage;






import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { Leaf, Heart, Globe, Shield, Recycle, Users, Handshake, ArrowRight, TreePine, Droplets } from "lucide-react";

function SustainabilityPage() {
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
            Sustainability
          </motion.span>
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
            Responsible Growth With <span className="text-blue-600">Lasting Impact</span>
          </h1>
          <p className="text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Sustainability is part of how we build meaningful programs, partnerships, and 
            opportunities that continue to create value over time.
          </p>
        </motion.div>

        {/* Hero Image Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative rounded-2xl overflow-hidden h-64 md:h-80 mb-12 group"
        >
          <img 
            src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1200&h=800&fit=crop"
            alt="Sustainability and green future"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 via-blue-900/40 to-transparent" /> */}
          <div className="absolute inset-0 flex items-center">
            <div className="px-6 md:px-10">
              <div className="flex items-center gap-2 mb-2">
                <Leaf className="w-5 h-5 text-green-300" />
                <span className="text-green-200 text-xs font-semibold uppercase tracking-wider">Sustainable Future</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Building a Greener <br />
                <span className="text-green-300">Tomorrow</span>
              </h2>
              <p className="text-blue-100 text-sm max-w-xl">
                Committed to sustainable practices that create lasting value for people, planet, and communities.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Highlights */}
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          {[
            { icon: Globe, text: "A long-term view of growth and impact" },
            { icon: Heart, text: "Practices that respect people, purpose, and community" },
            { icon: Recycle, text: "Solutions that are resilient and adaptable" },
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
              <div className="relative z-10 flex items-start gap-3">
                <div className="p-2 bg-blue-600 rounded-lg flex-shrink-0">
                  <item.icon className="w-4 h-4 text-white" />
                </div>
                <p className="text-slate-700 text-sm font-medium">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Cards with Images */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {[
            { 
              icon: Handshake, 
              title: "Responsible partnerships", 
              text: "We choose collaborations that reflect strong values and shared purpose.",
              image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=300&fit=crop"
            },
            { 
              icon: Users, 
              title: "Community-minded growth", 
              text: "Our work is shaped to create lasting opportunity for people and organizations alike.",
              image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop"
            },
            { 
              icon: Shield, 
              title: "Future resilience", 
              text: "We focus on building systems and relationships that stand the test of time.",
              image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop"
            },
            { 
              icon: Leaf, 
              title: "Ethical progress", 
              text: "Every engagement is guided by care, integrity, and thoughtful execution.",
              image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=300&fit=crop"
            },
          ].map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.08 }}
              whileHover={{ y: -5 }}
              className="group relative bg-white/80 backdrop-blur-sm border border-blue-100/50 rounded-xl overflow-hidden transition-all duration-300"
            >
              <div className="relative h-40 overflow-hidden">
                <img 
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent" /> */}
                <div className="absolute bottom-3 left-3">
                  <div className="p-2 bg-blue-600 rounded-lg w-fit">
                    <card.icon className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-base font-semibold text-slate-900 mb-1">{card.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{card.text}</p>
                <div className="mt-3 h-0.5 w-8 bg-blue-600 rounded-full group-hover:w-16 transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Sustainability Stats */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {[
            { icon: TreePine, number: "500+", label: "Trees Planted" },
            { icon: Users, number: "10K+", label: "Lives Impacted" },
            { icon: Recycle, number: "85%", label: "Waste Reduction" },
            { icon: Heart, number: "100+", label: "Community Programs" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -3 }}
              className="bg-white/80 backdrop-blur-sm border border-blue-100/50 rounded-xl p-5 text-center"
            >
              <div className="flex justify-center mb-2">
                <div className="p-2 bg-blue-600 rounded-lg">
                  <stat.icon className="w-4 h-4 text-white" />
                </div>
              </div>
              <p className="text-2xl font-bold text-blue-600">{stat.number}</p>
              <p className="text-xs text-slate-600 mt-0.5">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Responsibility Statement with Image */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="grid md:grid-cols-5 gap-6 bg-white/80 backdrop-blur-sm border border-blue-100/50 rounded-2xl p-6 md:p-8"
        >
          <div className="md:col-span-3">
            <div className="flex items-center gap-2 mb-3">
              <div className="p-2 bg-blue-600 rounded-lg">
                <Shield className="w-4 h-4 text-white" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">Our Responsibility</h2>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              An ethical business maximizing value for all stakeholders, committed to 
              creating lasting positive impact through thoughtful partnerships and practices.
            </p>
            <div className="flex flex-wrap gap-3 mt-4">
              <div className="flex items-center gap-2 bg-blue-50 rounded-full px-3 py-1.5">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                <span className="text-xs text-slate-700">Ethical Business</span>
              </div>
              <div className="flex items-center gap-2 bg-blue-50 rounded-full px-3 py-1.5">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                <span className="text-xs text-slate-700">Stakeholder Value</span>
              </div>
              <div className="flex items-center gap-2 bg-blue-50 rounded-full px-3 py-1.5">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                <span className="text-xs text-slate-700">Positive Impact</span>
              </div>
            </div>
          </div>
          <div className="md:col-span-2 relative rounded-xl overflow-hidden h-40 md:h-auto group">
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop"
              alt="Corporate responsibility"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent" />
          </div>
        </motion.div>

        {/* Bottom CTA */}
        {/* <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center p-8 rounded-2xl bg-blue-50/40 border border-blue-200/30"
        >
          <h3 className="text-xl font-bold text-slate-900 mb-2">
            Join Us in Building a <span className="text-blue-600">Sustainable Future</span>
          </h3>
          <p className="text-slate-600 text-sm max-w-2xl mx-auto mb-4">
            Together, we can create lasting impact through responsible practices and meaningful partnerships.
          </p>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="px-6 py-2.5 bg-blue-600 text-white rounded-lg font-semibold text-sm transition-all inline-flex items-center gap-2"
          >
            Learn More About Our Commitment
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div> */}
      </div>
    </section>
  );
}

export default SustainabilityPage;