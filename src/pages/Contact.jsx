import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const mailto = `mailto:sundarsds49@gmail.com?subject=${encodeURIComponent(form.subject || 'Hello from QR Tools')}&body=${encodeURIComponent(`From: ${form.name}\nReply to: ${form.email}\n\n${form.message}`)}`
    window.location.href = mailto
    setSubmitted(true)
  }

  return (
    <>
      <section className="section">
        <div className="container">
          <div className="grid fade-up">
            <div>
              <span className="eyebrow">Get in touch</span>
              <h1 style={{ marginTop: 24 }}>
                Questions, ideas,<br />
                <span className="italic">or just hello.</span>
              </h1>
              <p style={{ marginTop: 24, maxWidth: 460 }}>
                I read every message. If you've spotted a bug, have a
                feature request, or want to suggest a new tool, please
                reach out — I'd genuinely like to hear it.
              </p>
              <div className="meta-list">
                <div className="meta-row">
                  <span className="meta-label">Email</span>
                  <a href="mailto:sundarsds49@gmail.com" className="meta-link">sundarsds49@gmail.com</a>
                </div>
                <div className="meta-row">
                  <span className="meta-label">Response time</span>
                  <span>Usually within 2 working days</span>
                </div>
                <div className="meta-row">
                  <span className="meta-label">Based in</span>
                  <span>Coimbatore, Tamil Nadu, India</span>
                </div>
                <div className="meta-row">
                  <span className="meta-label">Time zone</span>
                  <span>IST · GMT +5:30</span>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="form">
              <div className="field">
                <label htmlFor="name">Your name</label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="What should I call you?"
                />
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="name@example.com"
                />
              </div>
              <div className="field">
                <label htmlFor="subject">Subject</label>
                <input
                  id="subject"
                  type="text"
                  required
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  placeholder="What's this about?"
                />
              </div>
              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  required
                  rows="6"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me what's on your mind..."
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Send message <span className="arrow">→</span>
              </button>

              {submitted && (
                <p className="success-note">
                  ✓ Your email app should have opened. If it didn't, write directly to sundarsds49@gmail.com.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      <style>{`
        .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: start; }
        .grid h1 .italic { font-style: italic; }
        .meta-list { margin-top: 40px; }
        .meta-row {
          display: grid;
          grid-template-columns: 120px 1fr;
          padding: 12px 0;
          border-bottom: 1px solid var(--line);
          font-size: 0.95rem;
        }
        .meta-label {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          text-transform: uppercase;
          letter-spacing: 0.16em;
          color: var(--ink-muted);
        }
        .meta-link { color: var(--ink); font-weight: 500; }
        .meta-link:hover { color: var(--accent); }

        .form {
          background: var(--bg-elevated);
          padding: 36px;
          border-radius: 8px;
          border: 1px solid var(--line);
        }
        .field { display: flex; flex-direction: column; margin-bottom: 20px; }
        .field label {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          text-transform: uppercase;
          letter-spacing: 0.16em;
          color: var(--ink-soft);
          margin-bottom: 8px;
        }
        .field input, .field textarea {
          padding: 12px 14px;
          font-family: var(--font-body);
          font-size: 0.98rem;
          color: var(--ink);
          background: var(--bg);
          border: 1px solid var(--line);
          border-radius: 6px;
          resize: vertical;
          transition: border-color 0.2s ease;
        }
        .field input:focus, .field textarea:focus {
          outline: none; border-color: var(--accent);
        }
        .success-note {
          margin-top: 16px;
          color: var(--success);
          font-size: 0.92rem;
        }
        @media (max-width: 760px) {
          .grid { grid-template-columns: 1fr; gap: 40px; }
        }
      `}</style>
    </>
  )
}
