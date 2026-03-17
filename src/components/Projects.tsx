import { ExternalLink, Github } from "lucide-react";

interface Project {
  name: string;
  description: string;
  tags: string[];
  github: string;
  live?: string;
}

const projects: Project[] = [
  {
    name: "CasaFind PH",
    description:
      "A smarter way to find and list homes in the Philippines. Real estate platform built with modern frontend stack.",
    tags: ["TypeScript", "React 18", "Vite", "Tailwind CSS"],
    github: "https://github.com/andreachico/CasaFindPH",
  },
  {
    name: "CasaFind CMS",
    description:
      "Content management system for CasaFind PH, enabling property listing management and administration.",
    tags: ["TypeScript", "React", "CMS"],
    github: "https://github.com/andreachico/CasaFindCMS",
  },
  {
    name: "Daily Digest Hub",
    description:
      "A daily news and content digest platform for staying up to date with curated articles and updates.",
    tags: ["TypeScript", "React", "Vite"],
    github: "https://github.com/andreachico/daily-digest-hub",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-card">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold tracking-tight mb-12">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.name}
              className="group border border-border rounded-lg p-6 bg-background hover:-translate-y-1 hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold">{project.name}</h3>
                <div className="flex items-center gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-muted hover:text-heading transition-colors"
                    aria-label={`${project.name} GitHub`}
                  >
                    <Github size={18} />
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-muted hover:text-heading transition-colors"
                      aria-label={`${project.name} live`}
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>
              <p className="text-text-body text-sm leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs px-2 py-1 rounded bg-muted text-text-muted"
                  >
                    {tag}
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

export default Projects;
