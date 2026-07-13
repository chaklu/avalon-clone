import { useState } from 'react'
import './Navbar.css'

const navLinks = [
  {
    label: 'Product',
    items: [
      { name: 'adpanel-core', desc: 'AI video agent framework' },
      { name: 'Orchestration Studio', desc: 'Cinema-grade UGC interface' },
      { name: 'Rendering Sandboxes', desc: 'Automated pipeline layers' },
    ],
  },
  {
    label: 'Solutions',
    items: [
      { name: 'Video Syndication', desc: 'High-volume distribution' },
      { name: 'Context-Aware Ad Ops', desc: 'Algorithmic creative loops' },
      { name: 'Visual Governance', desc: 'Brand identity control' },
    ],
  },
  {
    label: 'Resources',
    items: [
      { name: 'MCP Gateway', desc: 'Developer specs & configs' },
      { name: 'Sovereign Nodes', desc: 'GPU rendering pools' },
      { name: 'Research', desc: 'World models & whitepapers' },
    ],
  },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)

  return (
    <header className="navbar">
      <div className="navbar__inner container">
        {/* Logo */}
        <a href="/" className="navbar__logo">avalon</a>

        {/* Desktop Nav */}
        <nav className="navbar__links">
          {navLinks.map((group) => (
            <div
              key={group.label}
              className="navbar__group"
              onMouseEnter={() => setActiveDropdown(group.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="navbar__group-btn">
                {group.label}
                <svg width="30" height="6" viewBox="0 0 10 8" fill="none">
                  <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>

              {activeDropdown === group.label && (
                <div className="navbar__dropdown">
                  {group.items.map((item) => (
                    <a key={item.name} href="#" className="navbar__dropdown-item">
                      <span className="navbar__dropdown-name">{item.name}</span>
                      <span className="navbar__dropdown-desc">{item.desc}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
        <a href="#" className="btn-primary navbar__cta">Try Adpanel</a>
      </div>
    </header>
  )
}