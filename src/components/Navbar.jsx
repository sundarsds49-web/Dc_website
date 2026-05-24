import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [location])

  const links = [
    { to: '/', label: 'Generator' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' }
  ]

  return (
    <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        <Link to="/" className="brand">
          <span className="brand-icon">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
              <rect x="3" y="3" width="7" height="7" rx="1"/>
              <rect x="14" y="3" width="7" height="7" rx="1"/>
              <rect x="3" y="14" width="7" height="7" rx="1"/>
              <rect x="14" y="14" width="3" height="3"/>
              <rect x="18" y="14" width="3" height="3"/>
              <rect x="14" y="18" width="3" height="3"/>
              <rect x="18" y="18" width="3" height="3"/>
            </svg>
          </span>
          <span className="brand-name">QR<span className="italic">Tools</span></span>
        </Link>

        <nav className={`nav-links ${open ? 'open' : ''}`}>
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <button className="toggle" onClick={() => setOpen(!open)} aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </div>

      <style>{`
        .nav {
          position: sticky; top: 0; z-index: 100;
          background: rgba(245, 239, 229, 0.85);
          backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid transparent;
          transition: all 0.3s ease;
        }
        .nav.scrolled { border-bottom-color: var(--line); background: rgba(245, 239, 229, 0.95); }
        .nav-inner { display: flex; align-items: center; justify-content: space-between; padding: 20px 0; }
        .brand { display: flex; align-items: center; gap: 12px; font-weight: 600; font-size: 1.15rem; }
        .brand-icon {
          width: 36px; height: 36px;
          display: grid; place-items: center;
          background: var(--ink); color: var(--bg); border-radius: 6px;
        }
        .brand-name { letter-spacing: -0.02em; }
        .brand-name .italic { font-family: var(--font-display); font-style: italic; font-weight: 400; margin-left: 2px; }
        .nav-links { display: flex; gap: 32px; align-items: center; }
        .nav-link { font-size: 0.92rem; font-weight: 500; color: var(--ink-soft); padding: 4px 0; position: relative; transition: color 0.2s ease; }
        .nav-link:hover, .nav-link.active { color: var(--ink); }
        .nav-link.active::after {
          content: ''; position: absolute; left: 0; right: 0; bottom: -2px;
          height: 1px; background: var(--accent);
        }
        .toggle { display: none; flex-direction: column; gap: 5px; padding: 8px; }
        .toggle span { width: 22px; height: 2px; background: var(--ink); }
        @media (max-width: 720px) {
          .toggle { display: flex; }
          .nav-links {
            position: absolute; top: 100%; left: 0; right: 0;
            background: var(--bg); border-bottom: 1px solid var(--line);
            flex-direction: column; align-items: flex-start;
            padding: 20px 32px; gap: 16px;
            transform: translateY(-8px); opacity: 0; pointer-events: none;
            transition: all 0.25s ease;
          }
          .nav-links.open { transform: translateY(0); opacity: 1; pointer-events: auto; }
        }
      `}</style>
    </header>
  )
}
