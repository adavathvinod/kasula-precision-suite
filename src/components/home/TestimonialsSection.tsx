import { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    role: 'Business Owner',
    content: 'Hassle-free experience with Kasula & Associates. Their team handled all my GST filings and income tax returns with utmost professionalism. Highly recommended!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Priya Sharma',
    role: 'Startup Founder',
    content: 'The level of professionalism and attention to detail is exceptional. They helped us set up our company and manage all compliance requirements seamlessly.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Anil Reddy',
    role: 'Real Estate Developer',
    content: 'Due care and precision in every aspect of their work. The project reports and CMA data they prepared helped us secure our business loan quickly.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Meena Devi',
    role: 'Shop Owner',
    content: 'Very supportive team. They explained everything in simple terms and made tax filing stress-free. The best CA firm I\'ve worked with.',
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToPrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 relative overflow-hidden bg-charcoal-medium/50">
      {/* Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
            Client Stories
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
            What Our{' '}
            <span className="text-gradient">Clients Say</span>
          </h2>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main Card */}
            <div className="glass-card p-8 md:p-12">
              <Quote className="h-12 w-12 text-primary/30 mb-6" />
              
              <div className="space-y-6">
                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-lg md:text-xl text-foreground leading-relaxed">
                  "{testimonials[currentIndex].content}"
                </p>

                {/* Author */}
                <div className="pt-4 border-t border-white/10">
                  <p className="font-semibold text-foreground">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <Button
                variant="glass"
                size="icon"
                onClick={goToPrev}
                className="rounded-full"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setIsAutoPlaying(false);
                      setCurrentIndex(index);
                    }}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'bg-primary w-8'
                        : 'bg-white/20 hover:bg-white/40'
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="glass"
                size="icon"
                onClick={goToNext}
                className="rounded-full"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
