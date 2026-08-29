import { Link } from 'react-router-dom'

export default function HiddenSidebar() {
  return (
    <div className="xs-sidebar-group info-group">
      <div className="xs-overlay xs-bg-black" />
      <div className="xs-sidebar-widget">
        <div className="sidebar-widget-container">
          <div className="widget-heading">
            <a href="#" className="close-side-widget">
              X
            </a>
          </div>
          <div className="sidebar-textwidget">
            <div className="sidebar-info-contents">
              <div className="content-inner">
                <div className="logo">
                  <Link to="/">
                    <img src="/images/logo-light.png" alt="" />
                  </Link>
                </div>
                <div className="content-box">
                  <h2>About Us</h2>
                  <p className="text">
                    We combine innovative technology, thoughtful design, and clean development to create digital experiences that make an impact. From concept to launch, we build solutions designed to perform, scale, and evolve.
                  </p>
                  <a href="#" className="theme-btn btn-style-two">
                    <span className="txt">Contact Us Now</span>
                  </a>
                </div>
                <div className="contact-info">
                  <h2>Contact Info</h2>
                  <ul className="list-style-one">
                    <li>
                      <span className="icon fa fa-location-arrow" />
                      Dum Dum, Kolkata, India
                    </li>
                    <li>
                      <span className="icon fa fa-phone" />
                      <a href="tel:+917003308912">+91 70033 08912</a>
                    </li>
                    <li>
                      <span className="icon fa fa-envelope" />
                      <a href="mailto:creativeflow2023@gmail.com">creativeflow2023@gmail.com</a>
                    </li>
                  </ul>
                </div>
                <ul className="social-box">
                  <li className="facebook">
                    <a href="#" className="fa fa-facebook-f" />
                  </li>
                  <li className="instagram">
                    <a href="#" className="fa fa-instagram" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
