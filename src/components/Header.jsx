import { useEffect, useRef, useState } from 'react';
import { NavLink, Link } from 'react-router-dom'
import hamburger from "../../public/images/icons/hamburger.png"

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const headerUpperRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 300) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="main-header header-style-one">
      {/* Header Top */}
      <div className="header-top">
        <div className="auto-container">
          <div className="clearfix">
            {/* Top Left */}
            <div className="top-left">
              <ul className="info-list">
                <li>
                  <a href="mailto:creativeflow2023@gmail.com">
                    <span className="fa fa-envelope" /> creativeflow2023@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:7003308912">
                    <span className="fa fa-phone" /> +91 70033 08912
                  </a>
                </li>
              </ul>
            </div>

            {/* Top Right */}
            <div className="top-right pull-right">
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
        </div>
      </div>

      {/* Header Upper */}
      <div
        className={`header-upper${isSticky ? ' sticky-header-upper animated-sticky' : ''}`}
        ref={headerUpperRef}
        style={{
          transition: 'all 0.35s cubic-bezier(.4,0,.2,1)',
          zIndex: 100,
          top: isSticky ? 0 : 'unset',
          position: isSticky ? 'fixed' : 'relative',
          width: '100%',
          boxShadow: isSticky ? '0 6px 16px 0 rgba(40, 40, 40, 0.15)' : 'none',
          background:  '#fff'
        }}
      >
        <div className="auto-container clearfix">
          <div className="pull-left logo-box">
            <div className="logo">
              <Link to="/">
                <img src="/images/logo-dark.png" alt="" title="" />
              </Link>
            </div>
          </div>

          <div className="nav-outer clearfix">
            {/* Mobile Navigation Toggler */}
            <div className="mobile-nav-toggler">
              <img src={hamburger} alt="menu icon" />
            </div>

            {/* Main Menu */}
            <nav className="main-menu navbar-expand-md">
              <div className="navbar-header">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
              </div>

              <div className="navbar-collapse collapse clearfix" id="navbarSupportedContent">
                <ul className="navigation clearfix">
                  <li>
                    <NavLink to="/" end className={({ isActive }) => (isActive ? 'current' : '')}>
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/about" className={({ isActive }) => (isActive ? 'current' : '')}>
                      About
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/services" className={({ isActive }) => (isActive ? 'current' : '')}>
                      Services
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/projects" className={({ isActive }) => (isActive ? 'current' : '')}>
                      Projects
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact" className={({ isActive }) => (isActive ? 'current' : '')}>
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </div>
            </nav>
            {/* Main Menu End */}

            <div className="outer-box clearfix">
              <div className="nav-btn navSidebar-button">
                <span className="icon fa fa-bars" />
              </div>

              <div className="btn-box">
                <a href="/contact" className="theme-btn btn-style-one">
                  <span className="txt">Let&rsquo;s Talk</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Header Upper */}
    </header>
  );
}
