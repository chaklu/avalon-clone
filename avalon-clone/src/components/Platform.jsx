import './Platform.css'

const platformItems = [
  {
    icon: '⬡',
    title: 'Creative Orchestration Engine',
    desc: 'Stateful video synthesis loops that chain heterogeneous diffusion and audio models while enforcing permanent character and asset consistency.',
  },
  {
    icon: '◎',
    title: 'Algorithmic Ingestion & Syndication Nodes',
    desc: 'Core data layers that scrape real-time multi-modal consumer graphs to instantly translate active audience trends into direct prompt context.',
  },
  {
    icon: '⬗',
    title: 'The Adpanel MCP Plane',
    desc: 'A production-grade Model Context Protocol gateway built to expose rendering sandboxes natively as code-executable tools for enterprise software agents.',
  },
]

export default function Platform() {
  return (
    <section className="section platform" id="platform">
      <div className="container">
        <div className="platform__top">
          <div>
            <p className="section-label">Platform Infrastructure</p>
            <h2 className="section-title">
              We build the video infrastructure businesses need to move from{' '}
              <span>asset ingestion to synthetic creation to programmatic distribution — without the complexity.</span>
            </h2>
          </div>
          <a href="#" className="btn-ghost platform__cta">Learn more</a>
        </div>

        <div className="platform__grid">
          {platformItems.map((item) => (
            <div key={item.title} className="platform-card">
              <span className="platform-card__plus" aria-hidden="true">+</span>
              <span className="platform-card__icon" aria-hidden="true">{item.icon}</span>
              <h3 className="platform-card__title">{item.title}</h3>
              <p className="platform-card__desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}