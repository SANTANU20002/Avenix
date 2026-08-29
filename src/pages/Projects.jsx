import { useEffect } from 'react'
import PageTitle from '../components/sections/PageTitle'
import CasesSection from '../components/sections/CasesSection'
import InfoSection from '../components/sections/InfoSection'
import { loadVendorScripts } from '../lib/loadVendorScripts'
import { initParallaxScenes, initCounters, initProgressBars, initTabs, initFancybox, initWow } from '../lib/templateEffects'

export default function Projects() {
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
      <PageTitle title="Our Projects" current="Projects" />
      <CasesSection />
      <InfoSection />
    </>
  )
}
