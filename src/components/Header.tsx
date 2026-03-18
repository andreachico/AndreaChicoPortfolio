import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
	{ label: "Projects", href: "#projects" },
	{ label: "Skills", href: "#skills" },
	{ label: "Contact", href: "#contact" },
];

const Header = () => {
	const [scrolled, setScrolled] = useState(false);
	const [mobileOpen, setMobileOpen] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 20);
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<header
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
				scrolled
					? "bg-card/90 backdrop-blur-md border-b border-border shadow-sm"
					: "bg-transparent"
			}`}
		>
			<div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
				<a
					href="#"
					className="font-semibold text-lg text-heading tracking-tight"
				>
					AC<span className="text-primary">.</span>
				</a>

				<nav className="hidden md:flex items-center gap-8">
					{navLinks.map((link) => (
						<a
							key={link.href}
							href={link.href}
							className="text-sm font-medium text-text-muted hover:text-heading transition-colors duration-200"
						>
							{link.label}
						</a>
					))}
				</nav>

				<button
					className="md:hidden text-heading"
					onClick={() => setMobileOpen(!mobileOpen)}
					aria-label="Toggle menu"
				>
					{mobileOpen ? <X size={24} /> : <Menu size={24} />}
				</button>
			</div>

			{mobileOpen && (
				<div className="md:hidden bg-card border-b border-border px-6 pb-4">
					{navLinks.map((link) => (
						<a
							key={link.href}
							href={link.href}
							onClick={() => setMobileOpen(false)}
							className="block py-2 text-sm font-medium text-text-muted hover:text-heading transition-colors"
						>
							{link.label}
						</a>
					))}
				</div>
			)}
		</header>
	);
};

export default Header;
