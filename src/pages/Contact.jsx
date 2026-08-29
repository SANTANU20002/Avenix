import { useEffect } from 'react'
import PageTitle from '../components/sections/PageTitle'
import ContactPageSec1 from '../components/sections/ContactPageSec1'
import ContactPageMapSection from '../components/sections/ContactPageMapSection'
import ContactPageForm from '../components/sections/ContactPageForm'
import { loadVendorScripts } from '../lib/loadVendorScripts'
import { initFancybox, initParallaxScenes, initWow } from '../lib/templateEffects'

export default function Contact() {
  useEffect(() => {
    let cancelled = false

    loadVendorScripts().then(($) => {
      if (!$ || cancelled) return

      initFancybox($)
      initParallaxScenes($)
      initWow($)
    })

    return () => {
      cancelled = true
    }
  }, [])

  return (
    <>
      <PageTitle title="Contact Us" current="Contact" />
      <ContactPageSec1 />
      <ContactPageForm />
      <ContactPageMapSection />
    </>
  )
}