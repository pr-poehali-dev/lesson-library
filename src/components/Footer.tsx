import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-primary via-secondary to-accent text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="text-center md:text-left">
            <div className="flex items-center gap-3 justify-center md:justify-start mb-4">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <Icon name="GraduationCap" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold">МКОУ СОШ №1</h3>
                <p className="text-sm opacity-80">Чулым</p>
              </div>
            </div>
            <p className="text-sm opacity-90 max-w-xs mx-auto md:mx-0">
              Современная образовательная платформа для учеников и учителей
            </p>
          </div>

          <div className="text-center">
            <h4 className="font-bold mb-4 text-lg">Контакты</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 justify-center">
                <Icon name="MapPin" size={16} />
                <span className="text-sm opacity-90">ул. Льва Толстого, 12</span>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <Icon name="Phone" size={16} />
                <span className="text-sm opacity-90">+7 (38350) 2-22-56</span>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <Icon name="Mail" size={16} />
                <span className="text-sm opacity-90">school1_@mail.ru</span>
              </div>
            </div>
          </div>

          <div className="text-center md:text-right">
            <h4 className="font-bold mb-4 text-lg">Мы в соцсетях</h4>
            <div className="flex gap-3 justify-center md:justify-end mb-4">
              {['Facebook', 'Instagram', 'Youtube'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110"
                  aria-label={social}
                >
                  <Icon name={social as any} size={18} />
                </a>
              ))}
            </div>
            <p className="text-sm opacity-90">Следите за нашими новостями</p>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6 text-center">
          <p className="text-sm opacity-90">© 2024 МКОУ СОШ №1. Все права защищены</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
