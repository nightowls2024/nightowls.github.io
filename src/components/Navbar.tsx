import { useState } from "react";
import owlLogo from "@/assets/owl-logo.png";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Why Us", href: "#why-us" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#home" className="flex items-center gap-2">
          <img src={owlLogo} alt="Nightowls logo" className="h-10 w-10 object-contain" />
          <span className="font-display text-2xl tracking-wider text-primary">NIGHTOWLS</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-foreground/70 hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/919315636062"
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-gold text-primary-foreground font-semibold text-sm px-5 py-2 rounded-md box-glow hover:opacity-90 transition-opacity"
          >
            Order Now
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-primary">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-t border-border px-4 pb-4">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-foreground/70 hover:text-primary transition-colors border-b border-border/50"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/919315636062"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 block text-center gradient-gold text-primary-foreground font-semibold text-sm px-5 py-2.5 rounded-md box-glow"
          >
            Order Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
