
import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { GraduationCap, Briefcase, Users, Handshake, Award, Target } from "lucide-react";
import partnershipImage from "../assets/partner-logo.jpeg";

function Services() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="min-h-screen py-10 relative overflow-hidden">
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
            Our Services
          </motion.span>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            Hands-on Solutions for <span className="text-blue-600">Talent & Growth</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            From practical training to career support and employer partnerships, our services are 
            designed to accelerate movement from curiosity to opportunity.
          </p>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative rounded-2xl overflow-hidden h-64 md:h-80 mb-12 group"
        >
          <img 
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&h=800&fit=crop"
            alt="Professional training and development"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 via-blue-900/20 to-transparent" /> */}
          <div className="absolute bottom-6 left-6 right-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Empowering Careers Through <span className="text-blue-300">Excellence</span>
            </h2>
            <p className="text-blue-100 text-sm max-w-2xl">
              Comprehensive solutions designed to bridge the gap between potential and opportunity.
            </p>
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {[
            { 
              icon: GraduationCap, 
              title: "Professional Training", 
              desc: "Live-led learning experiences that build lasting capabilities and confidence.",
              image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=300&fit=crop"
            },
            { 
              icon: Briefcase, 
              title: "Career Services", 
              desc: "Resume, interview, and placement support that helps learners show up prepared.",
              image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop"
            },
            { 
              icon: Users, 
              title: "Employer Solutions", 
              desc: "Customized recruiting and workforce strategies for ambitious teams.",
              image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop"
            },
            { 
              icon: Handshake, 
              title: "Partnership Growth", 
              desc: "We strengthen training ecosystems with people-first collaboration.",
              image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=300&fit=crop"
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -5 }}
              className="group relative bg-white/80 backdrop-blur-sm border border-blue-100/50 rounded-xl overflow-hidden transition-all duration-300"
            >
              <div className="relative h-32 overflow-hidden">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent" /> */}
                <div className="absolute bottom-2 left-3">
                  <div className="p-1.5 bg-blue-600 rounded-lg w-fit">
                    <service.icon className="w-3.5 h-3.5 text-white" />
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-md font-semibold text-slate-900 mb-1">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{service.desc}</p>
                <div className="mt-2 h-0.5 w-8 bg-blue-600 rounded-full group-hover:w-12 transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Service Details with Image */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid md:grid-cols-2 gap-6 bg-white/80 backdrop-blur-sm border border-blue-100/50 rounded-2xl p-6 md:p-8 transition-all duration-300"
        >
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-4">
              We support <span className="text-blue-600">learners, employers, and training partners</span>
            </h2>
            <div className="grid gap-4">
              {[
                { icon: Award, title: "Practical Learning", desc: "Industry-focused programs with real-world application" },
                { icon: Target, title: "Talent Solutions", desc: "Placement services and recruitment support that work" },
                { icon: Users, title: "Program Support", desc: "Training programs designed for measurable outcomes" },
              ].map((item, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start gap-3 p-4 rounded-xl bg-blue-50/40 border border-blue-100/30"
                  whileHover={{ y: -2 }}
                >
                  <div className="p-2 bg-blue-600 rounded-lg flex-shrink-0">
                    <item.icon className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 text-sm">{item.title}</h4>
                    <p className="text-xs text-slate-600 mt-0.5">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden h-48 md:h-auto group">
              <img 
                src={partnershipImage}
              alt="Team collaboration"
              className="h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent" /> */}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        {/* <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center p-8 rounded-2xl bg-blue-50/40 border border-blue-200/30"
        >
          <h3 className="text-xl font-bold text-slate-900 mb-2">
            Ready to Transform Your <span className="text-blue-600">Career?</span>
          </h3>
          <p className="text-slate-600 text-sm max-w-2xl mx-auto mb-4">
            Let's work together to build the skills, confidence, and opportunities you need to succeed.
          </p>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="px-6 py-2.5 bg-blue-600 text-white rounded-lg font-semibold text-sm transition-all inline-flex items-center gap-2"
          >
            Explore Our Services
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        </motion.div> */}
      </div>
    </section>
  );
}

export default Services;