const Footer = () => {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-text-muted text-sm">
          © {new Date().getFullYear()} Andrea Chico.
        </p>
        <p className="text-text-muted text-sm font-mono">Berlin, Germany</p>
      </div>
    </footer>
  );
};

export default Footer;
