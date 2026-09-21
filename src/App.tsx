import type { RouteRecord } from 'vite-react-ssg'

import Layout from './components/Layout'

import Home from './pages/Home'
import Services from './pages/Services'
import Solutions from './pages/Solutions'
import Work from './pages/Work'
import Resources from './pages/Resources'
import About from './pages/About'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import NotFound from './pages/NotFound'


export const routes: RouteRecord[] = [
  {
    path: '/',
    element: <Layout />,

    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'services',
        element: <Services />
      },
      {
        path: 'solutions',
        element: <Solutions />
      },
      {
        path: 'work',
        element: <Work />
      },
      {
        path: 'resources',
        element: <Resources />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: 'privacy',
        element: <Privacy />
      },
      {
        path: 'terms',
        element: <Terms />
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  }
]


export default routes