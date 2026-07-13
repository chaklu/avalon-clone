import './FooterCTA.css'

export default function FooterCTA() {
  return (
    <section className="footer-cta">
      <div className="container footer-cta__inner">
        <div className="footer-cta__bg-img-wrap">
          <img
            src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=1400&q=80&auto=format&fit=crop"
            alt=""
            className="footer-cta__bg-img"
          />
          <div className="footer-cta__overlay"></div>
        </div>
        <div className="footer-cta__content">
          <p className="footer-cta__eyebrow">Get started</p>
          <h2 className="footer-cta__title">
            We build the infrastructure that powers the future of AI video creation.
          </h2>
          <p className="footer-cta__sub">
            Join leading brands powering their content with Adpanel.
          </p>
          <a href="#" className="btn-primary footer-cta__btn">Try Adpanel</a>
        </div>
      </div>
    </section>
  )
}