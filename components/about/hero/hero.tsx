import { StyledHero } from "./hero.styled";
import { Heading2 } from "@/styled/shared/text.styled";
import { HeroText } from "@/styled/shared/text.styled";
import { HiddenContainer } from "@/components/home/hero/hero.styled";
import { 
  dummyVariant,
  customSwipeUpVariant,
  showUpVariant } from "@/motion";


const Hero = () =>{

  return (
    <StyledHero 
      variants={dummyVariant} 
      initial="initial" 
      animate="visible" 
      exit="hidden">
      <HiddenContainer>
        <Heading2 variants={customSwipeUpVariant("100%", .65)}>About Us</Heading2>
      </HiddenContainer>
      <HeroText variants={showUpVariant}>Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment.</HeroText>
    </StyledHero>
  );
}


export default Hero;