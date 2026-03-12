'use client'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background:
          'linear-gradient(135deg, #FAF7F2 0%, #F0E8DC 30%, #E8D5C4 60%, #D4C5B5 100%)',
      }}
    >
      {/* Decorative blobs */}
      <div
        className="absolute top-20 left-10 w-64 h-64 rounded-full opacity-30 blur-3xl"
        style={{ background: '#A8B8A0' }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-20 right-10 w-80 h-80 rounded-full opacity-20 blur-3xl"
        style={{ background: '#D4A5A5' }}
        aria-hidden="true"
      />

      {/* Paw print decorations */}
      <div className="absolute top-32 right-20 text-6xl opacity-10 rotate-12 select-none" aria-hidden="true">🐾</div>
      <div className="absolute bottom-40 left-16 text-5xl opacity-10 -rotate-6 select-none" aria-hidden="true">🐾</div>
      <div className="absolute top-1/2 right-8 text-3xl opacity-10 rotate-45 select-none" aria-hidden="true">🐾</div>

      <div className="relative z-10 text-center max-w-3xl mx-auto px-6 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm text-primary text-sm font-medium mb-8 border border-accent/30">
            <span>🐾</span> Profesionāla dzīvnieku frizētava · Rīga, Latvija
          </span>
        </motion.div>

        <motion.h1
          className="font-serif text-5xl md:text-7xl font-semibold text-dark leading-tight mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
        >
          Tavs mājdzīvnieks
          <br />
          <span className="text-primary italic">ir pelnījis SPA dienu</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-dark/60 mb-10 max-w-xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
        >
          Profesionāla kopšana ar mīlestību un rūpību Rīgas sirdī
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: 'easeOut' }}
        >
          <a
            href="#contact"
            className="px-8 py-4 rounded-full bg-primary text-cream font-medium text-base hover:bg-accent hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/20"
          >
            Pierakstīties vizītei
          </a>
          <a
            href="tel:20097009"
            className="px-8 py-4 rounded-full border-2 border-primary text-primary font-medium text-base hover:bg-primary hover:text-cream transition-all duration-300"
          >
            📞 20 097 009
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="mt-20 flex flex-col items-center gap-2 text-dark/30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <span className="text-xs tracking-widest uppercase">Ritināt</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-px h-8 bg-dark/20"
          />
        </motion.div>
      </div>
    </section>
  )
}
