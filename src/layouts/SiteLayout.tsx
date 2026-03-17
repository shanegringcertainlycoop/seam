import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function SiteLayout() {
  return (
    <div className="min-h-screen bg-white font-sans text-warm-700 antialiased">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
