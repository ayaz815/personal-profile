const projects = [
  {
    name: 'Check Verdict',
    desc: 'Modern financing platform for vehicles and houses. Built for Credit Analysts, Funding Analysts, and Dealers with AI-powered chat and business rules management.',
    tech: ['React', 'FastAPI', 'PostgreSQL', 'React Query'],
    link: null,
  },
  {
    name: 'BitCompare',
    desc: 'Crypto finance comparison platform with real-time pricing for 50+ cryptocurrencies, Binance chart integration, and PayPal / MetaMask payment processing.',
    tech: ['Next.js', 'GraphQL', 'Hasura', 'TypeScript'],
    link: 'https://bitcompare.net/',
  },
  {
    name: 'Page Tailor',
    desc: 'AI-powered platform for generating custom website content. Integrated Redis caching to reduce page load times by 40%.',
    tech: ['React', 'Node.js', 'MongoDB', 'Redis'],
    link: 'https://pagetailor.ai/',
  },
  {
    name: 'Quiz Show Generator',
    desc: 'Web app helping Norwegian seniors create interactive quiz shows with audio and images, exported as offline-friendly HTML pages.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'TailwindCSS'],
    link: 'https://bestefar.no',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <hr className="divider" />
      <br /><br />
      <p className="section-label">Projects</p>
      <h2 className="section-title">Selected work</h2>
      <div className="projects-grid">
        {projects.map((p) => (
          <a
            className="project-card"
            key={p.name}
            href={p.link || '#'}
            target={p.link ? '_blank' : undefined}
            rel="noreferrer"
          >
            <p className="project-name">{p.name} {p.link ? '↗' : ''}</p>
            <p className="project-desc">{p.desc}</p>
            <div className="project-tech">
              {p.tech.map((t) => (
                <span className="tag" key={t}>{t}</span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
