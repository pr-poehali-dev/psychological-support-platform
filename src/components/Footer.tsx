
const Footer = () => {
  return (
    <footer className="bg-[#1A1F2C] text-white mt-20 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">О нас</h3>
            <p className="text-gray-300">
              Мы команда профессиональных психологов, 
              готовых выслушать и поддержать вас в сложные периоды жизни.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Контакты</h3>
            <p className="text-gray-300 mb-2">
              Email: help@yoursite.ru
            </p>
            <p className="text-gray-300">
              Телефон: +7 (800) 123-45-67
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Экстренные случаи</h3>
            <p className="text-gray-300">
              Если вам нужна немедленная помощь, 
              звоните на горячую линию: <br />
              <span className="text-white font-bold">+7 (800) 100-49-94</span>
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Поддержка и помощь. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
