import { ViteReactSSG } from 'vite-react-ssg'

import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/index.css'

import { routes } from './App'


export const createRoot = ViteReactSSG(
  {
    routes,
    basename: import.meta.env.BASE_URL
  },

  ({ isClient }) => {

    if (isClient) {
      import('bootstrap')
    }

  }
)