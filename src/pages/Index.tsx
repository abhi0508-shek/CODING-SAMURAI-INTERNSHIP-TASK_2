import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import CategoryGrid from '@/components/CategoryGrid';
import BrandHighlights from '@/components/BrandHighlights';
import ProductCards from '@/components/ProductCards';
import LookbookSection from '@/components/LookbookSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <CategoryGrid />
      <BrandHighlights />
      <ProductCards />
      <LookbookSection />
      <Footer />
    </div>
  );
};

export default Index;
