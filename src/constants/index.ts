import { Briefcase, Building2, Facebook, Instagram, Twitter, Users, Youtube, type LucideIcon } from "lucide-react";

interface Job {
  id: number;
  title: string;
  employmentType: "INTERNSHIP" | "PART-TIME" | "FULL-TIME";
  salaryRange: string;
  company: {
    name: string;
    logo: string;
    location: string;
  };
}

interface StatItem {
  icon: LucideIcon;
  value: number;
  label: string;
}

interface Company {
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

export const jobsData: Job[] = [
  {
    id: 1,
    title: "Junior Graphic Designer",
    employmentType: "INTERNSHIP",
    salaryRange: "$20,000 - $25,000",
    company: {
      name: "Google Inc.",
      logo: "Employers Logo.svg",
      location: "Dhaka, Bangladesh",
    },
  },
  {
    id: 2,
    title: "Interaction Designer",
    employmentType: "PART-TIME",
    salaryRange: "$20,000 - $25,000",
    company: {
      name: "Google Inc.",
      logo: "Employers Logo.svg",
      location: "Dhaka, Bangladesh",
    },
  },
  {
    id: 3,
    title: "Project Manager",
    employmentType: "FULL-TIME",
    salaryRange: "$20,000 - $25,000",
    company: {
      name: "Google Inc.",
      logo: "Employers Logo.svg",
      location: "Dhaka, Bangladesh",
    },
  },
  {
    id: 4,
    title: "Senior UI/UX Designer",
    employmentType: "FULL-TIME",
    salaryRange: "$30,000 - $35,000",
    company: {
      name: "Google Inc.",
      logo: "Employers Logo.svg",
      location: "Dhaka, Bangladesh",
    },
  },
  {
    id: 5,
    title: "Frontend Developer",
    employmentType: "PART-TIME",
    salaryRange: "$25,000 - $30,000",
    company: {
      name: "Google Inc.",
      logo: "Employers Logo.svg",
      location: "Dhaka, Bangladesh",
    },
  },
  {
    id: 6,
    title: "Content Writer",
    employmentType: "INTERNSHIP",
    salaryRange: "$15,000 - $20,000",
    company: {
      name: "Google Inc.",
      logo: "Employers Logo.svg",
      location: "Dhaka, Bangladesh",
    },
  },
  {
    id: 7,
    title: "Data Analyst",
    employmentType: "FULL-TIME",
    salaryRange: "$35,000 - $40,000",
    company: {
      name: "Google Inc.",
      logo: "Employers Logo.svg",
      location: "Dhaka, Bangladesh",
    },
  },
  {
    id: 8,
    title: "Marketing Manager",
    employmentType: "FULL-TIME",
    salaryRange: "$40,000 - $45,000",
    company: {
      name: "Google Inc.",
      logo: "Employers Logo.svg",
      location: "Dhaka, Bangladesh",
    },
  },
  {
    id: 9,
    title: "Product Designer",
    employmentType: "PART-TIME",
    salaryRange: "$28,000 - $32,000",
    company: {
      name: "Google Inc.",
      logo: "Employers Logo.svg",
      location: "Dhaka, Bangladesh",
    },
  },
  {
    id: 10,
    title: "Backend Developer",
    employmentType: "FULL-TIME",
    salaryRange: "$45,000 - $50,000",
    company: {
      name: "Google Inc.",
      logo: "Employers Logo.svg",
      location: "Dhaka, Bangladesh",
    },
  },
  {
    id: 11,
    title: "SEO Specialist",
    employmentType: "INTERNSHIP",
    salaryRange: "$18,000 - $22,000",
    company: {
      name: "Google Inc.",
      logo: "Employers Logo.svg",
      location: "Dhaka, Bangladesh",
    },
  },
  {
    id: 12,
    title: "DevOps Engineer",
    employmentType: "FULL-TIME",
    salaryRange: "$50,000 - $55,000",
    company: {
      name: "Google Inc.",
      logo: "Employers Logo.svg",
      location: "Dhaka, Bangladesh",
    },
  },
];

export const statsData: StatItem[] = [
  {
    icon: Briefcase,
    value: 175324,
    label: "Live Job",
  },
  {
    icon: Building2,
    value: 97354,
    label: "Companies",
  },
  {
    icon: Users,
    value: 3847154,
    label: "Candidates",
  },
  {
    icon: Briefcase,
    value: 7532,
    label: "New Jobs",
  },
];

export const companiesData: Company[] = [
  {
    id: "1",
    title: "Google Inc.",
    description: "Technology Company",
    content:
      "Leading technology company focused on search, advertising, and cloud computing services.",
    logo: "Employers Logo.svg",
    location: "Mountain View, CA",
    openPositions: 45,
  },
  {
    id: "2",
    title: "Microsoft",
    description: "Software & Cloud Services",
    content:
      "Global technology company developing software, hardware, and cloud solutions.",
    logo: "Microsoft_icon.svg",
    location: "Redmond, WA",
    openPositions: 32,
  },
  {
    id: "3",
    title: "Startup Tech Co.",
    description: "AI & Machine Learning",
    content:
      "Innovative startup working on cutting-edge AI solutions for businesses.",
    logo: "volar.svg",
    location: "San Francisco, CA",
    openPositions: 8,
  },
  {
    id: "1",
    title: "Google Inc.",
    description: "Technology Company",
    content:
      "Leading technology company focused on search, advertising, and cloud computing services.",
    logo: "Employers Logo.svg",
    location: "Mountain View, CA",
    openPositions: 45,
  },
  {
    id: "2",
    title: "Microsoft",
    description: "Software & Cloud Services",
    content:
      "Global technology company developing software, hardware, and cloud solutions.",
    logo: "Microsoft_icon.svg",
    location: "Redmond, WA",
    openPositions: 32,
  },
  {
    id: "3",
    title: "Startup Tech Co.",
    description: "AI & Machine Learning",
    content:
      "Innovative startup working on cutting-edge AI solutions for businesses.",
    logo: "volar.svg",
    location: "San Francisco, CA",
    openPositions: 8,
  },
];

 export const testimonialsData: Testimonial[] = [
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

export const quickLinks = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
];

export const candidateLinks = [
  { label: "Browse Jobs", href: "/jobs" },
  { label: "Browse Employers", href: "/employers" },
  { label: "Candidate Dashboard", href: "/candidate/dashboard" },
  { label: "Saved Jobs", href: "/candidate/saved-jobs" },
];

export const employerLinks = [
  { label: "Post a Job", href: "/employer/post-job" },
  { label: "Browse Candidates", href: "/employer/candidates" },
  { label: "Employers Dashboard", href: "/employer/dashboard" },
  { label: "Applications", href: "/employer/applications" },
];

export const supportLinks = [
  { label: "Faqs", href: "/faqs" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
];

export const socialLinks = [
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
];

export const footerSections = [
  { title: "Quick Link", links: quickLinks },
  { title: "Candidate", links: candidateLinks },
  { title: "Employers", links: employerLinks },
  { title: "Support", links: supportLinks },
];