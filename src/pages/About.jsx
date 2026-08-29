import { useEffect } from 'react'
import PageTitle from '../components/sections/PageTitle'
import AboutSection from '../components/sections/AboutSection'
import CounterSection from '../components/sections/CounterSection'
import AboutSectionTwo from '../components/sections/AboutSectionTwo'
import TechnologySection from '../components/sections/TechnologySection'
import ProcessSection from '../components/sections/ProcessSection'
import TechnologyIndexSection from '../components/sections/TechnologyIndexSection'
import ExperienceTabsSection from '../components/sections/ExperienceTabsSection'
import InfoSection from '../components/sections/InfoSection'
import { loadVendorScripts } from '../lib/loadVendorScripts'
import { initParallaxScenes, initCounters, initProgressBars, initTabs, initFancybox, initWow } from '../lib/templateEffects'

export default function About() {
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
      <PageTitle title="About us" current="About us" />
      <AboutSection />
      <CounterSection />
      <AboutSectionTwo />
      <TechnologySection />
      <ProcessSection />
      
      <InfoSection />
    </>
  )
}
