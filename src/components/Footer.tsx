import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const footerSections = [
    {
      title: "Shop",
      links: [
        "New Arrivals",
        "Men's Collection",
        "Women's Collection",
        "Kids Fashion",
        "Accessories",
        "Sale Items"
      ]
    },
    {
      title: "Customer Care",
      links: [
        "Contact Us",
        "Size Guide",
        "Shipping Info",
        "Returns & Exchanges",
        "Track Your Order",
        "Gift Cards"
      ]
    },
    {
      title: "Company",
      links: [
        "About Us",
        "Careers",
        "Press",
        "Sustainability",
        "Privacy Policy",
        "Terms of Service"
      ]
    },
    {
      title: "Connect",
      links: [
        "Store Locator",
        "Styling Services",
        "Personal Shopping",
        "VIP Program",
        "Brand Partnerships",
        "Affiliate Program"
      ]
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Newsletter Section */}
      <div className="border-b border-primary-foreground/20">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
              Stay in Style
            </h3>
            <p className="text-lg opacity-90 mb-8">
              Subscribe to our newsletter for exclusive offers, early access to new collections, and styling tips
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary-foreground/30"
              />
              <Button variant="hero" size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                Subscribe
              </Button>
            </div>
            <p className="text-sm opacity-70 mt-4">
              By subscribing, you agree to our Privacy Policy and Terms of Service
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-display font-bold mb-4">LUXE</h2>
            <p className="opacity-90 mb-6 leading-relaxed">
              Redefining luxury fashion with curated collections that celebrate individuality and timeless elegance.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>hello@luxefashion.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>123 Fashion Ave, NY 10001</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold text-lg mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="opacity-80 hover:opacity-100 transition-opacity text-sm leading-relaxed hover:underline"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Links & Payment */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Social Media */}
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium">Follow Us:</span>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Payment Methods */}
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium">We Accept:</span>
              <div className="flex gap-2">
                {['💳', '💰', '🏦', '📱'].map((emoji, index) => (
                  <div
                    key={index}
                    className="w-10 h-6 bg-primary-foreground/10 rounded flex items-center justify-center text-sm"
                  >
                    {emoji}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-80">
            <p>© 2024 LUXE Fashion. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a>
              <a href="#" className="hover:opacity-100 transition-opacity">Terms of Service</a>
              <a href="#" className="hover:opacity-100 transition-opacity">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;