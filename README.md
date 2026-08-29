# Globex Business Portfolio — React (Vite) Conversion

This is a React + Vite conversion of the original static HTML/CSS/jQuery
"Globex" business template. The goal was to preserve the original design,
layout, animations and interactions as closely as possible while giving you
a clean, modern, component-based React codebase.

## Run it

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

To build for production:

```bash
npm run build
npm run preview
```

## Project structure

```
public/
  css/            All original stylesheets, copied as-is (bootstrap.css,
                   style.css, responsive.css, color themes, etc.) and served
                   as static files so every legacy @import / url() font and
                   icon reference resolves exactly like the original site.
  fonts/          Original web fonts (Flaticon, FontAwesome).
  images/         All original images/icons/backgrounds, untouched.
  js/vendor/      The original jQuery + jQuery plugin files (Owl Carousel,
                   Fancybox, WOW.js, Parallax.js, Paroller.js,
                   mCustomScrollbar, jQuery UI). These are loaded as global
                   scripts, exactly like the original <script> tags, instead
                   of being rewritten — this keeps every animation and
                   interaction byte-for-byte identical to the source project.

src/
  main.jsx         App bootstrap (BrowserRouter)
  App.jsx          Route table (`/` and `/about`)
  lib/
    loadVendorScripts.js  Loads jQuery + plugins once, in original order.
    templateEffects.js    A faithful port of js/script.js, split into small
                            reusable init functions (owl carousels, WOW,
                            parallax, counters, progress bars, tabs,
                            fancybox, mobile menu, sticky header, etc.)
  components/
    Layout.jsx        Page chrome shared by every route (header, mobile
                        menu, hidden sidebar, search popup, scroll-to-top,
                        preloader, footer) + persistent widget init.
    Header.jsx, Footer.jsx, MobileMenu.jsx, HiddenSidebar.jsx,
    SearchPopup.jsx, ScrollToTop.jsx, Preloader.jsx
    sections/          One component per repeating/self-contained content
                        block (BannerCarousel, AboutSection, ServicesSection,
                        ProcessSection, TechnologySection, CasesSection,
                        TestimonialSection, etc.) Sections that were
                        byte-identical across both original pages (About,
                        Technology, Process/"How We Work") are shared
                        components used by both routes, matching the DRY
                        component structure you asked for.
  pages/
    Home.jsx    Composes all index.html sections + wires up the widgets
                that page uses (main slider, sponsors/testimonial
                carousels, service icon hover-swap, counters, parallax).
    About.jsx   Composes all about.html sections + wires up the widgets
                that page uses (counters, progress bars, tabs, parallax).
```

## Notable decisions / things worth knowing

- **Header/Footer/Mobile menu/Sidebar on the About page.** In the original
  ZIP, `about.html` was missing its `<header>`, mobile menu, hidden sidebar
  and `<footer>` entirely (only `index.html` had them). Since a real site
  needs consistent navigation, the React version renders the same shared
  `Header`/`Footer`/etc. (sourced from `index.html`) around every route via
  `Layout.jsx`. This is the one deliberate structural change from the raw
  source files — everything else preserves the original markup, classes,
  and content as closely as JSX allows.
- **jQuery plugins are kept as-is, not rewritten.** Owl Carousel, WOW.js,
  Parallax.js, Paroller.js, Fancybox and mCustomScrollbar are all
  DOM-manipulating jQuery plugins with no React-idiomatic equivalent that
  would look/behave identically. Rewriting them in "pure React" would risk
  changing the animation timing/feel you asked to preserve, so they're
  loaded as global scripts (like the original `<script>` tags) and driven
  from `useEffect` hooks in `templateEffects.js`, with cleanup on unmount so
  navigating between routes doesn't leak carousel instances or duplicate
  event handlers.
- **Dangling links preserved.** The original template linked to several
  pages that were never included in the ZIP (`contact.html`,
  `services-detail.html`, `projects-detail.html`, `testimonial.html`,
  `blog.html`). These links are preserved as plain `<a>` tags pointing at
  the same (non-existent) paths, exactly as they behaved in the original
  static site. Only the two pages that actually exist — Home (`/`) and
  About (`/about`) — are wired up with React Router `Link`/`NavLink` for
  client-side navigation.
- **Broken original asset reference preserved.** `about.html originally
  referenced `images/logo-2.png`, which isn't present in the ZIP either —
  this is preserved as-is (same broken image, matching original behavior)
  rather than silently "fixed" with a different image.
# Avenix-Digital-IT-Solution
# Avenix-Digital-IT-Solution
