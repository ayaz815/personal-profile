const skills = [
  {
    label: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'Redux', 'TailwindCSS', 'HTML5'],
  },
  {
    label: 'Backend',
    items: ['Node.js', 'NestJS', 'FastAPI', 'Express', 'Socket.io', 'REST / GraphQL'],
  },
  {
    label: 'Cloud & DevOps',
    items: ['AWS', 'Docker', 'CI/CD', 'Vercel', 'Netlify', 'AWS Lambda'],
  },
  {
    label: 'AI & Data',
    items: ['LangChain', 'HuggingFace', 'PyTorch', 'Prompt Engineering', 'LLM Fine-Tuning'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <hr className="divider" />
      <br /><br />
      <p className="section-label">Skills</p>
      <h2 className="section-title">Tech stack</h2>
      <div className="skills-grid">
        {skills.map((group) => (
          <div className="skill-group" key={group.label}>
            <p className="skill-group-title">{group.label}</p>
            <div className="skill-tags">
              {group.items.map((item) => (
                <span className="tag" key={item}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
