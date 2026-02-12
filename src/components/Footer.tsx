import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground py-12 px-4">
    <div className="container mx-auto max-w-7xl grid md:grid-cols-3 gap-8">
      {/* Brand */}
      <div>
        <img src={logo} alt="Shachwal Net" className="h-[30px] w-auto mb-3 brightness-0 invert" />
        <p className="font-semibold">Shachwal Net</p>
        <p className="text-sm opacity-80 mt-1">A Brand of Shachwal Solutions Private Limited</p>
        <p className="text-sm opacity-80">Reliable Broadband for Himachal Pradesh</p>
      </div>

      {/* Links */}
      <div>
        <h4 className="font-semibold mb-3">Quick Links</h4>
        <nav className="space-y-2 text-sm opacity-80">
          {["Home", "Plans", "Coverage", "About", "Contact"].map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="block hover:opacity-100 transition-opacity">
              {l}
            </a>
          ))}
        </nav>
      </div>

      {/* Contact */}
      <div>
        <h4 className="font-semibold mb-3">Contact</h4>
        <div className="space-y-2 text-sm opacity-80">
          <a href="tel:+917018917405" className="block hover:opacity-100 transition-opacity">70189-17405</a>
          <a href="tel:+919816691149" className="block hover:opacity-100 transition-opacity">98166-91149</a>
          <a href="mailto:shachwalsolutions@gmail.com" className="block hover:opacity-100 transition-opacity">shachwalsolutions@gmail.com</a>
        </div>
      </div>
    </div>

    <div className="container mx-auto max-w-7xl mt-8 pt-6 border-t border-primary-foreground/20 text-center text-sm opacity-70">
      © 2026 Shachwal Net. All Rights Reserved. Designed by{" "}
      <a href="https://furiglobal.in" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-100 transition-opacity">
        Furi Global
      </a>
    </div>
  </footer>
);

export default Footer;
