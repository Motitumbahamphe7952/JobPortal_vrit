import FlexRow from "../common/FlexRow";
import Grid from "../common/Grid";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { CompanyCard } from "./CompanyCard";
import { companiesData } from "@/constants";

const Company = () => {
  return (
    <section className="min-h-auto px-6 md:px-20 lg:px-40 py-14">
      <FlexRow className="flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-10">
        <span className="text-2xl md:text-4xl font-medium">Top Companies</span>
        <Button className="bg-white text-primary  hover:text-white hover:bg-primary border border-gray-200 rounded-xs p-4">
          View All
          <ArrowRight />
        </Button>
      </FlexRow>
      <Grid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3" gap={6}>
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
