import styled from "styled-components";
import { 
  rem,
  fluid, 
  breakpoint } from "@/styled/functions";
import { HeroContainer } from "@/styled/shared/motions";
import { 
  Heading2,
  HeroText } from "@/styled/shared/text.styled";
import { motion } from "framer-motion";

export const StyledHeroHeading = styled(motion.h1)`
  line-height: 1.2;
  margin-bottom: ${fluid(24, 3, 32)};

  ${({ theme }) =>`
    font-size: ${fluid(28, 4, theme.fontSizes.hSizeThree)};
  `}
`

export const StyledHero = styled(HeroContainer)`
  background-image: url("/about/mobile/image-hero-whitecup.jpg");
  margin-bottom: ${fluid(120, 13, 168)};
  min-height: ${fluid(400, 36, 450)};

  ${breakpoint("tablet", `
    background-image: url("/about/tablet/image-hero-whitecup.jpg");
  `)}

  ${breakpoint("desktop", `
    background-image: url("/about/desktop/image-hero-whitecup.jpg");
  `)}

  & ${StyledHeroHeading} {
    margin: 0; 
  }

  & ${HeroText} {
    margin-top: ${rem(24)};
  }
`