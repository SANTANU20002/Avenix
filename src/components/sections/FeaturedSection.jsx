export default function FeaturedSection() {
  return (
    <section className="featured-section">
      <div className="auto-container">
        <div className="row clearfix">
          <div className="feature-block-two col-lg-6 col-md-12 col-sm-12">
            <div
              className="inner-box wow fadeInLeft"
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
              style={{ backgroundImage: 'url(/images/resource/feature-1.jpg)' }}
            >
              <div className="number">35 +</div>
              <h4>Projects Delivered</h4>
              <div className="text">
                From business websites to eCommerce platforms and custom web applications, we create digital solutions built around real business goals.
              </div>
            </div>
          </div>

          <div className="feature-block-two col-lg-6 col-md-12 col-sm-12">
            <div
              className="inner-box wow fadeInRight"
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
              style={{ backgroundImage: 'url(/images/resource/feature-2.jpg)' }}
            >
              <div className="number">30 +</div>
              <h4>Happy Clients</h4>
              <div className="text">We build lasting relationships through reliable development, clear communication, and solutions that deliver real value.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
