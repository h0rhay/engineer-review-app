import { createRouter as createTanStackRouter } from '@tanstack/react-router'
import { routeTree } from './routes/routeTree'

export const router = createTanStackRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

