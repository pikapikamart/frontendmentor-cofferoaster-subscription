import { Hero } from "@/components/about/hero";
import { Values } from "@/components/about/values";
import { Headquarters } from "@/components/about/headquarters";
import { withPageTransition } from "@/components/shared/motions";


const AboutUs = () =>{

  return (
    <>
      <Hero />
      <Values />
      <Headquarters />
    </>
  );
}


// export default withPageTransitionAboutUs;
export default AboutUs;