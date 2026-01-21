import { Link } from 'react-router-dom';
import { Star, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBg from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background/50" />
      </div>

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
                            linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">
                Trusted by 10+ Clients
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
              <span className="text-foreground">Precision in</span>{' '}
              <span className="text-gradient">Numbers.</span>
              <br />
              <span className="text-foreground">Excellence in</span>{' '}
              <span className="text-gradient">Results.</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Your trusted partner for accurate and reliable financial services. 
              Specializing in taxation, audits, and corporate compliance with 
              cutting-edge solutions.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <Button variant="hero" size="lg" className="group">
                  Book Consultation
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="glass" size="lg">
                  Explore Services
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-4">
              {['Tally Integration', 'GST Certified', 'ISO Standards'].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Right - Rating Badge */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative animate-float">
              {/* Glow Effect */}
              <div className="absolute inset-0 blur-3xl bg-primary/20 rounded-full scale-110" />
              
              {/* Main Badge */}
              <div className="relative glass-card p-8 md:p-10 text-center electric-glow">
                <div className="space-y-4">
                  {/* Stars */}
                  <div className="flex justify-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-8 w-8 text-primary fill-primary"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      />
                    ))}
                  </div>

                  {/* Rating */}
                  <div>
                    <span className="text-6xl md:text-7xl font-display font-bold text-gradient">
                      5.0
                    </span>
                    <span className="text-2xl text-muted-foreground">/5.0</span>
                  </div>

                  {/* Label */}
                  <p className="text-lg font-semibold text-foreground">
                    Google Rating
                  </p>
                  <p className="text-sm text-muted-foreground">
                    10+ Client Testimonials
                  </p>

                  {/* CTA */}
                  <div className="pt-4">
                    <Link to="/contact">
                      <Button variant="default" size="default" className="w-full">
                        Book Consultation
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 glass-card px-4 py-2 animate-float" style={{ animationDelay: '1s' }}>
                <span className="text-sm font-semibold text-primary">Verified ✓</span>
              </div>
              <div className="absolute -bottom-4 -left-4 glass-card px-4 py-2 animate-float" style={{ animationDelay: '2s' }}>
                <span className="text-sm font-semibold text-foreground">Since 2018</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
