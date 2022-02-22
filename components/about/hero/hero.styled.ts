import styled from "styled-components";
import { 
  fluid, 
  breakpoint } from "@/styled/functions";
import { HeroContainer } from "@/styled/shared/extensions";
import { Heading2 } from "@/styled/shared/text.styled";


export const StyledHero = styled.div`
  ${HeroContainer}

  background-image: url("/about/mobile/image-hero-whitecup.jpg");
  margin-bottom: ${fluid(120, 13, 168)};
  min-height: ${fluid(400, 36, 450)};

  ${breakpoint("tablet", `
    background-image: url("/about/tablet/image-hero-whitecup.jpg");
  `)}

  ${breakpoint("desktop", `
    background-image: url("/about/desktop/image-hero-whitecup.jpg");
  `)}

  & > ${Heading2} {
    margin-bottom: 0; 
  }
`
