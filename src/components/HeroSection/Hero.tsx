import { Search } from "lucide-react";
import FlexColumn from "../common/FlexColumn";
import FlexRow from "../common/FlexRow";
import Grid from "../common/Grid";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import StatsCard from "./StatsCard";
import { statsData } from "@/constants";

const Hero = () => {
  return (
    <section className="bg-gray-50 pb-12 md:pb-16 lg:pb-24">
      <Grid className="lg:grid-cols-auto_1fr grid-cols-1 gap-4 lg:gap-12 px-4 sm:px-8 md:px-20 lg:px-40 items-center justify-center min-h-auto pt-8 md:pt-12 lg:pt-14">
        <FlexColumn className="w-full space-y-2 justify-center gap-4">
          <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-tight lg:leading-15 tracking-[-0.9px] text-new-black-400">
            Align your passion with your profession.
          </span>

          <span className="text-base md:text-lg font-light leading-6 md:leading-7.5 text-new-black-300 w-full lg:w-lg">
            Discover opportunities that match your skills and goals. Browse
            verified jobs, connect with top companies, and take the next step in
            your career with confidence.
          </span>

          <FlexRow className="gap-2 flex-col sm:flex-row w-full">
            <div className="relative w-full sm:w-3/4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                className="rounded-xs h-12 pl-10 w-full peer"
                placeholder=" "
                id="search-input"
              />
              <label
                htmlFor="search-input"
                className="absolute left-10 top-1/2 transform -translate-y-1/2 text-gray-500 
                peer-placeholder-shown:block hidden pointer-events-none"
              >
                Job title, keywords, or company
              </label>
            </div>
            <Button className="rounded-xs bg-gradient-primary h-12 text-lg font-light w-full sm:w-auto">
              Find Job
            </Button>
          </FlexRow>
        </FlexColumn>

        <FlexRow className="justify-center lg:justify-end mt-8 lg:mt-0">
          <img
            src="Illustration.svg"
            alt="Hero image"
            className="w-full max-w-sm md:max-w-md lg:max-w-none"
          />
        </FlexRow>
      </Grid>
      <FlexRow className="flex-col sm:flex-row items-center justify-between px-4 sm:px-8 md:px-20 lg:px-40 gap-4 pt-10 md:pt-12">
        {statsData.map((stat, index) => (
          <StatsCard
            key={index}
            icon={stat.icon}
            value={stat.value}
            label={stat.label}
          />
        ))}
      </FlexRow>
    </section>
  );
};

export default Hero;
