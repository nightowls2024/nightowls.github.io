const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <h2 className="font-display text-4xl sm:text-5xl text-primary text-glow-sm mb-6">
          Night Owls Kitchen
        </h2>
        <div className="w-16 h-0.5 gradient-gold mx-auto mb-8" />
        <p className="text-foreground/70 text-lg leading-relaxed">
          Converting Chinese foods into <span className="text-primary font-semibold">healthy, hygienic meals</span>. 
          We believe late-night food shouldn't mean compromising on quality. 
          That's why we use <span className="text-primary font-semibold">zero Ajino Moto</span> and only the freshest ingredients — 
          cooked with care, served with love, every single night.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
