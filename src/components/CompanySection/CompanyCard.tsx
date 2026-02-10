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
      className={`mx-auto w-full hover:bg-gray-50 hover:shadow-md ${className}`}
    >
      <CardHeader>
        <div className="flex items-center gap-3 mb-2">
          {logo && <img src={logo} alt={title} className="w-8 h-8" />}
          {!logo && Icon && (
            <div className="w-12 h-12 bg-blue-50 rounded flex items-center justify-center">
              <Icon className="w-6 h-6 text-blue-500" />
            </div>
          )}
          <div className="flex-1">
            <CardTitle className="text-lg">{title}</CardTitle>
            {location && (
              <p className="text-xs text-gray-500 mt-1">{location}</p>
            )}
          </div>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        {openPositions !== undefined && (
          <div className="mt-3 inline-flex items-center gap-2 bg-green-50 text-green-600 px-3 py-1 rounded-full text-xs font-medium">
            {openPositions} Open Position{openPositions !== 1 ? "s" : ""}
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button
          variant={buttonVariant}
          size="sm"
          className="w-full bg-blue-50 text-primary hover:text-white hover:bg-primary rounded-xs"
          onClick={onButtonClick}
        >
          {buttonText}
        </Button>
      </CardFooter>
    </Card>
  );
}
