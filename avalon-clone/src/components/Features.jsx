import './Features.css'

const features = [
  {
    id: '01',
    title: 'adpanel-core: High-Fidelity Video Orchestration',
    desc: 'Our core open-weights agent framework operates as a stateful video orchestration pipeline. By chaining heterogeneous diffusion, voice, and audio architectures through an internal SQLite memory plane, it programmatically enforces temporal and character consistency across sequential multi-shot campaign timelines.',
    link: 'View the Research',
    link2: 'Launch Core',
    img: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?w=600&q=80&auto=format&fit=crop',
  },
  {
    id: '02',
    title: 'Algorithmic Content Ingestion & Video Syndication',
    desc: 'Rather than relying on static prompting, this architecture maps and ingests real-time, unstructured data trends across global social graphs. It programmatically translates active audience engagement metrics directly into structured token context to instantly refresh downstream generation cues.',
    link: 'View Telemetry',
    link2: 'Launch Core',
    img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80&auto=format&fit=crop',
  },
  {
    id: '03',
    title: 'Automated First-Party Data Downstreaming',
    desc: 'A closed-loop training engine designed to capture first-party behavioral metrics — click depth, watch time, and conversion events — directly from distributed media endpoints. This telemetry data routes back into the central agent engine to automatically fine-tune future generations.',
    link: 'Explore Data Moat',
    link2: 'Launch Core',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80&auto=format&fit=crop',
  },
  {
    id: '04',
    title: 'Adpanel MCP Server: Programmatic Video Automation',
    desc: 'Built on our engineering heritage of scaling high-throughput enterprise video syndication for networks like Comcast and Xumo. The Adpanel MCP server exposes our entire video processing and multi-modal prompt expansion as executable tools for autonomous corporate software agents.',
    link: 'Connect MCP',
    link2: 'View Docs',
    img: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80&auto=format&fit=crop',
  },
]

export default function Features() {
  return (
    <section className="section features">
      <div className="container">
        <h2 className="features__heading">
          AI is changing how assets are synthesized, how media infrastructure is engineered, and how the next frontiers of digital commerce are scaled.
        </h2>

        <div className="features__grid">
          {features.map((f) => (
            <article key={f.id} className="feature-card">
              <div className="feature-card__img-wrap">
                <img src={f.img} alt={f.title} className="feature-card__img" />
              </div>
              <div className="feature-card__body">
                <h3 className="feature-card__title">{f.title}</h3>
                <p className="feature-card__desc">{f.desc}</p>
                <div className="feature-card__links">
                  {f.link && (
                    <a href="#" className="link-btn">
                      {f.link}
                    </a>
                  )}
                  {f.link2 && (
                    <a href="#" className="link-btn">
                      {f.link2}
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}