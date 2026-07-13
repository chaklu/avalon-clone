import './Products.css'

const products = [
  {
    name: 'adpanel-core',
    desc: 'Our stateful open-weights video agent framework chains heterogeneous diffusion, voice, and audio models through an internal memory plane — enforcing temporal and character consistency across multi-shot campaign timelines. Built for teams that need cinema-grade UGC at programmatic scale.',
    img: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=700&q=80&auto=format&fit=crop',
    tag: 'Research',
  },
  {
    name: 'Creative Orchestration Studio',
    desc: 'An immersive dark-theater web interface optimized for product asset ingestion, reference conditioning, and cinema-grade UGC generation — designed for operators, not prompt engineers. Export platform-native creative packages ready for TikTok, Reels, and Shorts.',
    img: 'https://images.unsplash.com/photo-1626544827763-d516dce335e2?w=700&q=80&auto=format&fit=crop',
    tag: 'Studio',
  },
  {
    name: 'Adpanel MCP Server',
    desc: 'A production-grade Model Context Protocol gateway exposing video processing, multi-modal prompt expansion, and isolated rendering sandboxes as code-executable tools for autonomous enterprise agents. Connect natively into Cursor, Claude Code, and internal orchestration stacks.',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80&auto=format&fit=crop',
    tag: 'Infrastructure',
  },
]

export default function Products() {
  return (
    <section className="section products" id="products">
      <div className="container">
        <p className="section-label">Latest Research & Products</p>
        <h2 className="section-title">
          Our latest research and products
        </h2>

        <div className="products__grid">
          {products.map((p) => (
            <article key={p.name} className="product-card">
              <div className="product-card__img-wrap">
                <img src={p.img} alt={p.name} className="product-card__img" />
                <span className="product-card__tag">{p.tag}</span>
              </div>
              <div className="product-card__body">
                <h3 className="product-card__name">{p.name}</h3>
                <p className="product-card__desc">{p.desc}</p>
                <a href="#" className="link-arrow">Learn more →</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}