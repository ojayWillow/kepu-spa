'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const placeholders = [
  { color: '#E8D5C4', emoji: '🐩', label: 'Tikko sakopts pudelis' },
  { color: '#D4E8D4', emoji: '🐈', label: 'Laimīgs sakopts kaķis' },
  { color: '#E8E0D4', emoji: '🐕', label: 'Zelta retrīvers pēc mazgāšanas' },
  { color: '#D4D8E8', emoji: '🐾', label: 'Ķepu kopšanas procedūra' },
  { color: '#E8D4D4', emoji: '🐶', label: 'Kucēna pirmā frizētava' },
  { color: '#D4E8E4', emoji: '✂️', label: 'Profesionāla cirpšana' },
  { color: '#EEE4D4', emoji: '🛁', label: 'SPA vannošanas sesija' },
  { color: '#D8D4E8', emoji: '🐱', label: 'Relaksējoša kopšana' },
]

export default function Gallery() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      id="gallery"
      className="py-24 px-6"
      style={{ background: 'linear-gradient(180deg, #FAF7F2 0%, #F0E8DC 100%)' }}
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
            Galerija
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-dark">
            Mūsu <span className="text-primary italic">laimīgie klienti</span>
          </h2>
        </motion.div>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {placeholders.map((p, i) => (
            <motion.div
              key={i}
              className="break-inside-avoid rounded-2xl overflow-hidden group cursor-pointer"
              style={{ background: p.color }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.05 * i, duration: 0.5 }}
            >
              <div
                className="flex flex-col items-center justify-center p-8 hover:brightness-95 transition-all duration-300"
                style={{ minHeight: i % 3 === 0 ? '200px' : i % 3 === 1 ? '160px' : '220px' }}
              >
                <span className="text-5xl mb-2" aria-hidden="true">{p.emoji}</span>
                <span className="text-dark/40 text-xs text-center leading-tight">{p.label}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-center mt-10 text-dark/40 text-sm"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
        >
          Aizstājiet vietturus ar īstām fotogrāfijām vislabākajiem rezultātiem.
        </motion.p>
      </div>
    </section>
  )
}
