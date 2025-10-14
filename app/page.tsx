import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import About from '@/components/About';
import ServiceArea from '@/components/ServiceArea';
import Booking from '@/components/Booking';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <Portfolio />
        <Testimonials />
        <About />
        <ServiceArea />
        <Booking />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
