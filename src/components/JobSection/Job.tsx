import FlexRow from "../common/FlexRow";
import Grid from "../common/Grid";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import JobCard from "./JobCard";
import { jobsData } from "@/constants";

const Job = () => {
  return (
    <section className="min-h-screen px-40 py-14">
      <FlexRow className="justify-between pb-16">
        <span className="text-4xl">Featured Job</span>
        <Button className="bg-white text-primary  hover:text-white hover:bg-primary border border-gray-200 rounded-xs p-4">
          View All
          <ArrowRight />
        </Button>
      </FlexRow>
      <Grid cols={3} gap={6}>
        {jobsData.map((job) => (
          <JobCard
            key={job.id}
            id={job.id}
            title={job.title}
            employmentType={job.employmentType}
            salaryRange={job.salaryRange}
            company={job.company}
            // onBookmark={() => handleBookmark(job.id)}
          />
        ))}
      </Grid>
    </section>
  );
};

export default Job;
