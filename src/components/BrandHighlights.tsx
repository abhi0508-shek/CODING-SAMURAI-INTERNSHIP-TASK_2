import { Star, Award, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BrandHighlights = () => {
  const brands = [
    {
      name: "Levi's",
      description: "Iconic denim heritage",
      discount: "Up to 30% Off",
      icon: Award,
      color: "from-blue-600 to-blue-800"
    },
    {
      name: "GAP",
      description: "Modern American style",
      discount: "Flat 25% Off",
      icon: Star,
      color: "from-purple-600 to-purple-800"
    },
    {
      name: "Superdry",
      description: "British-inspired streetwear",
      discount: "Buy 2 Get 1 Free",
      icon: Zap,
      color: "from-orange-600 to-red-600"
    }
  ];

  const features = [
    { icon: "🚚", title: "Free Shipping", subtitle: "On orders above ₹7,999" },
    { icon: "↩️", title: "Easy Returns", subtitle: "30-day return policy" },
    { icon: "🛡️", title: "Authentic Products", subtitle: "100% genuine guarantee" },
    { icon: "💳", title: "Secure Payments", subtitle: "Multiple payment options" }
  ];

  return (
    <section className="py-16 bg-luxury-cream">
      <div className="container mx-auto px-4">
        {/* Brand Highlights */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Top Brands
          </h2>
          <p className="text-lg text-muted-foreground">
            Exclusive collections from the world's most loved fashion brands
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {brands.map((brand, index) => {
            const IconComponent = brand.icon;
            return (
              <div
                key={index}
                className="relative p-8 bg-card rounded-2xl shadow-card hover:shadow-luxury transition-all duration-500 group overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${brand.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <IconComponent className="w-8 h-8 text-primary" />
                    <span className="text-sm font-medium bg-luxury-gold/20 text-luxury-gold-foreground px-3 py-1 rounded-full">
                      {brand.discount}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-display font-bold mb-2">
                    {brand.name}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {brand.description}
                  </p>
                  
                  <Button variant="outline" className="w-full group">
                    Shop Now
                    <span className="ml-2 transform transition-transform group-hover:translate-x-1">→</span>
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Features */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 bg-card rounded-xl">
              <div className="text-3xl mb-3">{feature.icon}</div>
              <h4 className="font-semibold mb-1">{feature.title}</h4>
              <p className="text-sm text-muted-foreground">{feature.subtitle}</p>
            </div>
          ))}
        </div>

        {/* Promotional Banner */}
        <div className="mt-16 bg-gradient-luxury rounded-2xl p-8 md:p-12 text-center text-primary-foreground">
          <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
            Exclusive Member Benefits
          </h3>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            Join our loyalty program and enjoy early access to sales, exclusive discounts, and personalized styling tips
          </p>
          <Button variant="hero" size="lg">
            Join Now - It's Free
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BrandHighlights;