import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import profPhoto from "@/assets/prof_photo.jpg";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="animate-fade-in flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-12">
          <div className="flex-1">
            <p className="text-primary font-mono text-sm font-medium mb-3">Frontend Developer</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
              Andrea Chico
            </h1>
            <p className="text-text-body text-lg sm:text-xl max-w-2xl leading-relaxed mb-4">
              I design and develop high-performance, user-friendly interfaces. I thrive on clean code, thoughtful UX, and transforming complex concepts into digital experiences that feel simple and delightful — whether it’s a real estate platform or a content-focused app.
            </p>
            <div className="flex items-center gap-2 text-text-muted text-sm mb-8">
              <MapPin size={14} />
              <span>Berlin, Germany</span>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/andreachico"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-heading transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github size={22} />
              </a>
              <a
                href="https://www.linkedin.com/in/andrea-chico-8220071b4/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-heading transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={22} />
              </a>
              <a
                href="mailto:andreachico.info@gmail.com"
                className="text-text-muted hover:text-heading transition-colors duration-200"
                aria-label="Email"
              >
                <Mail size={22} />
              </a>
            </div>
          </div>

          <div className="relative flex-shrink-0">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden ring-2 ring-primary/20 ring-offset-4 ring-offset-background shadow-xl rotate-2 hover:rotate-0 transition-transform duration-300">
              <img
                src={profPhoto}
                alt="Andrea Chico"
                className="w-full h-full object-cover object-[center_20%]"
              />
            </div>
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-primary/20 to-accent/20 -z-10 blur-sm" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
