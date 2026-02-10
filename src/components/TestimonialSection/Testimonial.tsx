import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";
import { CarouselContainer } from "./TestimonialCarousel";
import { FlexRow } from "../common";
import { testimonialsData, type Testimonial } from "@/constants";

export function Testimonial() {
  return (
    <section className="py-8 bg-gray-100">
      <CarouselContainer
        items={testimonialsData}
        renderItem={(testimonial: Testimonial) => (
          <div className="p-1">
            <Card className="h-full">
              <CardContent className="flex flex-col p-6 h-full">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="w-10 h-10 text-blue-500 opacity-50" />
                </div>

                {/* Rating */}
                <FlexRow className="gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      className={`w-4 h-4 ${
                        starIndex < testimonial.rating
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </FlexRow>

                {/* Testimonial Content */}
                <p className="text-gray-700 mb-6 grow text-sm leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* User Info */}
                <FlexRow className="items-center gap-3 pt-4 border-t">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {testimonial.role} at {testimonial.company}
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
          mobile: 1,
          tablet: 2,
          desktop: 3,
        }}
      />
    </section>
  );
}
