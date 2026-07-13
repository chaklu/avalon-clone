import './Hero.css'
import heroBg from '../assets/hero-bg.jpg'
const pills = [
  'ADPANEL CORE',
  'THE ADPANEL MCP PLANE',
  'CREATIVE ORCHESTRATION ENGINE',
  'CONTENT & DISTRIBUTION SYNDICATION',
]
const partners = [
  { name: 'TikTok' },
  { name: 'Meta' },
  { name: 'YouTube' },
  { name: 'MSN' },
  { name: 'Roku' },
  { name: 'Comcast' },
  { name: 'Xumo' },
  { name: 'AWS' },
]

export default function Hero() {
  return (
    <section className="hero">
      {/* Background image with dark overlay */}
      <div className="hero__bg">
        <img src={heroBg} alt="" className="hero__bg-img" />
      </div>

      {/* Content */}
      <div className="hero__content">
        {/* Left Side - Title & CTA */}
        <div className="hero__left">
          <h1 className="hero__title">
            Generative Video
            <span>Systems for Enterprise</span>
            <span>Content</span>
          </h1>

          <p className="hero__sub">
            Our architecture powers content syndication and programmatic AI video
            creation for the world's leading brands and networks.
          </p>

          <div className="hero__actions">
            <a href="#" className="btn-primary">Try Adpanel</a>
          </div>
        </div>

        {/* Right Side - Pills */}
        <div className="hero__right">
          <div className="hero__pills">
            {pills.map((pill) => (
              <a key={pill} href="#" className="hero__pill">{pill}</a>
            ))}
          </div>
        </div>

        {/* Bottom - Partners */}
        <div className="hero__partners">
          {partners.map(({ name }) => (
            <span key={name} className="hero__partner-name">
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}