import { Link } from 'react-router-dom'

export default function MobileMenu() {
  return (
    <div className="mobile-menu">
      <div className="menu-backdrop" />
      <div className="close-btn">
        <img src="/images/icons/close.png" alt="Close menu" />
      </div>

      <nav className="menu-box">
        <div className="nav-logo">
          <Link to="/">
            <img src="/images/logo-dark.png" alt="" title="" />
          </Link>
        </div>
        {/* Populated automatically via JS - same behaviour as the original template */}
        <div className="menu-outer" />
      </nav>
    </div>
  )
}
