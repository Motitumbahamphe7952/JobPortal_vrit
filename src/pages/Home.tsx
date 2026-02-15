import Company from "@/components/section/CompanySection/Company";
import Hero from "@/components/section/HeroSection/Hero";
import Job from "@/components/section/JobSection/Job";
import { Testimonial } from "@/components/section/TestimonialSection/Testimonial";


const Home = () => {
  return (
    <>
      <Hero />
      <Job />
      <Company />
      <Testimonial />
    </>
  );
};

export default Home;
