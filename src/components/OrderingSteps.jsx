import Icon from './Icon'

const steps = [
  { number: '01', title: 'Konsultasi', text: 'Ceritakan kebutuhan dan ide Anda kepada tim kami.', icon: 'message' },
  { number: '02', title: 'Pilih bahan', text: 'Kami bantu pilih bahan dan detail yang paling pas.', icon: 'ruler' },
  { number: '03', title: 'Produksi', text: 'Pesanan dikerjakan dengan standar kualitas terbaik.', icon: 'spark' },
  { number: '04', title: 'Dikirim', text: 'Produk siap melangkah ke tempat Anda tepat waktu.', icon: 'truck' },
]

function OrderingSteps() {
  return (
    <section className="section steps-section" id="cara-pesan"><div className="container"><div className="section-heading center-heading"><p className="eyebrow"><span></span> Mudah dan transparan</p><h2>Pesan tanpa <em>ragu.</em></h2><p>Empat langkah sederhana untuk mendapatkan produk yang siap dibanggakan.</p></div><div className="steps-grid">{steps.map((step, index) => <div className="step-item" key={step.number}><div className="step-icon"><Icon name={step.icon} size={21} /></div><span className="step-number">{step.number}</span><h3>{step.title}</h3><p>{step.text}</p>{index < steps.length - 1 && <span className="step-line" />}</div>)}</div><div className="steps-cta"><span>Sudah punya gambaran?</span><a className="button button-light" href="https://wa.me/6281234567890" target="_blank" rel="noreferrer">Diskusikan Sekarang <Icon name="arrow" size={17} /></a></div></div></section>
  )
}

export default OrderingSteps
