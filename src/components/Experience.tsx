import { Briefcase } from "lucide-react";

interface Role {
  title: string;
  company: string;
  location: string;
  period: string;
  type: string;
  bullets: string[];
}

const roles: Role[] = [
  {
    title: "Junior Frontend Engineer",
    company: "JUNGE FREIHEIT Verlag GmbH",
    location: "Berlin",
    period: "Jul 2025 – Present",
    type: "Full-time, Hybrid",
    bullets: [
      "Modernizing a German news portal with Next.js, GraphQL, and TypeScript following scalable best practices",
      "Developing and implementing new features across all development phases to improve functionality and UX",
      "Performance optimization through improved caching strategies, reduced API calls, and faster load times",
      "Building efficient admin interfaces with React Admin for simplified editorial content management",
      "Close collaboration with product owners and cross-functional teams to refine user flows",
    ],
  },
  {
    title: "Junior Web Developer",
    company: "publicplan GmbH",
    location: "Berlin",
    period: "Aug 2023 – May 2025",
    type: "Full-time, Hybrid",
    bullets: [
      "Contributed to digital transformation of German public administrations, implementing fully digital application processes",
      "Designed and implemented optimized workflows with Formsflow.ai, BPMN Camunda, and DMN templates",
      "Developed responsive, user-friendly web applications with React, TypeScript, JavaScript, HTML, and SCSS",
      "Built a unified digital platform for employees to submit, approve, and process internal requests",
      "Collaborated with development and DevOps teams to optimize CI/CD pipelines with GitLab",
    ],
  },
  {
    title: "Application Development Apprentice",
    company: "BurdaForward GmbH",
    location: "Munich",
    period: "Sep 2019 – Jun 2023",
    type: "Apprenticeship, Hybrid",
    bullets: [
      "Frontend development for various areas of chip.de (CHIP Praxistipps, CHIP Pages, CHIP 365, CHIP News)",
      "Developed dynamic, reusable components with PHP Symfony, Twig, Vue.js, JavaScript, and SCSS",
      "Implemented testing and QA with Playwright ensuring application quality",
      "UX improvements in collaboration with design teams using Figma",
      "Worked with Docker, AWS, Bootstrap, and modern frontend tooling",
      "Recognized for strong performance and quality awareness during apprenticeship",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold tracking-tight mb-12">Experience</h2>
        <div className="space-y-12">
          {roles.map((role, i) => (
            <div key={i} className="relative pl-8 border-l-2 border-border">
              <div className="absolute -left-[13px] top-0 w-6 h-6 rounded-full bg-card border-2 border-primary flex items-center justify-center">
                <Briefcase size={12} className="text-primary" />
              </div>
              <div className="mb-2">
                <h3 className="text-lg font-semibold">{role.title}</h3>
                <p className="text-primary font-medium text-sm">{role.company}</p>
                <p className="text-text-muted text-sm font-mono">
                  {role.period} · {role.location} · {role.type}
                </p>
              </div>
              <ul className="mt-3 space-y-2">
                {role.bullets.map((b, j) => (
                  <li key={j} className="text-text-body text-sm leading-relaxed flex gap-2">
                    <span className="text-primary mt-1.5 shrink-0">▸</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
