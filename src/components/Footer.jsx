export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="pattern-layer-one" style={{ backgroundImage: 'url(/images/background/pattern-7.png)' }} />
      <div className="pattern-layer-two" style={{ backgroundImage: 'url(/images/background/pattern-8.png)' }} />

      <div className="auto-container">
        {/* Widgets Section */}
        <div className="widgets-section">
          <div className="row clearfix">
            {/* Column */}
            <div className="big-column col-lg-6 col-md-12 col-sm-12">
              <div className="row clearfix">
                {/* Footer Column */}
                <div className="footer-column col-lg-7 col-md-6 col-sm-12">
                  <div className="footer-widget logo-widget">
                    <div className="logo">
                      <a href="/">
                        <img src="/images/logo-light.png" alt="" />
                      </a>
                    </div>
                    <div className="text">
                      We are the best world Information Technology Company. Providing the highest quality in hardware &amp; Network solutions. About more than 25 years of experience and 1000 of innovative achievements.
                    </div>
                    <ul className="social-box">
                      <li>
                        <a href="#" className="fa fa-facebook-f" />
                      </li>
                      <li>
                        <a href="#" className="fa fa-instagram" />
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Footer Column */}
                <div className="footer-column col-lg-5 col-md-6 col-sm-12">
                  <div className="footer-widget links-widget">
                    <h5>Our Services</h5>
                    <ul className="list-link">
                      <li>
                        <a href="#">Website Design</a>
                      </li>
                      <li>
                        <a href="#">Website Development</a>
                      </li>
                      <li>
                        <a href="#">Ecommerce Solution</a>
                      </li>
                      <li>
                        <a href="#">Wodrpress &amp; Shopify Development</a>
                      </li>
                      <li>
                        <a href="#">UI/UX &amp; Digital Experience</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Column */}
            <div className="big-column col-lg-6 col-md-12 col-sm-12">
              <div className="row clearfix">
                {/* Footer Column */}
                <div className="footer-column col-lg-6 col-md-6 col-sm-12">
                  <div className="footer-widget news-widget">
                    <h5>Quick Links</h5>
                    <ul className="list-link">
                      <li>
                        <a href="#">About</a>
                      </li>
                      <li>
                        <a href="#">Services</a>
                      </li>
                      <li>
                        <a href="#">Projects</a>
                      </li>
                      <li>
                        <a href="#">Contact Us</a>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Footer Column */}
                <div className="footer-column col-lg-6 col-md-6 col-sm-12">
                  <div className="footer-widget contact-widget">
                    <h5>Contact Us</h5>
                    <ul>
                      <li>
                        <span className="icon fa fa-map-marker" />
                        <strong>Address</strong> Dumdum, Kolkata, West Bengal, 700052
                      </li>
                      <li>
                        <span className="icon fa fa-phone" />
                        <strong>Phone</strong>
                        <a href="tel:+786-875-864-75"> + 786 875 864 75</a>
                      </li>
                      <li>
                        <span className="icon fa fa-envelope" />
                        <strong>E-Mail</strong>
                        <a href="mailto:support@Laniakea.com"> support@Laniakea.com</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="auto-container">
            <div className="row clearfix">
              <div className="column">
                <div className="copyright">Copyright &copy; 2026 by Laniakea. All Rights Reserved.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
