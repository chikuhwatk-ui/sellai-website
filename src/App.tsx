import { Routes, Route } from 'react-router-dom'
import { ScrollToTop } from './components/ScrollToTop'
import { MarketingLayout } from './components/MarketingLayout'
import Home from './pages/Home'
import About from './pages/About'
import ForSellers from './pages/ForSellers'
import ForRunners from './pages/ForRunners'
import Product from './pages/Product'
import Business from './pages/Business'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<MarketingLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/for-sellers" element={<ForSellers />} />
          <Route path="/for-runners" element={<ForRunners />} />
          <Route path="/product" element={<Product />} />
          <Route path="/business" element={<Business />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Route>
      </Routes>
    </>
  )
}
