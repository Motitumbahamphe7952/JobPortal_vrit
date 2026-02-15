import { FlexColumn } from "@/components/common";
import { type LucideIcon, Briefcase } from "lucide-react";
import CountUp from "react-countup";

interface StatsCardProps {
  icon?: LucideIcon;
  value: number;
  label: string;
}

export default function StatsCard({
  icon: Icon = Briefcase,
  value,
  label,
}: StatsCardProps) {
  return (
    <div className="bg-white hover:bg-gray-50 rounded-sm p-3 sm:p-4 shadow-sm border border-gray-100 flex-1 transition-colors">
      <div className="flex items-center gap-3 sm:gap-4">
        {/* Responsive Icon Container: Smaller on mobile, standard on desktop */}
        <div className="bg-blue-50 hover:bg-blue-100 p-2 sm:p-3 rounded-sm shrink-0">
          <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500" />
        </div>

        <FlexColumn className="justify-center min-w-0">
          <div className="text-xl sm:text-2xl font-semibold text-gray-900 leading-none">
            <CountUp end={value} duration={5} separator="," />
          </div>
          <div className="text-[11px] sm:text-sm text-gray-500 mt-1 truncate">
            {label}
          </div>
        </FlexColumn>
      </div>
    </div>
  );
}