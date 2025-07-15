import { useState } from 'react';
import { Heart, Eye, ShoppingCart, Star, Filter, Grid3X3, List } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import summerHero from '@/assets/summer-hero.jpg';
import summerDresses from '@/assets/summer-dresses.jpg';
import mensSummer from '@/assets/mens-summer.jpg';
import summerAccessories from '@/assets/summer-accessories.jpg';

const Summer = () => {
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('featured');

  const summerProducts = [
    {
      id: 1,
      name: "Breezy Maxi Dress",
      brand: "Zara",
      price: 8999,
      originalPrice: 12999,
      image: summerDresses,
      rating: 4.9,
      reviews: 156,
      colors: ['#F8FAFC', '#FEF3C7', '#FECACA'],
      isNew: true,
      category: "Dresses"
    },
    {
      id: 2,
      name: "Linen Summer Shirt",
      brand: "GAP",
      price: 5999,
      originalPrice: 8999,
      image: mensSummer,
      rating: 4.7,
      reviews: 89,
      colors: ['#FFFFFF', '#E0E7FF', '#FEF3C7'],
      isNew: false,
      category: "Shirts"
    },
    {
      id: 3,
      name: "Floral Sundress",
      brand: "H&M",
      price: 4999,
      originalPrice: 7499,
      image: summerDresses,
      rating: 4.8,
      reviews: 203,
      colors: ['#FEF3C7', '#FED7AA', '#FECACA'],
      isNew: true,
      category: "Dresses"
    },
    {
      id: 4,
      name: "Cotton Beach Shorts",
      brand: "Superdry",
      price: 3999,
      originalPrice: 5999,
      image: mensSummer,
      rating: 4.6,
      reviews: 124,
      colors: ['#1F2937', '#374151', '#E0E7FF'],
      isNew: false,
      category: "Shorts"
    },
    {
      id: 5,
      name: "Designer Sunglasses",
      brand: "Ray-Ban",
      price: 12999,
      originalPrice: 17999,
      image: summerAccessories,
      rating: 4.9,
      reviews: 67,
      colors: ['#000000', '#374151'],
      isNew: true,
      category: "Accessories"
    },
    {
      id: 6,
      name: "Beach Tote Bag",
      brand: "Coach",
      price: 15999,
      originalPrice: 22999,
      image: summerAccessories,
      rating: 4.8,
      reviews: 89,
      colors: ['#F9FAFB', '#FEF3C7', '#FECACA'],
      isNew: false,
      category: "Bags"
    },
    {
      id: 7,
      name: "Silk Summer Scarf",
      brand: "Hermès",
      price: 18999,
      originalPrice: 24999,
      image: summerAccessories,
      rating: 5.0,
      reviews: 45,
      colors: ['#FEF3C7', '#FECACA', '#E0E7FF'],
      isNew: true,
      category: "Accessories"
    },
    {
      id: 8,
      name: "Comfortable Sandals",
      brand: "Birkenstock",
      price: 7999,
      originalPrice: 10999,
      image: summerAccessories,
      rating: 4.7,
      reviews: 178,
      colors: ['#92400E', '#000000', '#FFFFFF'],
      isNew: false,
      category: "Footwear"
    }
  ];

  const categories = ["All", "Dresses", "Shirts", "Shorts", "Accessories", "Bags", "Footwear"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = selectedCategory === "All" 
    ? summerProducts 
    : summerProducts.filter(product => product.category === selectedCategory);

  const toggleWishlist = (productId: number) => {
    setWishlist(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${summerHero})` }}
        >
          <div className="absolute inset-0 bg-gradient-hero" />
          <div className="relative h-full flex items-center justify-center">
            <div className="text-center text-primary-foreground max-w-4xl px-4">
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
                Summer Collection 2024
              </h1>
              <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Beat the heat in style with our curated summer essentials
              </p>
              <Button variant="hero" size="lg" className="text-lg px-8 py-3">
                Shop Summer Styles
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Controls */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="text-sm"
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Sort and View Controls */}
            <div className="flex items-center gap-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border border-border rounded-lg bg-background text-foreground text-sm"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="newest">Newest First</option>
              </select>

              <div className="flex items-center gap-1 border border-border rounded-lg p-1">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className="p-2"
                >
                  <Grid3X3 className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className="p-2"
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-4 text-sm text-muted-foreground">
            Showing {filteredProducts.length} results for "{selectedCategory === "All" ? "Summer Collection" : selectedCategory}"
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className={`grid gap-8 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
              : 'grid-cols-1'
          }`}>
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className={`group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-luxury transition-all duration-500 ${
                  viewMode === 'list' ? 'flex' : ''
                }`}
              >
                {/* Product Image */}
                <div className={`relative overflow-hidden ${
                  viewMode === 'list' ? 'w-48 h-48' : 'h-80'
                }`}>
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
                  {viewMode === 'grid' && (
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button variant="luxury" size="sm" className="w-full">
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Quick Add
                      </Button>
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
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
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xl font-bold text-primary">
                      ₹{product.price.toLocaleString('en-IN')}
                    </span>
                    <span className="text-sm text-muted-foreground line-through">
                      ₹{product.originalPrice.toLocaleString('en-IN')}
                    </span>
                  </div>

                  {/* List View Add to Cart */}
                  {viewMode === 'list' && (
                    <Button variant="luxury" size="sm" className="w-full md:w-auto">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Add to Cart
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Products
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Summer;