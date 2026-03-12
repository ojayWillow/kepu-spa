'use client'
import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const services = [
  'Full Grooming Package',
  'Express Bath & Blow-Dry',
  'Nail Clipping',
  'Ear Cleaning',
  "Puppy's First Groom",
  'De-shedding Treatment',
  'Other',
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section
      id="contact"
      className="py-24 px-6"
      style={{ background: 'linear-gradient(180deg, #F5EEE4 0%, #FAF7F2 100%)' }}
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
            Get In Touch
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-dark">
            Book an <span className="text-primary italic">Appointment</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <span className="text-2xl mt-1" aria-hidden="true">📍</span>
                <div>
                  <p className="font-semibold text-dark">Address</p>
                  <p className="text-dark/60 text-sm">Kalnciema Iela 89, Rīga, LV-1046, Latvia</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl mt-1" aria-hidden="true">📞</span>
                <div>
                  <p className="font-semibold text-dark">Phone</p>
                  <a href="tel:20097009" className="text-primary hover:underline text-sm">
                    20 097 009
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl mt-1" aria-hidden="true">🕐</span>
                <div>
                  <p className="font-semibold text-dark">Hours</p>
                  <p className="text-dark/60 text-sm">Mon–Fri: 10:00–20:00 · Sat: 10:00–18:00 · Sun: Closed</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden border border-accent/20 shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2174.123456789!2d24.0688!3d56.9456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eecfd9e4d43741%3A0x88fb9d978c9b0000!2sKalnciema%20Iela%2089%2C%20R%C4%ABga%2C%20LV-1046!5e0!3m2!1sen!2slv!4v1700000000000"
                width="100%"
                height="240"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ķepu SPA location map"
                aria-label="Map showing Ķepu SPA location at Kalnciema Iela 89, Rīga"
              />
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {submitted ? (
              <div className="text-center py-16 px-8 rounded-3xl bg-white/80 border border-sage/40">
                <span className="text-5xl mb-4 block">🐾</span>
                <h3 className="font-serif text-2xl font-semibold text-dark mb-2">Thank you!</h3>
                <p className="text-dark/60">We&apos;ll be in touch soon to confirm your appointment.</p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-5 p-8 rounded-3xl bg-white/80 border border-accent/20 shadow-sm"
                aria-label="Appointment booking form"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-dark/70 mb-1.5">Your Name</label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="Anna"
                      className="w-full px-4 py-3 rounded-xl border border-accent/30 bg-cream/60 text-dark text-sm focus:outline-none focus:border-primary/60 transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="petname" className="block text-sm font-medium text-dark/70 mb-1.5">Pet&apos;s Name</label>
                    <input
                      id="petname"
                      type="text"
                      required
                      placeholder="Buddy"
                      className="w-full px-4 py-3 rounded-xl border border-accent/30 bg-cream/60 text-dark text-sm focus:outline-none focus:border-primary/60 transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-dark/70 mb-1.5">Service</label>
                  <select
                    id="service"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-accent/30 bg-cream/60 text-dark text-sm focus:outline-none focus:border-primary/60 transition-colors"
                  >
                    <option value="">Select a service...</option>
                    {services.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-dark/70 mb-1.5">Preferred Date</label>
                  <input
                    id="date"
                    type="date"
                    className="w-full px-4 py-3 rounded-xl border border-accent/30 bg-cream/60 text-dark text-sm focus:outline-none focus:border-primary/60 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-dark/70 mb-1.5">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Tell us about your pet's breed, age, or any special needs..."
                    className="w-full px-4 py-3 rounded-xl border border-accent/30 bg-cream/60 text-dark text-sm focus:outline-none focus:border-primary/60 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-primary text-cream font-medium hover:bg-accent hover:scale-[1.02] transition-all duration-300 shadow-md shadow-primary/20"
                >
                  Send Booking Request 🐾
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
