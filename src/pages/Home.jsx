import { useEffect } from 'react'
import BannerCarousel from '../components/sections/BannerCarousel'
import AboutSection from '../components/sections/AboutSection'
import FeaturedSection from '../components/sections/FeaturedSection'
import ServicesSection from '../components/sections/ServicesSection'
import ProcessSection from '../components/sections/ProcessSection'
import CallToActionSection from '../components/sections/CallToActionSection'
import CasesSection from '../components/sections/CasesSection'
import SponsorsSection from '../components/sections/SponsorsSection'
import TestimonialSection from '../components/sections/TestimonialSection'
import TechnologySection from '../components/sections/TechnologySection'
import { loadVendorScripts } from '../lib/loadVendorScripts'
import {
  initServiceHoverIcons,
  initParallaxScenes,
  initCounters,
  initOwlCarousels,
  initFancybox,
  initWow,
} from '../lib/templateEffects'

const OWL_SELECTORS = ['.main-slider-carousel', '.sponsors-carousel', '.testimonial-carousel']

export default function Home() {
  useEffect(() => {
    let destroyOwl = () => {}
    let offServiceHover = () => {}
    let cancelled = false

    loadVendorScripts().then(($) => {
      if (!$ || cancelled) return

      destroyOwl = initOwlCarousels($, OWL_SELECTORS)
      offServiceHover = initServiceHoverIcons($) || offServiceHover
      initParallaxScenes($)
      initCounters($)
      initFancybox($)
      initWow($)
    })

    return () => {
      cancelled = true
      destroyOwl()
      offServiceHover()
    }
  }, [])

  return (
    <>
      <BannerCarousel />
      <AboutSection />
      <FeaturedSection />
      <ServicesSection />
      <ProcessSection />
      <CallToActionSection />
      <CasesSection />
      <SponsorsSection />
      <TestimonialSection />
      <TechnologySection />
    </>
  )
}
