import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { Briefcase, Users, Target, Award, Sparkles, Shield } from "lucide-react";

function CareersPage() {
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
            Careers
          </motion.span>
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
            Your Next Job Is <span className="text-blue-600">Just a Few Clicks Away</span>
          </h1>
          <p className="text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Join us in our mission to empower learners with real-world skills and create 
            meaningful career opportunities.
          </p>
        </motion.div>

        {/* Values */}
        <div className="grid md:grid-cols-2 gap-4 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -15 }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -3 }}
            className="bg-white/80 backdrop-blur-sm border border-blue-100/50 rounded-2xl p-6 transition-all duration-300"
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="p-2 bg-blue-600 rounded-lg">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">Our Value & Philosophy</h2>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              To empower learners with real-world skills and provide employers access to talent 
              built for today's digital workforce.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 15 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 15 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -3 }}
            className="bg-white/80 backdrop-blur-sm border border-blue-100/50 rounded-2xl p-6 transition-all duration-300"
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="p-2 bg-blue-600 rounded-lg">
                <Shield className="w-4 h-4 text-white" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">Choose Lighthouse</h2>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              A future where skill, opportunity and hiring are connected through learning 
              experiences that work for every learner and employer.
            </p>
          </motion.div>
        </div>

        {/* Vision & Mission */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-4 mb-12"
        >
          <div className="bg-blue-50/40 border border-blue-100/30 rounded-xl p-5">
            <h3 className="text-lg font-bold text-slate-900 mb-2">Our Vision</h3>
            <p className="text-sm text-slate-600">
              A future where skill, opportunity and hiring are connected through learning 
              experiences that work for every learner and employer.
            </p>
          </div>
          <div className="bg-blue-50/40 border border-blue-100/30 rounded-xl p-5">
            <h3 className="text-lg font-bold text-slate-900 mb-2">Our Mission</h3>
            <p className="text-sm text-slate-600">
              To empower learners with real-world skills and provide employers access to 
              talent built for today's digital workforce.
            </p>
          </div>
        </motion.div>

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
          </div>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              { title: "Training & Development Specialist", type: "Full-time" },
              { title: "Career Counselor", type: "Full-time" },
              { title: "Placement Coordinator", type: "Full-time" },
              { title: "Industry Partnership Manager", type: "Full-time" },
            ].map((job, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -2 }}
                className="flex items-center justify-between p-3 rounded-xl border border-blue-100/50 hover:border-blue-300 transition-all group bg-white/50"
              >
                <div>
                  <h4 className="font-semibold text-slate-900 text-sm group-hover:text-blue-600 transition-colors">
                    {job.title}
                  </h4>
                  <p className="text-xs text-slate-500">{job.type}</p>
                </div>
                <button className="px-3 py-1.5 bg-blue-600 text-white rounded-lg text-xs font-medium hover:bg-blue-700 transition-colors">
                  Apply Now
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CareersPage;