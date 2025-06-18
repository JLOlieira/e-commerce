import ScrollToTop from './assets/components/ScrollToTop.jsx'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/styles/globalStyles.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './assets/styles/responsive.css'

import App from './assets/pages/Home/App.jsx'
import ProductDetail from './assets/pages/ProductDetails/product-details.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/product-detail" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
