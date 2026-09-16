import Icon from './Icon'

function Footer() {
  return (
    <footer className="site-footer"><div className="container footer-grid"><div className="footer-intro"><a className="brand brand-footer" href="#top"><span className="brand-mark">A</span><span>Almaunah<span>Konveksi</span></span></a><p>Partner produksi apparel<br />yang bisa Anda andalkan.</p><div className="socials"><a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noreferrer"><Icon name="instagram" size={18} /></a><a href="https://wa.me/6281234567890" aria-label="WhatsApp" target="_blank" rel="noreferrer"><Icon name="message" size={18} /></a></div></div><div className="footer-contact"><p className="footer-label">Hubungi kami</p><a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer"><Icon name="phone" size={17} /> +62 812 3456 7890</a><a href="mailto:halo@almaunahkonveksi.id"><Icon name="message" size={17} /> halo@almaunahkonveksi.id</a><a href="#lokasi"><Icon name="pin" size={17} /> Bandung, Jawa Barat</a></div><div className="map-wrap" id="lokasi"><iframe title="Lokasi Almaunah Konveksi di Bandung" src="https://www.google.com/maps?q=Bandung%2C%20Jawa%20Barat&output=embed" loading="lazy"></iframe></div></div><div className="container footer-bottom"><span>© 2024 Almaunah Konveksi. Dibuat dengan niat baik.</span><span>Privacy · Terms</span></div></footer>
  )
}

export default Footer
