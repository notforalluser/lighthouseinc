// import { motion } from "framer-motion";
// import { useScrollAnimation } from "../hooks/useScrollAnimation";
// import { Briefcase, Users, Target, Award, Sparkles, Shield, ArrowRight, MapPin, Clock } from "lucide-react";

// function CareersPage() {
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
//             Careers
//           </motion.span>
//           <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
//             Your Next Job Is <span className="text-blue-600">Just a Few Clicks Away</span>
//           </h1>
//           <p className="text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto">
//             Join us in our mission to empower learners with real-world skills and create 
//             meaningful career opportunities.
//           </p>
//         </motion.div>

//         {/* Hero Image Banner */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//           transition={{ duration: 0.6, delay: 0.1 }}
//           className="relative rounded-2xl overflow-hidden h-64 md:h-80 mb-12 group"
//         >
//           <img 
//             src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=800&fit=crop"
//             alt="Career opportunities"
//             className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//           />
//           <div className="absolute inset-0 flex items-center">
//             <div className="px-6 md:px-10">
//               <div className="flex items-center gap-2 mb-2">
//                 <Users className="w-5 h-5 text-blue-300" />
//                 <span className="text-blue-200 text-xs font-semibold uppercase tracking-wider">Join Our Team</span>
//               </div>
//               <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
//                 Build Your Career With <br />
//                 <span className="text-blue-300">Purpose & Impact</span>
//               </h2>
//               <p className="text-blue-100 text-sm max-w-xl">
//                 Work with a team that's passionate about transforming lives through education and opportunity.
//               </p>
//             </div>
//           </div>
//         </motion.div>

//         {/* Values */}
//         <div className="grid md:grid-cols-2 gap-4 mb-12">
//           <motion.div
//             initial={{ opacity: 0, x: -15 }}
//             animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -15 }}
//             transition={{ duration: 0.5 }}
//             whileHover={{ y: -3 }}
//             className="bg-white/80 backdrop-blur-sm border border-blue-100/50 rounded-2xl p-6 transition-all duration-300"
//           >
//             <div className="flex items-center gap-2 mb-3">
//               <div className="p-2 bg-blue-600 rounded-lg">
//                 <Sparkles className="w-4 h-4 text-white" />
//               </div>
//               <h2 className="text-xl font-bold text-slate-900">Our Value & Philosophy</h2>
//             </div>
//             <p className="text-sm text-slate-600 leading-relaxed">
//               To empower learners with real-world skills and provide employers access to talent 
//               built for today's digital workforce.
//             </p>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 15 }}
//             animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 15 }}
//             transition={{ duration: 0.5, delay: 0.1 }}
//             whileHover={{ y: -3 }}
//             className="bg-white/80 backdrop-blur-sm border border-blue-100/50 rounded-2xl p-6 transition-all duration-300"
//           >
//             <div className="flex items-center gap-2 mb-3">
//               <div className="p-2 bg-blue-600 rounded-lg">
//                 <Shield className="w-4 h-4 text-white" />
//               </div>
//               <h2 className="text-xl font-bold text-slate-900">Choose Lighthouse</h2>
//             </div>
//             <p className="text-sm text-slate-600 leading-relaxed">
//               A future where skill, opportunity and hiring are connected through learning 
//               experiences that work for every learner and employer.
//             </p>
//           </motion.div>
//         </div>

//         {/* Vision & Mission with Image */}
//         <motion.div
//           initial={{ opacity: 0, y: 15 }}
//           animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//           className="grid md:grid-cols-3 gap-6 mb-12"
//         >
//           <div className="md:col-span-2 space-y-4">
//             <div className="bg-blue-50/40 border border-blue-100/30 rounded-xl p-5">
//               <h3 className="text-lg font-bold text-slate-900 mb-2">Our Vision</h3>
//               <p className="text-sm text-slate-600">
//                 A future where skill, opportunity and hiring are connected through learning 
//                 experiences that work for every learner and employer.
//               </p>
//             </div>
//             <div className="bg-blue-50/40 border border-blue-100/30 rounded-xl p-5">
//               <h3 className="text-lg font-bold text-slate-900 mb-2">Our Mission</h3>
//               <p className="text-sm text-slate-600">
//                 To empower learners with real-world skills and provide employers access to 
//                 talent built for today's digital workforce.
//               </p>
//             </div>
//           </div>
//           <div className="relative rounded-xl overflow-hidden h-40 md:h-auto group">
//             <img 
//               src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop"
//               alt="Mission"
//               className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent" />
//           </div>
//         </motion.div>

//         {/* Job Opportunities with Icons */}
//         <motion.div
//           initial={{ opacity: 0, y: 15 }}
//           animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
//           transition={{ duration: 0.5, delay: 0.3 }}
//           className="bg-white/80 backdrop-blur-sm border border-blue-100/50 rounded-2xl p-6 md:p-8"
//         >
//           <div className="flex items-center gap-2 mb-4">
//             <div className="p-2 bg-blue-600 rounded-lg">
//               <Briefcase className="w-4 h-4 text-white" />
//             </div>
//             <h2 className="text-xl font-bold text-slate-900">Job Opportunities</h2>
//             <span className="ml-auto text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">4 Open Positions</span>
//           </div>
//           <div className="grid md:grid-cols-2 gap-3">
//             {[
//               { title: "Training & Development Specialist", type: "Full-time", location: "Remote" },
//               { title: "Career Counselor", type: "Full-time", location: "Hybrid" },
//               { title: "Placement Coordinator", type: "Full-time", location: "On-site" },
//               { title: "Industry Partnership Manager", type: "Full-time", location: "Remote" },
//             ].map((job, index) => (
//               <motion.div 
//                 key={index}
//                 whileHover={{ y: -2 }}
//                 className="flex flex-col p-4 rounded-xl border border-blue-100/50 hover:border-blue-300 transition-all group bg-white/50"
//               >
//                 <div className="flex items-start justify-between">
//                   <div>
//                     <h4 className="font-semibold text-slate-900 text-sm group-hover:text-blue-600 transition-colors">
//                       {job.title}
//                     </h4>
//                     <div className="flex items-center gap-3 mt-1">
//                       <span className="text-xs text-blue-600 font-medium bg-blue-50 px-2 py-0.5 rounded-full">
//                         {job.type}
//                       </span>
//                       <span className="text-xs text-slate-500 flex items-center gap-1">
//                         <MapPin className="w-3 h-3" />
//                         {job.location}
//                       </span>
//                     </div>
//                   </div>
//                   <button className="px-3 py-1.5 bg-blue-600 text-white rounded-lg text-xs font-medium hover:bg-blue-700 transition-colors flex items-center gap-1">
//                     Apply Now
//                     <ArrowRight className="w-3 h-3" />
//                   </button>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>

//         {/* Bottom CTA */}
//         <motion.div
//           initial={{ opacity: 0, y: 15 }}
//           animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
//           transition={{ duration: 0.5, delay: 0.4 }}
//           className="mt-12 text-center p-8 rounded-2xl bg-blue-50/40 border border-blue-200/30"
//         >
//           <h3 className="text-xl font-bold text-slate-900 mb-2">
//             Ready to Make an <span className="text-blue-600">Impact?</span>
//           </h3>
//           <p className="text-slate-600 text-sm max-w-2xl mx-auto mb-4">
//             Join a team that's dedicated to transforming careers and building the workforce of tomorrow.
//           </p>
//           <motion.button
//             whileHover={{ scale: 1.03 }}
//             whileTap={{ scale: 0.97 }}
//             className="px-6 py-2.5 bg-blue-600 text-white rounded-lg font-semibold text-sm transition-all inline-flex items-center gap-2"
//           >
//             View All Openings
//             <ArrowRight className="w-4 h-4" />
//           </motion.button>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// export default CareersPage;





import { motion } from "framer-motion";
import { useState } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { Briefcase, Users, Target, Award, Sparkles, Shield, ArrowRight, MapPin, Clock } from "lucide-react";
import ApplyModal from "../components/ApplyModal"; // NEW

const jobs = [
  { title: "Training & Development Specialist", type: "Full-time", location: "Remote" },
  { title: "Career Counselor", type: "Full-time", location: "Hybrid" },
  { title: "Placement Coordinator", type: "Full-time", location: "On-site" },
  { title: "Industry Partnership Manager", type: "Full-time", location: "Remote" },
];

function CareersPage() {
  const { ref, isVisible } = useScrollAnimation();
  const [selectedJob, setSelectedJob] = useState(null); // NEW

  return (
    <section ref={ref} className="min-h-screen py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50/30">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-r from-blue-400/20 to-blue-600/10 blur-3xl animate-pulse" />
        <div className="absolute bottom-[-30%] left-[-10%] w-[700px] h-[700px] rounded-full bg-gradient-to-r from-blue-300/10 to-blue-500/10 blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-blue-200/10 to-blue-400/10 blur-3xl animate-pulse delay-500" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header, Hero Banner, Values, Vision & Mission sections — unchanged, omitted here for brevity */}

        {/* Job Opportunities */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white/80 backdrop-blur-sm border border-blue-100/50 rounded-2xl p-6 md:p-8"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="p-2 bg-blue-600 rounded-lg">
              <Briefcase className="w-4 h-4 text-white" />
            </div>
            <h2 className="text-xl font-bold text-slate-900">Job Opportunities</h2>
            <span className="ml-auto text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
              {jobs.length} Open Positions
            </span>
          </div>
          <div className="grid md:grid-cols-2 gap-3">
            {jobs.map((job, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -2 }}
                className="flex flex-col p-4 rounded-xl border border-blue-100/50 hover:border-blue-300 transition-all group bg-white/50"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-semibold text-slate-900 text-sm group-hover:text-blue-600 transition-colors">
                      {job.title}
                    </h4>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-xs text-blue-600 font-medium bg-blue-50 px-2 py-0.5 rounded-full">
                        {job.type}
                      </span>
                      <span className="text-xs text-slate-500 flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {job.location}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedJob(job)} // NEW
                    className="px-3 py-1.5 bg-blue-600 text-white rounded-lg text-xs font-medium hover:bg-blue-700 transition-colors flex items-center gap-1"
                  >
                    Apply Now
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA — unchanged, omitted here for brevity */}
      </div>

      {/* NEW: modal renders only when a job is selected */}
      {selectedJob && (
        <ApplyModal job={selectedJob} onClose={() => setSelectedJob(null)} />
      )}
    </section>
  );
}

export default CareersPage;