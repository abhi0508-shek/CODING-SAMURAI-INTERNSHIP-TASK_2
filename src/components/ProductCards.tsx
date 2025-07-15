import { useState } from 'react';
import { Heart, Eye, ShoppingCart, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import productShowcase from '@/assets/product-showcase.jpg';

const ProductCards = () => {
  const [wishlist, setWishlist] = useState<number[]>([]);

  const products = [
    {
      id: 1,
      name: "Premium Cotton Shirt",
      brand: "Levi's",
      price: 7199,
      originalPrice: 10499,
      image: productShowcase,
      rating: 4.8,
      reviews: 124,
      colors: ['#000000', '#FFFFFF', '#E8E8E8'],
      isNew: true
    },
    {
      id: 2,
      name: "Designer Blazer",
      brand: "GAP",
      price: 15999,
      originalPrice: 23999,
      image: productShowcase,
      rating: 4.9,
      reviews: 89,
      colors: ['#1F2937', '#374151', '#6B7280'],
      isNew: false
    },
    {
      id: 3,
      name: "Summer Dress",
      brand: "Zara",
      price: 6399,
      originalPrice: 9599,
      image: productShowcase,
      rating: 4.7,
      reviews: 156,
      colors: ['#F9FAFB', '#FEF3C7', '#FECACA'],
      isNew: true
    },
    {
      id: 4,
      name: "Casual Trousers",
      brand: "Superdry",
      price: 9599,
      originalPrice: 13599,
      image: productShowcase,
      rating: 4.6,
      reviews: 78,
      colors: ['#111827', '#374151', '#6B7280'],
      isNew: false
    }
  ];

  const toggleWishlist = (productId: number) => {
    setWishlist(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Featured Products
          </h2>
          <p className="text-lg text-muted-foreground">
            Handpicked pieces that define modern elegance
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-luxury transition-all duration-500"
            >
              {/* Product Image */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {product.isNew && (
                    <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full font-medium">
                      New
                    </span>
                  )}
                  <span className="bg-destructive text-destructive-foreground text-xs px-2 py-1 rounded-full font-medium">
                    {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                  </span>
                </div>

                {/* Quick Actions */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={() => toggleWishlist(product.id)}
                    className={`p-2 rounded-full backdrop-blur-sm transition-colors ${
                      wishlist.includes(product.id)
                        ? 'bg-destructive text-destructive-foreground'
                        : 'bg-background/80 text-foreground hover:bg-background'
                    }`}
                  >
                    <Heart className="w-4 h-4" />
                  </button>
                  <button className="p-2 bg-background/80 backdrop-blur-sm text-foreground hover:bg-background rounded-full transition-colors">
                    <Eye className="w-4 h-4" />
                  </button>
                </div>

                {/* Quick Add to Cart */}
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button variant="luxury" size="sm" className="w-full">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Quick Add
                  </Button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground font-medium">
                    {product.brand}
                  </span>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{product.rating}</span>
                    <span className="text-xs text-muted-foreground">({product.reviews})</span>
                  </div>
                </div>

                <h3 className="font-semibold text-lg mb-3 line-clamp-2">
                  {product.name}
                </h3>

                {/* Colors */}
                <div className="flex gap-2 mb-4">
                  {product.colors.map((color, index) => (
                    <div
                      key={index}
                      className="w-5 h-5 rounded-full border-2 border-gray-200 cursor-pointer hover:scale-110 transition-transform"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>

                {/* Price */}
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold text-primary">
                    ₹{product.price.toLocaleString('en-IN')}
                  </span>
                  <span className="text-sm text-muted-foreground line-through">
                    ₹{product.originalPrice.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductCards;