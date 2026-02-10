import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";
import { CarouselContainer } from "./TestimonialCarousel";
import { FlexRow } from "../common";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar?: string;
  rating: number;
  content: string;
}

const testimonialsData: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "Senior Developer",
    company: "Google Inc.",
    avatar: "https://api.dicebear.com/7.x/big-ears/svg?seed=Sarah",
    rating: 5,
    content:
      "Careersathi helped me find my dream job in just 2 weeks. The platform is intuitive and the job matches were incredibly relevant to my skills.",
  },
  {
    id: "2",
    name: "Michael Chen",
    role: "Product Manager",
    company: "Microsoft",
    avatar: "https://api.dicebear.com/7.x/big-ears/svg?seed=Michael",
    rating: 5,
    content:
      "As a recruiter, Careersathi has streamlined our hiring process. We've found amazing talent quickly and efficiently.",
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    role: "UX Designer",
    company: "Adobe",
    avatar: "https://api.dicebear.com/7.x/big-ears/svg?seed=Emily",
    rating: 4,
    content:
      "The job recommendations are spot-on. I appreciated the detailed company profiles and the easy application process.",
  },
  {
    id: "5",
    name: "Jessica Williams",
    role: "Marketing Director",
    company: "Salesforce",
    avatar: "https://api.dicebear.com/7.x/big-ears/svg?seed=Jessica",
    rating: 5,
    content:
      "Careersathi made my job search stress-free. The platform's features like saved jobs and application tracking are game-changers.",
  },
];

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
