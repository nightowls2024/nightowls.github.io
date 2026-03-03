import owlLogo from "@/assets/owl-logo.png";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <img src={owlLogo} alt="Nightowls" className="h-8 w-8" />
          <span className="font-display text-lg text-primary">NIGHTOWLS</span>
        </div>
        <p className="text-muted-foreground text-sm">
          © 2025 Nightowls Kitchen. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
