import {
  Briefcase,
  Building2,
  Search,
  Users,
  type LucideIcon,
} from "lucide-react";
import FlexColumn from "../common/FlexColumn";
import FlexRow from "../common/FlexRow";
import Grid from "../common/Grid";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import StatsCard from "./StatsCard";

const Hero = () => {
  interface StatItem {
    icon: LucideIcon;
    value: number;
    label: string;
  }

  const statsData: StatItem[] = [
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

  return (
    <section className="bg-gray-50 pb-24">
      <Grid className="lg:grid-cols-auto_1fr grid-cols-1 gap-4 lg:gap-12 px-40 items-center justify-center min-h-[65vh]">
        <FlexColumn className="w-full space-y-2 justify-center gap-4 ">
          <span className="text-6xl font-normal leading-15 tracking-[-0.9px] text-new-black-400">
            Align your passion with your profession.
          </span>

          <span className="text-lg font-light leading-7.5 text-new-black-300 w-lg">
            Aliquam vitae turpis in diam convallis finibus in at risus. Nullam
            in scelerisque leo, eget sollicitudin velit bestibulum.
          </span>

          <FlexRow className="gap-2">
            <div className="relative w-3/4">
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
            <Button className="rounded-xs bg-gradient-primary h-12 text-lg font-light">
              Find Job
            </Button>
          </FlexRow>
        </FlexColumn>

        <FlexRow className="justify-end">
          <img src="Illustration.svg" alt="Hero image" />
        </FlexRow>
      </Grid>
      <FlexRow className="items-center justify-between px-40">
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
