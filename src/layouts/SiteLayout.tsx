import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollProgress from '../components/ScrollProgress'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function SiteLayout() {
  return (
    <div className="min-h-screen bg-white font-sans text-warm-700 antialiased">
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>
      <ScrollToTop />
      <ScrollProgress />
      <Navbar />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
