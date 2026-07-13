import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Platform from './components/Platform'
import Products from './components/Products'
import Partners from './components/Partners'
import FooterCTA from './components/FooterCTA'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Platform />
        <Products />
        <Partners />
        <FooterCTA />
      </main>
      <Footer />
    </>
  )
}

export default App