'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const services = [
  {
    icon: '🛁',
    title: 'Pilnā kopšanas pakotne',
    desc: 'Pilna aprūpe — mazgāšana, žāvēšana, cirpšana, nagu griešana, ausu tīrīšana un apdares darbi.',
    tag: 'Populārākais',
  },
  {
    icon: '💨',
    title: 'Ātrā mazgāšana un žāvēšana',
    desc: 'Rūpīga mazgāšana un profesionāla žāvēšana, lai tavs mājdzīvnieks izskatītos svaigs un pūkains.',
    tag: null,
  },
  {
    icon: '✂️',
    title: 'Nagu griešana',
    desc: 'Uzmanīga un precīza nagu apgriešana, lai mājdzīvnieks būtu ērts un grīdas — nesaskrāpētas.',
    tag: null,
  },
  {
    icon: '👂',
    title: 'Ausu tīrīšana',
    desc: 'Maiga ausu tīrīšana, lai novērstu infekcijas un uzturētu mājdzīvnieka veselību un komfortu.',
    tag: null,
  },
  {
    icon: '🐶',
    title: 'Kucēna pirmā frizētava',
    desc: 'Maiga un jautra ievads kopšanā kucēniem. Mēs parūpēsimies, lai pirmā reize būtu pozitīva atmiņa.',
    tag: 'Maigi un lēnām',
  },
  {
    icon: '🌿',
    title: 'Spalvas retināšanas procedūra',
    desc: 'Specializēta procedūra, lai samazinātu spalvas krišanu, noņemtu vaļīgo apakšspalvu un uzlabotu spalvas veselību.',
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
            Ko mēs piedāvājam
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-dark">
            Mūsu <span className="text-primary italic">pakalpojumi</span>
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
            Cenas pieejamas pēc pieprasījuma ·{' '}
            <a href="tel:20097009" className="text-primary hover:underline">Zvaniet: 20 097 009</a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
