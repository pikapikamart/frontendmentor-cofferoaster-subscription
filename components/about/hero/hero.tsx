import { StyledHero } from "./hero.styled";
import { Heading2 } from "@/styled/shared/text.styled";
import { HeroText } from "@/styled/shared/text.styled";

const Hero = () =>{

  return (
    <StyledHero>
      <Heading2>About Us</Heading2>
      <HeroText>Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment.</HeroText>
    </StyledHero>
  );
}


export default Hero;