import { 
    Mail, 
    Phone, 
    MapPin, 
    Building2, 
    Award, 
    Users, 
    Briefcase, 
    ChevronRight, 
    Sparkles, 
    Clock, 
    Globe
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import logo from '../assets/logo.png';

function Footer() {
    const { ref, isVisible } = useScrollAnimation();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.1 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    // Custom social icons using SVG
    const SocialIcon = ({ children, href }) => (
        <motion.a
            href={href}
            className="p-2 bg-slate-700/50 hover:bg-blue-600 rounded-lg transition-all duration-300 hover:scale-110"
            whileHover={{ y: -2 }}
            target="_blank"
            rel="noopener noreferrer"
        >
            {children}
        </motion.a>
    );

    return (
        <motion.footer
            ref={ref}
            className="relative bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white pt-20 pb-6 border-t border-blue-500/20"
        >
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-transparent to-blue-600/5 pointer-events-none" />

            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />

            <div className="relative max-w-7xl mx-auto px-6">
                <motion.div
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isVisible ? 'visible' : 'hidden'}
                >
                    {/* Brand Column */}
                    <motion.div variants={itemVariants} className="space-y-4">
                        <div className="flex items-center gap-3">
                            <div>
                                <img src={logo} alt="Lighthouse Logo" className="w-16 h-16 object-contain" />
                            </div>
                            {/* <h2 className="text-2xl font-bold tracking-tight">
                                <span className="text-white">Lighthouse Inc.</span>
                                <span className="text-blue-500">.</span>
                            </h2> */}
                        </div>
                        
                        <div className="flex flex-wrap gap-2 pt-1">
                            <span className="inline-flex items-center gap-1.5 bg-blue-600/20 border border-blue-500/30 px-3 py-1 rounded-full text-xs font-medium text-blue-300">
                                <Award size={12} />
                                MSME Registered
                            </span>
                            <span className="inline-flex items-center gap-1.5 bg-slate-700/50 border border-slate-600 px-3 py-1 rounded-full text-xs font-medium text-slate-300">
                                <Sparkles size={12} className="text-blue-400" />
                                ISO Certified
                            </span>
                        </div>
                        {/* Social Links */}
                        <div className="flex gap-2 pt-2">
                            <SocialIcon href="#">
                                <svg className="w-4 h-4 text-slate-300 hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                </svg>
                            </SocialIcon>
                            <SocialIcon href="#">
                                <svg className="w-4 h-4 text-slate-300 hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.104c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0021.95-5.052 14.04 14.04 0 002.112-7.542c0-.257-.006-.514-.018-.77A9.98 9.98 0 0024 4.59z"/>
                                </svg>
                            </SocialIcon>
                            <SocialIcon href="#">
                                <svg className="w-4 h-4 text-slate-300 hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                                </svg>
                            </SocialIcon>
                            <SocialIcon href="#">
                                <svg className="w-4 h-4 text-slate-300 hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.205 11.387.6.113.82-.26.82-.58 0-.287-.01-1.05-.015-2.06-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.082-.73.082-.73 1.205.085 1.838 1.237 1.838 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.776.418-1.306.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.123-.3-.535-1.52.117-3.16 0 0 1.008-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.29-1.552 3.297-1.23 3.297-1.23.653 1.64.24 2.86.118 3.16.768.84 1.233 1.91 1.233 3.22 0 4.61-2.804 5.62-5.476 5.92.43.37.824 1.102.824 2.22 0 1.602-.015 2.894-.015 3.287 0 .322.216.698.825.578C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12z"/>
                                </svg>
                            </SocialIcon>
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div variants={itemVariants}>
                        <h3 className="font-semibold text-sm uppercase tracking-wider text-blue-400 mb-5">
                            Quick Links
                        </h3>
                        <ul className="space-y-2.5">
                            {['About Us', 'Our Services', 'Contact', 'Careers', 'Blog'].map((item) => (
                                <li key={item}>
                                    <motion.a
                                        href={`#${item.toLowerCase().replace(' ', '')}`}
                                        className="group flex items-center gap-2 text-slate-300 hover:text-white transition-all duration-300 text-sm"
                                        whileHover={{ x: 4 }}
                                    >
                                        <ChevronRight size={12} className="text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        {item}
                                    </motion.a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Services */}
                    <motion.div variants={itemVariants}>
                        <h3 className="font-semibold text-sm uppercase tracking-wider text-blue-400 mb-5">
                            Our Services
                        </h3>
                        <ul className="space-y-2.5">
                            {[
                                { icon: Users, label: 'Corporate Training' },
                                { icon: Briefcase, label: 'Placement Support' },
                                { icon: Award, label: 'Talent Acquisition' },
                                { icon: Clock, label: 'Interview Coaching' },
                            ].map(({ icon: Icon, label }) => (
                                <li key={label}>
                                    <motion.div
                                        className="group flex items-center gap-3 text-slate-300 hover:text-white cursor-pointer transition-all duration-300 text-sm"
                                        whileHover={{ x: 4 }}
                                    >
                                        <Icon size={14} className="text-blue-400 group-hover:scale-110 transition-transform" />
                                        {label}
                                    </motion.div>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div variants={itemVariants}>
                        <h3 className="font-semibold text-sm uppercase tracking-wider text-blue-400 mb-5">
                            Get in Touch
                        </h3>
                        <div className="space-y-3">
                            <motion.a
                                href="mailto:lighthouseinc@gmail.com"
                                className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group text-sm"
                                whileHover={{ x: 4 }}
                            >
                                <div className="p-1.5 bg-blue-600/20 rounded-lg group-hover:bg-blue-600/40 transition-colors flex-shrink-0">
                                    <Mail size={16} className="text-blue-400" />
                                </div>
                                <span className="break-all">info@lighthouseinc.in</span>
                            </motion.a>
                            <motion.a
                                href="tel:+919251229571"
                                className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group text-sm"
                                whileHover={{ x: 4 }}
                            >
                                <div className="p-1.5 bg-blue-600/20 rounded-lg group-hover:bg-blue-600/40 transition-colors flex-shrink-0">
                                    <Phone size={16} className="text-blue-400" />
                                </div>
                                <span>+91 92512 29571</span>
                            </motion.a>
                            <motion.div
                                className="flex items-center gap-3 text-slate-300 group text-sm"
                                whileHover={{ x: 4 }}
                            >
                                <div className="p-1.5 bg-blue-600/20 rounded-lg group-hover:bg-blue-600/40 transition-colors flex-shrink-0">
                                    <MapPin size={16} className="text-blue-400" />
                                </div>
                                <span>Jaipur, Rajasthan</span>
                            </motion.div>
                            <motion.div
                                className="flex items-center gap-3 text-slate-300 group text-sm"
                                whileHover={{ x: 4 }}
                            >
                                <div className="p-1.5 bg-blue-600/20 rounded-lg group-hover:bg-blue-600/40 transition-colors flex-shrink-0">
                                    <Globe size={16} className="text-blue-400" />
                                </div>
                                <span>www.lighthouseinc.in</span>
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Footer Bottom */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <hr className="border-slate-700/50 my-8" />
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-slate-400 text-xs">
                        <span>© 2026 Lighthouse Inc. All Rights Reserved</span>
                        <div className="flex items-center gap-6">
                            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                            <div className="flex items-center gap-2">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                                </span>
                                <span className="text-slate-500">Live</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.footer>
    );
}

export default Footer;