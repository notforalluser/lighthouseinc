import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { CheckCircle } from "lucide-react";
import aboutImage from "../assets/about.jpeg"; // replace with your actual image

function About() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} id="about" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side - Sticky Image */}
          <motion.div
            className="lg:sticky lg:top-28 self-start"
            initial={{ opacity: 0, x: -40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.8 }}
          >
            <motion.img
              src={aboutImage}
              className="rounded-3xl shadow-2xl w-full object-cover h-[420px] lg:h-[460px]"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>

          {/* Right Side - Expanded Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.8 }}
            className="space-y-5"
          >
            <div>
              <motion.span
                className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full mb-3"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
              >
                ABOUT US
              </motion.span>
              <motion.h2
                className="text-3xl md:text-4xl font-bold text-slate-900 mt-3"
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                We Help Learners Get Hired
              </motion.h2>
            </div>

            {/* Main About Text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-slate-600 leading-relaxed space-y-1 text-[17px]"
            >
              <p>
                At Lighthouse Inc., we believe every individual deserves the right tools and
                opportunities to build a fulfilling career. We aren't just a placement company;
                we are your dedicated career partners. From comprehensive skill development to
                interview preparation, we empower job seekers to bridge the gap between their
                current abilities and their dream roles.
              </p>
            </motion.div>



            {/* Building Tomorrow’s Workforce */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="bg-slate-50 border border-slate-100 rounded-3xl p-8"
            >
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">Building Tomorrow’s Workforce</h3>
              <p className="text-slate-600 leading-relaxed">
                Lighthouse Inc. is a premier training and talent acquisition firm dedicated to
                transforming raw potential into industry-ready professionals. We partner with
                businesses to identify their skill requirements and supply them with highly
                qualified, well-trained candidates, minimizing hiring time and onboarding costs.
              </p>
            </motion.div>

            {/* Why Choose Us */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">Why Choose Us</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Pre-Vetted Talent</p>
                    <p className="text-slate-600 mt-1">
                      We rigorously screen and train candidates to ensure they meet your exact technical and cultural requirements.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Custom Corporate Training</p>
                    <p className="text-slate-600 mt-1">
                      We work with organizations to upskill existing employees, fostering continuous growth and adaptability.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Industry Alignment</p>
                    <p className="text-slate-600 mt-1">
                      Our curriculum is continuously updated in consultation with industry leaders to mirror the latest technological and business trends.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;