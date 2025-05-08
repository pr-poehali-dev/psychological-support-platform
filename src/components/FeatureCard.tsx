
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
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

export default FeatureCard;
