import { StyledHero } from "./hero.styled";
import { 
  HeroHeading,
  HeroText } from "@/styled/shared/text.styled";
import { HiddenContainer } from "@/components/home/hero/hero.styled";
import { 
  dummyVariant,
  swipeUpVariant,
  showUpVariant } from "@/motion";


const Hero = () => {

  return (
    <StyledHero 
      variants={dummyVariant} 
      initial="initial" 
      animate="visible" 
      exit="hidden">
      <HiddenContainer>
        <HeroHeading variants={swipeUpVariant}>Create a plan</HeroHeading>
      </HiddenContainer>
      <HeroText variants={showUpVariant}>Build a subscription plan that best fits your needs. We offer an assortment of the best artisan coffees from around the globe delivered fresh to your door.</HeroText>
    </StyledHero>
  );
}


export default Hero;