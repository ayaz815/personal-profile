const experiences = [
  {
    role: 'Senior Software Engineer',
    company: 'NETSOL Technologies — Lahore, PK',
    period: '09/2024 – Present',
    points: [
      'Leading development of Check Verdict, a modern financing platform for vehicles and houses.',
      'Built Dealer Portal for managing finance applications, vehicle listings, and real-time updates.',
      'Implemented AI-powered chat features for instant support and automated responses.',
      'Built backend services using Python FastAPI for secure and fast data processing.',
    ],
  },
  {
    role: 'Senior LLM Engineer',
    company: 'Turing — Remote',
    period: '11/2024 – 01/2025',
    points: [
      'Fine-tuned an LLM to perform automated tasks on Ubuntu machines (software, browser, system ops).',
      'Prepared datasets and designed prompts for model fine-tuning with PyTorch & HuggingFace.',
      'Automated linting and integrated quality checks into CI/CD pipelines.',
    ],
  },
  {
    role: 'Senior Software Engineer',
    company: 'Intech Automation and Intelligence — Lahore, PK',
    period: '04/2023 – 09/2024',
    points: [
      'Built BitCompare: real-time price comparisons for 50+ cryptocurrencies using Next.js & GraphQL.',
      'Integrated PayPal and MetaMask wallets with webhook-based Slack notifications.',
      'Improved Page Tailor performance by 40% using Redis caching.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Techlogix — Lahore, PK',
    period: '05/2021 – 03/2023',
    points: [
      'Developed a Hospital Management System with real-time video conferencing via Socket.io.',
      'Reduced communication delays by 40% and deployment time via CI/CD automation.',
      'Built The Avenues travel platform with chatbot, flight/hotel APIs, and social login.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section">
      <hr className="divider" />
      <br /><br />
      <p className="section-label">Experience</p>
      <h2 className="section-title">Work history</h2>
      <div className="exp-list">
        {experiences.map((exp) => (
          <div className="exp-item" key={exp.role + exp.company}>
            <div className="exp-header">
              <p className="exp-role">{exp.role}</p>
              <span className="exp-period">{exp.period}</span>
            </div>
            <p className="exp-company">{exp.company}</p>
            <ul className="exp-points">
              {exp.points.map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
