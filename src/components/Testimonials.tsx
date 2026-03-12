'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const reviews = [
  {
    name: 'Dee Patterson',
    text: 'Excellent, friendly personalised service from Diana. My dog looks absolutely amazing and was treated with so much kindness. Will definitely be back!',
    stars: 5,
    avatar: 'D',
  },
  {
    name: 'Kadrija Markuna',
    text: '10 out of five stars. Very professional and sweet craftswoman. My cat came back looking like royalty. Highly recommend Ķepu SPA to every pet owner.',
    stars: 5,
    avatar: 'K',
  },
  {
    name: 'attlas567',
    text: 'Wonderful experience! The salon is calm and welcoming. You can tell they genuinely love animals here. Our puppy was completely relaxed throughout.',
    stars: 5,
    avatar: 'A',
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < count ? 'text-amber-400' : 'text-gray-200'} aria-hidden="true">
          ★
        </span>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="py-24 px-6 bg-cream" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="text-sm font-medium text-accent tracking-widest uppercase mb-4 block">
            Google Reviews
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-dark mb-4">
            What Pet Owners <span className="text-primary italic">Say</span>
          </h2>
          <div className="flex items-center justify-center gap-2">
            <span className="text-amber-400 text-xl">★★★★★</span>
            <span className="font-semibold text-dark">4.4</span>
            <span className="text-dark/40 text-sm">· 14 Google Reviews</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              className="p-8 rounded-3xl bg-white/90 border border-accent/20 shadow-sm hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 + i * 0.12, duration: 0.6 }}
            >
              <Stars count={r.stars} />
              <p className="mt-4 mb-6 text-dark/65 text-sm leading-relaxed italic">
                &ldquo;{r.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-primary/20 text-primary font-semibold text-sm flex items-center justify-center">
                  {r.avatar}
                </div>
                <span className="text-dark font-medium text-sm">{r.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
