import { type LucideIcon } from "lucide-react";

export interface StatItem {
  icon: LucideIcon;
  value: number;
  label: string;
}

export interface Company {
  id: string;
  title: string;
  description: string;
  content: string;
  logo?: string;
  icon?: LucideIcon;
  location?: string;
  openPositions?: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar?: string;
  rating: number;
  content: string;
}


export interface Job {
  id: string;
  title: string;
  employmentType: "INTERNSHIP" | "PART-TIME" | "FULL-TIME";
  salaryRange: string;
  company: {
    name: string;
    logo: string;
    location: string;
    isVerified?: boolean;
    featured?: boolean;
  };
  description?: string;
  requirements?: string[];
  desirable?: string[];
  benefits?: string[];
  postedDate?: string;
  expireDate?: string;
  level?: string;
  experience?: string;
  education?: string;
}
