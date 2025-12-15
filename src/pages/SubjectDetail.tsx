import { useParams, useNavigate } from 'react-router-dom';
import { subjects } from '@/data/subjects';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

const SubjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const subject = subjects.find(s => s.slug === slug);

  const handleNavigate = (section: string) => {
    navigate(`/${section === 'home' ? '' : section}`);
  };

  if (!subject) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Предмет не найден</h1>
          <Button onClick={() => navigate('/library')}>Вернуться к библиотеке</Button>
        </div>
      </div>
    );
  }

  const completedLessons = subject.lessonsList.filter(l => l.completed).length;
  const progress = (completedLessons / subject.lessonsList.length) * 100;

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-500';
      case 'medium': return 'bg-yellow-500';
      case 'hard': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getDifficultyLabel = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'Легко';
      case 'medium': return 'Средне';
      case 'hard': return 'Сложно';
      default: return difficulty;
    }
  };

  return (
    <div className="min-h-screen">
      <Header currentSection="library" onNavigate={handleNavigate} />
      
      <main className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <Button
            variant="ghost"
            className="mb-6 gap-2"
            onClick={() => navigate('/library')}
          >
            <Icon name="ArrowLeft" size={20} />
            Назад к библиотеке
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <Card className="lg:col-span-1 p-8 animate-fade-in">
              <div className={`w-32 h-32 bg-gradient-to-br ${subject.color} rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl`}>
                <Icon name={subject.icon as any} className="text-white" size={64} />
              </div>
              
              <h1 className="text-3xl font-bold text-center mb-2">{subject.name}</h1>
              <Badge variant="secondary" className="w-full justify-center mb-4">
                {subject.category}
              </Badge>
              
              <p className="text-muted-foreground text-center mb-6">
                {subject.description}
              </p>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Прогресс:</span>
                  <span className="text-sm font-bold">{completedLessons} / {subject.lessonsList.length}</span>
                </div>
                <Progress value={progress} className="h-3" />
                
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="text-center p-4 bg-primary/10 rounded-xl">
                    <Icon name="BookOpen" className="mx-auto mb-2 text-primary" size={24} />
                    <div className="text-2xl font-bold">{subject.lessons}</div>
                    <div className="text-xs text-muted-foreground">Всего уроков</div>
                  </div>
                  <div className="text-center p-4 bg-secondary/10 rounded-xl">
                    <Icon name="Clock" className="mx-auto mb-2 text-secondary" size={24} />
                    <div className="text-2xl font-bold">{Math.round(subject.lessons * 0.8)}ч</div>
                    <div className="text-xs text-muted-foreground">Примерное время</div>
                  </div>
                </div>
              </div>
            </Card>

            <div className="lg:col-span-2 space-y-4">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Icon name="List" size={28} />
                Список уроков
              </h2>
              
              {subject.lessonsList.map((lesson, idx) => (
                <Card
                  key={lesson.id}
                  className="p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group animate-fade-in"
                  style={{ animationDelay: `${idx * 0.05}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${lesson.completed ? 'bg-green-500' : 'bg-gradient-to-br ' + subject.color} group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        {lesson.completed ? (
                          <Icon name="Check" className="text-white" size={24} />
                        ) : (
                          <span className="text-white font-bold">{lesson.id}</span>
                        )}
                      </div>
                    </div>

                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <h3 className="text-lg font-bold group-hover:text-primary transition-colors">
                          {lesson.title}
                        </h3>
                        <Badge className={getDifficultyColor(lesson.difficulty)}>
                          {getDifficultyLabel(lesson.difficulty)}
                        </Badge>
                      </div>
                      
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Icon name="Clock" size={16} />
                          <span>{lesson.duration}</span>
                        </div>
                        {lesson.completed && (
                          <Badge variant="outline" className="gap-1">
                            <Icon name="CheckCircle2" size={14} />
                            Пройдено
                          </Badge>
                        )}
                      </div>
                    </div>

                    <Button
                      size="sm"
                      variant={lesson.completed ? 'outline' : 'default'}
                      className="gap-2"
                    >
                      <Icon name={lesson.completed ? 'RotateCcw' : 'Play'} size={16} />
                      {lesson.completed ? 'Повторить' : 'Начать'}
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SubjectDetail;
