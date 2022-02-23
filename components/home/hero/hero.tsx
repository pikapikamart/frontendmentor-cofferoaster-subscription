import { 
  StyledHero,
  HiddenContainer } from "./hero.styled";
import { 
  HeroHeading,
  HeroText } from "@/styled/shared/text.styled";
import { CreatePlan } from "@/components/shared/createPlan";
import { 
  dummyVariant,
  swipeUpVariant,
  showUpVariant } from "@/motion";
import { motion } from "framer-motion";


const Hero = () =>{

  return (
    <StyledHero 
      variants={dummyVariant} 
      initial="initial" 
      animate="visible" 
      exit="hidden">
      <HiddenContainer>
        <HeroHeading variants={swipeUpVariant}>Great Coffee made simple.</HeroHeading>
      </HiddenContainer>
      <HeroText variants={showUpVariant}>
        Start your mornings with the world’s best coffees. 
        Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule.
      </HeroText>
      <motion.div variants={showUpVariant}>
        <CreatePlan />
      </motion.div>
    </StyledHero>
  );
}

export default Hero;