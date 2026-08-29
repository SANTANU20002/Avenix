import { useEffect } from 'react'
import PageTitle from '../components/sections/PageTitle'
import ServicesPageSection from '../components/sections/ServicesPageSection'
import FeaturedSection from '../components/sections/FeaturedSection'
import ServicesSection from '../components/sections/ServicesSection'


import AboutSectionTwo from '../components/sections/AboutSectionTwo'
import TechnologySection from '../components/sections/TechnologySection'
import ProcessSection from '../components/sections/ProcessSection'
import ContactUsSection from '../components/sections/ContactUsSection'
import InfoSection from '../components/sections/InfoSection'
import { loadVendorScripts } from '../lib/loadVendorScripts'
import { initParallaxScenes, initCounters, initProgressBars, initTabs, initFancybox, initWow } from '../lib/templateEffects'

export default function Services() {
  useEffect(() => {
    let offTabs = () => {}
    let cancelled = false

    loadVendorScripts().then(($) => {
      if (!$ || cancelled) return

      initParallaxScenes($)
      initCounters($)
      initProgressBars($)
      offTabs = initTabs($) || offTabs
      initFancybox($)
      initWow($)
    })

    return () => {
      cancelled = true
      offTabs()
    }
  }, [])

  return (
    <>
      <PageTitle title="Our Services" current="Services" />
      {/* Replace AboutSection et al. with actual Services-related sections when available */}
      <ServicesPageSection />
      <FeaturedSection />
      <ServicesSection />
      <ProcessSection />
      <ContactUsSection />
      <InfoSection />
    </>
  )
}
