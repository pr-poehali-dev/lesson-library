import ContactsSection from '@/components/ContactsSection';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useNavigate } from 'react-router-dom';

const Contacts = () => {
  const navigate = useNavigate();

  const handleNavigate = (section: string) => {
    if (section === 'contacts') return;
    navigate(`/${section === 'home' ? '' : section}`);
  };

  return (
    <div className="min-h-screen">
      <Header currentSection="contacts" onNavigate={handleNavigate} />
      <ContactsSection />
      <Footer />
    </div>
  );
};

export default Contacts;