import { useState, useEffect, useRef } from 'react'
import QRCode from 'qrcode'

const QR_TYPES = [
  { id: 'url', label: 'URL', icon: '🔗', placeholder: 'https://example.com', format: (v) => v },
  { id: 'text', label: 'Plain Text', icon: '📝', placeholder: 'Any text...', format: (v) => v },
  { id: 'email', label: 'Email', icon: '✉️', placeholder: 'name@example.com', format: (v) => `mailto:${v}` },
  { id: 'phone', label: 'Phone', icon: '📞', placeholder: '+91 98765 43210', format: (v) => `tel:${v}` },
  { id: 'sms', label: 'SMS', icon: '💬', placeholder: '+91 98765 43210', format: (v) => `sms:${v}` },
  { id: 'wifi', label: 'WiFi', icon: '📶', placeholder: 'Network name', format: (v, opts) => `WIFI:T:${opts?.security || 'WPA'};S:${v};P:${opts?.password || ''};;` }
]

const COLOR_PRESETS = [
  { fg: '#1a1410', bg: '#ffffff', name: 'Classic' },
  { fg: '#1d4ed8', bg: '#ffffff', name: 'Blue' },
  { fg: '#dc2626', bg: '#ffffff', name: 'Red' },
  { fg: '#15803d', bg: '#ffffff', name: 'Green' },
  { fg: '#7c3aed', bg: '#ffffff', name: 'Purple' },
  { fg: '#1a1410', bg: '#fef3c7', name: 'Cream' }
]

export default function Home() {
  const [type, setType] = useState('url')
  const [input, setInput] = useState('https://qrtools.example')
  const [wifiPass, setWifiPass] = useState('')
  const [wifiSec, setWifiSec] = useState('WPA')
  const [size, setSize] = useState(400)
  const [fg, setFg] = useState('#1a1410')
  const [bg, setBg] = useState('#ffffff')
  const [errorLevel, setErrorLevel] = useState('M')
  const [dataUrl, setDataUrl] = useState('')
  const [svgString, setSvgString] = useState('')
  const canvasRef = useRef(null)

  const currentType = QR_TYPES.find(t => t.id === type)

  useEffect(() => {
    if (!input.trim()) {
      setDataUrl('')
      setSvgString('')
      return
    }

    const formattedValue = currentType.format(input, { password: wifiPass, security: wifiSec })

    QRCode.toDataURL(formattedValue, {
      width: size,
      margin: 2,
      color: { dark: fg, light: bg },
      errorCorrectionLevel: errorLevel
    })
      .then(url => setDataUrl(url))
      .catch(err => console.error(err))

    QRCode.toString(formattedValue, {
      type: 'svg',
      margin: 2,
      color: { dark: fg, light: bg },
      errorCorrectionLevel: errorLevel
    })
      .then(svg => setSvgString(svg))
      .catch(err => console.error(err))
  }, [input, type, size, fg, bg, errorLevel, wifiPass, wifiSec, currentType])

  const downloadPNG = () => {
    if (!dataUrl) return
    const link = document.createElement('a')
    link.href = dataUrl
    link.download = `qrcode-${Date.now()}.png`
    link.click()
  }

  const downloadSVG = () => {
    if (!svgString) return
    const blob = new Blob([svgString], { type: 'image/svg+xml' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `qrcode-${Date.now()}.svg`
    link.click()
    URL.revokeObjectURL(url)
  }

  const copyImage = async () => {
    if (!dataUrl) return
    try {
      const blob = await (await fetch(dataUrl)).blob()
      await navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })])
      alert('QR code copied to clipboard')
    } catch {
      alert('Copy not supported in this browser — please download instead')
    }
  }

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="hero-inner fade-up">
            <span className="eyebrow">Free · No Signup · Instant Download</span>
            <h1 className="hero-title">
              Generate <span className="italic">beautiful</span><br />
              QR codes in seconds.
            </h1>
            <p className="hero-lede">
              Create QR codes for URLs, plain text, WiFi networks, email,
              phone numbers, and SMS messages. Customise colours, download
              as PNG or SVG, and use them anywhere. Free forever.
            </p>
          </div>
        </div>
      </section>

      {/* GENERATOR */}
      <section className="gen-section">
        <div className="container">
          <div className="gen-grid fade-up delay-1">
            {/* Controls */}
            <div className="controls">
              <div className="control-block">
                <label className="lbl">What do you want to encode?</label>
                <div className="type-grid">
                  {QR_TYPES.map(t => (
                    <button
                      key={t.id}
                      onClick={() => setType(t.id)}
                      className={`type-btn ${type === t.id ? 'active' : ''}`}
                    >
                      <span className="type-icon">{t.icon}</span>
                      <span className="type-label">{t.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="control-block">
                <label className="lbl">
                  {currentType.label} content
                </label>
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={currentType.placeholder}
                  className="text-input"
                  autoFocus
                />

                {type === 'wifi' && (
                  <>
                    <label className="lbl" style={{ marginTop: 16 }}>
                      WiFi password
                    </label>
                    <input
                      type="text"
                      value={wifiPass}
                      onChange={(e) => setWifiPass(e.target.value)}
                      placeholder="Leave empty for open network"
                      className="text-input"
                    />
                    <label className="lbl" style={{ marginTop: 16 }}>
                      Security type
                    </label>
                    <div className="seg-control">
                      {['WPA', 'WEP', 'nopass'].map(s => (
                        <button
                          key={s}
                          onClick={() => setWifiSec(s)}
                          className={`seg-btn ${wifiSec === s ? 'active' : ''}`}
                        >
                          {s === 'nopass' ? 'Open' : s}
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>

              <div className="control-block">
                <label className="lbl">Colour preset</label>
                <div className="palette">
                  {COLOR_PRESETS.map(p => (
                    <button
                      key={p.name}
                      onClick={() => { setFg(p.fg); setBg(p.bg); }}
                      className={`palette-btn ${fg === p.fg && bg === p.bg ? 'active' : ''}`}
                      title={p.name}
                    >
                      <div className="palette-swatch" style={{ background: p.bg }}>
                        <div className="palette-fg" style={{ background: p.fg }}></div>
                      </div>
                      <span className="palette-name">{p.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="control-block">
                <label className="lbl">Custom colours</label>
                <div className="color-pickers">
                  <div className="cpick">
                    <span>Foreground</span>
                    <input type="color" value={fg} onChange={(e) => setFg(e.target.value)} />
                  </div>
                  <div className="cpick">
                    <span>Background</span>
                    <input type="color" value={bg} onChange={(e) => setBg(e.target.value)} />
                  </div>
                </div>
              </div>

              <div className="control-block">
                <label className="lbl">Size — {size}px</label>
                <input
                  type="range"
                  min="200"
                  max="1000"
                  step="50"
                  value={size}
                  onChange={(e) => setSize(parseInt(e.target.value))}
                  className="slider"
                />
              </div>

              <div className="control-block">
                <label className="lbl">Error correction</label>
                <div className="seg-control">
                  {[
                    { v: 'L', t: 'Low' },
                    { v: 'M', t: 'Medium' },
                    { v: 'Q', t: 'Quartile' },
                    { v: 'H', t: 'High' }
                  ].map(o => (
                    <button
                      key={o.v}
                      onClick={() => setErrorLevel(o.v)}
                      className={`seg-btn ${errorLevel === o.v ? 'active' : ''}`}
                    >
                      {o.t}
                    </button>
                  ))}
                </div>
                <p className="hint">Higher error correction lets the code work even when partially damaged.</p>
              </div>
            </div>

            {/* Preview */}
            <div className="preview-wrap">
              <div className="preview-sticky">
                <div className="preview">
                  {dataUrl ? (
                    <img src={dataUrl} alt="QR code preview" className="qr-img" />
                  ) : (
                    <div className="qr-empty">
                      Type something to generate
                    </div>
                  )}
                </div>
                <div className="actions">
                  <button onClick={downloadPNG} disabled={!dataUrl} className="btn btn-primary">
                    Download PNG <span className="arrow">↓</span>
                  </button>
                  <button onClick={downloadSVG} disabled={!svgString} className="btn btn-secondary">
                    Download SVG
                  </button>
                  <button onClick={copyImage} disabled={!dataUrl} className="btn btn-secondary">
                    Copy
                  </button>
                </div>
                <p className="preview-note">
                  Test your QR code with any phone camera before printing or sharing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="section">
        <div className="container">
          <span className="eyebrow">What people use QR codes for</span>
          <h2 style={{ marginTop: 12, marginBottom: 50 }}>
            A few real ways to <span className="italic">put them to work.</span>
          </h2>
          <div className="cases-grid">
            {[
              { t: 'Business cards', d: 'Print your portfolio or LinkedIn link on a business card. One scan and you\'ve made an introduction.' },
              { t: 'WiFi sharing', d: 'Stick a QR code by your reception desk. Guests connect to your WiFi in two taps — no typing, no awkward password sharing.' },
              { t: 'Restaurant menus', d: 'Replace plastic menus with a code on the table. Update the menu anytime without reprinting anything.' },
              { t: 'Event check-in', d: 'Generate codes for ticket holders. Scan at the door for instant validation — much faster than reading IDs.' },
              { t: 'Product packaging', d: 'Link customers directly to setup instructions, warranty registration, or your support page.' },
              { t: 'Marketing campaigns', d: 'Add a code to print ads or posters. Track conversions and measure offline-to-online traffic.' }
            ].map(c => (
              <div key={c.t} className="case">
                <h3>{c.t}</h3>
                <p>{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section-deep">
        <div className="container">
          <span className="eyebrow">Frequently asked</span>
          <h2 style={{ marginTop: 12, marginBottom: 40 }}>Common questions.</h2>
          <div className="faq-list">
            {[
              { q: 'Is this really free?', a: 'Yes — fully free. No signup, no watermark, no daily limit. We don\'t store your data on a server; everything happens in your browser.' },
              { q: 'Will my QR codes expire?', a: 'No. Static QR codes (the kind we generate) point directly to the data you encode. They never expire because there\'s no middle server.' },
              { q: 'Can I use these for commercial purposes?', a: 'Yes. You own every QR code you generate here. Use them for business cards, packaging, advertising, anything you like.' },
              { q: 'What\'s the difference between PNG and SVG?', a: 'PNG is a regular image — perfect for digital use. SVG is a vector file that stays sharp at any size, ideal for printing on large banners or merchandise.' },
              { q: 'Why does my QR code look slightly different each time?', a: 'QR codes have multiple valid representations of the same data. Slight pattern changes are normal and don\'t affect scanability.' },
              { q: 'What does error correction mean?', a: 'A higher error correction level lets the QR code still work even if part of it is dirty, scratched, or covered with a logo. The trade-off is a denser pattern.' }
            ].map(f => (
              <details key={f.q} className="faq">
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .hero { padding: 70px 0 40px; }
        .hero-title { margin: 24px 0 22px; }
        .hero-title .italic { font-style: italic; font-weight: 400; color: var(--accent); }
        .hero-lede { font-size: 1.15rem; max-width: 640px; }

        .gen-section { padding: 40px 0 80px; }
        .gen-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 60px;
          align-items: start;
        }
        .controls { display: flex; flex-direction: column; gap: 28px; }
        .control-block { display: flex; flex-direction: column; gap: 10px; }
        .lbl {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          text-transform: uppercase;
          letter-spacing: 0.16em;
          color: var(--ink-soft);
          font-weight: 500;
        }
        .hint { font-size: 0.82rem; color: var(--ink-muted); margin-top: 6px; }

        .type-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
        }
        .type-btn {
          display: flex; flex-direction: column; align-items: center; gap: 6px;
          padding: 14px 10px;
          background: var(--bg-elevated);
          border: 1px solid var(--line);
          border-radius: 8px;
          transition: all 0.2s ease;
        }
        .type-btn:hover { border-color: var(--ink); transform: translateY(-1px); }
        .type-btn.active {
          background: var(--ink); color: var(--bg); border-color: var(--ink);
        }
        .type-icon { font-size: 1.4rem; }
        .type-label { font-size: 0.82rem; font-weight: 500; }

        .text-input {
          width: 100%;
          padding: 14px 16px;
          font-size: 1rem;
          font-family: var(--font-body);
          background: var(--bg-elevated);
          border: 1px solid var(--line);
          border-radius: 8px;
          color: var(--ink);
          transition: border-color 0.2s ease;
        }
        .text-input:focus { outline: none; border-color: var(--accent); }

        .seg-control {
          display: flex;
          background: var(--bg-elevated);
          border: 1px solid var(--line);
          border-radius: 8px;
          overflow: hidden;
        }
        .seg-btn {
          flex: 1;
          padding: 10px 12px;
          font-size: 0.88rem;
          font-weight: 500;
          color: var(--ink-soft);
          border-right: 1px solid var(--line);
          transition: all 0.2s ease;
        }
        .seg-btn:last-child { border-right: none; }
        .seg-btn:hover { background: var(--bg-deep); color: var(--ink); }
        .seg-btn.active { background: var(--ink); color: var(--bg); }

        .palette { display: grid; grid-template-columns: repeat(6, 1fr); gap: 10px; }
        .palette-btn {
          display: flex; flex-direction: column; align-items: center; gap: 6px;
          padding: 8px;
          background: var(--bg-elevated);
          border: 1px solid var(--line);
          border-radius: 8px;
          transition: all 0.2s ease;
        }
        .palette-btn:hover { border-color: var(--ink); }
        .palette-btn.active { border-color: var(--accent); border-width: 2px; }
        .palette-swatch {
          width: 36px; height: 36px;
          border-radius: 6px;
          position: relative;
          border: 1px solid var(--line);
        }
        .palette-fg {
          position: absolute;
          inset: 6px;
          border-radius: 3px;
        }
        .palette-name { font-size: 0.72rem; color: var(--ink-soft); }

        .color-pickers { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        .cpick {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 14px;
          background: var(--bg-elevated);
          border: 1px solid var(--line);
          border-radius: 8px;
        }
        .cpick span { font-size: 0.85rem; color: var(--ink-soft); }
        .cpick input[type="color"] {
          width: 40px; height: 28px;
          border: none; cursor: pointer; background: none;
          border-radius: 4px;
          overflow: hidden;
        }

        .slider {
          width: 100%;
          -webkit-appearance: none;
          appearance: none;
          height: 4px;
          background: var(--line-strong);
          border-radius: 2px;
          outline: none;
          margin-top: 4px;
        }
        .slider::-webkit-slider-thumb {
          -webkit-appearance: none; appearance: none;
          width: 20px; height: 20px;
          background: var(--ink);
          border-radius: 50%;
          cursor: pointer;
        }
        .slider::-moz-range-thumb {
          width: 20px; height: 20px;
          background: var(--ink);
          border-radius: 50%;
          cursor: pointer;
          border: none;
        }

        .preview-wrap { position: relative; }
        .preview-sticky { position: sticky; top: 110px; }
        .preview {
          background: var(--bg-elevated);
          border: 1px solid var(--line);
          border-radius: 12px;
          padding: 32px;
          aspect-ratio: 1;
          display: grid;
          place-items: center;
          margin-bottom: 20px;
        }
        .qr-img { max-width: 100%; height: auto; }
        .qr-empty {
          color: var(--ink-muted);
          font-style: italic;
          font-family: var(--font-display);
          font-size: 1.2rem;
          text-align: center;
        }
        .actions { display: flex; gap: 10px; flex-wrap: wrap; }
        .actions .btn:disabled { opacity: 0.5; cursor: not-allowed; }
        .preview-note { font-size: 0.85rem; color: var(--ink-muted); margin-top: 14px; font-style: italic; }

        .cases-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }
        .case {
          background: var(--bg-elevated);
          padding: 28px;
          border-radius: 8px;
          border-left: 2px solid var(--accent);
        }
        .case h3 { font-size: 1.15rem; margin-bottom: 10px; }

        .section-deep { background: var(--bg-deep); }
        .faq-list { display: flex; flex-direction: column; gap: 4px; max-width: 820px; }
        .faq {
          background: var(--bg-elevated);
          border: 1px solid var(--line);
          border-radius: 8px;
          padding: 4px 0;
          overflow: hidden;
        }
        .faq summary {
          padding: 18px 22px;
          font-weight: 500;
          font-size: 1.02rem;
          cursor: pointer;
          list-style: none;
          position: relative;
          padding-right: 50px;
        }
        .faq summary::-webkit-details-marker { display: none; }
        .faq summary::after {
          content: '+';
          position: absolute;
          right: 22px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 1.5rem;
          color: var(--accent);
          font-weight: 300;
          transition: transform 0.25s ease;
        }
        .faq[open] summary::after { transform: translateY(-50%) rotate(45deg); }
        .faq p { padding: 0 22px 20px; color: var(--ink-soft); }

        @media (max-width: 900px) {
          .gen-grid { grid-template-columns: 1fr; gap: 40px; }
          .preview-sticky { position: static; }
          .type-grid { grid-template-columns: repeat(2, 1fr); }
          .palette { grid-template-columns: repeat(3, 1fr); }
          .cases-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  )
}
