import { 
  StyledHero,
  StyledHeroHeading } from "./hero.styled";
import { Heading2 } from "@/styled/shared/text.styled";
import { HeroText } from "@/styled/shared/text.styled";
import { HiddenContainer } from "@/components/home/hero/hero.styled";
import {
  customSwipeUpVariant,
  showUpVariant } from "@/motion";


const Hero = () =>{

  return (
    <StyledHero
      initial="initial" 
      animate="visible" 
      exit="hidden">
      <HiddenContainer>
        <StyledHeroHeading variants={customSwipeUpVariant("100%", .5)}>About Us</StyledHeroHeading>
      </HiddenContainer>
      <HeroText variants={showUpVariant}>Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment.</HeroText>
    </StyledHero>
  );
}


export default Hero;