import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { subjects } from '@/data/subjects';

const LibrarySection = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('Все');
  
  const categories = ['Все', ...new Set(subjects.map(s => s.category))];
  
  const filteredSubjects = selectedCategory === 'Все' 
    ? subjects 
    : subjects.filter(s => s.category === selectedCategory);

  return (
    <section className="min-h-screen py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Библиотека уроков
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Выбери предмет и начни своё образовательное путешествие
          </p>
        </div>

        <div className="flex flex-wrap gap-3 justify-center mb-12 animate-fade-in">
          {categories.map((cat) => (
            <Badge
              key={cat}
              variant={selectedCategory === cat ? 'default' : 'outline'}
              className="cursor-pointer px-6 py-2 text-sm hover-scale"
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </Badge>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredSubjects.map((subject, idx) => (
            <Card
              key={subject.id}
              onClick={() => navigate(`/subject/${subject.slug}`)}
              className="group cursor-pointer border-2 hover:border-transparent transition-all duration-300 overflow-hidden animate-fade-in relative hover:shadow-2xl hover:shadow-primary/50"
              style={{ animationDelay: `${idx * 0.05}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-secondary/0 to-accent/0 group-hover:from-primary/10 group-hover:via-secondary/10 group-hover:to-accent/10 transition-all duration-500"></div>
              
              <div className="relative p-6 transform group-hover:scale-105 transition-transform duration-300">
                <div className={`w-20 h-20 bg-gradient-to-br ${subject.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-125 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:shadow-2xl`}>
                  <Icon name={subject.icon as any} className="text-white group-hover:scale-110 transition-transform duration-300" size={36} />
                </div>
                
                <h3 className="text-xl font-bold text-center mb-2 group-hover:text-primary transition-colors duration-300">
                  {subject.name}
                </h3>
                
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  <Icon name="BookOpen" size={16} />
                  <span>{subject.lessons} уроков</span>
                </div>

                <Badge variant="secondary" className="w-full justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  {subject.category}
                </Badge>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LibrarySection;