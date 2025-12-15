import { useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import LibrarySection from '@/components/LibrarySection';
import ContactsSection from '@/components/ContactsSection';
import FeedbackSection from '@/components/FeedbackSection';

const Index = () => {
  const [currentSection, setCurrentSection] = useState('home');

  const handleNavigate = (section: string) => {
    setCurrentSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <Header currentSection={currentSection} onNavigate={handleNavigate} />
      
      <main>
        <div id="home">
          <HeroSection onNavigate={handleNavigate} />
        </div>
        
        <div id="library">
          <LibrarySection />
        </div>
        
        <div id="contacts">
          <ContactsSection />
        </div>
        
        <div id="feedback">
          <FeedbackSection />
        </div>
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
