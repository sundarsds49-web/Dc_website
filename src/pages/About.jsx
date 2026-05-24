import { Link } from 'react-router-dom'

export default function About() {
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="grid fade-up">
            <div>
              <span className="eyebrow">About</span>
              <h1 style={{ marginTop: 24 }}>
                A small tool, built<br />
                <span className="italic">to stay small.</span>
              </h1>
            </div>
            <div className="intro">
              <p>
                QR Tools is a single-purpose web app: it generates QR codes.
                That's it. No accounts, no analytics tracking on individual
                inputs, no upsells, no premium plan.
              </p>
              <p style={{ marginTop: 16 }}>
                Everything happens locally in your browser. Your QR codes
                never leave your device unless you choose to share them.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-deep">
        <div className="container">
          <div className="grid">
            <div>
              <span className="eyebrow">Story</span>
              <h2 style={{ marginTop: 12 }}>
                Why this exists.
              </h2>
            </div>
            <div className="body">
              <p>
                Most QR code generators online are designed to collect your
                email, redirect through a tracking server, or expire after
                a free trial period. The codes they make often point to a
                URL that the service controls — meaning if they shut down,
                your QR code stops working.
              </p>
              <p>
                That felt wrong. A QR code should be a simple, static thing
                you can put on a poster or business card and forget about.
                It shouldn't have an expiry date or a subscription.
              </p>
              <p>
                So I built this. It runs in your browser, uses a
                well-maintained open source library to do the encoding, and
                gives you a downloadable file you fully own. No server-side
                processing, no shortened URLs, no tracking pixels.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="eyebrow">Behind the scenes</span>
          <h2 style={{ marginTop: 12, marginBottom: 50 }}>
            How it actually works.
          </h2>
          <div className="how-grid">
            <div className="how-card">
              <span className="how-num">01</span>
              <h3>Local generation</h3>
              <p>
                Your QR code is generated in your browser using JavaScript.
                The content you type never gets sent to a server.
              </p>
            </div>
            <div className="how-card">
              <span className="how-num">02</span>
              <h3>Open source library</h3>
              <p>
                We use the <code>qrcode</code> npm package — a popular,
                well-audited library that implements the standard QR code
                specification (ISO/IEC 18004).
              </p>
            </div>
            <div className="how-card">
              <span className="how-num">03</span>
              <h3>Static output</h3>
              <p>
                The PNG or SVG you download contains the actual encoded
                data — not a link to our servers. The code works forever,
                regardless of what happens to this website.
              </p>
            </div>
            <div className="how-card">
              <span className="how-num">04</span>
              <h3>No tracking</h3>
              <p>
                We don't log what you encode, where you scan from, or who
                you are. The website itself uses minimal anonymous
                analytics — that's all.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-deep">
        <div className="container cta-strip">
          <div>
            <h2>Ready to generate your first code?</h2>
            <p style={{ marginTop: 12, maxWidth: 500 }}>
              It takes about ten seconds. No signup, no email required.
            </p>
          </div>
          <Link to="/" className="btn btn-primary">
            Open generator <span className="arrow">→</span>
          </Link>
        </div>
      </section>

      <style>{`
        .grid { display: grid; grid-template-columns: 1.2fr 1fr; gap: 60px; align-items: start; }
        .grid h1, .grid h2 .italic { font-style: italic; }
        .intro, .body { padding-top: 20px; }
        .body p { font-size: 1.1rem; margin-bottom: 22px; }
        .how-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 28px;
        }
        .how-card {
          background: var(--bg-elevated);
          padding: 32px;
          border-radius: 8px;
          border: 1px solid var(--line);
        }
        .how-num {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          color: var(--accent);
          font-weight: 500;
          letter-spacing: 0.1em;
          display: block;
          margin-bottom: 14px;
        }
        .how-card h3 { margin-bottom: 12px; font-size: 1.2rem; }
        .how-card code {
          font-family: var(--font-mono);
          background: var(--bg-deep);
          padding: 2px 6px;
          border-radius: 3px;
          font-size: 0.88rem;
        }
        .cta-strip {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 40px;
          flex-wrap: wrap;
        }
        @media (max-width: 760px) {
          .grid { grid-template-columns: 1fr; gap: 30px; }
          .how-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  )
}
