import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Star, Instagram, ExternalLink } from 'lucide-react';
import caLogo from '@/assets/ca-logo.png';

const Footer = () => {
  return (
    <footer className="bg-charcoal-deep border-t border-white/10">
      {/* Trust Ticker */}
      <div className="bg-primary/10 border-b border-white/10 overflow-hidden">
        <div className="flex animate-ticker whitespace-nowrap py-3">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 px-4">
              <span className="flex items-center gap-2 text-sm font-medium text-foreground">
                <Star className="h-4 w-4 text-primary fill-primary" />
                GST Returns
              </span>
              <span className="text-muted-foreground">•</span>
              <span className="flex items-center gap-2 text-sm font-medium text-foreground">
                <Star className="h-4 w-4 text-primary fill-primary" />
                Income Tax
              </span>
              <span className="text-muted-foreground">•</span>
              <span className="flex items-center gap-2 text-sm font-medium text-foreground">
                <Star className="h-4 w-4 text-primary fill-primary" />
                ROC Filings
              </span>
              <span className="text-muted-foreground">•</span>
              <span className="flex items-center gap-2 text-sm font-medium text-foreground">
                <Star className="h-4 w-4 text-primary fill-primary" />
                5.0 Rated on Google
              </span>
              <span className="text-muted-foreground">•</span>
              <span className="flex items-center gap-2 text-sm font-medium text-foreground">
                <Star className="h-4 w-4 text-primary fill-primary" />
                Statutory Audit
              </span>
              <span className="text-muted-foreground">•</span>
              <span className="flex items-center gap-2 text-sm font-medium text-foreground">
                <Star className="h-4 w-4 text-primary fill-primary" />
                Project Reports
              </span>
              <span className="text-muted-foreground mx-8">|</span>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <img src={caLogo} alt="Kasula & Associates" className="h-12 w-auto" />
              <div>
                <span className="text-xl font-display font-bold text-foreground block">
                  Kasula & Associates
                </span>
                <span className="text-sm text-muted-foreground">
                  Chartered Accountants
                </span>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Providing accurate and reliable financial services with precision and excellence. Your trusted partner in taxation, audit, and corporate compliance.
            </p>
            <div className="flex items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-primary fill-primary" />
              ))}
              <span className="text-sm font-semibold text-foreground ml-2">5.0/5.0</span>
              <span className="text-xs text-muted-foreground">on Google</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-display font-semibold text-foreground mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {['Home', 'Services', 'About Us', 'Contact'].map((link) => (
                <li key={link}>
                  <Link
                    to={link === 'Home' ? '/' : `/${link.toLowerCase().replace(' ', '-')}`}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-display font-semibold text-foreground mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">
                  Near Metro Pillar A1622,<br />
                  Hyderabad, Telangana
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="tel:+919441272772" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  +91 94412 72772
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="mailto:kasula.associates@gmail.com" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  kasula.associates@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground text-sm">
                  Mon - Sun: 10 AM - 8 PM
                </span>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div>
            <h4 className="text-lg font-display font-semibold text-foreground mb-6">
              Find Us
            </h4>
            <div className="glass-card overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.2!2d78.4!3d17.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI0JzAwLjAiTiA3OMKwMjQnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="150"
                style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              />
              <a
                href="https://maps.google.com/?q=Metro+Pillar+A1622+Hyderabad"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-3 text-sm font-medium text-primary hover:bg-primary/10 transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
                Get Directions
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm text-center md:text-left">
            © 2024 Kasula & Associates. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 hover:bg-primary/20 hover:text-primary transition-all"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://wa.me/919441272772"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 hover:bg-[#25D366]/20 hover:text-[#25D366] transition-all"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
