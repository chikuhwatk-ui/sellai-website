import { Routes, Route } from 'react-router-dom'
import { ScrollToTop } from './components/ScrollToTop'
import { MarketingLayout } from './components/MarketingLayout'
import { MinimalLayout } from './components/MinimalLayout'
import { getSiteMode } from './config/siteMode'
import Home from './pages/Home'
import About from './pages/About'
import ForSellers from './pages/ForSellers'
import ForRunners from './pages/ForRunners'
import Product from './pages/Product'
import Business from './pages/Business'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import NotFound from './pages/NotFound'
import ComingSoon from './pages/ComingSoon'

export default function App() {
  const mode = getSiteMode()

  // Pre-launch: every address shows the coming-soon page, except the legal pages
  // the app links to, which stay reachable behind a quiet header.
  if (mode === 'coming-soon') {
    return (
      <>
        <ScrollToTop />
        <Routes>
          <Route element={<MinimalLayout />}>
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
          </Route>
          <Route path="*" element={<ComingSoon />} />
        </Routes>
      </>
    )
  }

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
          <Route path="/desktop" element={<Business />} />
          <Route path="/business" element={<Business />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}
