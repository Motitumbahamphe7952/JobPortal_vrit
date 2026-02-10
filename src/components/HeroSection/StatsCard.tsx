import { type LucideIcon, Briefcase } from "lucide-react";
import CountUp from "react-countup";
import FlexColumn from "../common/FlexColumn";

interface StatsCardProps {
  icon?: LucideIcon;
  value: number;
  label: string;
}

export default function StatsCard({
  icon: Icon= Briefcase,
  value,
  label,
}: StatsCardProps) {
  return (
    <div className="bg-white hover:bg-gray-50 rounded-sm p-4 shadow-sm border border-gray-100 w-72">
      <div className="flex items-center gap-4">
        <div className={`bg-blue-50 hover:bg-blue-100 p-3 rounded-sm`}>
          <Icon className={`w-6 h-6 text-blue-500`} />
        </div>
        <FlexColumn className="justify-center">
          <div className="text-2xl font-semibold text-gray-900">
            <CountUp end={value} duration={5} separator="," />
          </div>
          <div className="text-sm text-gray-500 mt-1">{label}</div>
        </FlexColumn>
      </div>
    </div>
  );
}