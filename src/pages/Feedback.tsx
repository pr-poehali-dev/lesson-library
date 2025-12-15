import FeedbackSection from '@/components/FeedbackSection';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useNavigate } from 'react-router-dom';

const Feedback = () => {
  const navigate = useNavigate();

  const handleNavigate = (section: string) => {
    if (section === 'feedback') return;
    navigate(`/${section === 'home' ? '' : section}`);
  };

  return (
    <div className="min-h-screen">
      <Header currentSection="feedback" onNavigate={handleNavigate} />
      <FeedbackSection />
      <Footer />
    </div>
  );
};

export default Feedback;