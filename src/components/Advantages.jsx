import Icon from './Icon'

const advantages = [
  { icon: 'ruler', number: '01', title: 'Kualitas Terjaga', text: 'Setiap potong melewati quality check agar hasil selalu konsisten.' },
  { icon: 'spark', number: '02', title: 'Bisa Custom', text: 'Wujudkan desain, warna, dan detail yang benar-benar milik Anda.' },
  { icon: 'clock', number: '03', title: 'Tepat Waktu', text: 'Timeline produksi jelas dan kami jaga sampai pesanan tiba.' },
  { icon: 'users', number: '04', title: 'Tim Berpengalaman', text: 'Dikerjakan oleh tangan terampil dengan pengalaman bertahun-tahun.' },
]

function Advantages() {
  return (
    <section className="section advantages-section" id="keunggulan">
      <div className="container">
        <div className="section-heading"><p className="eyebrow"><span></span> Kenapa Almaunah</p><h2>Dibuat untuk tampil<br /><em>lebih berarti.</em></h2><p>Kami percaya pakaian yang baik bukan hanya terlihat bagus, tapi juga membawa cerita dan rasa percaya diri.</p></div>
        <div className="advantage-grid">{advantages.map((item) => <article className="advantage-card" key={item.number}><div className="card-top"><span className="icon-box"><Icon name={item.icon} size={22} /></span><span className="card-number">{item.number}</span></div><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
      </div>
    </section>
  )
}

export default Advantages
