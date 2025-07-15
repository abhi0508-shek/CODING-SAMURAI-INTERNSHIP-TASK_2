import { Instagram, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import lookbook1 from '@/assets/lookbook-1.jpg';

const LookbookSection = () => {
  const looks = [
    {
      id: 1,
      image: lookbook1,
      title: "Street Style Essentials",
      description: "Effortless urban elegance",
      items: ["Oversized Blazer - $199", "High-Waist Trousers - $89", "Statement Sneakers - $159"]
    },
    {
      id: 2,
      image: lookbook1,
      title: "Minimalist Chic",
      description: "Less is more philosophy",
      items: ["Silk Blouse - $129", "Tailored Pants - $149", "Gold Accessories - $79"]
    },
    {
      id: 3,
      image: lookbook1,
      title: "Weekend Vibes",
      description: "Casual luxury redefined",
      items: ["Cashmere Sweater - $189", "Denim Jacket - $119", "Leather Bag - $299"]
    },
    {
      id: 4,
      image: lookbook1,
      title: "Evening Glamour",
      description: "Night out perfection",
      items: ["Little Black Dress - $199", "Statement Heels - $179", "Clutch Bag - $89"]
    }
  ];

  return (
    <section className="py-16 bg-luxury-beige/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Instagram className="w-6 h-6 text-primary" />
            <span className="text-sm font-medium tracking-wider uppercase">Styled by You</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Fashion Inspiration
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get inspired by real customers and fashion influencers styling our pieces
          </p>
        </div>

        {/* Lookbook Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {looks.map((look) => (
            <div
              key={look.id}
              className="group relative bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-luxury transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={look.image}
                  alt={look.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Shop the Look Button */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="sm" variant="hero" className="rounded-full">
                    <ArrowUpRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display font-semibold text-lg mb-2">
                  {look.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {look.description}
                </p>
                
                {/* Items List */}
                <div className="space-y-1">
                  {look.items.map((item, index) => (
                    <p key={index} className="text-xs text-muted-foreground">
                      {item}
                    </p>
                  ))}
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-card rounded-2xl p-8 shadow-card">
          <h3 className="text-2xl font-display font-bold mb-4">
            Share Your Style
          </h3>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            Tag us @luxe_fashion and use #LuxeStyle to be featured in our lookbook
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg">
              <Instagram className="w-5 h-5 mr-2" />
              Follow @luxe_fashion
            </Button>
            <Button variant="gold" size="lg">
              Shop All Looks
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LookbookSection;