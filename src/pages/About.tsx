import { Link } from 'react-router-dom';
import { 
  Target, 
  Eye, 
  Award, 
  Users, 
  CheckCircle,
  MapPin,
  ArrowRight 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingCTA from '@/components/layout/FloatingCTA';
import caKarthik from '@/assets/ca-karthik.png';
import office from '@/assets/office.png';

const values = [
  { icon: Target, title: 'Precision', desc: 'Accurate calculations and error-free compliance' },
  { icon: Eye, title: 'Transparency', desc: 'Clear communication at every step' },
  { icon: Award, title: 'Excellence', desc: 'Committed to delivering the best results' },
  { icon: Users, title: 'Client-First', desc: 'Your success is our priority' },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24">
        {/* Hero */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
                Our Story
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold">
                The <span className="text-gradient">Legacy</span> Hub
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Building trust through precision, one client at a time since 2018.
              </p>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  Our Mission
                </span>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                  Specialized Focus on{' '}
                  <span className="text-gradient">Financial Excellence</span>
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  At Kasula & Associates, we specialize in providing comprehensive 
                  financial services with a focus on accuracy and reliability. Our 
                  mission is to empower businesses and individuals with expert 
                  guidance in financial matters and business advice.
                </p>
                <div className="space-y-4">
                  {[
                    'Accurate and reliable financial services',
                    'Modern technology integration with Tally',
                    'Personalized attention to every client',
                    'Timely compliance and deadline management',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="glass-card overflow-hidden">
                  <img
                    src={office}
                    alt="Kasula & Associates Office"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 glass-card px-6 py-4 flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium text-foreground">
                    Near Metro Pillar A1622
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-charcoal-medium/50">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-6 mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold">
                Our <span className="text-gradient">Core Values</span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {values.map((value) => (
                <div key={value.title} className="glass-card p-6 text-center group hover:border-primary/30 transition-all">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <value.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Meet the Team */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-6 mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
                Leadership
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold">
                Meet <span className="text-gradient">Our Team</span>
              </h2>
            </div>

            <div className="max-w-md mx-auto">
              <div className="glass-card p-8 text-center">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary/20">
                  <img
                    src={caKarthik}
                    alt="CA Karthik"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-display font-bold text-foreground mb-1">
                  CA Karthik Kasula
                </h3>
                <p className="text-primary font-medium mb-4">
                  Founder & Principal CA
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  A qualified Chartered Accountant with extensive experience in 
                  taxation, auditing, and corporate compliance. Committed to 
                  providing accurate and reliable financial services to help 
                  businesses thrive.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="glass-card p-8 md:p-12 text-center electric-glow max-w-4xl mx-auto">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                  Let's Work Together
                </h2>
                <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                  Experience the difference of working with a firm that prioritizes 
                  precision and client satisfaction above all.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link to="/contact">
                    <Button variant="hero" size="lg" className="group">
                      Get in Touch
                      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                  <Link to="/services">
                    <Button variant="outline" size="lg">
                      View Our Services
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default AboutPage;
