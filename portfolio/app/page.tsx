import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import ToolsSection from '@/components/ToolsSection';
import ProjectsSection from '@/components/ProjectsSection';
import JourneyPricingSection from '@/components/JourneyPricingSection';
import BlogsSection from '@/components/BlogsSection';
import ReviewsSection from '@/components/ReviewsSection';
import ContactSection from '@/components/ContactSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <ToolsSection />
        <ProjectsSection />
        <JourneyPricingSection />
        <BlogsSection />
        <ReviewsSection />
        <ContactSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
