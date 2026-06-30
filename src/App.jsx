import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import WhyLighthousePage from './pages/WhyLighthousePage'
import ServicesPage from './pages/ServicesPage'
import IndustriesPage from './pages/IndustriesPage'
import InsightsPage from './pages/InsightsPage'
import CareersPage from './pages/CareersPage'
import SustainabilityPage from './pages/SustainabilityPage'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    document.documentElement.scrollTop = 0
  }, [pathname])

  return null
}

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow pt-12">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/why-lighthouse" element={<WhyLighthousePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/insights" element={<InsightsPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/sustainability" element={<SustainabilityPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App