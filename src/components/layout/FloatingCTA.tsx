import { Phone, MessageCircle } from 'lucide-react';

const FloatingCTA = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* WhatsApp */}
      <a
        href="https://wa.me/919441272772?text=Hello%20Kasula%20%26%20Associates%2C%20I%20would%20like%20to%20inquire%20about%20your%20CA%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl hover:shadow-[#25D366]/40 transition-all duration-300 hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-6 w-6 transition-transform group-hover:scale-110" />
      </a>
      
      {/* Call */}
      <a
        href="tel:+919441272772"
        className="group flex items-center justify-center w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 hover:scale-110 animate-glow-pulse"
        aria-label="Call Now"
      >
        <Phone className="h-6 w-6 transition-transform group-hover:scale-110" />
      </a>
    </div>
  );
};

export default FloatingCTA;
