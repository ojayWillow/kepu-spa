export default function Footer() {
  return (
    <footer className="bg-dark text-cream/80 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl" aria-hidden="true">🐾</span>
              <span className="font-serif text-xl font-semibold text-cream">Ķepu SPA</span>
            </div>
            <p className="text-cream/50 text-sm leading-relaxed italic">
              &ldquo;Where every paw gets the royal treatment&rdquo;
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-cream/90 mb-4 text-sm tracking-widest uppercase">Quick Links</h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2">
                {[
                  { href: '#about', label: 'About Us' },
                  { href: '#services', label: 'Services' },
                  { href: '#gallery', label: 'Gallery' },
                  { href: '#contact', label: 'Contact' },
                ].map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="text-cream/50 hover:text-accent text-sm transition-colors">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-cream/90 mb-4 text-sm tracking-widest uppercase">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-cream/50">
                <span aria-hidden="true">📍</span> Kalnciema Iela 89, Rīga, LV-1046
              </li>
              <li>
                <a href="tel:20097009" className="flex items-center gap-2 text-sm text-cream/50 hover:text-accent transition-colors">
                  <span aria-hidden="true">📞</span> 20 097 009
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-cream/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-cream/30 text-xs">
            © {new Date().getFullYear()} Ķepu SPA. All rights reserved.
          </p>
          <div className="flex gap-2 text-cream/20 text-lg" aria-hidden="true">
            🐾 🐾 🐾
          </div>
        </div>
      </div>
    </footer>
  )
}
