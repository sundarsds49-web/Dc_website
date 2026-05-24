import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="section">
      <div className="container nf">
        <span className="eyebrow">404</span>
        <h1>
          This page<br />
          <span className="italic">doesn't exist.</span>
        </h1>
        <p style={{ marginTop: 24, marginBottom: 32, maxWidth: 500 }}>
          You may have followed a broken link or mistyped a URL. Either way,
          let's get you back to something useful.
        </p>
        <Link to="/" className="btn btn-primary">
          Back to the generator <span className="arrow">→</span>
        </Link>
      </div>
      <style>{`
        .nf { padding: 60px 0; text-align: left; max-width: 700px; }
        .nf h1 { font-size: clamp(3rem, 7vw, 5.5rem); }
        .nf h1 .italic { font-style: italic; color: var(--accent); }
      `}</style>
    </section>
  )
}
