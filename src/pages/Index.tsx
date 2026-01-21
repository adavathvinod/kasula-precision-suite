import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingCTA from '@/components/layout/FloatingCTA';
import HeroSection from '@/components/home/HeroSection';
import ServicesGrid from '@/components/home/ServicesGrid';
import TestimonialsSection from '@/components/home/TestimonialsSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesGrid />
        <TestimonialsSection />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;
