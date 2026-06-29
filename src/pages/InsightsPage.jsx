import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { 
  TrendingUp, Users, Lightbulb, Award, 
  Target, Sparkles, Shield, BookOpen 
} from "lucide-react";

function InsightsPage() {
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
            Insights
          </motion.span>
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
            Perspective for <span className="text-blue-600">People & Teams</span>
          </h1>
          <p className="text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Our insights bring together practical observations, market awareness, and career 
            guidance so you can make better decisions with greater clarity.
          </p>
        </motion.div>

        {/* Highlights */}
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          {[
            { icon: Lightbulb, text: "Actionable thought leadership for talent and hiring" },
            { icon: Target, text: "Guidance that blends strategy with empathy" },
            { icon: Shield, text: "A steady lens on what matters next" },
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

        {/* Main Insight Cards */}
        <div className="grid md:grid-cols-2 gap-4 mb-12">
          {[
            { icon: BookOpen, title: "Career perspective", text: "Practical guidance for professionals navigating growth, change, and opportunity." },
            { icon: Users, title: "Team strategy", text: "Insights that help squads align around hiring, learning, and development priorities." },
            { icon: TrendingUp, title: "Market awareness", text: "A grounded perspective on the shifts shaping hiring and professional growth." },
            { icon: Sparkles, title: "Ongoing support", text: "We keep our guidance relevant, responsive, and easy to act on." },
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

        {/* Featured Insight */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white/80 backdrop-blur-sm border border-blue-100/50 rounded-2xl p-6 md:p-8 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/4" />
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-3">
              <div className="p-1.5 bg-blue-600 rounded-lg">
                <Award className="w-4 h-4 text-white" />
              </div>
              <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                Featured Insight
              </span>
            </div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">
              The Future of Work Is <span className="text-blue-600">Human-Centered</span>
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed max-w-3xl">
              As technology continues to evolve, the most successful organizations are those 
              that prioritize people. Our insights help you navigate this balance, combining 
              strategic thinking with genuine human understanding.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <div className="flex items-center gap-2 bg-blue-50 rounded-full px-3 py-1.5">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                <span className="text-xs text-slate-700">Talent Strategy</span>
              </div>
              <div className="flex items-center gap-2 bg-blue-50 rounded-full px-3 py-1.5">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                <span className="text-xs text-slate-700">Career Growth</span>
              </div>
              <div className="flex items-center gap-2 bg-blue-50 rounded-full px-3 py-1.5">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                <span className="text-xs text-slate-700">Future Readiness</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
        >
          {[
            { number: "5K+", label: "Learners Guided" },
            { number: "200+", label: "Corporate Partners" },
            { number: "95%", label: "Placement Rate" },
            { number: "4.8", label: "Learner Rating" },
          ].map((stat, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-sm border border-blue-100/50 rounded-xl p-4 text-center">
              <p className="text-2xl font-bold text-blue-600">{stat.number}</p>
              <p className="text-xs text-slate-600 mt-0.5">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default InsightsPage;