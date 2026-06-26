import { Compass, Eye } from 'lucide-react'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const cards = [
{
title:'Our Mission',
description:'To empower learners with real-world skills and provide employers access to talent built for today\'s digital workforce.',
icon:Compass,
gradient:'from-red-50 to-white'
},
{
title:'Our Vision',
description:'A future where skill, opportunity and hiring are connected through learning experiences that work for every learner and employer.',
icon:Eye,
gradient:'from-orange-50 to-white'
}
]

function MissionVision(){
const { ref, isVisible } = useScrollAnimation();

const containerVariants = {
hidden: { opacity: 0 },
visible: {
opacity: 1,
transition: { staggerChildren: 0.2, delayChildren: 0.1 },
},
};

const itemVariants = {
hidden: { opacity: 0, y: 30 },
visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

return (
<section ref={ref} className='py-28 bg-gradient-to-b from-red-50/40 via-white to-slate-50'>
<div className='max-w-7xl mx-auto px-6'>
<motion.div className='grid md:grid-cols-2 gap-8' variants={containerVariants} initial="hidden" animate={isVisible ? 'visible' : 'hidden'}>
{
cards.map((item)=>{
const Icon=item.icon
return(
<motion.div
key={item.title}
variants={itemVariants}
className={`bg-gradient-to-br ${item.gradient} rounded-3xl p-10 shadow-lg border border-slate-100 card-hover hover:shadow-xl transition-shadow`}
whileHover={{ y: -5 }}
>
<motion.div className='w-16 h-16 rounded-2xl bg-red-100 flex items-center justify-center mb-6' initial={{ scale: 0, rotate: -45 }} animate={isVisible ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -45 }} transition={{ duration: 0.5, type: 'spring' }}>
<Icon size={30} className='text-red-700' />
</motion.div>

<motion.h2 className='heading-font text-3xl mb-4' initial={{ opacity: 0 }} animate={isVisible ? { opacity: 1 } : { opacity: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
{item.title}
</motion.h2>

<motion.p className='text-slate-600 leading-7' initial={{ opacity: 0 }} animate={isVisible ? { opacity: 1 } : { opacity: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
{item.description}
</motion.p>
</motion.div>
)
})
}
</motion.div>
</div>
</section>
)
}

export default MissionVision
