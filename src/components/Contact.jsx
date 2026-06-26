// import { Mail, Phone, MapPin } from "lucide-re
// ";
// import { motion } from "framer-motion";
// import SectionHeading from "./SectionHeading";
// import { useScrollAnimation } from "../hooks/useScrollAnimation";

// const details = [
//   {
//     icon: Mail,
//     title: "Email",
//     value: "lighthouseinc@gmail.com",
//   },
//   {
//     icon: Phone,
//     title: "Phone",
//     value: "+91 92512 29571",
//   },
//   {
//     icon: MapPin,
//     title: "Location",
//     value: "Jaipur, Rajasthan",
//   },
// ];

// function Contact() {
//   const { ref, isVisible } = useScrollAnimation();

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
//       transition: { duration: 0.6, ease: "easeOut" },
//     },
//   };

//   return (
//     <motion.section
//       ref={ref}
//       id="contact"
//       className="py-28 bg-gradient-to-b from-red-50/30 via-white to-slate-50"
//       initial={{ opacity: 0 }}
//       animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
//       transition={{ duration: 0.6 }}
//     >
//       <div className="max-w-7xl mx-auto px-6">
//         <SectionHeading
//           subtitle="Get In Touch"
//           title="Let's Start A Conversation"
//           description="Have questions about training, placement, or hiring solutions? We'd love to hear from you."
//         />

//         <div className="grid lg:grid-cols-2 gap-16 items-start">
//           <motion.div
//             initial={{ opacity: 0, x: -40 }}
//             animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
//             transition={{ duration: 0.7 }}
//           >
//             <motion.h3 className="text-3xl font-bold mb-10"
//               initial={{ opacity: 0 }}
//               animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
//               transition={{ duration: 0.6, delay: 0.1 }}
//             >
//               Contact Information
//             </motion.h3>

//             <motion.div className="space-y-6" variants={containerVariants} initial="hidden" animate={isVisible ? "visible" : "hidden"}>
//               {details.map((item) => {
//                 const Icon = item.icon;
//                 return (
//                   <motion.div
//                     key={item.title}
//                     variants={itemVariants}
//                     className="bg-white rounded-2xl p-5 border border-slate-100 flex items-center gap-5 shadow-sm card-hover hover:shadow-lg transition-shadow"
//                     whileHover={{ x: 5 }}
//                   >
//                     <div className="w-14 h-14 rounded-xl bg-red-100 flex justify-center items-center">
//                       <Icon size={26} className="text-red-700" />
//                     </div>
//                     <div>
//                       <p className="text-sm text-slate-500">{item.title}</p>
//                       <h4 className="font-semibold">{item.value}</h4>
//                     </div>
//                   </motion.div>
//                 );
//               })}
//             </motion.div>

//             <motion.div className="mt-10"
//               initial={{ opacity: 0, y: 20 }}
//               animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//               transition={{ duration: 0.6, delay: 0.5 }}
//               whileHover={{ scale: 1.02 }}
//             >
//               <img
//                 src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200"
//                 className="rounded-3xl shadow-xl"
//               />
//             </motion.div>
//           </motion.div>

//           <motion.form
//             className="bg-white rounded-3xl p-10 shadow-lg border border-slate-100 space-y-6"
//             initial={{ opacity: 0, x: 40 }}
//             animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
//             transition={{ duration: 0.7 }}
//           >
//             <motion.div
//               initial={{ opacity: 0, y: 10 }}
//               animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
//               transition={{ duration: 0.5, delay: 0.2 }}
//             >
//               <label className="font-medium mb-2 block">Full Name</label>
//               <input
//                 type="text"
//                 placeholder="John Doe"
//                 className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-transparent focus:outline-none focus:ring-2 focus:ring-red-600"
//               />
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, y: 10 }}
//               animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
//               transition={{ duration: 0.5, delay: 0.25 }}
//             >
//               <label className="font-medium mb-2 block">Email Address</label>
//               <input
//                 type="email"
//                 placeholder="john@example.com"
//                 className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-transparent focus:outline-none focus:ring-2 focus:ring-red-600"
//               />
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, y: 10 }}
//               animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
//               transition={{ duration: 0.5, delay: 0.3 }}
//             >
//               <label className="font-medium mb-2 block">Phone Number</label>
//               <input
//                 type="text"
//                 placeholder="+91 XXXXX XXXXX"
//                 className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-transparent focus:outline-none focus:ring-2 focus:ring-red-600"
//               />
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, y: 10 }}
//               animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
//               transition={{ duration: 0.5, delay: 0.35 }}
//             >
//               <label className="font-medium mb-2 block">Message</label>
//               <textarea
//                 rows={5}
//                 placeholder="Write your message..."
//                 className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-transparent resize-none focus:outline-none focus:ring-2 focus:ring-red-600"
//               ></textarea>
//             </motion.div>

//             <motion.button
//               className="w-full py-4 rounded-xl bg-gradient-to-r from-red-700 to-red-500 text-white font-semibold hover:opacity-90 duration-300 shadow-lg"
//               initial={{ opacity: 0, y: 10 }}
//               animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
//               transition={{ duration: 0.5, delay: 0.4 }}
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//             >
//               Send Message
//             </motion.button>
//           </motion.form>
//         </div>
//       </div>
//     </motion.section>
//   );
// }

// export default Contact;




import { Mail, Phone, MapPin, Send, Clock, CheckCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const details = [
  {
    icon: Mail,
    title: "Email",
    value: "lighthouseinc@gmail.com",
    link: "mailto:lighthouseinc@gmail.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+91 92512 29571",
    link: "tel:+919251229571",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Jaipur, Rajasthan",
    link: "#",
  },
];

const workingHours = [
  { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
  { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
  { day: "Sunday", hours: "Closed" },
];

function Contact() {
  const { ref, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="py-28 bg-white relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-50 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-red-50 rounded-full blur-3xl opacity-30" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <p className="uppercase tracking-[3px] text-red-600 font-semibold text-[11px]">
            Get In Touch
          </p>
          <h2 className="heading-font text-3xl md:text-4xl font-bold mt-3 text-slate-900">
            Let's Start A <span className="text-red-600">Conversation</span>
          </h2>
          <p className="mt-3 text-slate-600 text-sm max-w-2xl mx-auto">
            Have questions about training, placement, or hiring solutions? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Contact Info */}
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
              <span className="w-1 h-6 bg-red-600 rounded-full" />
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
                    className="group bg-white rounded-xl p-4 border border-slate-200 flex items-center gap-4 shadow-sm hover:shadow-xl transition-all duration-300 hover:border-red-300 hover:scale-[1.02]"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-11 h-11 rounded-lg bg-red-100 group-hover:bg-red-600 transition-colors duration-300 flex items-center justify-center">
                      <Icon size={20} className="text-red-700 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-500 uppercase tracking-wider">{item.title}</p>
                      <h4 className="font-semibold text-slate-900 group-hover:text-red-600 transition-colors duration-300 text-sm">
                        {item.value}
                      </h4>
                    </div>
                    <ArrowRight size={14} className="ml-auto text-slate-300 group-hover:text-red-600 transition-colors duration-300" />
                  </motion.a>
                );
              })}
            </motion.div>

            {/* Working Hours */}

            {/* Image */}
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
            className="bg-white rounded-2xl p-8 shadow-2xl border border-slate-200 space-y-4 relative overflow-hidden"
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
          >
            {/* Top accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 to-red-400" />

            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-1 h-5 bg-red-600 rounded-full" />
              <h3 className="text-lg font-bold text-slate-900">Send a Message</h3>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label className="font-medium text-xs text-slate-700 mb-1 block">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300 text-sm"
                required
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              <label className="font-medium text-xs text-slate-700 mb-1 block">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300 text-sm"
                required
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <label className="font-medium text-xs text-slate-700 mb-1 block">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 XXXXX XXXXX"
                className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300 text-sm"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.5, delay: 0.35 }}
            >
              <label className="font-medium text-xs text-slate-700 mb-1 block">Message</label>
              <textarea
                rows={3}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300 resize-none text-sm"
                required
              />
            </motion.div>

            <motion.button
              type="submit"
              className="relative w-full py-3 rounded-lg bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold shadow-md shadow-red-600/30 hover:shadow-red-600/50 transition-all duration-300 overflow-hidden group text-sm"
              initial={{ opacity: 0, y: 10 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {isSubmitted ? (
                  <>
                    <CheckCircle size={16} />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>

            {/* Success message */}
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center text-xs text-green-600 font-medium"
              >
                ✓ Your message has been sent successfully!
              </motion.div>
            )}
          </motion.form>
        </div>
      </div>
    </motion.section>
  );
}

export default Contact;