import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'

import { CoffePage } from './CoffePage.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CoffePage />
  </StrictMode>,
)
