'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const services = [
  {
    icon: '🛁',
    title: 'Full Grooming Package',
    desc: 'Complete care including bath, blow-dry, haircut, nail trim, ear cleaning, and finishing touches.',
    tag: 'Most Popular',
  },
  {
    icon: '💨',
    title: 'Express Bath & Blow-Dry',
    desc: 'A thorough wash and professional blow-dry to leave your pet fresh, clean, and fluffy.',
    tag: null,
  },
  {
    icon: '✂️',
    title: 'Nail Clipping',
    desc: 'Careful and precise nail trimming to keep your pet comfortable and floors scratch-free.',
    tag: null,
  },
  {
    icon: '👂',
    title: 'Ear Cleaning',
    desc: 'Gentle ear cleaning to prevent infections and keep your pet healthy and comfortable.',
    tag: null,
  },
  {
    icon: '🐶',
    title: "Puppy's First Groom",
    desc: 'A gentle, fun introduction to grooming for puppies. We make their first time a positive memory.',
    tag: 'Gentle & Slow',
  },
  {
    icon: '🌿',
    title: 'De-shedding Treatment',
    desc: 'Specialized treatment to reduce shedding, remove loose undercoat, and improve coat health.',
    tag: null,
  },
]

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      id="services"
      className="py-24 px-6"
      style={{ background: 'linear-gradient(180deg, #FAF7F2 0%, #F5EEE4 100%)' }}
      ref={ref}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="text-sm font-medium text-accent tracking-widest uppercase mb-4 block">
            What We Offer
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-dark">
            Our <span className="text-primary italic">Services</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              className="relative group p-7 rounded-3xl bg-white/80 backdrop-blur border border-accent/15 hover:border-accent/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-default"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.08, duration: 0.6 }}
            >
              {s.tag && (
                <span className="absolute top-4 right-4 text-xs px-3 py-1 rounded-full bg-sage/30 text-dark/70 font-medium">
                  {s.tag}
                </span>
              )}
              <div className="text-4xl mb-4" aria-hidden="true">{s.icon}</div>
              <h3 className="font-serif font-semibold text-dark text-xl mb-3">{s.title}</h3>
              <p className="text-dark/55 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <p className="text-dark/50 text-sm">
            Prices available upon request ·{' '}
            <a href="tel:20097009" className="text-primary hover:underline">Call 20 097 009</a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
