import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MiAplicacion from './pages/MiAplicacion'
// import { Saludo } from './pages/Saludo'




createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MiAplicacion></MiAplicacion>
    {/* <Saludo /> */}

  </StrictMode>,
)
