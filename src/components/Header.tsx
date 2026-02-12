import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Plans", href: "#plans" },
  { label: "Coverage", href: "#coverage" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="container mx-auto flex items-center justify-between px-4 py-3 max-w-7xl">
        <a href="#home">
          <img src={logo} alt="Shachwal Net" className="h-[45px] w-auto" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-primary hover:text-accent transition-colors"
            >
              {l.label}
            </a>
          ))}
          <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-lg">
            <a href="#contact">Get Connection</a>
          </Button>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-primary"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="md:hidden border-t border-border bg-background px-4 pb-4">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-sm font-medium text-primary hover:text-accent transition-colors"
            >
              {l.label}
            </a>
          ))}
          <Button asChild className="w-full mt-2 bg-accent hover:bg-accent/90 text-accent-foreground rounded-lg">
            <a href="#contact" onClick={() => setMobileOpen(false)}>Get Connection</a>
          </Button>
        </nav>
      )}
    </header>
  );
};

export default Header;
