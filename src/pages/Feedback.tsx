import FeedbackSection from '@/components/FeedbackSection';
import Header from '@/components/Header';
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
    </div>
  );
};

export default Feedback;
