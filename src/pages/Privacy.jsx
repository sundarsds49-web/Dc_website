export default function Privacy() {
  return (
    <section className="section">
      <div className="container legal">
        <span className="eyebrow">Legal</span>
        <h1 style={{ marginTop: 20 }}>Privacy Policy</h1>
        <p className="meta">Last updated: May 24, 2026</p>

        <p>This Privacy Policy explains how QR Tools ("we", "us", "our") handles information when you use our website. We've kept this short because we collect almost nothing.</p>

        <h2>1. What we don't collect</h2>
        <p>Let's start with what we <em>don't</em> do, because it's most of the story:</p>
        <ul>
          <li>We don't store the content you encode in QR codes.</li>
          <li>We don't have user accounts, so we don't store names, emails, or passwords for the tool itself.</li>
          <li>We don't sell, rent, or share data with third-party advertisers.</li>
          <li>We don't use tracking pixels from social platforms.</li>
        </ul>

        <h2>2. What we do collect</h2>
        <p>To keep the site running and improve it, we collect a small amount of anonymous analytics:</p>
        <ul>
          <li><strong>Page views</strong> — which pages are most visited.</li>
          <li><strong>Country-level location</strong> — derived from your IP address, not stored alongside it.</li>
          <li><strong>Browser & device type</strong> — so we know what to test on.</li>
          <li><strong>Referrer</strong> — which site sent you here, if any.</li>
        </ul>
        <p>This data is aggregated and cannot be used to identify you personally.</p>

        <h2>3. Contact form</h2>
        <p>If you fill in our contact form, the message is sent via your email client (not a server). We see your name, email, and message only when you actively email us. We use this only to reply.</p>

        <h2>4. Cookies</h2>
        <p>We use a small number of essential cookies to remember preferences (such as your most recent colour and size settings). We don't use advertising cookies.</p>

        <h2>5. QR code data</h2>
        <p>All QR code generation happens locally in your browser. The text, URL, WiFi password, or other data you enter never leaves your device unless you choose to share the resulting code.</p>

        <h2>6. Children</h2>
        <p>Our service is intended for users aged 13 and over. If you're under 13, please ask a parent or guardian before using the site.</p>

        <h2>7. Third-party links</h2>
        <p>Some pages on our site may link to third-party websites. We're not responsible for the privacy practices of those sites.</p>

        <h2>8. Your rights</h2>
        <p>Depending on where you live, you have the right to access, correct, or delete personal data we hold about you. Since we hold very little, this usually amounts to email correspondence. Email <a href="mailto:sundarsds49@gmail.com">sundarsds49@gmail.com</a> for any such request.</p>

        <h2>9. Changes to this policy</h2>
        <p>We may update this policy occasionally. The "Last updated" date at the top will reflect any change. Significant updates will be flagged on the homepage.</p>

        <h2>10. Contact</h2>
        <p>For any privacy-related questions, email <a href="mailto:sundarsds49@gmail.com">sundarsds49@gmail.com</a>.</p>
      </div>

      <style>{`
        .legal { max-width: 760px; }
        .legal h1 { font-size: clamp(2.4rem, 4vw, 3.4rem); margin-bottom: 8px; }
        .legal h2 { font-size: 1.4rem; margin: 32px 0 12px; font-family: var(--font-body); font-weight: 600; }
        .legal .meta { color: var(--ink-muted); font-family: var(--font-mono); font-size: 0.85rem; margin-bottom: 32px; }
        .legal ul { padding-left: 24px; margin: 12px 0 16px; }
        .legal li { margin-bottom: 8px; color: var(--ink-soft); }
        .legal em { font-family: var(--font-display); font-style: italic; color: var(--ink); }
        .legal a { color: var(--accent); text-decoration: underline; }
      `}</style>
    </section>
  )
}
