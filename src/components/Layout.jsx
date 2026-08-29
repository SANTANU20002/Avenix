import { useEffect, useRef } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import MobileMenu from './MobileMenu'
import HiddenSidebar from './HiddenSidebar'
import ScrollToTop from './ScrollToTop'
import Preloader from './Preloader'
import Footer from './Footer'
import { loadVendorScripts } from '../lib/loadVendorScripts'
import { initHeaderScroll, initNavAndSidebar, initPreloader, initScrollToTarget, initWow } from '../lib/templateEffects'

export default function Layout() {
  const initialisedRef = useRef(false)

  useEffect(() => {
    let cleanupFns = []

    loadVendorScripts().then(($) => {
      if (!$ || initialisedRef.current) return
      initialisedRef.current = true

      initPreloader($)
      initNavAndSidebar($)
      initWow($)

      const offHeaderScroll = initHeaderScroll($)
      const offScrollTarget = initScrollToTarget($)
      cleanupFns = [offHeaderScroll, offScrollTarget].filter(Boolean)
    })

    return () => cleanupFns.forEach((fn) => fn())
  }, [])

  return (
    <div className="page-wrapper">
      <Preloader />
      <Header />
      <MobileMenu />
      <HiddenSidebar />
      <Outlet />
      <Footer />
      <ScrollToTop />
    </div>
  )
}
