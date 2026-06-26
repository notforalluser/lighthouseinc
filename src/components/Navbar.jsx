import {
  Menu,
  X,
  Home,
  Briefcase,
  Users,
  Star,
  Info,
  Sparkles,
  Phone,
} from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";

const navItems = [
  { title: "Home", href: "#welcome", Icon: Home },
  { title: "About Us", href: "#about", Icon: Info },
  { title: "Why Us", href: "#why-us", Icon: Sparkles },
  { title: "Services", href: "#services", Icon: Briefcase },
  // { title: "Success", href: "#testimonials", Icon: Star },
  { title: "Employers", href: "#employers", Icon: Users },
];

function Navbar() {
  const [mobile, setMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("Welcome");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navItems.map((item) => item.href.substring(1));
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 120 && rect.bottom >= 120;
        }
        return false;
      });

      if (current) {
        const item = navItems.find(
          (item) => item.href.substring(1) === current
        );
        if (item) setActiveSection(item.title);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMobile(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0a0a0a]/95 backdrop-blur-2xl border-b border-red-500/20 shadow-2xl"
          : "bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a
            href="#welcome"
            className="flex items-center gap-3 group relative"
          >
            <div className="relative">
              <img
                src={logo}
                alt="Lighthouse logo"
                className="w-16 h-16 rounded-2xl object-cover shadow-xl shadow-red-900/30 border border-red-500/30 group-hover:border-red-500/60 transition-all duration-300"
              />
            </div>
            <div>
              <h2 className="font-bold text-2xl text-white tracking-tighter">
                Lighthouse Inc<span className="text-red-500">.</span>
              </h2>
              <p className="text-[8px] text-red-400 font-medium tracking-[1px] -mt-1">
                illuminating careers, connecting talent
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.title;
              return (
                <a
                  key={item.title}
                  href={item.href}
                  className={`relative flex items-center gap-2 px-5 py-2.5 rounded-2xl text-sm font-medium transition-all duration-300 group ${
                    isActive
                      ? "text-white bg-red-600/10 border border-red-500/30"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <item.Icon
                    className={`w-4 h-4 transition-colors ${
                      isActive ? "text-red-400" : "text-slate-400 group-hover:text-red-400"
                    }`}
                  />
                  {item.title}

                  {isActive && (
                    <motion.div
                      layoutId="activePill"
                      className="absolute inset-0 bg-red-500/10 border border-red-500/30 rounded-2xl -z-10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </a>
              );
            })}

            <div className="w-px h-8 bg-white/10 mx-3" />

            {/* CTA Button */}
            <a
              href="#contact"
              className="group relative overflow-hidden bg-gradient-to-r from-red-600 to-red-500 text-white px-7 py-3 rounded-2xl font-semibold shadow-lg shadow-red-600/40 hover:shadow-red-600/60 transition-all duration-300 hover:scale-[1.03] active:scale-95 flex items-center gap-2"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Phone size={17} />
                Get Started
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobile(!mobile)}
            className="lg:hidden p-3 rounded-2xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all"
            aria-label="Toggle mobile menu"
          >
            {mobile ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobile && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="lg:hidden bg-[#0a0a0a] border-t border-red-500/20 backdrop-blur-2xl"
          >
            <div className="px-6 py-8 flex flex-col gap-2">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.title}
                  href={item.href}
                  onClick={() => setMobile(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className={`flex items-center gap-3 px-5 py-4 rounded-2xl text-lg font-medium transition-all ${
                    activeSection === item.title
                      ? "bg-red-600/10 text-white border border-red-500/30"
                      : "text-slate-300 hover:bg-white/5"
                  }`}
                >
                  <item.Icon className="w-5 h-5 text-red-400" />
                  {item.title}
                </motion.a>
              ))}

              <div className="h-px bg-white/10 my-4" />

              <a
                href="#contact"
                onClick={() => setMobile(false)}
                className="mt-2 flex items-center justify-center gap-3 bg-gradient-to-r from-red-600 to-red-500 text-white py-4 rounded-2xl font-semibold text-lg shadow-xl shadow-red-600/30 hover:scale-105 transition-all"
              >
                <Phone size={20} />
                Start Your Journey
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;