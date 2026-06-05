export default function About() {
  return (
    <section id="about" className="section">
      <hr className="divider" />
      <br /><br />
      <p className="section-label">About</p>
      <h2 className="section-title">Who I am</h2>
      <div className="about-grid">
        <div className="about-text">
          <p>
            I'm a Senior Full-Stack Developer based in Lahore, Pakistan, with 6+ years of experience building
            real-world web applications across finance, healthcare, and AI domains.
          </p>
          <p>
            Currently at NETSOL Technologies, I lead development on a vehicle and house financing platform —
            building backend services with FastAPI, creating dealer portals, and integrating AI-powered features.
          </p>
          <p>
            I've also worked remotely with Turing as a Senior LLM Engineer on prompt engineering, LLM fine-tuning,
            and automated CI/CD pipelines. I value clean code, good practices, and teams that care about craft.
          </p>
        </div>
        <div className="about-stats">
          <div className="stat-card">
            <div className="stat-num">6+</div>
            <div className="stat-label">Years of experience</div>
          </div>
          <div className="stat-card">
            <div className="stat-num">10+</div>
            <div className="stat-label">Products shipped</div>
          </div>
          <div className="stat-card">
            <div className="stat-num">4</div>
            <div className="stat-label">Companies & domains</div>
          </div>
        </div>
      </div>
    </section>
  );
}
