import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  onNavigate: (section: string) => void;
}

const HeroSection = ({ onNavigate }: HeroSectionProps) => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="inline-block mb-6 animate-bounce-gentle">
            <div className="w-24 h-24 bg-gradient-to-br from-primary via-secondary to-accent rounded-3xl flex items-center justify-center shadow-2xl">
              <Icon name="Sparkles" className="text-white" size={48} />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            МКОУ СОШ №1
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Добро пожаловать на образовательную платформу
          </p>

          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Современное образование с игровыми элементами, интерактивными уроками 
            и увлекательными заданиями для учеников всех возрастов
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Button
              size="lg"
              onClick={() => onNavigate('library')}
              className="gap-2 text-lg px-8 py-6 hover-scale shadow-lg"
            >
              <Icon name="BookOpen" size={24} />
              Открыть библиотеку уроков
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => onNavigate('feedback')}
              className="gap-2 text-lg px-8 py-6 hover-scale"
            >
              <Icon name="MessageSquare" size={24} />
              Связаться с нами
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { icon: 'Trophy', title: 'Достижения', desc: 'Отслеживай прогресс' },
              { icon: 'Users', title: 'Сообщество', desc: 'Учись вместе' },
              { icon: 'Zap', title: 'Быстро', desc: 'Удобный доступ' }
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-card p-6 rounded-2xl shadow-lg border border-border hover-scale animate-fade-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon name={item.icon as any} className="text-white" size={28} />
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
