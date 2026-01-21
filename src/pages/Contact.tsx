import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle,
  ExternalLink,
  Send
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingCTA from '@/components/layout/FloatingCTA';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Our Location',
    lines: ['Near Metro Pillar A1622', 'Hyderabad, Telangana'],
    action: {
      label: 'Get Directions',
      href: 'https://maps.google.com/?q=Metro+Pillar+A1622+Hyderabad',
    },
  },
  {
    icon: Phone,
    title: 'Phone Number',
    lines: ['+91 94412 72772'],
    action: {
      label: 'Call Now',
      href: 'tel:+919441272772',
    },
  },
  {
    icon: Mail,
    title: 'Email Address',
    lines: ['kasula.associates@gmail.com', 'info@kasulaandassociates.com'],
    action: {
      label: 'Send Email',
      href: 'mailto:kasula.associates@gmail.com',
    },
  },
  {
    icon: Clock,
    title: 'Working Hours',
    lines: ['Monday - Sunday', '10:00 AM - 8:00 PM'],
    action: null,
  },
];

const ContactPage = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24">
        {/* Hero */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
                Get in Touch
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold">
                Contact & <span className="text-gradient">Location</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We're here to help. Reach out to us for any inquiries about our services.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactInfo.map((info) => (
                <div key={info.title} className="glass-card p-6 text-center">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <info.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                  <div className="space-y-1 mb-4">
                    {info.lines.map((line) => (
                      <p key={line} className="text-sm text-muted-foreground">{line}</p>
                    ))}
                  </div>
                  {info.action && (
                    <a
                      href={info.action.href}
                      target={info.action.href.startsWith('http') ? '_blank' : undefined}
                      rel={info.action.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                    >
                      {info.action.label}
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                </div>
              ))}
            </div>

            {/* Main Content */}
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Contact Form */}
              <div className="glass-card p-8">
                <h2 className="text-2xl font-display font-bold text-foreground mb-6">
                  Send us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Full Name</label>
                      <Input 
                        placeholder="John Doe"
                        className="bg-white/5 border-white/10 focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Phone Number</label>
                      <Input 
                        placeholder="+91 98765 43210"
                        className="bg-white/5 border-white/10 focus:border-primary"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Email Address</label>
                    <Input 
                      type="email"
                      placeholder="john@example.com"
                      className="bg-white/5 border-white/10 focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Service Required</label>
                    <Input 
                      placeholder="e.g., GST Filing, Tax Audit, etc."
                      className="bg-white/5 border-white/10 focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Message</label>
                    <Textarea 
                      placeholder="Tell us about your requirements..."
                      rows={4}
                      className="bg-white/5 border-white/10 focus:border-primary resize-none"
                    />
                  </div>
                  <Button type="submit" variant="hero" size="lg" className="w-full group">
                    <Send className="h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Map & Quick Actions */}
              <div className="space-y-6">
                {/* Map */}
                <div className="glass-card overflow-hidden h-[300px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.2!2d78.4!3d17.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI0JzAwLjAiTiA3OMKwMjQnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                {/* Quick Actions */}
                <div className="glass-card p-6">
                  <h3 className="font-semibold text-foreground mb-4">Quick Connect</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <a
                      href="https://wa.me/919441272772"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="whatsapp" className="w-full gap-2">
                        <MessageCircle className="h-5 w-5" />
                        WhatsApp Us
                      </Button>
                    </a>
                    <a href="tel:+919441272772">
                      <Button variant="hero" className="w-full gap-2">
                        <Phone className="h-5 w-5" />
                        Call Now
                      </Button>
                    </a>
                  </div>
                </div>

                {/* Hours Table */}
                <div className="glass-card p-6">
                  <h3 className="font-semibold text-foreground mb-4">Office Hours</h3>
                  <div className="space-y-3">
                    {[
                      { day: 'Monday - Friday', hours: '10:00 AM - 8:00 PM' },
                      { day: 'Saturday', hours: '10:00 AM - 8:00 PM' },
                      { day: 'Sunday', hours: '10:00 AM - 8:00 PM', highlight: true },
                    ].map((item) => (
                      <div 
                        key={item.day} 
                        className={`flex justify-between items-center p-3 rounded-lg ${
                          item.highlight ? 'bg-primary/10' : 'bg-white/5'
                        }`}
                      >
                        <span className="text-foreground font-medium">{item.day}</span>
                        <span className={item.highlight ? 'text-primary font-semibold' : 'text-muted-foreground'}>
                          {item.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-primary mt-4 text-center font-medium">
                    ✓ Open all 7 days for your convenience!
                  </p>
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

export default ContactPage;
