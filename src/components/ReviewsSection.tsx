import { Star } from "lucide-react";

const reviews = [
  { name: "Rahul S.", text: "Best momos I've ever had at 2 AM! Fresh and piping hot.", rating: 5 },
  { name: "Priya M.", text: "Finally a late-night option that's actually clean and tasty. No MSG!", rating: 5 },
  { name: "Amit K.", text: "The chili chicken is fire 🔥 Great taste and quick delivery.", rating: 5 },
  { name: "Sneha R.", text: "Ordered grilled sandwiches at midnight — absolutely delicious.", rating: 4 },
];

const ReviewsSection = () => {
  return (
    <section id="reviews" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-4xl sm:text-5xl text-primary text-glow-sm text-center mb-2">
          What People Say
        </h2>
        <div className="flex items-center justify-center gap-2 mb-12">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={18} className="fill-primary text-primary" />
            ))}
          </div>
          <span className="text-foreground font-semibold">4.8</span>
          <span className="text-muted-foreground text-sm">from 50+ Google Reviews</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {reviews.map((r, i) => (
            <div key={i} className="bg-card p-6 rounded-lg border-glow">
              <div className="flex gap-1 mb-3">
                {[...Array(r.rating)].map((_, j) => (
                  <Star key={j} size={14} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground/80 mb-3 italic">"{r.text}"</p>
              <p className="text-primary font-semibold text-sm">— {r.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
