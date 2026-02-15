import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";
import { CarouselContainer } from "./TestimonialCarousel";
import { testimonialsData, type Testimonial } from "@/constants";
import { FlexRow } from "@/components/common";

export function Testimonial() {
  return (
    <section className="py-8 md:py-12 bg-gray-100 overflow-hidden">
      <CarouselContainer
        items={testimonialsData}
        renderItem={(testimonial: Testimonial) => (
          <div className="p-1 h-full">
            <Card className="h-full border-none shadow-sm">
              <CardContent className="flex flex-col p-5 md:p-6 h-full">
                <div className="mb-3 md:mb-4">
                  {/* Smaller icon for mobile */}
                  <Quote className="w-6 h-6 md:w-10 md:h-10 text-blue-500 opacity-50" />
                </div>

                {/* Rating */}
                <FlexRow className="gap-1 mb-3 md:mb-4">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      className={`w-3 h-3 md:w-4 md:h-4 ${
                        starIndex < testimonial.rating
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </FlexRow>

                {/* Testimonial Content - Reduced text size for mobile */}
                <p className="text-gray-700 mb-4 md:mb-6 grow text-xs md:text-sm leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                {/* User Info */}
                <FlexRow className="items-center gap-3 pt-4 border-t border-gray-100">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
                  />
                  <div className="min-w-0">
                    <p className="font-semibold text-gray-900 text-sm md:text-base truncate">
                      {testimonial.name}
                    </p>
                    <p className="text-[10px] md:text-xs text-gray-500 truncate">
                      {testimonial.role} @ {testimonial.company}
                    </p>
                  </div>
                </FlexRow>
              </CardContent>
            </Card>
          </div>
        )}
        title="What Our Users Say"
        description="Hear from professionals who found their dream jobs through Careersathi"
        itemsPerView={{
          mobile: 1, // Full width on mobile
          tablet: 2, // Two items on tablet
          desktop: 3, // Three items on desktop (
        }}
      />
    </section>
  );
}