import Company from "../components/CompanySection/Company";
import Hero from "../components/HeroSection/Hero";
import Job from "../components/JobSection/Job";
import { Testimonial } from "../components/TestimonialSection/Testimonial";

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
