import { Outlet } from 'react-router-dom'

import Navigation from './Navigation'
import ScrollToTop from './ScrollToTop'
import Footer from './Footer'


function Layout() {
  return (
    <>
      <Navigation />

      <ScrollToTop />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  )
}


export default Layout