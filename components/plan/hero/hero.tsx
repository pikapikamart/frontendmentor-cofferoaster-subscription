import { StyledHero } from "./hero.styled";
import { 
  HeroHeading,
  HeroText } from "@/styled/shared/text.styled";


const Hero = () => {

  return (
    <StyledHero>
      <HeroHeading>Create a plan</HeroHeading>
      <HeroText>Build a subscription plan that best fits your needs. We offer an assortment of the best artisan coffees from around the globe delivered fresh to your door.</HeroText>
    </StyledHero>
  );
}


export default Hero;