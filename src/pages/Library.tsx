import LibrarySection from '@/components/LibrarySection';
import Header from '@/components/Header';
import { useNavigate } from 'react-router-dom';

const Library = () => {
  const navigate = useNavigate();

  const handleNavigate = (section: string) => {
    if (section === 'library') return;
    navigate(`/${section === 'home' ? '' : section}`);
  };

  return (
    <div className="min-h-screen">
      <Header currentSection="library" onNavigate={handleNavigate} />
      <LibrarySection />
    </div>
  );
};

export default Library;
