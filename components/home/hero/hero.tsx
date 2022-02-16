import { StyledHero } from "./hero.styled";
import { 
  HeroHeading,
  HeroText } from "@/styled/shared/text.styled";
import { CreatePlan } from "@/components/shared/createPlan";


const Hero = () =>{

  return (
    <StyledHero>
      <HeroHeading>Great Coffee made simple.</HeroHeading>
      <HeroText>
        Start your mornings with the world’s best coffees. 
        Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule.
      </HeroText>
      <CreatePlan />
    </StyledHero>
  );
}

export default Hero;