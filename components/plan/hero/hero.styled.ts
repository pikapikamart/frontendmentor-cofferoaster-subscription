import styled from "styled-components";
import { fluid, breakpoint } from "@/styled/functions";
import { HeroContainer } from "@/styled/shared/extensions";


export const StyledHero = styled.div`
  ${HeroContainer}

  background-image: url("/plan/mobile/image-hero-blackcup.jpg");
  margin-bottom: ${fluid(120, 13, 168)};
  min-height: ${fluid(400, 36, 450)};

  ${breakpoint("tablet", `
    background-image: url("/plan/tablet/image-hero-blackcup.jpg");
  `)}

  ${breakpoint("desktop", `
    background-image: url("/plan/desktop/image-hero-blackcup.jpg");
  `)}
`