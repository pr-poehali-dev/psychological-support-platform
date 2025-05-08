
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ContactForm = () => {
  return (
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
  );
};

export default ContactForm;
