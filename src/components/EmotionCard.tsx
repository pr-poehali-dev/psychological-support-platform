
import Icon from "@/components/ui/icon";

interface EmotionCardProps {
  emotion: string;
  iconName: string;
}

const EmotionCard = ({ emotion, iconName }: EmotionCardProps) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
      <div className="h-10 w-10 mx-auto mb-2 text-[#9b87f5]">
        <Icon name={iconName} className="h-full w-full" />
      </div>
      <p className="text-[#403E43] font-medium">{emotion}</p>
    </div>
  );
};

export default EmotionCard;
