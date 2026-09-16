import Icon from './Icon'

function Hero() {
  return (
    <section className="hero-section" id="top">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow"><span></span> Partner produksi apparel Anda</p>
          <h1>Seragam kompak,<br /><em>brand</em> semakin kuat.</h1>
          <p className="hero-description">Produksi kaos, kemeja, jaket, dan seragam berkualitas untuk kebutuhan komunitas, bisnis, hingga perusahaan.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="https://wa.me/6281234567890?text=Halo%20Almaunah%20Konveksi%2C%20saya%20ingin%20konsultasi" target="_blank" rel="noreferrer">Mulai Konsultasi <Icon name="arrow" size={18} /></a>
            <a className="text-link" href="#produk">Lihat produk <Icon name="arrow" size={16} /></a>
          </div>
          <div className="hero-proof"><span className="avatar-stack"><i></i><i></i><i></i></span><span><strong>500+</strong> tim telah percaya</span></div>
        </div>
        <div className="hero-visual">
          <div className="hero-photo"><img src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1100&q=85" alt="Koleksi kaos berkualitas dari Almaunah Konveksi" /></div>
          <div className="hero-stamp"><span>01</span><strong>Rapi sejak<br />jahitan pertama.</strong></div>
          <div className="hero-note"><Icon name="check" size={17} /><span>Material premium<br /><small>Nyaman dipakai seharian</small></span></div>
        </div>
      </div>
      <div className="hero-bottom container"><span>Dipercaya oleh</span><strong>ARUNA</strong><strong>northstar</strong><strong>RuangKarya</strong><strong>ORBITAL</strong></div>
    </section>
  )
}

export default Hero
