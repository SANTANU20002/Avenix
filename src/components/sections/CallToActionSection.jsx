export default function CallToActionSection() {
  return (
    <section className="call-to-action-section" style={{ backgroundImage: 'url(/images/background/pattern-3.png)' }}>
      <div className="auto-container">
        <div className="row clearfix">
          <div className="heading-column col-lg-8 col-md-12 col-sm-12">
            <div className="inner-column">
              <h2>
                Preparing For Your Business <br /> Success With IT Solution
              </h2>
            </div>
          </div>
          <div className="button-column col-lg-4 col-md-12 col-sm-12">
            <div className="inner-column">
              <a href="contact.html" className="theme-btn btn-style-two">
                <span className="txt">Contact Us Now</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
