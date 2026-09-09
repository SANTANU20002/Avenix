import React from 'react'

export default function ContactPageSec1() {
  return (
    <section className="contact-info-section">
      <div className="auto-container">
        {/* Sec Title */}
        <div className="title-box">
          <div className="title">GET IN TOUCH</div>
          <h2>
            For Getting A Monthly Project Fee <br /> Price Plans
          </h2>
          <div className="text">
            Or Any general enquiries you can touch with our front desk supporting team <br /> at{' '}
            <a href="mailto:info@example.com">info@example.com</a> or call on{' '}
            <a href="tel:+8.555.55.55">+8.555.55.55</a>
          </div>
        </div>

        <div className="row clearfix">
          {/* Info Column */}
          <div className="info-column col-lg-4 col-md-6 col-sm-12">
            <div className="inner-column">
              <div className="content">
                <div className="icon-box">
                  <span className="fa fa-map-marker"></span>
                </div>
                <ul>
                  <li>
                    <strong>Address</strong>
                  </li>
                  <li>Dumdum, Kolkata, West Bengal, 700052</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Info Column */}
          <div className="info-column col-lg-4 col-md-6 col-sm-12">
            <div className="inner-column">
              <div className="content">
                <div className="icon-box">
                  <span className="fa fa-phone"></span>
                </div>
                <ul>
                  <li>
                    <strong>Phone</strong>
                  </li>
                  <li>+ 91 7003308912</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Info Column */}
          <div className="info-column col-lg-4 col-md-6 col-sm-12">
            <div className="inner-column">
              <div className="content">
                <div className="icon-box">
                  <span className="fa fa-envelope"></span>
                </div>
                <ul>
                  <li>
                    <strong>E-Mail</strong>
                  </li>
                  <li>support@avenex.com</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="lower-text">
          We are at 36 places over the country,{' '}
        </div> */}
      </div>
    </section>
  )
}