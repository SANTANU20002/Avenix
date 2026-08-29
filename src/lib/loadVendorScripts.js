// The original template relies on jQuery + a stack of classic (non-ES-module)
// jQuery plugins that attach themselves to `window.jQuery` / `$.fn`.
// Rather than rewriting every plugin (owl carousel, fancybox, wow.js,
// parallax.js, paroller.js, mCustomScrollbar, jquery-ui, ...) in React, we
// load them exactly as the original site did - as global <script> tags, in
// the same order - and then drive them from React via useEffect hooks.
// This preserves 100% of the original animation/interaction behaviour.

const VENDOR_SCRIPTS = [
  '/js/vendor/jquery.js',
  '/js/vendor/popper.min.js',
  '/js/vendor/bootstrap.min.js',
  '/js/vendor/jquery.mCustomScrollbar.concat.min.js',
  '/js/vendor/jquery.fancybox.js',
  '/js/vendor/appear.js',
  '/js/vendor/parallax.min.js',
  '/js/vendor/tilt.jquery.min.js',
  '/js/vendor/jquery.paroller.min.js',
  '/js/vendor/owl.js',
  '/js/vendor/wow.js',
  '/js/vendor/nav-tool.js',
  '/js/vendor/jquery-ui.js',
]

let vendorReadyPromise = null

function loadScript(src) {
  return new Promise((resolve, reject) => {
    // Already loaded
    if (document.querySelector(`script[data-vendor-src="${src}"]`)) {
      resolve()
      return
    }
    const script = document.createElement('script')
    script.src = src
    script.async = false
    script.dataset.vendorSrc = src
    script.onload = () => resolve()
    script.onerror = () => reject(new Error(`Failed to load vendor script: ${src}`))
    document.body.appendChild(script)
  })
}

/**
 * Loads jQuery + every legacy plugin the template needs, once, in order.
 * Safe to call from multiple components - subsequent calls reuse the same
 * promise so scripts are never injected twice.
 */
export function loadVendorScripts() {
  if (!vendorReadyPromise) {
    vendorReadyPromise = VENDOR_SCRIPTS.reduce(
      (chain, src) => chain.then(() => loadScript(src)),
      Promise.resolve()
    ).then(() => window.jQuery)
  }
  return vendorReadyPromise
}
