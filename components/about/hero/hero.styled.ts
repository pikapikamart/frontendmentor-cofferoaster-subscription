import styled from "styled-components";
import { 
  rem,
  fluid, 
  breakpoint } from "@/styled/functions";
import { HeroContainer } from "@/styled/shared/motions";
import { 
  Heading2,
  HeroText } from "@/styled/shared/text.styled";


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

  & ${Heading2} {
    margin: 0; 
  }

  & ${HeroText} {
    margin-top: ${rem(24)};
  }
`
