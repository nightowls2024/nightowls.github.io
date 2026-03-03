const features = [
  { icon: "🦉", title: "Open Till 5 AM", desc: "When the world sleeps, we serve." },
  { icon: "🌿", title: "No Ajino Moto", desc: "100% MSG-free cooking, always." },
  { icon: "🧼", title: "Hygienic Kitchen", desc: "Clean, sanitized, and safe." },
  { icon: "⭐", title: "4.8 Rated", desc: "Loved by 50+ Google reviewers." },
];

const WhyUsSection = () => {
  return (
    <section id="why-us" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-4xl sm:text-5xl text-primary text-glow-sm text-center mb-12">
          Why Nightowls?
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {features.map((f) => (
            <div key={f.title} className="text-center p-6 rounded-lg bg-card border-glow hover:box-glow transition-shadow">
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="font-display text-xl text-foreground mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
