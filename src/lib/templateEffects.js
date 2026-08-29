// Faithful port of js/script.js, split into small, idempotent functions so
// each React component can wire up exactly the widgets it renders, and clean
// them up again on unmount. Behaviour / options are kept identical to the
// original file.

/* ---------- Header + fixed-on-scroll ---------- */
export function headerStyle($) {
  if (!$('.main-header').length) return
  const windowpos = $(window).scrollTop()
  const siteHeader = $('.main-header')
  const scrollLink = $('.scroll-to-top')
  const HeaderHight = $('.main-header').height()
  if (windowpos >= HeaderHight) {
    siteHeader.addClass('fixed-header')
    scrollLink.fadeIn(300)
  } else {
    siteHeader.removeClass('fixed-header')
    scrollLink.fadeOut(300)
  }
}

export function initHeaderScroll($) {
  const handler = () => headerStyle($)
  headerStyle($)
  $(window).on('scroll.templateHeader', handler)
  return () => $(window).off('scroll.templateHeader', handler)
}

/* ---------- Preloader ---------- */
export function initPreloader($) {
  const handler = () => {
    if ($('.preloader').length) {
      $('.preloader').delay(200).fadeOut(500)
    }
  }
  if (document.readyState === 'complete') {
    handler()
  } else {
    $(window).on('load.templatePreloader', handler)
  }
}

/* ---------- Mobile menu, hidden sidebar, dropdowns, search popup ---------- */
export function initNavAndSidebar($) {
  // Submenu Dropdown Toggle
  if ($('.main-header li.dropdown ul').length) {
    $('.main-header li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>')
    $('.main-header li.dropdown .dropdown-btn').on('click', function () {
      $(this).prev('ul').slideToggle(500)
    })
    $('.navigation li.dropdown > a').on('click', function (e) {
      e.preventDefault()
    })
  }

  // Mobile Nav Hide Show
  if ($('.mobile-menu').length) {
    $('.mobile-menu .menu-box').mCustomScrollbar()

    const mobileMenuContent = $('.main-header .nav-outer .main-menu').html()
    $('.mobile-menu .menu-box .menu-outer').append(mobileMenuContent)

    $('.mobile-menu li.dropdown .dropdown-btn').on('click', function () {
      $(this).toggleClass('open')
      $(this).prev('ul').slideToggle(500)
    })
    $('.mobile-nav-toggler').on('click', function () {
      $('body').addClass('mobile-menu-visible')
    })
    $('.mobile-menu .menu-backdrop,.mobile-menu .close-btn').on('click', function () {
      $('body').removeClass('mobile-menu-visible')
    })
  }

  // Header Search
  if ($('.search-box-outer').length) {
    $('.search-box-outer').on('click', function () {
      $('body').addClass('search-active')
    })
    $('.close-search').on('click', function () {
      $('body').removeClass('search-active')
    })
  }

  // Hidden Sidebar (info / cart sidebar)
  if ($('.hidden-bar,.fullscreen-menu').length) {
    const hiddenBar = $('.hidden-bar')
    const hiddenBarOpener = $('.nav-toggler')
    const hiddenBarCloser = $('.hidden-bar-closer,.close-menu')
    $('.hidden-bar-wrapper').mCustomScrollbar()

    hiddenBarOpener.on('click', function () {
      $('body').addClass('visible-menu-bar')
      hiddenBar.addClass('visible-sidebar')
    })
    hiddenBarCloser.on('click', function () {
      $('body').removeClass('visible-menu-bar')
      hiddenBar.removeClass('visible-sidebar')
    })
  }
}

/* ---------- Service block icon hover swap (home page) ---------- */
export function initServiceHoverIcons($) {
  $('.service-block .inner-box').each(function (idx) {
    const $innerBox = $(this)
    const $img = $innerBox.find('.icon-box img')
    const darkSrc = $img.attr('src')
    let lightSrc

    switch (idx) {
      case 0:
        lightSrc = '/images/service-icon/web-des_dev-light.png'
        break
      case 1:
        lightSrc = '/images/service-icon/ecom-light.png'
        break
      case 2:
        lightSrc = '/images/service-icon/cms-light.png'
        break
      case 3:
        lightSrc = '/images/service-icon/uiux-light.png'
        break
      default:
        lightSrc = darkSrc
    }

    $innerBox.on('mouseenter.serviceHover', () => $img.attr('src', lightSrc))
    $innerBox.on('mouseleave.serviceHover', () => $img.attr('src', darkSrc))
  })

  return () => $('.service-block .inner-box').off('.serviceHover')
}

/* ---------- Parallax scenes (about images) ---------- */
export function initParallaxScenes($) {
  const instances = []
  ;['.parallax-scene-1', '.parallax-scene-2', '.parallax-scene-3', '.parallax-scene-4'].forEach((sel) => {
    if ($(sel).length && window.Parallax) {
      const scene = $(sel).get(0)
      instances.push(new window.Parallax(scene))
    }
  })
  return instances
}

/* ---------- Foreground/background paroller ---------- */
export function initParoller($) {
  if ($('.paroller').length) {
    $('.paroller').paroller({
      factor: 0.2,
      factorLg: 0.4,
      type: 'foreground',
      direction: 'horizontal',
    })
  }
}

/* ---------- Fact / number counters ---------- */
export function initCounters($) {
  if ($('.count-box').length) {
    $('.count-box').appear(function () {
      const $t = $(this)
      const n = $t.find('.count-text').attr('data-stop')
      const r = parseInt($t.find('.count-text').attr('data-speed'), 10)

      if (!$t.hasClass('counted')) {
        $t.addClass('counted')
        $({ countNum: $t.find('.count-text').text() }).animate(
          { countNum: n },
          {
            duration: r,
            easing: 'linear',
            step: function () {
              $t.find('.count-text').text(Math.floor(this.countNum))
            },
            complete: function () {
              $t.find('.count-text').text(this.countNum)
            },
          }
        )
      }
    }, { accY: 0 })
  }
}

/* ---------- Skill progress bars ---------- */
export function initProgressBars($) {
  if ($('.progress-line').length) {
    $('.progress-line').appear(function () {
      const el = $(this)
      const percent = el.data('width')
      $(el).css('width', percent + '%')
    }, { accY: 0 })
  }
}

/* ---------- Owl Carousels ---------- */
const OWL_CONFIGS = {
  '.main-slider-carousel': {
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    loop: true,
    margin: 0,
    nav: true,
    autoHeight: true,
    smartSpeed: 500,
    autoplay: 6000,
    navText: ['<span class="icon fa fa-arrow-left"></span>', '<span class="icon fa fa-arrow-right"></span>'],
    responsive: { 0: { items: 1 }, 600: { items: 1 }, 800: { items: 1 }, 1024: { items: 1 }, 1200: { items: 1 } },
  },
  '.banner-carousel': {
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    loop: true,
    margin: 0,
    nav: true,
    smartSpeed: 700,
    autoHeight: true,
    autoplay: true,
    autoplayTimeout: 10000,
    navText: ['<span class="fa fa-long-arrow-left"></span> prev', 'next<span class="fa fa-long-arrow-right"></span>'],
    responsive: { 0: { items: 1 }, 600: { items: 1 }, 1024: { items: 1 } },
  },
  '.single-item-carousel': {
    loop: true,
    margin: 0,
    nav: true,
    smartSpeed: 500,
    autoplay: 4000,
    navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
    responsive: { 0: { items: 1 }, 480: { items: 1 }, 600: { items: 1 }, 800: { items: 1 }, 1024: { items: 1 } },
  },
  '.three-item-carousel': {
    loop: true,
    margin: 30,
    nav: true,
    smartSpeed: 500,
    autoplay: 4000,
    navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
    responsive: { 0: { items: 1 }, 480: { items: 1 }, 600: { items: 2 }, 800: { items: 3 }, 1024: { items: 3 } },
  },
  '.five-item-carousel': {
    loop: true,
    margin: 15,
    nav: true,
    smartSpeed: 500,
    autoplay: 4000,
    navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
    responsive: {
      0: { items: 1 }, 480: { items: 1 }, 600: { items: 2 }, 800: { items: 3 }, 1024: { items: 4 }, 1224: { items: 5 }, 1424: { items: 5 },
    },
  },
  '.testimonial-carousel': {
    loop: true,
    margin: 0,
    nav: true,
    smartSpeed: 500,
    autoplay: 4000,
    navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
    responsive: { 0: { items: 1 }, 480: { items: 1 }, 600: { items: 1 }, 800: { items: 2 }, 1024: { items: 2 } },
  },
  '.sponsors-carousel': {
    loop: true,
    margin: 0,
    nav: true,
    smartSpeed: 500,
    autoplay: 4000,
    navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
    responsive: { 0: { items: 1 }, 480: { items: 2 }, 600: { items: 3 }, 800: { items: 4 }, 1024: { items: 4 } },
  },
}

/**
 * Initialises every owl-carousel present in the current DOM for the given
 * list of selectors. Returns a cleanup function that destroys them again -
 * call it from a useEffect's return so navigating away doesn't leak
 * carousel instances / resize listeners.
 */
export function initOwlCarousels($, selectors) {
  selectors.forEach((sel) => {
    const $el = $(sel)
    if ($el.length && $.fn.owlCarousel && OWL_CONFIGS[sel]) {
      $el.owlCarousel(OWL_CONFIGS[sel])
    }
  })

  return () => {
    selectors.forEach((sel) => {
      const $el = $(sel)
      if ($el.length && $.fn.owlCarousel) {
        try {
          $el.trigger('destroy.owl.carousel')
          $el.removeClass('owl-loaded owl-drag')
          $el.find('.owl-stage-outer').children().unwrap()
        } catch (e) {
          // no-op: carousel may already be gone with the unmounted DOM
        }
      }
    })
  }
}

/* ---------- Tabs ---------- */
export function initTabs($) {
  if (!$('.tabs-box').length) return
  $('.tabs-box .tab-buttons .tab-btn').on('click.templateTabs', function (e) {
    e.preventDefault()
    const target = $($(this).attr('data-tab'))

    if ($(target).is(':visible')) {
      return false
    }
    target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn')
    $(this).addClass('active-btn')
    target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0)
    target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab')
    $(target).fadeIn(300)
    $(target).addClass('active-tab')
  })

  return () => $('.tabs-box .tab-buttons .tab-btn').off('.templateTabs')
}

/* ---------- Accordion ---------- */
export function initAccordion($) {
  if (!$('.accordion-box').length) return
  $('.accordion-box').on('click.templateAccordion', '.acc-btn', function () {
    const outerBox = $(this).parents('.accordion-box')
    const target = $(this).parents('.accordion')

    if ($(this).hasClass('active') !== true) {
      $(outerBox).find('.accordion .acc-btn').removeClass('active')
    }
    if ($(this).next('.acc-content').is(':visible')) {
      return false
    }
    $(this).addClass('active')
    $(outerBox).children('.accordion').removeClass('active-block')
    $(outerBox).find('.accordion').children('.acc-content').slideUp(300)
    target.addClass('active-block')
    $(this).next('.acc-content').slideDown(300)
  })

  return () => $('.accordion-box').off('.templateAccordion')
}

/* ---------- Fancybox lightbox ---------- */
export function initFancybox($) {
  if ($('.lightbox-image').length && $.fn.fancybox) {
    $('.lightbox-image').fancybox({
      openEffect: 'fade',
      closeEffect: 'fade',
      helpers: { media: {} },
    })
  }
}

/* ---------- Smooth scroll-to-target (scroll-to-top button) ---------- */
export function initScrollToTarget($) {
  if (!$('.scroll-to-target').length) return
  $('.scroll-to-target').on('click.templateScrollTarget', function () {
    const target = $(this).attr('data-target')
    $('html, body').animate({ scrollTop: $(target).offset().top }, 1500)
  })
  return () => $('.scroll-to-target').off('.templateScrollTarget')
}

/* ---------- WOW.js scroll reveal animations ---------- */
export function initWow($) {
  if ($('.wow').length && window.WOW) {
    const wow = new window.WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0,
      mobile: true,
      live: true,
    })
    wow.init()
  }
}
