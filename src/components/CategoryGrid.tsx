import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import mensShirts from '@/assets/mens-shirts.jpg';
import womensSummer from '@/assets/womens-summer.jpg';
import kidsFashion from '@/assets/kids-fashion.jpg';

const CategoryGrid = () => {
  const categories = [
    {
      id: 1,
      title: "Men's Essentials",
      subtitle: "Classic meets contemporary",
      image: mensShirts,
      link: "/men"
    },
    {
      id: 2,
      title: "Summer Staples",
      subtitle: "Breezy and beautiful",
      image: womensSummer,
      link: "/women/summer"
    },
    {
      id: 3,
      title: "Kids Collection",
      subtitle: "Playful luxury",
      image: kidsFashion,
      link: "/kids"
    }
  ];

  const smallCategories = [
    { title: "Accessories", count: "250+ Items" },
    { title: "Footwear", count: "180+ Items" },
    { title: "Bags", count: "120+ Items" },
    { title: "Jewelry", count: "90+ Items" }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our carefully curated collections designed for the modern lifestyle
          </p>
        </div>

        {/* Main Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group relative h-96 rounded-2xl overflow-hidden shadow-card hover:shadow-luxury transition-all duration-500 cursor-pointer"
            >
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${category.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                <h3 className="text-2xl font-display font-semibold mb-2">
                  {category.title}
                </h3>
                <p className="text-sm opacity-90 mb-4">{category.subtitle}</p>
                <Button variant="hero" size="sm" className="group">
                  Explore
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Small Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {smallCategories.map((category, index) => (
            <div
              key={index}
              className="p-6 bg-card border border-border rounded-xl hover:border-primary/20 hover:shadow-card transition-all duration-300 cursor-pointer group"
            >
              <h4 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
                {category.title}
              </h4>
              <p className="text-sm text-muted-foreground">{category.count}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;