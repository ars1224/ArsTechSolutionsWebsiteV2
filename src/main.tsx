import { ViteReactSSG } from 'vite-react-ssg'

import '@fontsource-variable/inter'
import '@fontsource-variable/manrope'

import './styles/bootstrap-lite.css'
import './styles/index.css'

import { routes } from './App'

export const createRoot = ViteReactSSG(
  {
    routes,
    basename: import.meta.env.BASE_URL
  },

  ({ isClient }) => {

    if (isClient) {
        import('bootstrap/js/dist/offcanvas')
    }

  }
)