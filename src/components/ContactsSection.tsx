import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const ContactsSection = () => {
  const contacts = [
    {
      icon: 'MapPin',
      title: 'Адрес',
      info: 'г. Москва, ул. Школьная, д. 1',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: 'Phone',
      title: 'Телефон',
      info: '+7 (495) 123-45-67',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: 'Mail',
      title: 'Email',
      info: 'school1@education.ru',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: 'Clock',
      title: 'Режим работы',
      info: 'Пн-Пт: 8:00 - 18:00',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <section className="min-h-screen py-24 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Контакты
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Свяжитесь с нами удобным способом
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contacts.map((contact, idx) => (
            <Card
              key={idx}
              className="p-6 hover-scale animate-fade-in group cursor-pointer"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${contact.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <Icon name={contact.icon as any} className="text-white" size={28} />
              </div>
              <h3 className="text-lg font-bold text-center mb-2">{contact.title}</h3>
              <p className="text-sm text-muted-foreground text-center">{contact.info}</p>
            </Card>
          ))}
        </div>

        <Card className="max-w-4xl mx-auto p-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">О нашей школе</h3>
              <p className="text-muted-foreground mb-4">
                МКОУ СОШ №1 - современное образовательное учреждение, которое использует 
                инновационные методы обучения и передовые технологии.
              </p>
              <p className="text-muted-foreground mb-4">
                Наша миссия - создать комфортную образовательную среду, где каждый ученик 
                может раскрыть свой потенциал и получить качественные знания.
              </p>
              <div className="flex gap-4 mt-6">
                {['Facebook', 'Instagram', 'Youtube'].map((social, idx) => (
                  <div
                    key={social}
                    className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center cursor-pointer hover-scale shadow-lg"
                  >
                    <Icon name={social as any} className="text-white" size={20} />
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-6 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-2xl animate-bounce-gentle">
                  <Icon name="School" className="text-white" size={48} />
                </div>
                <h4 className="text-xl font-bold mb-2">Присоединяйтесь к нам!</h4>
                <p className="text-sm text-muted-foreground">
                  Станьте частью нашего образовательного сообщества
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ContactsSection;
