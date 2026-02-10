import Company from "../CompanySection/Company"
import Hero from "../HeroSection/Hero"
import Job from "../JobSection/Job"
import { Testimonial } from "../TestimonialSection/Testimonial"

const Home = () => {
  return (
    <>
    <Hero />
    <Job />
    <Company />
    <Testimonial/>
    </>
  )
}

export default Home