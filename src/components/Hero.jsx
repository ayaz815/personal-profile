export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-left">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            Available for remote opportunities
          </div>
          <h1 className="hero-name">
            Ayaz
            <br />
            Mahmood
          </h1>
          <p className="hero-role">Senior Software Engineer · 6+ Years</p>
          <p className="hero-desc">
            Full-stack engineer specializing in React, Next.js, Node.js, Python,
            and AI-powered products. I build scalable, maintainable applications
            for finance, healthcare, and enterprise clients.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              Get in touch
            </a>
            <a href="#experience" className="btn btn-outline">
              View experience
            </a>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-photo-wrap">
            <div className="hero-photo-border" />
            <img
              src="/profile.jpeg"
              alt="Ayaz Mahmood"
              className="hero-photo"
            />
            <div className="hero-photo-overlay" />

            {/* Floating cards */}
            <div className="hero-float-card hero-float-top">
              <span className="hero-float-num">6+</span>
              <span className="hero-float-label">Years exp.</span>
            </div>
            <div className="hero-float-card hero-float-bottom">
              <span className="hero-float-dot" />
              <span className="hero-float-label">10+ Projects</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
