import { useState } from 'react';
import { Menu, X, Search, ShoppingBag, User, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const menuItems = [
    {
      name: 'Men',
      items: ['Shirts', 'Trousers', 'Blazers', 'Casual Wear', 'Accessories']
    },
    {
      name: 'Women',
      items: ['Dresses', 'Tops', 'Skirts', 'Jackets', 'Summer Collection', 'Accessories']
    },
    {
      name: 'Kids',
      items: ['Boys', 'Girls', 'Baby', 'School Wear', 'Party Wear']
    },
    {
      name: 'Brands',
      items: ['Levi\'s', 'GAP', 'Superdry', 'Zara', 'H&M']
    }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      {/* Announcement Bar */}
      <div className="bg-primary text-primary-foreground text-center py-2 text-sm font-medium">
        New User Perks: Get 20% Off + Free Shipping on Orders Above ₹7,999
      </div>

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-display font-bold tracking-tight">LUXE</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center space-x-1 py-2 text-foreground hover:text-primary transition-colors">
                  <span className="font-medium">{item.name}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>

                {/* Dropdown */}
                {activeDropdown === item.name && (
                  <div className="absolute top-full left-0 w-48 bg-card border border-border rounded-lg shadow-luxury py-2 mt-1">
                    {item.items.map((subItem) => (
                      <a
                        key={subItem}
                        href={subItem === 'Summer Collection' ? '/summer' : '#'}
                        className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Search className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                2
              </span>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border py-4">
            <div className="space-y-4">
              {menuItems.map((item) => (
                <div key={item.name}>
                  <button className="w-full text-left font-medium text-foreground py-2">
                    {item.name}
                  </button>
                  <div className="ml-4 space-y-2">
                    {item.items.map((subItem) => (
                      <a
                        key={subItem}
                        href="#"
                        className="block text-sm text-muted-foreground hover:text-foreground py-1"
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;