import { Mail, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl font-bold tracking-tight mb-4">Let's Connect</h2>
        <p className="text-text-body text-lg mb-8 max-w-lg mx-auto">
          I'm always open to new opportunities and interesting projects. Feel free to reach out!
        </p>
        <div className="flex items-center justify-center gap-6">
          <a
            href="mailto:andreachico.info@gmail.com"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:opacity-90 transition-opacity duration-200"
          >
            <Mail size={18} />
            Send Email
          </a>
          <a
            href="https://github.com/andreachico"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-md font-medium text-heading hover:bg-muted transition-colors duration-200"
          >
            <Github size={18} />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/andrea-chico-8220071b4/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-md font-medium text-heading hover:bg-muted transition-colors duration-200"
          >
            <Linkedin size={18} />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
