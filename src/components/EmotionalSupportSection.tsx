
import { Button } from "@/components/ui/button";
import EmotionCard from "@/components/EmotionCard";

const EmotionalSupportSection = () => {
  return (
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
  );
};

export default EmotionalSupportSection;
