'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const values = [
  { icon: '🐾', title: 'Personalized Care', desc: 'Every pet is unique. We tailor each session to your furry friend\'s personality and needs.' },
  { icon: '✂️', title: 'Professional Grooming', desc: 'Skilled groomers with years of experience working with all breeds and coat types.' },
  { icon: '💆', title: 'Stress-Free Experience', desc: 'A calm, gentle environment designed to keep even the most anxious pets relaxed.' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <span className="text-sm font-medium text-accent tracking-widest uppercase mb-4 block">
              Our Story
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-dark leading-tight mb-6">
              A Sanctuary for
              <br />
              <span className="text-primary italic">Your Beloved Pet</span>
            </h2>
            <p className="text-dark/65 leading-relaxed mb-6 text-base">
              Ķepu SPA was born from a simple belief — pets deserve the same quality of care and attention that we
              give ourselves. Women-owned and passionately run, our salon is a peaceful haven where animals feel
              safe, comfortable, and truly loved.
            </p>
            <p className="text-dark/65 leading-relaxed mb-8 text-base">
              Diana and the team take time to understand your pet's individual needs, ensuring every visit is
              a positive, stress-free experience. We specialize in dogs and cats of all breeds, sizes, and temperaments.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-primary font-medium hover:gap-4 transition-all duration-200"
            >
              Meet us in person →
            </a>
          </motion.div>

          {/* Values */}
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                className="flex gap-5 p-6 rounded-2xl bg-white/70 backdrop-blur-sm border border-accent/20 hover:border-accent/50 hover:shadow-md transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
              >
                <span className="text-3xl flex-shrink-0 mt-1" aria-hidden="true">{v.icon}</span>
                <div>
                  <h3 className="font-serif font-semibold text-dark text-lg mb-1">{v.title}</h3>
                  <p className="text-dark/60 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
