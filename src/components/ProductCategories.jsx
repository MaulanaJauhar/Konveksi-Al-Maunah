import Icon from './Icon'

const products = [
  { title: 'Kaos', detail: 'Mulai dari Rp45rb', image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=700&q=85', className: 'product-tall' },
  { title: 'Kemeja', detail: 'Mulai dari Rp95rb', image: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=700&q=85', className: '' },
  { title: 'Jaket', detail: 'Mulai dari Rp135rb', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=700&q=85', className: '' },
  { title: 'Seragam', detail: 'Mulai dari Rp85rb', image: 'https://images.unsplash.com/photo-1576828831022-ca41d3905fb7?auto=format&fit=crop&w=700&q=85', className: 'product-wide' },
]

function ProductCategories() {
  return (
    <section className="section products-section" id="produk">
      <div className="container"><div className="section-heading products-heading"><div><p className="eyebrow"><span></span> Koleksi pilihan</p><h2>Satu tempat untuk<br /><em>semua kebutuhan.</em></h2></div><p>Dari ide pertama hingga produk siap dipakai, kami bantu setiap langkahnya.</p></div><div className="product-grid">{products.map((product) => <a className={`product-card ${product.className}`} href="#cara-pesan" key={product.title}><img src={product.image} alt={`Produk ${product.title}`} /><div className="product-overlay"><span>{product.detail}</span><h3>{product.title}</h3><Icon name="arrow" size={19} /></div></a>)}</div></div>
    </section>
  )
}

export default ProductCategories
