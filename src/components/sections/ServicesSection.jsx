const services = [
  {
    icon: '/images/service-icon/web-des_dev-dark.png',
    alt: 'web design & development',
    title: 'Website Design & Development',
    text: 'Create a powerful online presence with modern, responsive, and high-performance websites tailored to your brand and business goals.',
  },
  {
    icon: '/images/service-icon/ecom-dark.png',
    alt: 'ecommerce development',
    title: 'eCommerce Solutions',
    text: 'Build seamless online stores with Shopify and WooCommerce, designed to deliver smooth shopping experiences and drive more sales.',
  },
  {
    icon: '/images/service-icon/cms-dark.png',
    alt: 'cms development',
    title: 'Woordpress & Shopify Development',
    text: 'Turn complex ideas into powerful web applications, SaaS platforms, and business dashboards built with modern technologies.',
  },
  {
    icon: '/images/service-icon/uiux-dark.png',
    alt: 'ui ux design',
    title: 'UI/UX & Digital Experience',
    text: 'Design intuitive, engaging interfaces that combine visual creativity with usability to create digital experiences your customers love.',
  },
]

export default function ServicesSection() {
  return (
    <section className="services-section margin-top">
      <div className="pattern-layer" style={{ backgroundImage: 'url(/images/background/pattern-2.png)' }} />
      <div className="auto-container">
        <div className="sec-title light centered">
          <div className="title">OUR SERVICES</div>
          <h2>
            Digital Solutions Built to <br />
            Move Your Business Forward.
          </h2>
        </div>
        <div className="row clearfix">
          {services.map((service) => (
            <div className="service-block col-lg-3 col-md-6 col-sm-12" key={service.title}>
              <div className="inner-box">
                <div className="icon-box">
                  <img src={service.icon} alt={service.alt} />
                </div>
                <h5>
                  <a href="services">{service.title}</a>
                </h5>
                <div className="text">{service.text}</div>
                <a href="services" className="arrow ">
                  <span className="fa fa-angle-right" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
