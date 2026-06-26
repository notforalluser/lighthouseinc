import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Play,
  Users,
  Award,
  Zap,
  Sparkles,
  TrendingUp,
  Briefcase,
  GraduationCap,
  Star,
  ChevronDown,
} from "lucide-react";

const stats = [
  { value: "15K+", label: "Learners Trained", icon: GraduationCap },
  { value: "92%", label: "Placement Rate", icon: TrendingUp },
  { value: "20+", label: "Partner Companies", icon: Briefcase },
];

const features = [
  "Industry-aligned curriculum",
  "Expert-led training",
  "Placement assistance",
  "Real-world projects",
];

function Hero() {
  return (
    <header
      id="welcome"
      className="relative min-h-screen flex items-center bg-white overflow-hidden font-sans"
    >
      {/* Modern Gradient Background - Red tones only */}
      <div className="absolute inset-0 bg-[radial-gradient(at_50%_30%,rgba(220,38,38,0.04),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(at_20%_70%,rgba(220,38,38,0.02),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(at_80%_50%,rgba(220,38,38,0.03),transparent_50%)]" />

      {/* Interactive Background Elements - Red only */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-[10%] w-72 h-72 bg-red-200/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-[10%] w-96 h-96 bg-red-200/15 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Floating Particles - Red only */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-red-500/20 rounded-full"
            animate={{
              y: [0, -150, 0],
              x: [0, Math.random() * 80 - 40, 0],
              opacity: [0, 0.5, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 6,
              ease: "easeInOut",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-20 lg:pt-32 w-full">
        <div className="grid lg:grid-cols-2 gap-6 items-center">
          {/* Left Content */}
          <div className="space-y-10">
            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-[80px] font-bold leading-[1.05] tracking-tight"
            >
              <span className="text-gray-700 block text-4xl sm:text-4xl lg:text-5xl xl:text-5xl">
                Empowering talent with
              </span>
              <span className="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
                Career ready skills
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-lg sm:text-xl text-gray-600 max-w-[520px] leading-relaxed"
            >
              Cutting-edge programs designed with top companies. Real skills.
              Real outcomes. Your future starts here.
            </motion.p>

            {/* Interactive Learn More Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-wrap items-center gap-4"
            >
              <motion.a
                href="#about"
                className="group relative overflow-hidden flex items-center gap-3 bg-black text-white px-10 py-4 rounded-2xl font-semibold text-lg shadow-lg shadow-black/20"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Learn More
                  <ArrowRight
                    className="group-hover:translate-x-1 transition-transform"
                    size={20}
                  />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700"
                  initial={{ x: "100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            </motion.div>

            {/* Interactive Stats Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-8 pt-4"
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3"
                    whileHover={{ y: -2 }}
                  >
                    <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center">
                      <Icon className="text-red-600" size={20} />
                    </div>
                    <div>
                      <motion.div
                        className="text-xl font-bold text-black"
                        whileHover={{ scale: 1.05 }}
                      >
                        {stat.value}
                      </motion.div>
                      <div className="text-xs text-gray-500">{stat.label}</div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Trust Signals */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-6 pt-2"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center text-xs font-medium text-gray-700 shadow-sm"
                    whileHover={{ scale: 1.1, y: -3 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {String.fromCharCode(64 + i)}
                  </motion.div>
                ))}
                <motion.div
                  className="w-10 h-10 rounded-full border-2 border-white bg-red-600 flex items-center justify-center text-xs font-medium text-white shadow-sm"
                  whileHover={{ scale: 1.1, y: -3 }}
                >
                  +
                </motion.div>
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 + i * 0.05 }}
                      className="text-red-500 text-sm"
                    >
                      ★
                    </motion.span>
                  ))}
                  <span className="text-black font-medium ml-2">4.9</span>
                </div>
                <p className="text-xs text-gray-500">
                  Trusted by 500+ companies
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Image with Interactive Elements */}
          <div className="relative lg:block">
            {/* Main Image Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                type: "spring",
                stiffness: 100,
              }}
              className="relative"
            >
              {/* Animated rotating gradient ring - Red only */}
              <motion.div
                className="absolute -inset-8 rounded-full border-2 border-red-200/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute -inset-6 rounded-full border-2 border-red-100/20"
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />

              <div className="relative bg-white/90 backdrop-blur-sm border border-gray-200 rounded-3xl overflow-hidden shadow-2xl">
                {/* Image */}
                <img
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop"
                  alt="Team collaboration"
                  className="w-full h-[350px] object-cover"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          style={{
            borderTop: "1px solid #1E1E1E",
            overflow: "hidden",
            position: "relative",
            padding: "14px 0",
          }}
        >
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
            style={{
              display: "flex",
              gap: "0",
              whiteSpace: "nowrap",
            }}
          >
            {[...Array(2)].map((_, di) => (
              <div key={di} style={{ display: "flex", gap: "0" }}>
                {[
                  "Industry-aligned curriculum",
                  "Expert-led training",
                  "Real-world projects",
                  "Placement support",
                  "Hiring solutions",
                  "Career mentorship",
                  "Live sessions",
                  "Resume reviews",
                ].map((item, i) => (
                  <span
                    key={i}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "20px",
                      padding: "0 28px",
                      color: "#444",
                      fontSize: "12px",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                    }}
                  >
                    {item}
                    <span
                      style={{
                        width: "4px",
                        height: "4px",
                        borderRadius: "50%",
                        background: "#B8FF47",
                        display: "inline-block",
                        flexShrink: 0,
                      }}
                    />
                  </span>
                ))}
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={24} className="text-gray-400" />
        </motion.div>
        <span className="text-[10px] uppercase tracking-[3px] text-gray-400 font-mono">
          Scroll to explore
        </span>
      </motion.div>
    </header>
  );
}

export default Hero;
