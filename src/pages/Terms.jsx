export default function Terms() {
  return (
    <section className="section">
      <div className="container legal">
        <span className="eyebrow">Legal</span>
        <h1 style={{ marginTop: 20 }}>Terms & Conditions</h1>
        <p className="meta">Last updated: May 24, 2026</p>

        <p>These Terms and Conditions ("Terms") govern your use of QR Tools (the "Service"). By using the Service, you agree to be bound by these Terms. If you don't agree, please don't use the Service.</p>

        <h2>1. The Service</h2>
        <p>QR Tools is a free web application that generates QR codes locally in your browser. The Service is provided "as is", without warranty of any kind.</p>

        <h2>2. Eligibility</h2>
        <p>You must be at least 13 years old to use the Service. If you're under 18, you should have a parent or guardian's permission.</p>

        <h2>3. Acceptable use</h2>
        <p>You agree not to use the Service to:</p>
        <ul>
          <li>Generate QR codes that link to illegal, harmful, or fraudulent content.</li>
          <li>Encode malware, phishing links, or content that infringes on others' rights.</li>
          <li>Reverse engineer, scrape, or abuse the Service in ways that disrupt normal operation.</li>
          <li>Violate any applicable laws or regulations.</li>
        </ul>

        <h2>4. Ownership of generated QR codes</h2>
        <p>QR codes you generate are yours. We make no claim on them. You may use them for personal or commercial purposes without attribution.</p>

        <h2>5. Our intellectual property</h2>
        <p>The Service itself — the website design, code, and content — is owned by us. You may not copy or redistribute substantial parts of it without permission. Linking to the site is welcome and encouraged.</p>

        <h2>6. No warranty</h2>
        <p>While we work hard to make the Service reliable, we cannot guarantee it will always be available, error-free, or that the QR codes it generates will work perfectly in every scanning environment. Always test before printing or distributing.</p>

        <h2>7. Limitation of liability</h2>
        <p>To the maximum extent permitted by law, we are not liable for any indirect, incidental, or consequential damages resulting from your use of the Service. Since the Service is free and runs locally, your reliance on it is at your own risk.</p>

        <h2>8. Third-party services</h2>
        <p>Some features may use third-party libraries or services (like fonts loaded from Google Fonts). Their use is governed by their own terms.</p>

        <h2>9. Changes to the Service</h2>
        <p>We may add, remove, or modify features at any time. We try to give notice for significant changes, but we don't always have to.</p>

        <h2>10. Termination</h2>
        <p>We may suspend or end access to the Service for users who misuse it, at our discretion.</p>

        <h2>11. Governing law</h2>
        <p>These Terms are governed by the laws of India. Any disputes will be handled in the courts of Tamil Nadu, India.</p>

        <h2>12. Changes to these Terms</h2>
        <p>We may update these Terms. The "Last updated" date will reflect changes. Continued use of the Service after a change means you accept the new Terms.</p>

        <h2>13. Contact</h2>
        <p>Questions about these Terms? Email <a href="mailto:sundarsds49@gmail.com">sundarsds49@gmail.com</a>.</p>
      </div>

      <style>{`
        .legal { max-width: 760px; }
        .legal h1 { font-size: clamp(2.4rem, 4vw, 3.4rem); margin-bottom: 8px; }
        .legal h2 { font-size: 1.4rem; margin: 32px 0 12px; font-family: var(--font-body); font-weight: 600; }
        .legal .meta { color: var(--ink-muted); font-family: var(--font-mono); font-size: 0.85rem; margin-bottom: 32px; }
        .legal ul { padding-left: 24px; margin: 12px 0 16px; }
        .legal li { margin-bottom: 8px; color: var(--ink-soft); }
        .legal a { color: var(--accent); text-decoration: underline; }
      `}</style>
    </section>
  )
}
