import { Link } from 'react-router-dom';
import { 
  Calculator, 
  FileCheck, 
  Building2, 
  Lightbulb,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Calculator,
    title: 'Taxation',
    subtitle: 'GST & Income Tax',
    description: 'Complete tax planning, GST returns, ITR filing, and compliance management with precision.',
    features: ['GST Returns', 'Income Tax Filing', 'Tax Planning', 'TDS Compliance'],
    span: 'col-span-6 md:col-span-3',
  },
  {
    icon: FileCheck,
    title: 'Audit',
    subtitle: 'Statutory & Internal',
    description: 'Comprehensive audit services ensuring compliance and financial accuracy for your business.',
    features: ['Statutory Audit', 'Internal Audit', 'Tax Audit', 'Compliance Review'],
    span: 'col-span-6 md:col-span-3',
  },
  {
    icon: Building2,
    title: 'Corporate',
    subtitle: 'ROC & Registrations',
    description: 'End-to-end corporate services from company formation to annual compliance filings.',
    features: ['Company Registration', 'ROC Filings', 'Annual Returns', 'LLP Compliance'],
    span: 'col-span-6 md:col-span-3',
  },
  {
    icon: Lightbulb,
    title: 'Advisory',
    subtitle: 'Project Reports & CMA',
    description: 'Strategic financial advisory including project reports, CMA data, and business consulting.',
    features: ['Project Reports', 'CMA Data', 'Business Advisory', 'Loan Documentation'],
    span: 'col-span-6 md:col-span-3',
  },
];

const ServicesGrid = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
            Our Expertise
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
            Specialized 4-Pillar{' '}
            <span className="text-gradient">Approach</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Comprehensive financial services designed to help your business thrive
            with accuracy and reliability at every step.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="bento-grid">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`${service.span} bento-item group cursor-pointer`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-full flex flex-col">
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-7 w-7 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-3">
                  <div>
                    <h3 className="text-xl font-display font-bold text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-primary font-medium">
                      {service.subtitle}
                    </p>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Features */}
                <div className="mt-6 pt-6 border-t border-white/10">
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 rounded-full bg-white/5 text-xs font-medium text-muted-foreground"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link to="/services">
            <Button variant="outline" size="lg" className="group">
              View All Services
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
