import { useState } from 'react'
import Icon from './Icon'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const links = [
    ['Keunggulan', '#keunggulan'],
    ['Produk', '#produk'],
    ['Cara Pesan', '#cara-pesan'],
  ]

  return (
    <header className="site-header">
      <nav className="container nav" aria-label="Navigasi utama">
        <a className="brand" href="#top" aria-label="Almaunah Konveksi beranda">
          <span className="brand-mark">A</span>
          <span>Almaunah<span>Konveksi</span></span>
        </a>
        <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
          {links.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
          <a className="nav-cta" href="https://wa.me/6281234567890" target="_blank" rel="noreferrer">Konsultasi Gratis <Icon name="arrow" size={16} /></a>
        </div>
        <button className="menu-button" type="button" aria-label="Buka menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          <Icon name="menu" size={22} />
        </button>
      </nav>
    </header>
  )
}

export default Navbar
