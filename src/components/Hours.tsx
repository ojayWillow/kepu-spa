'use client'
import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

const schedule = [
  { day: 'Monday', hours: '10:00 – 20:00', open: true },
  { day: 'Tuesday', hours: '10:00 – 20:00', open: true },
  { day: 'Wednesday', hours: '10:00 – 20:00', open: true },
  { day: 'Thursday', hours: '10:00 – 20:00', open: true },
  { day: 'Friday', hours: '10:00 – 20:00', open: true },
  { day: 'Saturday', hours: '10:00 – 18:00', open: true },
  { day: 'Sunday', hours: 'Closed', open: false },
]

function isCurrentlyOpen(): boolean {
  const now = new Date()
  const day = now.getDay() // 0 = Sunday
  const hour = now.getHours()
  const min = now.getMinutes()
  const time = hour + min / 60
  if (day === 0) return false // Sunday
  if (day >= 1 && day <= 5) return time >= 10 && time < 20
  if (day === 6) return time >= 10 && time < 18
  return false
}

export default function Hours() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(isCurrentlyOpen())
  }, [])

  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' })

  return (
    <section id="hours" className="py-24 px-6 bg-cream" ref={ref}>
      <div className="max-w-2xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="text-sm font-medium text-accent tracking-widest uppercase mb-4 block">
            Visit Us
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-dark mb-6">
            Opening <span className="text-primary italic">Hours</span>
          </h2>
          <span
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${
              open
                ? 'bg-sage/30 text-dark border border-sage/50'
                : 'bg-dusty/20 text-dark/60 border border-dusty/40'
            }`}
          >
            <span className={`w-2 h-2 rounded-full ${open ? 'bg-green-500' : 'bg-red-400'}`} />
            {open ? 'We\'re Open Now' : 'Currently Closed'}
          </span>
        </motion.div>

        <motion.div
          className="rounded-3xl bg-white/80 border border-accent/20 overflow-hidden shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          {schedule.map((row, i) => {
            const isToday = row.day === today
            return (
              <div
                key={row.day}
                className={`flex justify-between items-center px-8 py-4 ${
                  i < schedule.length - 1 ? 'border-b border-accent/15' : ''
                } ${
                  isToday ? 'bg-primary/5' : ''
                }`}
              >
                <span className={`font-medium text-sm ${
                  isToday ? 'text-primary font-semibold' : 'text-dark/70'
                }`}>
                  {row.day}
                  {isToday && <span className="ml-2 text-xs text-accent">(Today)</span>}
                </span>
                <span className={`text-sm ${
                  row.open ? 'text-dark/70' : 'text-dark/30 italic'
                }`}>
                  {row.hours}
                </span>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
