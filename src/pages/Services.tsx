import { Link } from 'react-router-dom';
import { 
  Calculator, 
  FileCheck, 
  Building2, 
  Lightbulb,
  CheckCircle,
  FileSpreadsheet,
  Users,
  TrendingUp,
  Shield,
  Clock,
  Award,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingCTA from '@/components/layout/FloatingCTA';

const services = [
  {
    icon: Calculator,
    title: 'Taxation Services',
    subtitle: 'GST & Income Tax',
    description: 'Complete tax planning and compliance solutions for individuals and businesses.',
    features: [
      'GST Registration & Returns',
      'Income Tax Return Filing',
      'TDS/TCS Compliance',
      'Tax Planning & Advisory',
      'Advance Tax Calculation',
      'Tax Audit (44AB)',
    ],
  },
  {
    icon: FileCheck,
    title: 'Audit Services',
    subtitle: 'Statutory & Internal',
    description: 'Comprehensive audit services ensuring financial accuracy and compliance.',
    features: [
      'Statutory Audit',
      'Internal Audit',
      'Tax Audit',
      'Bank Audit',
      'Stock Audit',
      'Compliance Audit',
    ],
  },
  {
    icon: Building2,
    title: 'Corporate Services',
    subtitle: 'ROC & Registrations',
    description: 'End-to-end corporate services from formation to annual compliance.',
    features: [
      'Company Registration',
      'LLP Registration',
      'ROC Annual Filings',
      'Director KYC',
      'Board Resolutions',
      'Compliance Calendar',
    ],
  },
  {
    icon: Lightbulb,
    title: 'Advisory Services',
    subtitle: 'Project Reports & CMA',
    description: 'Strategic financial advisory for business growth and funding.',
    features: [
      'Project Reports',
      'CMA Data Preparation',
      'Business Valuation',
      'Due Diligence',
      'Loan Documentation',
      'Investment Advisory',
    ],
  },
];

const additionalServices = [
  { icon: FileSpreadsheet, title: 'Tally Integration', desc: 'Seamless accounting with Tally Prime' },
  { icon: Users, title: 'Payroll Management', desc: 'Complete payroll processing & compliance' },
  { icon: TrendingUp, title: 'Financial Analysis', desc: 'MIS reports & financial insights' },
  { icon: Shield, title: 'Risk Assessment', desc: 'Business risk evaluation & mitigation' },
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24">
        {/* Hero */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
                Our Services
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold">
                Comprehensive{' '}
                <span className="text-gradient">Financial Solutions</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                From taxation to advisory, we provide accurate and reliable services 
                tailored to your business needs.
              </p>
            </div>
          </div>
        </section>

        {/* Main Services */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="space-y-8">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className="glass-card p-8 md:p-10"
                >
                  <div className="grid md:grid-cols-3 gap-8">
                    {/* Left - Info */}
                    <div className="md:col-span-1 space-y-4">
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                        <service.icon className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-display font-bold text-foreground">
                          {service.title}
                        </h2>
                        <p className="text-primary font-medium">{service.subtitle}</p>
                      </div>
                      <p className="text-muted-foreground">
                        {service.description}
                      </p>
                    </div>

                    {/* Right - Features */}
                    <div className="md:col-span-2">
                      <div className="grid sm:grid-cols-2 gap-4">
                        {service.features.map((feature) => (
                          <div
                            key={feature}
                            className="flex items-center gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                          >
                            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                            <span className="text-foreground font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Kasula Edge */}
        <section className="py-20 bg-charcoal-medium/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center space-y-6 mb-12">
                <h2 className="text-3xl md:text-4xl font-display font-bold">
                  The <span className="text-gradient">Kasula Edge</span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  What sets us apart is our commitment to accuracy, reliability, and 
                  leveraging modern technology for seamless service delivery.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {additionalServices.map((item) => (
                  <div key={item.title} className="glass-card p-6 text-center">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Compliance Calendar Widget */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto glass-card p-8 md:p-10">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Clock className="h-6 w-6 text-primary" />
                    <span className="text-sm font-medium text-primary">Upcoming Deadlines</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">
                    Compliance Calendar
                  </h2>
                  <p className="text-muted-foreground">
                    Never miss a deadline. We help you stay on top of all your 
                    GST, Income Tax, and ROC compliance requirements.
                  </p>
                  <Link to="/contact">
                    <Button variant="hero" className="group">
                      Get Compliance Support
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>

                <div className="space-y-3">
                  {[
                    { date: '20th', month: 'Monthly', desc: 'GSTR-3B Filing' },
                    { date: '25th', month: 'Quarterly', desc: 'Advance Tax Payment' },
                    { date: '31st', month: 'Annual', desc: 'ITR Filing Deadline' },
                  ].map((item) => (
                    <div key={item.desc} className="flex items-center gap-4 p-4 rounded-xl bg-white/5">
                      <div className="text-center min-w-[50px]">
                        <span className="text-2xl font-bold text-primary">{item.date}</span>
                        <span className="block text-xs text-muted-foreground">{item.month}</span>
                      </div>
                      <span className="text-foreground font-medium">{item.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="glass-card p-8 md:p-12 text-center electric-glow">
              <div className="max-w-2xl mx-auto space-y-6">
                <Award className="h-16 w-16 text-primary mx-auto" />
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                  Ready to Get Started?
                </h2>
                <p className="text-muted-foreground text-lg">
                  Schedule a free consultation to discuss your financial needs 
                  and how we can help your business grow.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link to="/contact">
                    <Button variant="hero" size="lg">
                      Book Free Consultation
                    </Button>
                  </Link>
                  <a href="tel:+919441272772">
                    <Button variant="outline" size="lg">
                      Call: +91 94412 72772
                    </Button>
                  </a>
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

export default ServicesPage;
