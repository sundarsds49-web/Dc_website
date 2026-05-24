import { Link } from 'react-router-dom'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container">
        <div className="top">
          <div className="brand-col">
            <h3 className="ftitle">QR <span className="italic">Tools</span></h3>
            <p className="ftag">Free, fast, no signup required. Generate QR codes for anything.</p>
          </div>
          <div className="cols">
            <div>
              <h4 className="fh">Pages</h4>
              <Link to="/" className="fl">Generator</Link>
              <Link to="/about" className="fl">About</Link>
              <Link to="/contact" className="fl">Contact</Link>
            </div>
            <div>
              <h4 className="fh">Legal</h4>
              <Link to="/privacy" className="fl">Privacy Policy</Link>
              <Link to="/terms" className="fl">Terms & Conditions</Link>
            </div>
            <div>
              <h4 className="fh">Contact</h4>
              <a href="mailto:sundarsds49@gmail.com" className="fl">sundarsds49@gmail.com</a>
              <span className="fl muted">Coimbatore, India</span>
            </div>
          </div>
        </div>
        <div className="bottom">
          <span>© {year} QR Tools. All rights reserved.</span>
          <span className="muted">Built with care · Updated May 2026</span>
        </div>
      </div>
      <style>{`
        .footer { background: var(--ink); color: var(--bg); padding: 70px 0 28px; margin-top: 80px; }
        .top { display: grid; grid-template-columns: 1fr 2fr; gap: 60px; padding-bottom: 50px; border-bottom: 1px solid rgba(245,239,229,0.12); }
        .ftitle { font-family: var(--font-display); font-size: 2.2rem; color: var(--bg); }
        .ftitle .italic { font-style: italic; font-weight: 400; }
        .ftag { color: rgba(245,239,229,0.65); margin-top: 12px; max-width: 320px; }
        .cols { display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; }
        .fh { font-family: var(--font-mono); font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.16em; color: rgba(245,239,229,0.5); margin-bottom: 16px; font-weight: 500; }
        .fl { display: block; color: rgba(245,239,229,0.85); padding: 6px 0; font-size: 0.93rem; transition: color 0.2s ease; }
        .fl:hover { color: #93c5fd; }
        .muted { color: rgba(245,239,229,0.5); cursor: default; }
        .bottom { padding-top: 24px; display: flex; justify-content: space-between; font-size: 0.85rem; color: rgba(245,239,229,0.5); }
        @media (max-width: 760px) {
          .top { grid-template-columns: 1fr; gap: 40px; }
          .cols { grid-template-columns: repeat(2, 1fr); }
          .bottom { flex-direction: column; gap: 8px; }
        }
      `}</style>
    </footer>
  )
}
