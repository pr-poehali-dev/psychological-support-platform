
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FeatureCard from "@/components/FeatureCard";

const FeatureSection = () => {
  const [activeTab, setActiveTab] = useState("support");

  return (
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
  );
};

export default FeatureSection;
