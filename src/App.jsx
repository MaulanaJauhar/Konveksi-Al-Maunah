import './App.css'
import Advantages from './components/Advantages'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import OrderingSteps from './components/OrderingSteps'
import ProductCategories from './components/ProductCategories'

function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main>
        <Hero />
        <Advantages />
        <ProductCategories />
        <OrderingSteps />
      </main>
      <Footer />
    </div>
  )
}

export default App
