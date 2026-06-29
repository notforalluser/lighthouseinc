import {
  Menu,
  X,
  Briefcase,
  Users,
  Star,
  Info,
  Sparkles,
  Phone,
  Layers,
  Building2,
  Car,
  Landmark,
  Wifi,
  Zap,
  Gamepad2,
  Shield,
  Heart,
  ShieldCheck,
  Tv,
  ShoppingBag,
  Cpu,
  Plane,
} from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const navItems = [
  { title: "Why Lighthouse?", href: "/why-lighthouse" },
  { title: "Services", href: "/services" },
  { title: "Industries", href: "/industries" },
  { title: "Insights", href: "/insights" },
  { title: "Careers", href: "/careers" },
  { title: "Sustainability", href: "/sustainability" },
];

const industries = [
  { name: "Automotive", Icon: Car },
  { name: "Banking and financial services", Icon: Landmark },
  { name: "Communications", Icon: Wifi },
  { name: "Energy and utilities", Icon: Zap },
  { name: "Gaming", Icon: Gamepad2 },
  { name: "Government", Icon: Building2 },
  { name: "Healthcare", Icon: Heart },
  { name: "Insurance", Icon: ShieldCheck },
  { name: "Media", Icon: Tv },
  { name: "Retail and e-commerce", Icon: ShoppingBag },
  { name: "Technology", Icon: Cpu },
  { name: "Travel, hospitality, and cargo", Icon: Plane },
];

function Navbar() {
  const [mobile, setMobile] = useState(false);
  const [showIndustries, setShowIndustries] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMobile(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-blue-500/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 group relative"
          >
            <div className="relative">
              <img
                src={logo}
                alt="Lighthouse logo"
                className="w-12 h-12 rounded-2xl object-cover border-2 border-blue-600 group-hover:border-red-500 transition-all duration-300"
              />
            </div>
            <div>
              <h2 className="font-bold text-xl text-gray-900 tracking-tighter">
                Lighthouse Inc<span className="text-blue-600">.</span>
              </h2>
              <p className="text-[7px] text-gray-600 font-medium tracking-[1px] -mt-1">
                illuminating careers, connecting talent
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isIndustries = item.title === "Industries";
              
              return (
                <div
                  key={item.title}
                  className="relative"
                  onMouseEnter={() => isIndustries && setShowIndustries(true)}
                  onMouseLeave={() => isIndustries && setShowIndustries(false)}
                >
                  <NavLink
                    to={item.href}
                    className={({ isActive }) =>
                      `relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                        isActive
                          ? "text-white hover:border-b hover:border-blue-600"
                          : "text-gray-700 hover:text-blue-600 hover:border-b hover:border-blue-600"
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {item.title}

                        {isActive && (
                          <motion.div
                            layoutId="activePill"
                            className="absolute inset-0 bg-blue-600 rounded-xl -z-10"
                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                          />
                        )}
                      </>
                    )}
                  </NavLink>

                  {/* Industries Dropdown */}
                  {isIndustries && showIndustries && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-[600px] bg-white border border-gray-200 rounded-2xl shadow-xl p-6"
                    >
                      <p className="text-xs text-blue-600 font-medium tracking-wider mb-4 uppercase">
                        Advanced, industry-specific solutions
                      </p>
                      <div className="grid grid-cols-2 gap-2">
                        {industries.map((industry) => (
                          <a
                            key={industry.name}
                            href={`#${industry.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-blue-50 transition-all group"
                          >
                            <industry.Icon className="w-4 h-4 text-blue-600 group-hover:text-red-500" />
                            <span className="text-sm text-gray-700 group-hover:text-blue-600 transition-colors">
                              {industry.name}
                            </span>
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              );
            })}

            <div className="w-px h-6 bg-gray-300 mx-2" />

            {/* CTA Button */}
            <a
              href="#contact"
              className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-red-600 text-white px-5 py-2 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.03] active:scale-95 flex items-center gap-2 text-sm"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Phone size={15} />
                Get Started
              </span>
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobile(!mobile)}
            className="lg:hidden p-3 rounded-xl bg-gray-100 text-gray-700 hover:bg-gray-200 transition-all"
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
            className="lg:hidden bg-white border-t border-gray-200"
          >
            <div className="px-6 py-6 flex flex-col gap-2">
              {navItems.map((item, index) => {
                const isIndustries = item.title === "Industries";
                
                return (
                  <div key={item.title}>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <NavLink
                        to={item.href}
                        onClick={() => {
                          if (!isIndustries) setMobile(false);
                        }}
                        className={({ isActive }) =>
                          `flex items-center px-5 py-3 rounded-xl text-base font-medium transition-all ${
                            isActive
                              ? "text-white hover:border-b hover:border-blue-600"
                              : "text-gray-700 hover:text-blue-600 hover:border-b hover:border-blue-600"
                          }`
                        }
                      >
                        {item.title}
                      </NavLink>
                    </motion.div>

                    {/* Mobile Industries */}
                    {isIndustries && (
                      <div className="ml-4 mt-2 space-y-1">
                        <p className="text-xs text-blue-600 font-medium tracking-wider uppercase px-5 py-2">
                          Advanced, industry-specific solutions
                        </p>
                        {industries.map((industry) => (
                          <a
                            key={industry.name}
                            href={`#${industry.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                            onClick={() => setMobile(false)}
                            className="flex items-center gap-3 px-5 py-2.5 rounded-xl text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all"
                          >
                            <industry.Icon className="w-4 h-4 text-blue-600" />
                            {industry.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}

              <div className="h-px bg-gray-200 my-3" />

              <a
                href="#contact"
                onClick={() => setMobile(false)}
                className="mt-2 flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-red-600 text-white py-3 rounded-xl font-semibold text-base shadow-md hover:shadow-lg hover:scale-105 transition-all"
              >
                <Phone size={18} />
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