import FlexRow from "../common/FlexRow";
import Grid from "../common/Grid";
import { Button } from "../ui/button";
import { ArrowRight, type LucideIcon } from "lucide-react";
import { CompanyCard } from "./CompanyCard";

const Company = () => {
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

const companiesData: Company[] = [
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
  return (
    <section className="min-h-auto px-40 py-14">
      <FlexRow className="justify-between pb-10">
        <span className="text-4xl">Top Companies</span>
        <Button className="bg-white text-primary  hover:text-white hover:bg-primary border border-gray-200 rounded-xs p-4">
          View All
          <ArrowRight />
        </Button>
      </FlexRow>
      <Grid cols={3} gap={6}>
        {companiesData.map((company) => (
          <CompanyCard
            key={company.id}
            title={company.title}
            description={company.description}
            content={company.content}
            logo={company.logo}
            icon={company.icon}
            location={company.location}
            openPositions={company.openPositions}
            buttonText="View Jobs"
            buttonVariant="outline"
            className="rounded-sm"
            // onButtonClick={() => handleViewDetails(company.id)}
          />
        ))}
      </Grid>
    </section>
  );
};

export default Company;
