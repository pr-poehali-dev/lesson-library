export interface Lesson {
  id: number;
  title: string;
  duration: string;
  difficulty: 'easy' | 'medium' | 'hard';
  completed: boolean;
}

export interface Subject {
  id: number;
  name: string;
  slug: string;
  icon: string;
  color: string;
  lessons: number;
  category: string;
  description: string;
  lessonsList: Lesson[];
}

export const subjects: Subject[] = [
  { 
    id: 1, 
    name: 'Математика',
    slug: 'mathematics',
    icon: 'Calculator', 
    color: 'from-blue-500 to-blue-600',
    lessons: 24, 
    category: 'Точные науки',
    description: 'Изучение чисел, формул, уравнений и геометрических фигур',
    lessonsList: [
      { id: 1, title: 'Натуральные числа и действия с ними', duration: '45 мин', difficulty: 'easy', completed: false },
      { id: 2, title: 'Обыкновенные дроби', duration: '50 мин', difficulty: 'medium', completed: false },
      { id: 3, title: 'Десятичные дроби', duration: '45 мин', difficulty: 'medium', completed: false },
      { id: 4, title: 'Проценты и пропорции', duration: '60 мин', difficulty: 'hard', completed: false },
      { id: 5, title: 'Линейные уравнения', duration: '55 мин', difficulty: 'medium', completed: false },
    ]
  },
  { 
    id: 2, 
    name: 'Русский язык',
    slug: 'russian',
    icon: 'BookText', 
    color: 'from-red-500 to-red-600',
    lessons: 32, 
    category: 'Гуманитарные науки',
    description: 'Грамматика, орфография и культура речи',
    lessonsList: [
      { id: 1, title: 'Фонетика и орфоэпия', duration: '40 мин', difficulty: 'easy', completed: false },
      { id: 2, title: 'Морфология: части речи', duration: '50 мин', difficulty: 'medium', completed: false },
      { id: 3, title: 'Синтаксис простого предложения', duration: '55 мин', difficulty: 'medium', completed: false },
      { id: 4, title: 'Синтаксис сложного предложения', duration: '60 мин', difficulty: 'hard', completed: false },
    ]
  },
  { 
    id: 3, 
    name: 'Литература',
    slug: 'literature',
    icon: 'Book', 
    color: 'from-purple-500 to-purple-600',
    lessons: 28, 
    category: 'Гуманитарные науки',
    description: 'Изучение художественных произведений и литературного анализа',
    lessonsList: [
      { id: 1, title: 'Устное народное творчество', duration: '45 мин', difficulty: 'easy', completed: false },
      { id: 2, title: 'А.С. Пушкин: жизнь и творчество', duration: '50 мин', difficulty: 'medium', completed: false },
      { id: 3, title: 'Анализ лирического произведения', duration: '55 мин', difficulty: 'hard', completed: false },
    ]
  },
  { 
    id: 4, 
    name: 'Физика',
    slug: 'physics',
    icon: 'Atom', 
    color: 'from-cyan-500 to-cyan-600',
    lessons: 20, 
    category: 'Точные науки',
    description: 'Законы природы, механика, электричество и оптика',
    lessonsList: [
      { id: 1, title: 'Механическое движение', duration: '45 мин', difficulty: 'medium', completed: false },
      { id: 2, title: 'Законы Ньютона', duration: '60 мин', difficulty: 'hard', completed: false },
      { id: 3, title: 'Работа и энергия', duration: '50 мин', difficulty: 'medium', completed: false },
    ]
  },
  { 
    id: 5, 
    name: 'Химия',
    slug: 'chemistry',
    icon: 'FlaskConical', 
    color: 'from-green-500 to-green-600',
    lessons: 18, 
    category: 'Естественные науки',
    description: 'Изучение веществ, их свойств и превращений',
    lessonsList: [
      { id: 1, title: 'Атомы и молекулы', duration: '45 мин', difficulty: 'easy', completed: false },
      { id: 2, title: 'Химические реакции', duration: '55 мин', difficulty: 'medium', completed: false },
      { id: 3, title: 'Периодическая система элементов', duration: '60 мин', difficulty: 'hard', completed: false },
    ]
  },
  { 
    id: 6, 
    name: 'Биология',
    slug: 'biology',
    icon: 'Microscope', 
    color: 'from-emerald-500 to-emerald-600',
    lessons: 22, 
    category: 'Естественные науки',
    description: 'Живая природа, организмы и экосистемы',
    lessonsList: [
      { id: 1, title: 'Клетка - основа жизни', duration: '40 мин', difficulty: 'easy', completed: false },
      { id: 2, title: 'Растения и их строение', duration: '45 мин', difficulty: 'easy', completed: false },
      { id: 3, title: 'Животный мир', duration: '50 мин', difficulty: 'medium', completed: false },
    ]
  },
  { 
    id: 7, 
    name: 'География',
    slug: 'geography',
    icon: 'Globe', 
    color: 'from-teal-500 to-teal-600',
    lessons: 16, 
    category: 'Естественные науки',
    description: 'Изучение Земли, стран и природных явлений',
    lessonsList: [
      { id: 1, title: 'Планета Земля', duration: '45 мин', difficulty: 'easy', completed: false },
      { id: 2, title: 'Материки и океаны', duration: '50 мин', difficulty: 'medium', completed: false },
      { id: 3, title: 'Климат и природные зоны', duration: '55 мин', difficulty: 'medium', completed: false },
    ]
  },
  { 
    id: 8, 
    name: 'История',
    slug: 'history',
    icon: 'Landmark', 
    color: 'from-amber-500 to-amber-600',
    lessons: 30, 
    category: 'Гуманитарные науки',
    description: 'События прошлого и развитие цивилизаций',
    lessonsList: [
      { id: 1, title: 'Древний мир', duration: '50 мин', difficulty: 'easy', completed: false },
      { id: 2, title: 'Средние века', duration: '55 мин', difficulty: 'medium', completed: false },
      { id: 3, title: 'Новое время', duration: '60 мин', difficulty: 'hard', completed: false },
    ]
  },
  { 
    id: 9, 
    name: 'Информатика',
    slug: 'informatics',
    icon: 'Code', 
    color: 'from-indigo-500 to-indigo-600',
    lessons: 26, 
    category: 'Точные науки',
    description: 'Основы программирования и работы с компьютером',
    lessonsList: [
      { id: 1, title: 'Введение в алгоритмы', duration: '45 мин', difficulty: 'easy', completed: false },
      { id: 2, title: 'Основы программирования', duration: '60 мин', difficulty: 'medium', completed: false },
      { id: 3, title: 'Работа с данными', duration: '55 мин', difficulty: 'hard', completed: false },
    ]
  },
  { 
    id: 10, 
    name: 'Английский язык',
    slug: 'english',
    icon: 'Languages', 
    color: 'from-pink-500 to-pink-600',
    lessons: 34, 
    category: 'Языки',
    description: 'Грамматика, лексика и разговорная практика',
    lessonsList: [
      { id: 1, title: 'Present Simple Tense', duration: '40 мин', difficulty: 'easy', completed: false },
      { id: 2, title: 'Past Simple Tense', duration: '45 мин', difficulty: 'medium', completed: false },
      { id: 3, title: 'Future Tenses', duration: '50 мин', difficulty: 'medium', completed: false },
    ]
  },
  { 
    id: 11, 
    name: 'Искусство',
    slug: 'art',
    icon: 'Palette', 
    color: 'from-fuchsia-500 to-fuchsia-600',
    lessons: 12, 
    category: 'Творчество',
    description: 'Рисование, живопись и история искусств',
    lessonsList: [
      { id: 1, title: 'Основы композиции', duration: '45 мин', difficulty: 'easy', completed: false },
      { id: 2, title: 'Работа с цветом', duration: '50 мин', difficulty: 'medium', completed: false },
      { id: 3, title: 'Перспектива в рисунке', duration: '55 мин', difficulty: 'hard', completed: false },
    ]
  },
  { 
    id: 12, 
    name: 'Музыка',
    slug: 'music',
    icon: 'Music', 
    color: 'from-violet-500 to-violet-600',
    lessons: 14, 
    category: 'Творчество',
    description: 'Теория музыки и музыкальная культура',
    lessonsList: [
      { id: 1, title: 'Нотная грамота', duration: '40 мин', difficulty: 'easy', completed: false },
      { id: 2, title: 'Ритм и мелодия', duration: '45 мин', difficulty: 'medium', completed: false },
      { id: 3, title: 'Музыкальные жанры', duration: '50 мин', difficulty: 'medium', completed: false },
    ]
  }
];
