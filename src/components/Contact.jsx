// import { Mail, Phone, MapPin, Send, Clock, CheckCircle, ArrowRight } from "lucide-react";
// import { motion } from "framer-motion";
// import { useState } from "react";
// import { useScrollAnimation } from "../hooks/useScrollAnimation";

// const details = [
//   {
//     icon: Mail,
//     title: "Email",
//     value: "info@lighthouseinc.in",
//     link: "mailto:info@lighthouseinc.in",
//   },
//   {
//     icon: Phone,
//     title: "Phone",
//     value: "+91 92512 29571",
//     link: "tel:+919251229571",
//   },
//   {
//     icon: MapPin,
//     title: "Location",
//     value: "Jaipur, Rajasthan",
//     link: "#",
//   },
// ];

// const workingHours = [
//   { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
//   { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
//   { day: "Sunday", hours: "Closed" },
// ];

// function Contact() {
//   const { ref, isVisible } = useScrollAnimation();
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsSubmitted(true);
//     setTimeout(() => setIsSubmitted(false), 3000);
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.2,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, x: -20 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: { duration: 0.5, ease: "easeOut" },
//     },
//   };

//   return (
//     <motion.section
//       ref={ref}
//       id="contact"
//       className="py-10 bg-white relative overflow-hidden"
//       initial={{ opacity: 0 }}
//       animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
//       transition={{ duration: 0.6 }}
//     >
//       {/* Decorative elements */}
//       <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50" />
//       <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-50 rounded-full blur-3xl opacity-30" />

//       <div className="max-w-7xl mx-auto px-6 relative z-10">
//         {/* Heading */}
//         {/* <motion.div
//           className="text-center mb-16"
//           initial={{ opacity: 0, y: 20 }}
//           animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//           transition={{ duration: 0.6 }}
//         >
//           <p className="uppercase tracking-[3px] text-blue-600 font-semibold text-[11px]">
//             Get In Touch
//           </p>
//           <h2 className="heading-font text-3xl md:text-4xl font-bold mt-3 text-slate-900">
//             Let's Start A <span className="text-blue-600">Conversation</span>
//           </h2>
//           <p className="mt-3 text-slate-600 text-sm max-w-2xl mx-auto">
//             Have questions about training, placement, or hiring solutions? We'd love to hear from you.
//           </p>
//         </motion.div> */}

//         <motion.div
//           className="text-center mb-16"
//           initial={{ opacity: 0, y: 20 }}
//           animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//           transition={{ duration: 0.6 }}
//         >
//           <motion.span
//             className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full mb-3"
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
//             transition={{ duration: 0.5 }}
//           >
//             Get In Touch
//           </motion.span>

//           <motion.h2
//             className="text-3xl md:text-4xl font-bold text-slate-900"
//             initial={{ opacity: 0, y: 10 }}
//             animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             Let's Start A <span className="text-blue-600">Conversation</span>
//           </motion.h2>

//           <motion.p
//             className="text-lg mt-5 max-w-2xl mx-auto text-slate-600"
//             initial={{ opacity: 0 }}
//             animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
//             transition={{ duration: 0.6, delay: 0.3 }}
//           >
//             Have questions about training, placement, or hiring solutions? We'd love to hear from you.
//           </motion.p>
//         </motion.div>

//         <div className="grid lg:grid-cols-2 gap-16 items-start">
//           {/* Left Side - Contact Info */}
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
//             transition={{ duration: 0.6 }}
//           >
//             <motion.h3
//               className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-3"
//               initial={{ opacity: 0 }}
//               animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
//               transition={{ duration: 0.5, delay: 0.1 }}
//             >
//               <span className="w-1 h-6 bg-blue-600 rounded-full" />
//               Contact Information
//             </motion.h3>

//             <motion.div
//               className="space-y-3.5"
//               variants={containerVariants}
//               initial="hidden"
//               animate={isVisible ? "visible" : "hidden"}
//             >
//               {details.map((item) => {
//                 const Icon = item.icon;
//                 return (
//                   <motion.a
//                     key={item.title}
//                     href={item.link}
//                     variants={itemVariants}
//                     className="group bg-white rounded-xl p-4 border border-slate-200 flex items-center gap-4 shadow-sm hover:shadow-xl transition-all duration-300 hover:border-blue-300 hover:scale-[1.02]"
//                     whileHover={{ x: 5 }}
//                   >
//                     <div className="w-11 h-11 rounded-lg bg-blue-100 group-hover:bg-blue-600 transition-colors duration-300 flex items-center justify-center">
//                       <Icon size={20} className="text-blue-700 group-hover:text-white transition-colors duration-300" />
//                     </div>
//                     <div>
//                       <p className="text-[10px] text-slate-500 uppercase tracking-wider">{item.title}</p>
//                       <h4 className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors duration-300 text-sm">
//                         {item.value}
//                       </h4>
//                     </div>
//                     <ArrowRight size={14} className="ml-auto text-slate-300 group-hover:text-blue-600 transition-colors duration-300" />
//                   </motion.a>
//                 );
//               })}
//             </motion.div>

//             {/* Working Hours */}

//             {/* Image */}
//             <motion.div
//               className="mt-6 rounded-xl overflow-hidden shadow-lg"
//               initial={{ opacity: 0, scale: 0.95 }}
//               animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
//               transition={{ duration: 0.6, delay: 0.5 }}
//               whileHover={{ scale: 1.02 }}
//             >
//               <img
//                 src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200"
//                 alt="Office"
//                 className="w-full h-40 object-cover"
//               />
//             </motion.div>
//           </motion.div>

//           {/* Right Side - Form */}
//           <motion.form
//             className="bg-white rounded-2xl p-8 shadow-2xl border border-slate-200 space-y-4 relative overflow-hidden"
//             initial={{ opacity: 0, x: 30 }}
//             animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
//             transition={{ duration: 0.6 }}
//             onSubmit={handleSubmit}
//           >
//             {/* Top accent */}
//             <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-blue-400" />

//             <div className="flex items-center gap-2.5 mb-4">
//               <div className="w-1 h-5 bg-blue-600 rounded-full" />
//               <h3 className="text-lg font-bold text-slate-900">Send a Message</h3>
//             </div>

//             <motion.div
//               initial={{ opacity: 0, y: 10 }}
//               animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
//               transition={{ duration: 0.5, delay: 0.2 }}
//             >
//               <label className="font-medium text-xs text-slate-700 mb-1 block">Full Name</label>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 placeholder="John Doe"
//                 className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 text-sm"
//                 required
//               />
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, y: 10 }}
//               animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
//               transition={{ duration: 0.5, delay: 0.25 }}
//             >
//               <label className="font-medium text-xs text-slate-700 mb-1 block">Email Address</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="john@example.com"
//                 className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 text-sm"
//                 required
//               />
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, y: 10 }}
//               animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
//               transition={{ duration: 0.5, delay: 0.3 }}
//             >
//               <label className="font-medium text-xs text-slate-700 mb-1 block">Phone Number</label>
//               <input
//                 type="tel"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 placeholder="+91 XXXXX XXXXX"
//                 className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 text-sm"
//               />
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, y: 10 }}
//               animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
//               transition={{ duration: 0.5, delay: 0.35 }}
//             >
//               <label className="font-medium text-xs text-slate-700 mb-1 block">Message</label>
//               <textarea
//                 rows={3}
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 placeholder="Write your message..."
//                 className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 resize-none text-sm"
//                 required
//               />
//             </motion.div>

//             <motion.button
//               type="submit"
//               className="relative w-full py-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold shadow-md shadow-blue-600/30 hover:shadow-blue-600/50 transition-all duration-300 overflow-hidden group text-sm"
//               initial={{ opacity: 0, y: 10 }}
//               animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
//               transition={{ duration: 0.5, delay: 0.4 }}
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//             >
//               <span className="relative z-10 flex items-center justify-center gap-2">
//                 {isSubmitted ? (
//                   <>
//                     <CheckCircle size={16} />
//                     Message Sent!
//                   </>
//                 ) : (
//                   <>
//                     <Send size={16} />
//                     Send Message
//                   </>
//                 )}
//               </span>
//               <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//             </motion.button>

//             {/* Success message */}
//             {isSubmitted && (
//               <motion.div
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 className="text-center text-xs text-green-600 font-medium"
//               >
//                 ✓ Your message has been sent successfully!
//               </motion.div>
//             )}
//           </motion.form>
//         </div>
//       </div>
//     </motion.section>
//   );
// }

// export default Contact;





import { Mail, Phone, MapPin, Send, Clock, CheckCircle, ArrowRight, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { sendContactEmail } from "../utils/sendEmail";

const details = [
  { icon: Mail, title: "Email", value: "info@lighthouseinc.in", link: "mailto:info@lighthouseinc.in" },
  { icon: Phone, title: "Phone", value: "+91 92512 29571", link: "tel:+919251229571" },
  { icon: MapPin, title: "Location", value: "Jaipur, Rajasthan", link: "#" },
];

function Contact() {
  const { ref, isVisible } = useScrollAnimation();
  const formRef = useRef(null);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Honeypot check - if this hidden field is filled, it's a bot
    if (formRef.current.botcheck.value) return;

    setStatus("sending");
    setErrorMsg("");

    try {
      await sendContactEmail(formRef.current);
      setStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
      formRef.current.reset();
      setTimeout(() => setStatus("idle"), 4000);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err?.text || err?.message || "Something went wrong. Please try again.");
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="py-10 bg-white relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-50 rounded-full blur-3xl opacity-30" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
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
            Get In Touch
          </motion.span>
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-slate-900"
            initial={{ opacity: 0, y: 10 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Let's Start A <span className="text-blue-600">Conversation</span>
          </motion.h2>
          <motion.p
            className="text-lg mt-5 max-w-2xl mx-auto text-slate-600"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Have questions about training, placement, or hiring solutions? We'd love to hear from you.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Contact Info (unchanged) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h3
              className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-3"
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="w-1 h-6 bg-blue-600 rounded-full" />
              Contact Information
            </motion.h3>

            <motion.div
              className="space-y-3.5"
              variants={containerVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
            >
              {details.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={item.title}
                    href={item.link}
                    variants={itemVariants}
                    className="group bg-white rounded-xl p-4 border border-slate-200 flex items-center gap-4 shadow-sm hover:shadow-xl transition-all duration-300 hover:border-blue-300 hover:scale-[1.02]"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-11 h-11 rounded-lg bg-blue-100 group-hover:bg-blue-600 transition-colors duration-300 flex items-center justify-center">
                      <Icon size={20} className="text-blue-700 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-500 uppercase tracking-wider">{item.title}</p>
                      <h4 className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors duration-300 text-sm">
                        {item.value}
                      </h4>
                    </div>
                    <ArrowRight size={14} className="ml-auto text-slate-300 group-hover:text-blue-600 transition-colors duration-300" />
                  </motion.a>
                );
              })}
            </motion.div>

            <motion.div
              className="mt-6 rounded-xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ scale: 1.02 }}
            >
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200"
                alt="Office"
                className="w-full h-40 object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.form
            ref={formRef}
            className="bg-white rounded-2xl p-8 shadow-2xl border border-slate-200 space-y-4 relative overflow-hidden"
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-blue-400" />

            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-1 h-5 bg-blue-600 rounded-full" />
              <h3 className="text-lg font-bold text-slate-900">Send a Message</h3>
            </div>

            {/* Honeypot - hidden from real users, bots fill it in */}
            <input type="text" name="botcheck" tabIndex="-1" autoComplete="off" className="hidden" />

            <motion.div initial={{ opacity: 0, y: 10 }} animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }} transition={{ duration: 0.5, delay: 0.2 }}>
              <label className="font-medium text-xs text-slate-700 mb-1 block">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 text-sm"
                required
              />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 10 }} animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }} transition={{ duration: 0.5, delay: 0.25 }}>
              <label className="font-medium text-xs text-slate-700 mb-1 block">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 text-sm"
                required
              />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 10 }} animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }} transition={{ duration: 0.5, delay: 0.3 }}>
              <label className="font-medium text-xs text-slate-700 mb-1 block">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 XXXXX XXXXX"
                className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 text-sm"
              />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 10 }} animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }} transition={{ duration: 0.5, delay: 0.35 }}>
              <label className="font-medium text-xs text-slate-700 mb-1 block">Message</label>
              <textarea
                rows={3}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 resize-none text-sm"
                required
              />
            </motion.div>

            <motion.button
              type="submit"
              disabled={status === "sending"}
              className="relative w-full py-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold shadow-md shadow-blue-600/30 hover:shadow-blue-600/50 transition-all duration-300 overflow-hidden group text-sm disabled:opacity-60 disabled:cursor-not-allowed"
              initial={{ opacity: 0, y: 10 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: status === "sending" ? 1 : 1.02 }}
              whileTap={{ scale: status === "sending" ? 1 : 0.98 }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {status === "success" ? (
                  <>
                    <CheckCircle size={16} />
                    Message Sent!
                  </>
                ) : status === "sending" ? (
                  "Sending..."
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>

            {status === "success" && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-center text-xs text-green-600 font-medium">
                ✓ Your message has been sent successfully!
              </motion.div>
            )}
            {status === "error" && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center justify-center gap-1.5 text-center text-xs text-red-600 font-medium">
                <AlertCircle size={14} /> {errorMsg}
              </motion.div>
            )}
          </motion.form>
        </div>
      </div>
    </motion.section>
  );
}

export default Contact;