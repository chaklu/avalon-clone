import './Footer.css'

const footerLinks = [
  {
    heading: 'Product',
    links: ['Adpanel core', 'Orchestration Studio', 'Rendering Sandboxes', 'Try Adpanel'],
  },
  {
    heading: 'Solutions',
    links: ['Video Syndication', 'Context-Aware Ad Ops', 'Visual Governance', 'Platform'],
  },
  {
    heading: 'Resources',
    links: ['MCP Gateway', 'Sovereign Nodes', 'Research', 'Privacy Policy'],
  },
  {
    heading: 'Get started',
    links: ['Try Adpanel', 'Book a call'],
  },
  {
    heading: 'Connect',
    links: ['Instagram', 'X', 'Threads', 'LinkedIn'],
  },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__links">
          {footerLinks.map((col) => (
            <div key={col.heading} className="footer__col">
              <p className="footer__col-heading">{col.heading}</p>
              {col.links.map((link) => (
                <a key={link} href="#" className="footer__link">{link}</a>
              ))}
            </div>
          ))}
        </div>

        <div className="footer__bottom">
          <a href="/" className="footer__logo">avalon</a>
          <div className="footer__legal">
            <span className="footer__copy">© 2026 Avalon Platforms</span>
            <a href="#" className="footer__legal-link">Privacy Policy</a>
            <a href="#" className="footer__legal-link">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}