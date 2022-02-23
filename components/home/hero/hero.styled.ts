import styled from "styled-components";
import { 
  fluid, 
  breakpoint } from "@/styled/functions";
import { HeroContainer } from "@/styled/shared/motions";
import { motion } from "framer-motion";


export const StyledHero = styled(HeroContainer)`
  background-image: url("/home/mobile/image-hero-coffeepress.jpg");
  margin-bottom: ${fluid(120, 10, 136)};
  min-height: ${fluid(500, 46, 600)};

  ${breakpoint("tablet", `
    background-image: url("/home/tablet/image-hero-coffeepress.jpg");
  `)}

  ${breakpoint("desktop", `
    background-image: url("/home/desktop/image-hero-coffeepress.jpg");
  `)}
`

export const HiddenContainer = styled(motion.div)`
  overflow: hidden;
`