import menuMomos from "@/assets/menu-momos.jpg";
import menuNoodles from "@/assets/menu-noodles.jpg";
import menuBurger from "@/assets/menu-burger.jpg";
import menuChili from "@/assets/menu-chili-chicken.jpg";
import menuSandwich from "@/assets/menu-sandwich.jpg";

const menuItems = [
  { name: "Momos", price: "₹60–120", image: menuMomos, desc: "Steamed & fried, veg & non-veg" },
  { name: "Noodles & Rice", price: "₹80–150", image: menuNoodles, desc: "Hakka, Schezwan, Fried Rice" },
  { name: "Burgers", price: "₹80–150", image: menuBurger, desc: "Classic, Cheese, Loaded" },
  { name: "Chili Chicken", price: "₹120–200", image: menuChili, desc: "Dry & Gravy, spice on demand" },
  { name: "Grilled Sandwiches", price: "₹60–120", image: menuSandwich, desc: "Cheesy, toasted perfection" },
];

const MenuSection = () => {
  return (
    <section id="menu" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-4xl sm:text-5xl text-primary text-glow-sm text-center mb-4">
          Our Menu
        </h2>
        <p className="text-muted-foreground text-center mb-12">Price range: ₹1–200 · Something for every craving</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {menuItems.map((item) => (
            <div
              key={item.name}
              className="group bg-card rounded-lg overflow-hidden border-glow hover:box-glow transition-shadow duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-display text-2xl text-foreground">{item.name}</h3>
                  <span className="text-primary font-semibold text-sm">{item.price}</span>
                </div>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
