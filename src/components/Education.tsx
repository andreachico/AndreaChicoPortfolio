import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Vocational Training – Application Development Specialist",
    school: "Städtische Berufsschule für Informatik München",
    period: "Sep 2019 – Jun 2023",
    grade: "Final grade: 2.5 (76 points)",
    thesis: "Best Companion SEO Tool — SEO tool for keyword analysis with PHP Symfony, Twig, SCSS",
  },
  {
    degree: "Bachelor of Science in Computer Science",
    school: "La Consolacion University Philippines",
    period: "Jun 2014 – Mar 2018",
    grade: "Final grade: 1.5",
    thesis: "Online Requisitions System — Digital request management for university processes",
  },
];

const Education = () => {
  return (
    <section className="py-20 px-6 bg-card">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold tracking-tight mb-12">Education</h2>
        <div className="space-y-8">
          {education.map((edu, i) => (
            <div key={i} className="relative pl-8 border-l-2 border-border">
              <div className="absolute -left-[13px] top-0 w-6 h-6 rounded-full bg-card border-2 border-primary flex items-center justify-center">
                <GraduationCap size={12} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold">{edu.degree}</h3>
              <p className="text-primary font-medium text-sm">{edu.school}</p>
              <p className="text-text-muted text-sm font-mono mb-2">{edu.period} · {edu.grade}</p>
              <p className="text-text-body text-sm">{edu.thesis}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
