import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import LibrarySection from '@/components/LibrarySection';
import Footer from '@/components/Footer';

const Index = () => {
  const navigate = useNavigate();

  const handleNavigate = (section: string) => {
    if (section === 'home') return;
    navigate(`/${section}`);
  };

  return (
    <div className="min-h-screen">
      <Header currentSection="home" onNavigate={handleNavigate} />
      
      <main>
        <HeroSection onNavigate={handleNavigate} />
        <LibrarySection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;