import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { type LucideIcon } from "lucide-react";

interface CompanyCardProps {
  title: string;
  description: string;
  content: string;
  logo?: string;
  icon?: LucideIcon;
  location?: string;
  openPositions?: number;
  buttonText?: string;
  buttonVariant?:
    | "default"
    | "outline"
    | "ghost"
    | "destructive"
    | "secondary"
    | "link";
  onButtonClick?: () => void;
  className?: string;
}
export function CompanyCard({
  title,
  description,
  logo,
  icon: Icon,
  location,
  openPositions,
  buttonText = "View Details",
  buttonVariant = "outline",
  onButtonClick,
  className = "",
}: CompanyCardProps) {
  return (
    <Card
      className={`mx-auto w-full hover:bg-gray-50 hover:shadow-md transition-all duration-200 ${className}`}
    >
      <CardHeader className="p-4 md:p-6">
        <div className="flex items-start sm:items-center gap-3 mb-2">
          {logo && (
            <img
              src={logo}
              alt={title}
              className="w-10 h-10 md:w-8 md:h-8 object-contain shrink-0"
            />
          )}
          {!logo && Icon && (
            <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-50 rounded flex items-center justify-center shrink-0">
              <Icon className="w-5 h-5 md:w-6 md:h-6 text-blue-500" />
            </div>
          )}
          <div className="flex-1 min-w-0">
            <CardTitle className="text-base md:text-lg truncate">
              {title}
            </CardTitle>
            {location && (
              <p className="text-[10px] md:text-xs text-gray-500 mt-0.5 truncate">
                {location}
              </p>
            )}
          </div>
        </div>
        <CardDescription className="text-xs md:text-sm line-clamp-2">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent className="px-4 md:px-6 py-0">
        {openPositions !== undefined && (
          <div className="mt-1 md:mt-3 inline-flex items-center gap-2 bg-green-50 text-green-600 px-3 py-1 rounded-full text-[10px] md:text-xs font-medium">
            {openPositions} Open Position{openPositions !== 1 ? "s" : ""}
          </div>
        )}
      </CardContent>

      <CardFooter className="p-4 md:p-6">
        <Button
          variant={buttonVariant}
          size="sm"
          className="w-full bg-blue-50 text-primary hover:text-white hover:bg-primary rounded-xs text-xs md:text-sm h-9 md:h-10"
          onClick={onButtonClick}
        >
          {buttonText}
        </Button>
      </CardFooter>
    </Card>
  );
}