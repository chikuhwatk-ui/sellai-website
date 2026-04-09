import { Routes, Route } from 'react-router-dom'
import { ScrollToTop } from './components/ScrollToTop'
import { MarketingLayout } from './components/MarketingLayout'
import { AppPreviewLayout } from './components/AppPreviewLayout'
import Home from './pages/Home'
import About from './pages/About'
import ForSellers from './pages/ForSellers'
import ForRunners from './pages/ForRunners'
import BuyerDashboard from './pages/BuyerDashboard'
import SellerFeed from './pages/SellerFeed'
import RunnerHub from './pages/RunnerHub'
import TrustCenter from './pages/TrustCenter'

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
        </Route>
        <Route element={<AppPreviewLayout />}>
          <Route path="/buyer-dashboard" element={<BuyerDashboard />} />
          <Route path="/seller-feed" element={<SellerFeed />} />
          <Route path="/runner-hub" element={<RunnerHub />} />
          <Route path="/trust-center" element={<TrustCenter />} />
        </Route>
      </Routes>
    </>
  )
}
