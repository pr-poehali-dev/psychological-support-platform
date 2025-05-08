
import { Button } from "@/components/ui/button";

const HeroSection = () => (
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
);

export default HeroSection;
