'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const values = [
  { icon: '🐾', title: 'Individuāla pieeja', desc: 'Katrs mājdzīvnieks ir īpašs. Mēs pielāgojam katru apmeklējumu tieši tava drauga rakstura un vajadzībām.' },
  { icon: '✂️', title: 'Profesionāla kopšana', desc: 'Pieredzējuši frizieri, kas strādā ar visām šķirnēm un spalvas tipiem.' },
  { icon: '💆', title: 'Mierīga vide', desc: 'Klusa un maiga atmosfēra, kas nodrošina relaksāciju pat visaizkaitināmākajiem mājdzīvniekiem.' },
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
              Mūsu stāsts
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-dark leading-tight mb-6">
              Patvērums
              <br />
              <span className="text-primary italic">tavam mīļajam mazulim</span>
            </h2>
            <p className="text-dark/65 leading-relaxed mb-6 text-base">
              Ķepu SPA dzima no vienas vienkāršas pārliecības — mājdzīvnieki ir pelnījuši tādu pašu
              rūpību un uzmanību kā mēs paši. Sieviešu vadīts salons ir mierīgs patvērums, kur dzīvnieki
              jūtas droši, ērti un patiesi mīlēti.
            </p>
            <p className="text-dark/65 leading-relaxed mb-8 text-base">
              Diāna un komanda velta laiku, lai izprastu katra mājdzīvnieka individuālās vajadzības,
              nodrošinot, ka katrs apmeklējums ir pozitīva un bezstresa pieredze. Mēs specializējamies
              suņu un kaķu kopšanā — visās šķirnēs, izmēros un raksturos.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-primary font-medium hover:gap-4 transition-all duration-200"
            >
              Iepazīstieties ar mums →
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
