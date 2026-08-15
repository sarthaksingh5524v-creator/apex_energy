import { useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { CartProvider } from '@/hooks/useCart'
import { WishlistProvider } from '@/hooks/useWishlist'
import { ToastProvider } from '@/hooks/useToast'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { CartDrawer } from '@/components/cart/CartDrawer'
import { ToastViewport } from '@/components/layout/Toast'
import Home from '@/pages/Home'
import Shop from '@/pages/Shop'
import ProductDetails from '@/pages/ProductDetails'
import Cart from '@/pages/Cart'
import Checkout from '@/pages/Checkout'
import Merch from '@/pages/Merch'
import About from '@/pages/About'
import Search from '@/pages/Search'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    if (!window.location.hash) window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function AppShell() {
  const [cartOpen, setCartOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col bg-bg text-ink">
      <ScrollToTop />
      <Navbar onOpenCart={() => setCartOpen(true)} />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/merch" element={<Merch />} />
          <Route path="/about" element={<About />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </main>
      <Footer />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
      <ToastViewport />
    </div>
  )
}

export default function App() {
  return (
    <ToastProvider>
      <CartProvider>
        <WishlistProvider>
          <AppShell />
        </WishlistProvider>
      </CartProvider>
    </ToastProvider>
  )
}
