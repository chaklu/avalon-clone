import './Partners.css'

const clients = [
  {
    name: 'Comcast & Xumo syndication heritage',
    desc: 'High-throughput video syndication pipelines built on our engineering legacy scaling media distribution for national networks and OTT endpoints.',
    img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&q=80&auto=format&fit=crop',
    link: 'Learn more',
  },
  {
    name: 'Enterprise MCP integrations',
    desc: 'Production-grade Model Context Protocol gateways connecting autonomous software agents to rendering sandboxes and multi-modal generation pipelines.',
    img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&q=80&auto=format&fit=crop',
    link: 'Learn more',
  },
  {
    name: 'E-commerce graph context ingestion',
    desc: 'Real-time telemetry from global consumer trends translated into structured token context — allowing e-com brands to dynamically refresh video campaigns without manual prompting.',
    img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&q=80&auto=format&fit=crop',
    link: 'Learn more',
  },
  {
    name: 'Enterprise brand governance',
    desc: 'Centralized control planes for high-growth retail brands, enforcing strict graphic parameters, character consistency, and asset preservation across distributed ad networks.',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&q=80&auto=format&fit=crop',
    link: 'Learn more',
  },
]

export default function Partners() {
  return (
    <section className="section partners">
      <div className="container">
        <h2 className="section-title">
          Avalon is deployed by the world's leading organizations across media and commerce.
        </h2>

        <div className="partners__grid">
          {clients.map((c) => (
            <article key={c.name} className="partner-card">
              <div className="partner-card__img-wrap">
                <img src={c.img} alt={c.name} className="partner-card__img" />
              </div>
              <div className="partner-card__body">
                <h3 className="partner-card__name">{c.name}</h3>
                <p className="partner-card__desc">{c.desc}</p>
                <a href="#" className="link-arrow">{c.link} &rsaquo;</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}