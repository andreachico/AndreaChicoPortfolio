const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      "React", "Next.js", "React Admin", "Vue.js", "TypeScript", "JavaScript (ES6+)",
      "HTML5", "CSS3", "SCSS", "Tailwind CSS", "Bootstrap", "Responsive Design",
    ],
  },
  {
    title: "Backend & Frameworks",
    skills: ["REST APIs", "GraphQL", "PHP Symfony", "Node.js", "Go"],
  },
  {
    title: "Tools & Platforms",
    skills: [
      "Git", "GitLab", "GitHub", "CI/CD", "Docker", "npm", "Webpack", "Vite",
      "AWS", "Camunda (BPMN/DMN)", "Formsflow.ai",
    ],
  },
  {
    title: "Testing & QA",
    skills: ["Playwright", "Jest", "Postman", "Insomnia"],
  },
  {
    title: "Design & Collaboration",
    skills: ["Figma", "Sketch", "Miro", "Jira", "Confluence", "Agile/Scrum"],
  },
];

const TechStack = () => {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold tracking-tight mb-12">Technical Skills</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((cat) => (
            <div key={cat.title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-text-muted mb-4">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-xs px-2.5 py-1 rounded-md bg-muted text-text-body border border-border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
