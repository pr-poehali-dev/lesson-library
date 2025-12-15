import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import LibrarySection from '@/components/LibrarySection';

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

      <footer className="bg-gradient-to-r from-primary via-secondary to-accent text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="font-semibold mb-2">МКОУ СОШ №1</p>
          <p className="text-sm opacity-90">© 2024 Все права защищены</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;