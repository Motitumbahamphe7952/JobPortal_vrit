import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CarouselContainerProps<T> {
  items: Array<T>;
  renderItem: (item: T, index: number) => ReactNode;
  title?: string;
  description?: string;
  itemsPerView?: {
    mobile?: number;
    tablet?: number;
    desktop?: number;
  };
  showNavigation?: boolean;
  className?: string;
}

const BASIS_CLASSES: Record<string, Record<number, string>> = {
  mobile: {
    1: "basis-full",
    2: "basis-1/2",
    3: "basis-1/3",
    4: "basis-1/4",
  },
  tablet: {
    1: "md:basis-full",
    2: "md:basis-1/2",
    3: "md:basis-1/3",
    4: "md:basis-1/4",
  },
  desktop: {
    1: "lg:basis-full",
    2: "lg:basis-1/2",
    3: "lg:basis-1/3",
    4: "lg:basis-1/4",
    5: "lg:basis-1/5",
  },
};

export function CarouselContainer<T>({
  items,
  renderItem,
  title,
  description,
  itemsPerView = { mobile: 1, tablet: 2, desktop: 3 },
  showNavigation = true,
  className = "",
}: CarouselContainerProps<T>) {
  const getBasisClass = () => {
    return cn(
      BASIS_CLASSES.mobile[itemsPerView.mobile || 1] || "basis-full",
      BASIS_CLASSES.tablet[itemsPerView.tablet || 2] || "md:basis-1/2",
      BASIS_CLASSES.desktop[itemsPerView.desktop || 3] || "lg:basis-1/3",
    );
  };

  return (
    <section className={cn("pt-5 pb-30 px-8", className)}>
      {/* Header Section */}
      {(title || description) && (
        <div className="text-center mb-12">
          {title && <h2 className="text-4xl font-semibold mb-4">{title}</h2>}
          {description && (
            <p className="text-gray-600 max-w-2xl mx-auto">{description}</p>
          )}
        </div>
      )}

      {/* Carousel */}
      <Carousel className="w-full max-w-6xl mx-auto">
        <CarouselContent className="-ml-4">
          {items.map((item, index) => (
            <CarouselItem key={index} className={cn("pl-4", getBasisClass())}>
              {renderItem(item, index)}
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation Arrows */}
        {showNavigation && (
          <>
            <CarouselPrevious />
            <CarouselNext />
          </>
        )}
      </Carousel>
    </section>
  );
}
