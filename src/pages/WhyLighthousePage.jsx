// import { motion } from "framer-motion";
// import { useScrollAnimation } from "../hooks/useScrollAnimation";
// import { Sparkles, Target, Users, Award, Zap, Shield, ChevronRight } from "lucide-react";

// function WhyLighthousePage() {
//     const { ref, isVisible } = useScrollAnimation();

//     return (
//         <section ref={ref} className="min-h-screen py-28 relative overflow-hidden">
//             {/* Modern Animated Gradient Background */}
//             <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50/30">
//                 {/* Animated Gradient Orbs - Only Blue */}
//                 <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-r from-blue-400/20 to-blue-600/10 blur-3xl animate-pulse" />
//                 <div className="absolute bottom-[-30%] left-[-10%] w-[700px] h-[700px] rounded-full bg-gradient-to-r from-blue-300/10 to-blue-500/10 blur-3xl animate-pulse delay-1000" />
//                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-blue-200/10 to-blue-400/10 blur-3xl animate-pulse delay-500" />
//             </div>

//             <div className="max-w-7xl mx-auto px-6 relative z-10">
//                 {/* Header with enhanced styling */}

//                 <motion.div
//                     className="text-center mb-16"
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//                     transition={{ duration: 0.6 }}
//                 >

//                     <motion.h1
//                         className="heading-font text-3xl md:text-4xl font-bold text-slate-900"
//                         initial={{ opacity: 0, y: 10 }}
//                         animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
//                         transition={{ duration: 0.5, delay: 0.05 }}
//                     >
//                         Built for Modern <span className="text-blue-600">Career Journeys</span>
//                     </motion.h1>

//                     <motion.p
//                         className="mt-5 max-w-2xl mx-auto text-slate-600"
//                         initial={{ opacity: 0 }}
//                         animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
//                         transition={{ duration: 0.6, delay: 0.3 }}
//                     >
//                         We help ambitious professionals and teams turn potential into momentum with training,
//                         hiring support, and strategic guidance tailored to real growth.
//                     </motion.p>
//                 </motion.div>

//                 {/* Highlights Grid with Glassmorphism */}
//                 <div className="grid md:grid-cols-3 gap-6 mb-20">
//                     {[
//                         { icon: Users, text: "Trusted by learners, employers, and training partners" },
//                         { icon: Target, text: "Outcome-focused guidance from discovery to placement" },
//                         { icon: Shield, text: "A calm, thoughtful experience built for confidence" },
//                     ].map((item, index) => (
//                         <motion.div
//                             key={index}
//                             initial={{ opacity: 0, y: 20 }}
//                             animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//                             transition={{ duration: 0.6, delay: index * 0.1 }}
//                             className="group relative bg-white/70 backdrop-blur-sm border border-white/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
//                         >
//                             <div className="absolute inset-0 rounded-2xl bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                             <div className="relative z-10 flex items-start gap-4">
//                                 <div className="p-3 bg-blue-600 rounded-xl shadow-lg shadow-blue-500/25 flex-shrink-0">
//                                     <item.icon className="w-6 h-6 text-white" />
//                                 </div>
//                                 <p className="text-slate-700 font-medium">{item.text}</p>
//                             </div>
//                         </motion.div>
//                     ))}
//                 </div>

//                 {/* Cards Grid with Enhanced Design */}
//                 <div className="grid md:grid-cols-2 gap-6">
//                     {[
//                         {
//                             icon: Sparkles,
//                             title: "Clarity first",
//                             text: "Every engagement begins with a clear plan, measurable goals, and a tailored path forward."
//                         },
//                         {
//                             icon: Users,
//                             title: "Human support",
//                             text: "You get a dedicated team that can guide learning, hiring, and growth milestones."
//                         },
//                         {
//                             icon: Zap,
//                             title: "Real-world design",
//                             text: "Programs and services are shaped around how careers and teams actually evolve."
//                         },
//                         {
//                             icon: Award,
//                             title: "Future-ready",
//                             text: "We focus on sustainable momentum, not temporary fixes."
//                         },
//                     ].map((card, index) => (
//                         <motion.div
//                             key={index}
//                             initial={{ opacity: 0, y: 20 }}
//                             animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//                             transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
//                             className="group relative bg-white/80 backdrop-blur-sm border border-white/50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
//                         >
//                             <div className="absolute inset-0 rounded-2xl bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                             <div className="relative z-10">
//                                 <div className="p-3 bg-blue-600 rounded-xl shadow-lg shadow-blue-500/25 w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
//                                     <card.icon className="w-6 h-6 text-white" />
//                                 </div>
//                                 <h3 className="text-xl font-semibold text-slate-900 mb-2">{card.title}</h3>
//                                 <p className="text-slate-600 leading-relaxed">{card.text}</p>

//                                 {/* Decorative line */}
//                                 <div className="mt-4 h-0.5 w-12 bg-blue-600 rounded-full group-hover:w-24 transition-all duration-300" />
//                             </div>
//                         </motion.div>
//                     ))}
//                 </div>

//                 {/* Bottom CTA Section */}
//                 <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//                     transition={{ duration: 0.6, delay: 0.7 }}
//                     className="mt-20 text-center p-12 rounded-3xl bg-blue-50/50 border border-blue-200/50 backdrop-blur-sm"
//                 >
//                     <h3 className="text-2xl font-bold text-slate-900 mb-4">
//                         Ready to Start Your <span className="text-blue-600">Journey?</span>
//                     </h3>
//                     <p className="text-slate-600 max-w-2xl mx-auto mb-6">
//                         Join thousands of professionals who have transformed their careers with Lighthouse.
//                     </p>
//                     <motion.button
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.95 }}
//                         className="px-8 py-3 bg-blue-600 text-white rounded-xl font-semibold shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all inline-flex items-center gap-2"
//                     >
//                         Get Started Today
//                         <ChevronRight className="w-4 h-4" />
//                     </motion.button>
//                 </motion.div>
//             </div>
//         </section>
//     );
// }

// export default WhyLighthousePage;



import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { Sparkles, Target, Users, Award, Zap, Shield, ChevronRight } from "lucide-react";

function WhyLighthousePage() {
    const { ref, isVisible } = useScrollAnimation();

    return (
        <section ref={ref} className="min-h-screen py-20 relative overflow-hidden">
            {/* Modern Animated Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50/30">
                {/* Animated Gradient Orbs - Only Blue */}
                <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-r from-blue-400/20 to-blue-600/10 blur-3xl animate-pulse" />
                <div className="absolute bottom-[-30%] left-[-10%] w-[700px] h-[700px] rounded-full bg-gradient-to-r from-blue-300/10 to-blue-500/10 blur-3xl animate-pulse delay-1000" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-blue-200/10 to-blue-400/10 blur-3xl animate-pulse delay-500" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <motion.div
                    className="text-center mb-12"
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

                    <motion.h1
                        className="heading-font text-3xl md:text-4xl font-bold text-slate-900"
                        initial={{ opacity: 0, y: 10 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                        transition={{ duration: 0.5, delay: 0.05 }}
                    >
                        Built for Modern <span className="text-blue-600">Career Journeys</span>
                    </motion.h1>

                    <motion.p
                        className="mt-3 max-w-2xl mx-auto text-slate-600 text-sm"
                        initial={{ opacity: 0 }}
                        animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        We help ambitious professionals and teams turn potential into momentum with training,
                        hiring support, and strategic guidance tailored to real growth.
                    </motion.p>
                </motion.div>

                {/* Highlights Grid */}
                <div className="grid md:grid-cols-3 gap-4 mb-12">
                    {[
                        { icon: Users, text: "Trusted by learners, employers, and training partners" },
                        { icon: Target, text: "Outcome-focused guidance from discovery to placement" },
                        { icon: Shield, text: "A calm, thoughtful experience built for confidence" },
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

                {/* Cards Grid */}
                <div className="grid md:grid-cols-2 gap-4">
                    {[
                        {
                            icon: Sparkles,
                            title: "Clarity first",
                            text: "Every engagement begins with a clear plan, measurable goals, and a tailored path forward."
                        },
                        {
                            icon: Users,
                            title: "Human support",
                            text: "You get a dedicated team that can guide learning, hiring, and growth milestones."
                        },
                        {
                            icon: Zap,
                            title: "Real-world design",
                            text: "Programs and services are shaped around how careers and teams actually evolve."
                        },
                        {
                            icon: Award,
                            title: "Future-ready",
                            text: "We focus on sustainable momentum, not temporary fixes."
                        },
                    ].map((card, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 15 }}
                            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                            transition={{ duration: 0.5, delay: 0.2 + index * 0.08 }}
                            whileHover={{ y: -3 }}
                            className="group relative bg-white/80 backdrop-blur-sm border border-blue-100/50 rounded-xl p-5 transition-all duration-300"
                        >
                            <div className="absolute inset-0 rounded-xl bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="relative z-10">
                                <div className="p-2 bg-blue-600 rounded-lg w-fit mb-3 group-hover:scale-105 transition-transform duration-300">
                                    <card.icon className="w-4 h-4 text-white" />
                                </div>
                                <h3 className="text-base font-semibold text-slate-900 mb-1">{card.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">{card.text}</p>
                                <div className="mt-3 h-0.5 w-8 bg-blue-600 rounded-full group-hover:w-16 transition-all duration-300" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="mt-12 text-center p-8 rounded-2xl bg-blue-50/40 border border-blue-200/30"
                >
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                        Ready to Start Your <span className="text-blue-600">Journey?</span>
                    </h3>
                    <p className="text-slate-600 text-sm max-w-2xl mx-auto mb-4">
                        Join thousands of professionals who have transformed their careers with Lighthouse.
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="px-6 py-2.5 bg-blue-600 text-white rounded-lg font-semibold text-sm transition-all inline-flex items-center gap-2"
                    >
                        Get Started Today
                        <ChevronRight className="w-4 h-4" />
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
}

export default WhyLighthousePage;