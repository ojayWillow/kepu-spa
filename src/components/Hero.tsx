'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background:
          'linear-gradient(135deg, #FAF7F2 0%, #F0E8DC 40%, #E8D5C4 100%)',
      }}
    >
      {/* Decorative blobs */}
      <div
        className="absolute top-20 left-10 w-64 h-64 rounded-full opacity-30 blur-3xl"
        style={{ background: '#A8B8A0' }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-20 left-1/3 w-80 h-80 rounded-full opacity-20 blur-3xl"
        style={{ background: '#D4A5A5' }}
        aria-hidden="true"
      />

      {/* Paw print decorations */}
      <div className="absolute top-32 left-8 text-5xl opacity-10 -rotate-6 select-none" aria-hidden="true">🐾</div>
      <div className="absolute bottom-40 left-1/4 text-3xl opacity-10 rotate-12 select-none" aria-hidden="true">🐾</div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-24 pb-16 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT — Text */}
        <div>
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
            className="font-serif text-5xl md:text-6xl lg:text-7xl font-semibold text-dark leading-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
          >
            Tavs mājdzīvnieks
            <br />
            <span className="text-primary italic">ir pelnījis SPA dienu</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-dark/60 mb-10 max-w-md leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          >
            Profesionāla kopšana ar mīlestību un rūpību Rīgas sirdī
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
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
            className="mt-16 flex flex-col items-start gap-2 text-dark/30"
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

        {/* RIGHT — Photo */}
        <motion.div
          className="relative hidden md:flex items-center justify-center"
          initial={{ opacity: 0, x: 40, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
        >
          {/* Soft glow behind image */}
          <div
            className="absolute inset-0 rounded-[2.5rem] blur-3xl opacity-40"
            style={{ background: 'radial-gradient(circle, #D4A5A5 0%, #A8B8A0 60%, transparent 100%)' }}
            aria-hidden="true"
          />

          {/* Floating paw badges */}
          <motion.div
            className="absolute -top-4 -right-4 bg-white/80 backdrop-blur-sm rounded-2xl px-4 py-2 shadow-lg border border-accent/20 text-sm font-medium text-dark z-10"
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
          >
            🐾 Profesionāla aprūpe
          </motion.div>
          <motion.div
            className="absolute -bottom-4 -left-4 bg-white/80 backdrop-blur-sm rounded-2xl px-4 py-2 shadow-lg border border-accent/20 text-sm font-medium text-dark z-10"
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut', delay: 0.5 }}
          >
            ⭐ 4.4 Google atsauksmes
          </motion.div>

          {/* Main image */}
          <div className="relative w-full max-w-lg aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/60">
            <Image
              src="/hero-pet.jpg"
              alt="Skaisti sakopts mājdzīvnieks Ķepu SPA salonā"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 0vw, 50vw"
            />
            {/* Fallback gradient shown while no real photo is added */}
            <div
              className="absolute inset-0 flex flex-col items-center justify-center gap-4"
              style={{ background: 'linear-gradient(160deg, #E8D5C4 0%, #D4C5B5 50%, #C4B5A8 100%)' }}
              aria-hidden="true"
            >
              <span className="text-8xl opacity-60">🐩</span>
              <p className="text-dark/40 text-sm font-medium tracking-wide">Pievieno savu foto → /public/hero-pet.jpg</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
