import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ShowcaseProvider } from './context/ShowcaseContext.jsx'
import { CartProvider } from './context/CartContext.jsx'
import '@fontsource-variable/bricolage-grotesque'
import '@fontsource-variable/figtree'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ShowcaseProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ShowcaseProvider>
    </BrowserRouter>
  </StrictMode>
)
