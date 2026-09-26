import type { RouteRecord } from 'vite-react-ssg'

import Layout from './components/Layout'
import Home from './pages/Home'

import { services } from './data/services'
import { resources } from './data/resources'

import { projects } from './data/projects'

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
        lazy: async () => ({
          Component: (await import('./pages/Services')).default
        })
      },

      {
        path: 'solutions',
        lazy: async () => ({
          Component: (await import('./pages/Solutions')).default
        })
      },

      {
        path: 'work',
        lazy: async () => ({
          Component: (await import('./pages/Work')).default
        })
      },

      {
        path: 'resources',
        lazy: async () => ({
          Component: (await import('./pages/Resources')).default
        })
      },

      {
        path: 'canterbury',
        lazy: async () => ({
          Component: (await import('./pages/Canterbury')).default
        })
      },

      {
        path: 'about',
        lazy: async () => ({
          Component: (await import('./pages/About')).default
        })
      },

      {
        path: 'contact',
        lazy: async () => ({
          Component: (await import('./pages/Contact')).default
        })
      },

      {
        path: 'privacy',
        lazy: async () => ({
          Component: (await import('./pages/Privacy')).default
        })
      },

      {
        path: 'terms',
        lazy: async () => ({
          Component: (await import('./pages/Terms')).default
        })
      },

      {
        path: 'services/:slug',

        lazy: async () => ({
          Component: (
            await import('./pages/ServiceDetail')
          ).default
        }),

        getStaticPaths: () =>
          services.map(
            (service) =>
              `services/${service.slug}`
          )
      },

      {
        path: 'resources/:slug',

        lazy: async () => ({
          Component: (
            await import('./pages/ResourceDetail')
          ).default
        }),

        getStaticPaths: () =>
          resources.map(
            (resource) =>
              `resources/${resource.slug}`
          )
      },

      {
        path: '*',
        lazy: async () => ({
          Component: (await import('./pages/NotFound')).default
        })
      },

      {
        path: 'work/:slug',

        lazy: async () => ({
          Component: (
            await import('./pages/WorkDetail')
          ).default
        }),

        getStaticPaths: () =>
          projects.map(
            (project) =>
              `work/${project.slug}`
          )
      }
    ]
  }
]

export default routes