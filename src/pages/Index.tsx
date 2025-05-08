
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  const [activeTab, setActiveTab] = useState("support");

  return (
    <div className="min-h-screen bg-[#f9f7fe]">
      {/* Hero Section */}
      <header className="bg-gradient-to-b from-[#9b87f5] to-[#8e7bdd] text-white">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Когда нужно просто поговорить
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Мы здесь, чтобы выслушать, поддержать и помочь вам найти выход
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-[#9b87f5] hover:bg-[#E5DEFF] hover:text-[#7E69AB] font-medium text-lg"
              >
                Получить поддержку
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-transparent border-white text-white hover:bg-white/10 font-medium text-lg"
              >
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
        
        <div className="wave-divider">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
            <path 
              fill="#f9f7fe"
              fillOpacity="1" 
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            ></path>
          </svg>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        <section className="mb-20">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-12 text-center text-[#1A1F2C]">
            Как мы помогаем
          </h2>
          
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-3 mb-12 bg-[#E5DEFF]/50">
              <TabsTrigger value="support" className="text-base py-3 data-[state=active]:bg-[#9b87f5] data-[state=active]:text-white">
                Поддержка
              </TabsTrigger>
              <TabsTrigger value="conversation" className="text-base py-3 data-[state=active]:bg-[#9b87f5] data-[state=active]:text-white">
                Разговор
              </TabsTrigger>
              <TabsTrigger value="guidance" className="text-base py-3 data-[state=active]:bg-[#9b87f5] data-[state=active]:text-white">
                Консультация
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="support" className="animate-fade-in">
              <div className="grid md:grid-cols-3 gap-8">
                <FeatureCard 
                  icon="Heart" 
                  title="Эмоциональная поддержка" 
                  description="Каждый из нас проходит через тяжелые периоды. Иногда простое понимание того, что вы не одни, может сделать огромную разницу."
                />
                <FeatureCard 
                  icon="Shield" 
                  title="Безопасное пространство" 
                  description="Место, где вы можете открыто говорить о своих чувствах без осуждения. Ваша приватность - наш приоритет."
                />
                <FeatureCard 
                  icon="Clock" 
                  title="Доступно 24/7" 
                  description="Кризисы не привязаны ко времени. Наши специалисты доступны круглосуточно, чтобы помочь в любой момент."
                />
              </div>
            </TabsContent>
            
            <TabsContent value="conversation" className="animate-fade-in">
              <div className="grid md:grid-cols-3 gap-8">
                <FeatureCard 
                  icon="MessageCircle" 
                  title="Разговор с психологом" 
                  description="Иногда просто нужно выговориться. Наши специалисты готовы выслушать и помочь вам разобраться в своих мыслях."
                />
                <FeatureCard 
                  icon="Users" 
                  title="Групповые сессии" 
                  description="Общение с людьми, которые проходят через похожие трудности, может дать новый взгляд и чувство общности."
                />
                <FeatureCard 
                  icon="Headphones" 
                  title="Активное слушание" 
                  description="Быть услышанным - это первый шаг к исцелению. Мы создаем пространство, где ваш голос имеет значение."
                />
              </div>
            </TabsContent>
            
            <TabsContent value="guidance" className="animate-fade-in">
              <div className="grid md:grid-cols-3 gap-8">
                <FeatureCard 
                  icon="Compass" 
                  title="Профессиональное руководство" 
                  description="Получите практические советы от квалифицированных специалистов, которые помогут вам найти путь вперед."
                />
                <FeatureCard 
                  icon="BookOpen" 
                  title="Ресурсы самопомощи" 
                  description="Доступ к проверенным материалам и упражнениям, которые вы можете использовать самостоятельно."
                />
                <FeatureCard 
                  icon="Map" 
                  title="Навигация по кризису" 
                  description="Конкретные шаги и стратегии для преодоления сложных жизненных ситуаций и эмоциональных состояний."
                />
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Emotional Support Section */}
        <section className="mb-20 bg-[#E5DEFF]/30 p-8 rounded-xl">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-playfair text-3xl font-bold mb-6 text-[#1A1F2C]">
              Мы понимаем, что вы чувствуете
            </h2>
            <p className="text-lg mb-8 text-[#403E43]">
              Каждый из нас проходит через моменты, когда кажется, что выхода нет. 
              Когда тяжело найти слова или силы двигаться дальше. В такие моменты важно помнить - 
              вы не одни, и то, что вы чувствуете, имеет право на существование.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <EmotionCard emotion="Тревога" iconName="Wind" />
              <EmotionCard emotion="Одиночество" iconName="Users" />
              <EmotionCard emotion="Печаль" iconName="Cloud" />
              <EmotionCard emotion="Беспомощность" iconName="Anchor" />
            </div>
            
            <Button className="bg-[#9b87f5] hover:bg-[#7E69AB] text-lg">
              Поделиться чувствами
            </Button>
          </div>
        </section>

        {/* Contact Form */}
        <section className="max-w-xl mx-auto">
          <h2 className="font-playfair text-3xl font-bold mb-8 text-center text-[#1A1F2C]">
            Свяжитесь с нами
          </h2>
          <Card className="border-[#E5DEFF] shadow-md">
            <CardContent className="p-6">
              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Ваше имя</label>
                  <input 
                    type="text"
                    className="w-full p-3 border border-[#E5DEFF] rounded-md focus:outline-none focus:ring-2 focus:ring-[#9b87f5]"
                    placeholder="Как к вам обращаться"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Ваш email</label>
                  <input 
                    type="email"
                    className="w-full p-3 border border-[#E5DEFF] rounded-md focus:outline-none focus:ring-2 focus:ring-[#9b87f5]"
                    placeholder="Для связи с вами"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Сообщение</label>
                  <textarea 
                    className="w-full p-3 border border-[#E5DEFF] rounded-md focus:outline-none focus:ring-2 focus:ring-[#9b87f5] min-h-[120px]"
                    placeholder="Расскажите, что вас беспокоит"
                  />
                </div>
                <Button className="w-full bg-[#9b87f5] hover:bg-[#7E69AB] text-lg">
                  Отправить
                </Button>
              </form>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
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
            <p>© 2024 Поддержка и помощь. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => {
  return (
    <Card className="border-[#E5DEFF] hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="h-12 w-12 rounded-full bg-[#9b87f5]/10 flex items-center justify-center mb-4">
          <Icon name={icon} className="h-6 w-6 text-[#9b87f5]" />
        </div>
        <h3 className="text-xl font-bold mb-2 text-[#1A1F2C]">{title}</h3>
        <p className="text-[#403E43]">{description}</p>
      </CardContent>
    </Card>
  );
};

const EmotionCard = ({ emotion, iconName }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
      <div className="h-10 w-10 mx-auto mb-2 text-[#9b87f5]">
        <Icon name={iconName} className="h-full w-full" />
      </div>
      <p className="text-[#403E43] font-medium">{emotion}</p>
    </div>
  );
};

export default Index;
