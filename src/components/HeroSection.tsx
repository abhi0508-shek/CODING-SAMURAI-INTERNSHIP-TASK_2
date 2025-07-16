import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/style-hub-hero.jpg';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Summer Collection 2024",
      subtitle: "Discover Elegance",
      description: "Curated pieces that define luxury and sophistication",
      image: heroImage,
      cta: "Shop Collection"
    },
    {
      id: 2,
      title: "Flat 40% Off",
      subtitle: "Limited Time Offer",
      description: "On premium designer wear and accessories",
      image: heroImage,
      cta: "Shop Now"
    },
    {
      id: 3,
      title: "New Arrivals",
      subtitle: "Fresh From Runway",
      description: "Latest trends from top international brands",
      image: heroImage,
      cta: "Explore Now"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-[60vh] md:h-[80vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-hero" />
            <div className="relative h-full flex items-center justify-center">
              <div className="text-center text-primary-foreground max-w-4xl px-4">
                <p className="text-sm md:text-base font-medium tracking-[0.2em] uppercase mb-4 opacity-90">
                  {slide.subtitle}
                </p>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                  {slide.description}
                </p>
                <Button variant="hero" size="lg" className="text-lg px-8 py-3">
                  {slide.cta}
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-primary-foreground/20 backdrop-blur-sm text-primary-foreground p-2 rounded-full hover:bg-primary-foreground/30 transition-all"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-primary-foreground/20 backdrop-blur-sm text-primary-foreground p-2 rounded-full hover:bg-primary-foreground/30 transition-all"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide
                ? 'bg-primary-foreground w-8'
                : 'bg-primary-foreground/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;