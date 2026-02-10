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
