import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { route } from './hooks/Route.jsx'
import AuthProvider from './hooks/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={route}>
      </RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
