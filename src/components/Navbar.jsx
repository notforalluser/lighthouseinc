// import {
//   Menu,
//   X,
//   Briefcase,
//   Users,
//   Star,
//   Info,
//   Sparkles,
//   Phone,
//   Layers,
//   Building2,
//   Car,
//   Landmark,
//   Wifi,
//   Zap,
//   Gamepad2,
//   Shield,
//   Heart,
//   ShieldCheck,
//   Tv,
//   ShoppingBag,
//   Cpu,
//   Plane,
// } from "lucide-react";
// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Link, NavLink } from "react-router-dom";
// import logo from "../assets/logo.png";

// const navItems = [
//   { title: "Home", href: "/" },
//   { title: "Why Lighthouse?", href: "/why-lighthouse" },
//   { title: "Services", href: "/services" },
//   { title: "Industries", href: "/industries" },
//   { title: "Insights", href: "/insights" },
//   { title: "Careers", href: "/careers" },
//   { title: "Sustainability", href: "/sustainability" },
// ];

// const industries = [
//   { name: "Automotive", Icon: Car },
//   { name: "Banking and financial services", Icon: Landmark },
//   { name: "Communications", Icon: Wifi },
//   { name: "Energy and utilities", Icon: Zap },
//   { name: "Gaming", Icon: Gamepad2 },
//   { name: "Government", Icon: Building2 },
//   { name: "Healthcare", Icon: Heart },
//   { name: "Insurance", Icon: ShieldCheck },
//   { name: "Media", Icon: Tv },
//   { name: "Retail and e-commerce", Icon: ShoppingBag },
//   { name: "Technology", Icon: Cpu },
//   { name: "Travel, hospitality, and cargo", Icon: Plane },
// ];

// function Navbar() {
//   const [mobile, setMobile] = useState(false);
//   const [showIndustries, setShowIndustries] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 1024) setMobile(false);
//     };
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-blue-500/20 shadow-sm">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <Link
//             to="/"
//             className="flex items-center gap-3 group relative"
//           >
//             <div className="relative">
//               <img
//                 src={logo}
//                 alt="Lighthouse logo"
//                 className="w-12 h-12 rounded-2xl object-cover border-2 border-blue-600 group-hover:border-red-500 transition-all duration-300"
//               />
//             </div>
//             <div>
//               <h2 className="font-bold text-xl text-gray-900 tracking-tighter">
//                 Lighthouse Inc<span className="text-blue-600">.</span>
//               </h2>
//               <p className="text-[7px] text-gray-600 font-medium tracking-[1px] -mt-1">
//                 illuminating careers, connecting talent
//               </p>
//             </div>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden lg:flex items-center gap-1">
//             {navItems.map((item) => {
//               const isIndustries = item.title === "Industries";
              
//               return (
//                 <div
//                   key={item.title}
//                   className="relative"
//                   onMouseEnter={() => isIndustries && setShowIndustries(true)}
//                   onMouseLeave={() => isIndustries && setShowIndustries(false)}
//                 >
//                   <NavLink
//                     to={item.href}
//                     className={({ isActive }) =>
//                       `relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 whitespace-nowrap ${
//                         isActive
//                           ? "text-white hover:border-b hover:border-blue-600"
//                           : "text-gray-700 hover:text-blue-600 hover:border-b hover:border-blue-600"
//                       }`
//                     }
//                   >
//                     {({ isActive }) => (
//                       <>
//                         {item.title}

//                         {isActive && (
//                           <motion.div
//                             layoutId="activePill"
//                             className="absolute inset-0 bg-blue-600 rounded-xl -z-10"
//                             transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
//                           />
//                         )}
//                       </>
//                     )}
//                   </NavLink>

//                   {/* Industries Dropdown */}
//                   {isIndustries && showIndustries && (
//                     <motion.div
//                       initial={{ opacity: 0, y: 10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       exit={{ opacity: 0, y: 10 }}
//                       transition={{ duration: 0.2 }}
//                       className="absolute top-full left-0 mt-2 w-[600px] bg-white border border-gray-200 rounded-2xl shadow-xl p-6"
//                     >
//                       <p className="text-xs text-blue-600 font-medium tracking-wider mb-4 uppercase">
//                         Advanced, industry-specific solutions
//                       </p>
//                       <div className="grid grid-cols-2 gap-2">
//                         {industries.map((industry) => (
//                           <a
//                             key={industry.name}
//                             href={`#${industry.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
//                             className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-blue-50 transition-all group"
//                           >
//                             <industry.Icon className="w-4 h-4 text-blue-600 group-hover:text-red-500" />
//                             <span className="text-sm text-gray-700 group-hover:text-blue-600 transition-colors">
//                               {industry.name}
//                             </span>
//                           </a>
//                         ))}
//                       </div>
//                     </motion.div>
//                   )}
//                 </div>
//               );
//             })}

//             <div className="w-px h-6 bg-gray-300 mx-2" />

//             {/* CTA Button */}
//             <a
//               href="#contact"
//               className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-red-600 text-white px-5 py-2 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.03] active:scale-95 flex items-center gap-2 text-sm"
//             >
//               <span className="relative z-10 flex items-center gap-2">
//                 <Phone size={15} />
//                 Get Started
//               </span>
//               <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
//             </a>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setMobile(!mobile)}
//             className="lg:hidden p-3 rounded-xl bg-gray-100 text-gray-700 hover:bg-gray-200 transition-all"
//             aria-label="Toggle mobile menu"
//           >
//             {mobile ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {mobile && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: "auto" }}
//             exit={{ opacity: 0, height: 0 }}
//             transition={{ duration: 0.4, ease: "easeInOut" }}
//             className="lg:hidden bg-white border-t border-gray-200"
//           >
//             <div className="px-6 py-6 flex flex-col gap-2">
//               {navItems.map((item, index) => {
//                 const isIndustries = item.title === "Industries";
                
//                 return (
//                   <div key={item.title}>
//                     <motion.div
//                       initial={{ opacity: 0, x: -20 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ delay: index * 0.05 }}
//                     >
//                       <NavLink
//                         to={item.href}
//                         onClick={() => {
//                           if (!isIndustries) setMobile(false);
//                         }}
//                         className={({ isActive }) =>
//                           `flex items-center px-5 py-3 rounded-xl text-base font-medium transition-all ${
//                             isActive
//                               ? "text-white hover:border-b hover:border-blue-600"
//                               : "text-gray-700 hover:text-blue-600 hover:border-b hover:border-blue-600"
//                           }`
//                         }
//                       >
//                         {item.title}
//                       </NavLink>
//                     </motion.div>

//                     {/* Mobile Industries */}
//                     {isIndustries && (
//                       <div className="ml-4 mt-2 space-y-1">
//                         <p className="text-xs text-blue-600 font-medium tracking-wider uppercase px-5 py-2">
//                           Advanced, industry-specific solutions
//                         </p>
//                         {industries.map((industry) => (
//                           <a
//                             key={industry.name}
//                             href={`#${industry.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
//                             onClick={() => setMobile(false)}
//                             className="flex items-center gap-3 px-5 py-2.5 rounded-xl text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all"
//                           >
//                             <industry.Icon className="w-4 h-4 text-blue-600" />
//                             {industry.name}
//                           </a>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 );
//               })}

//               <div className="h-px bg-gray-200 my-3" />

//               <a
//                 href="#contact"
//                 onClick={() => setMobile(false)}
//                 className="mt-2 flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-red-600 text-white py-3 rounded-xl font-semibold text-base shadow-md hover:shadow-lg hover:scale-105 transition-all"
//               >
//                 <Phone size={18} />
//                 Start Your Journey
//               </a>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// }

// export default Navbar;









// import { Menu, X, Phone, MapPin, ChevronDown } from "lucide-react";
// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Link, NavLink } from "react-router-dom";
// import logo from "../assets/logo.png";

// const navItems = [
//   { title: "WHY TP?", href: "/why-tp" },
//   { title: "SERVICES", href: "/services" },
//   { title: "INDUSTRIES", href: "/industries" },
//   { title: "INSIGHTS", href: "/insights" },
//   { title: "CAREERS", href: "/careers" },
//   { title: "SUSTAINABILITY", href: "/sustainability" },
//   { title: "INVESTORS", href: "/investors" },
// ];

// function Navbar() {
//   const [mobile, setMobile] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 1024) setMobile(false);
//     };
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="flex justify-between items-center h-20">
//           {/* Logo */}
//           <Link to="/" className="flex items-center gap-3">
//             <img
//               src={logo}
//               alt="Logo"
//               className="w-10 h-10 rounded-lg object-cover"
//             />
//             <span className="font-bold text-2xl text-gray-900">TP</span>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden lg:flex items-center gap-8">
//             {navItems.map((item) => (
//               <NavLink
//                 key={item.title}
//                 to={item.href}
//                 className={({ isActive }) =>
//                   `text-xs font-semibold tracking-wider transition-colors duration-300 ${
//                     isActive
//                       ? "text-blue-600"
//                       : "text-gray-700 hover:text-blue-600"
//                   }`
//                 }
//               >
//                 {item.title}
//               </NavLink>
//             ))}
//           </div>

//           {/* Right Side - Contact & Locations */}
//           <div className="hidden lg:flex items-center gap-6">
//             <NavLink
//               to="/contact"
//               className="flex items-center gap-2 text-xs font-semibold tracking-wider text-gray-700 hover:text-blue-600 transition-colors"
//             >
//               <Phone size={14} />
//               CONTACT US
//             </NavLink>
//             <NavLink
//               to="/locations"
//               className="flex items-center gap-2 text-xs font-semibold tracking-wider text-gray-700 hover:text-blue-600 transition-colors"
//             >
//               <MapPin size={14} />
//               OUR LOCATIONS
//             </NavLink>
//             <button className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-2.5 rounded-lg text-xs font-semibold tracking-wider hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2">
//               <Phone size={14} />
//               CONTACT US
//             </button>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setMobile(!mobile)}
//             className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-all"
//             aria-label="Toggle mobile menu"
//           >
//             {mobile ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {mobile && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: "auto" }}
//             exit={{ opacity: 0, height: 0 }}
//             transition={{ duration: 0.3, ease: "easeInOut" }}
//             className="lg:hidden bg-white border-t border-gray-200"
//           >
//             <div className="px-6 py-4 flex flex-col gap-1">
//               {navItems.map((item, index) => (
//                 <motion.div
//                   key={item.title}
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: index * 0.05 }}
//                 >
//                   <NavLink
//                     to={item.href}
//                     onClick={() => setMobile(false)}
//                     className={({ isActive }) =>
//                       `block px-4 py-3 text-sm font-semibold tracking-wider rounded-lg transition-all ${
//                         isActive
//                           ? "text-blue-600 bg-blue-50"
//                           : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
//                       }`
//                     }
//                   >
//                     {item.title}
//                   </NavLink>
//                 </motion.div>
//               ))}

//               <div className="h-px bg-gray-200 my-2" />

//               <NavLink
//                 to="/contact"
//                 onClick={() => setMobile(false)}
//                 className="flex items-center gap-3 px-4 py-3 text-sm font-semibold tracking-wider text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
//               >
//                 <Phone size={16} />
//                 CONTACT US
//               </NavLink>
//               <NavLink
//                 to="/locations"
//                 onClick={() => setMobile(false)}
//                 className="flex items-center gap-3 px-4 py-3 text-sm font-semibold tracking-wider text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
//               >
//                 <MapPin size={16} />
//                 OUR LOCATIONS
//               </NavLink>

//               <button
//                 onClick={() => setMobile(false)}
//                 className="mt-3 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white py-3.5 rounded-lg font-semibold tracking-wider text-sm hover:shadow-lg transition-all duration-300"
//               >
//                 <Phone size={16} />
//                 CONTACT US
//               </button>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// }

// export default Navbar;




import { Menu, X, Phone, MapPin, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

// Each nav item has its own color to match the image
const navItems = [
  { title: "HOME",      href: "/",        color: "#1f2937" }, // indigo/blue
  { title: "WHY LIGHTHOUSE?",      href: "/why-lighthouse",        color: "#1f2937" }, // indigo/blue
  { title: "SERVICES",     href: "/services",       color: "#1f2937" }, // dark gray
  { title: "INDUSTRIES",   href: "/industries",     color: "#1f2937" }, // blue
  { title: "INSIGHTS",     href: "/insights",       color: "#1f2937" }, // amber/orange
  { title: "CAREERS",      href: "/careers",        color: "#1f2937" }, // dark gray
  { title: "SUSTAINABILITY",href: "/sustainability", color: "#1f2937" }, // dark gray
];

function Navbar() {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMobile(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white">
      {/* Top thin dark line */}
      <div className="h-px bg-gray-800" />

      <div className="max-w-screen-xl mx-auto px-6">
        <div className="flex items-center h-[76px] gap-8">

          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              src={logo}
              alt="TP Logo"
              className="h-16 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav Links — centered */}
          <div className="hidden lg:flex items-center gap-7 flex-1">
            {navItems.map((item) => (
              <NavLink
                key={item.title}
                to={item.href}
                style={({ isActive }) => ({
                  color: isActive ? item.color : item.color,
                })}
                className="text-[12px] font-semibold tracking-wide whitespace-nowrap hover:opacity-75 transition-opacity duration-200"
              >
                {item.title}
              </NavLink>
            ))}
          </div>

          {/* Right Side */}
          <div className="hidden lg:flex items-center gap-4 flex-shrink-0 ml-auto">
            {/* Contact Us pill button */}
            <NavLink
              to="/contact"
              className="bg-black text-white text-[11px] font-semibold tracking-widest px-5 py-2 rounded-full hover:bg-gray-800 transition-colors duration-200 whitespace-nowrap"
            >
              CONTACT US
            </NavLink>

            {/* Our Locations */}
            

            {/* Search icon */}
            
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobile(!mobile)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-all ml-auto"
            aria-label="Toggle mobile menu"
          >
            {mobile ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Bottom gradient bar — magenta to purple */}
      <div className="h-[6px] w-full bg-gradient-to-r from-[#e91e8c] via-[#c2006e] to-[#6b21a8]" />

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobile && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.04 }}
                >
                  <NavLink
                    to={item.href}
                    onClick={() => setMobile(false)}
                    style={{ color: item.color }}
                    className="block px-3 py-2.5 text-xs font-semibold tracking-widest rounded-md hover:bg-gray-50 transition-all"
                  >
                    {item.title}
                  </NavLink>
                </motion.div>
              ))}

              <div className="h-px bg-gray-200 my-3" />

              <NavLink
                to="/locations"
                onClick={() => setMobile(false)}
                className="flex items-center gap-2 px-3 py-2.5 text-xs font-semibold tracking-widest text-gray-800 hover:bg-gray-50 rounded-md transition-all"
              >
                <MapPin size={15} strokeWidth={1.5} />
                OUR LOCATIONS
              </NavLink>

              <NavLink
                to="/contact"
                onClick={() => setMobile(false)}
                className="mt-2 flex items-center justify-center bg-black text-white py-3 rounded-full text-xs font-semibold tracking-widest hover:bg-gray-800 transition-colors duration-200"
              >
                CONTACT US
              </NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;