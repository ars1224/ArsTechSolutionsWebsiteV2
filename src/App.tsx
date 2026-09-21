import { Routes, Route } from 'react-router-dom'

import Navigation from './components/Navigation'

import Home from './pages/Home'
import Services from './pages/Services'
import Solutions from './pages/Solutions'
import Work from './pages/Work'
import Resources from './pages/Resources'
import About from './pages/About'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import Terms from './pages/Terms'
import Privacy from './pages/Privacy'
import NotFound from './pages/NotFound'
import ScrollToTop from './components/ScrollToTop'


function App() {
  return (
    <>
      <Navigation />
      <ScrollToTop />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/work" element={<Work />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </main>

        <Footer/>
    </>
  )
}

export default App