import heroFood from "@/assets/hero-food.jpg";
import owlLogo from "@/assets/owl-logo.png";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroFood} alt="Late night food" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center pt-20">
        <img src={owlLogo} alt="Nightowls owl mascot" className="mx-auto h-28 w-28 mb-6 animate-float" />
        <p className="text-primary font-semibold tracking-[0.3em] uppercase text-sm mb-4">
          Open 9 PM – 5 AM · New Delhi
        </p>
        <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-glow text-primary leading-none mb-6">
          The City Sleeps.<br />We Cook.
        </h1>
        <p className="text-foreground/60 max-w-lg mx-auto text-lg mb-10">
          Late-night cravings, answered. Healthy, hygienic Chinese food — fresh from our kitchen to your doorstep.
        </p>
        <a
          href="https://wa.me/919315636062"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block gradient-gold text-primary-foreground font-bold text-lg px-10 py-4 rounded-lg box-glow-lg hover:scale-105 transition-transform animate-pulse-glow"
        >
          🦉 Order Now
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
