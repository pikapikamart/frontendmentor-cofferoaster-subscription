import { StyledHero } from "./hero.styled";
import { Heading1 } from "@/styled/shared/headings.styled";
import { StyledHeroText } from "@/styled/shared/hero.styled";
import CreatePlan from "@/components/shared/createPlan";


const Hero = () =>{

  return (
    <StyledHero>
      <Heading1>Great Coffee made simple.</Heading1>
      <StyledHeroText>
        Start your mornings with the world’s best coffees. 
        Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule.
      </StyledHeroText>
      <CreatePlan />
    </StyledHero>
  );
}

export default Hero;