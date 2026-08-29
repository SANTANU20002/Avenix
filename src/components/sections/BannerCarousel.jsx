import { Link } from 'react-router-dom'

const slides = [
  {
    bg: '/images/main-slider/slide2.jpg',
    title: 'WEB DESIGN & DEVELOPMENT',
    heading: (
      <>
        We Build Websites <br />
        That Make Your Business Growth
      </>
    ),
    text: 'From modern business websites to custom web applications, I create fast, responsive and conversion-focused digital experiences designed around your brand and business goals.',
    primaryLabel: 'View Projects',
    secondaryLabel: 'Discuss Your Project',
  },
  {
    bg: '/images/main-slider/image-1.jpg',
    title: 'DIGITAL SOLUTIONS FOR YOUR BUSINESS',
    heading: (
      <>
        Turn Your Website Into a <br />
        Growth Engine
      </>
    ),
    text: 'A great website should do more than look good. I build digital solutions that help businesses attract customers, strengthen their online presence and turn visitors into real opportunities.',
    primaryLabel: 'View Projects',
    secondaryLabel: 'Grow Your Business',
  },
  {
    bg: '/images/main-slider/image-1.jpg',
    title: 'E-COMMERCE & WEB APPLICATIONS',
    heading: (
      <>
        Powerful Digital Platforms
        <br /> Built For Your Business
      </>
    ),
    text: 'From high-converting e-commerce stores and Shopify solutions to custom SaaS platforms and powerful admin dashboards, I develop scalable solutions built to simplify operations and drive growth.',
    primaryLabel: 'View Projects',
    secondaryLabel: 'Explore Solutions',
  },
]

export default function BannerCarousel() {
  return (
    <section className="banner-section">
      <div className="main-slider-carousel owl-carousel owl-theme">
        {slides.map((slide, i) => (
          <div className="slide" key={i} style={{ backgroundImage: `url(${slide.bg})` }}>
            <div className="patern-layer-one" style={{ backgroundImage: 'url(/images/main-slider/pattern-1.png)' }} />
            <div className="patern-layer-two" style={{ backgroundImage: 'url(/images/main-slider/pattern-2.png)' }} />
            <div className="auto-container">
              <div className="content-column">
                <div className="inner-column">
                  <div className="patern-layer-three" style={{ backgroundImage: 'url(/images/main-slider/pattern-3.png)' }} />
                  <div className="title">{slide.title}</div>
                  <h1>{slide.heading}</h1>
                  <div className="text">{slide.text}</div>
                  <div className="btns-box">
                    <Link to="/about" className="theme-btn btn-style-one">
                      <span className="txt">{slide.primaryLabel}</span>
                    </Link>
                    <Link to="/about" className="theme-btn btn-style-three">
                      <span className="txt">{slide.secondaryLabel}</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
