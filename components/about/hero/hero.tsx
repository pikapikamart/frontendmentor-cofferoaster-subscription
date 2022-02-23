import { StyledHero } from "./hero.styled";
import { Heading2 } from "@/styled/shared/text.styled";
import { HeroText } from "@/styled/shared/text.styled";
import { HiddenContainer } from "@/components/home/hero/hero.styled";
import { 
  dummyVariant,
  swipeUpVariant,
  showUpVariant } from "@/motion";


const Hero = () =>{

  return (
    <StyledHero 
      variants={dummyVariant} 
      initial="initial" 
      animate="visible" 
      exit="hidden">
      <HiddenContainer>
        <Heading2 variants={swipeUpVariant}>About Us</Heading2>
      </HiddenContainer>
      <HeroText variants={showUpVariant}>Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment.</HeroText>
    </StyledHero>
  );
}


export default Hero;