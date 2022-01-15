import styled from "styled-components";
import { HeroContainer } from "@/styled/shared/extensions";
import { rem, fluid, breakpoint } from "@/styled/functions";
import { WhiteText } from "@/styled/shared/text.styled";


export const StyledHero = styled.div`
  ${HeroContainer}
  background-image: url("/home/mobile/image-hero-coffeepress.jpg");
  margin-bottom: ${fluid(120, 10, 136)};
  min-height: ${fluid(500, 46, 600)};

  ${breakpoint("tablet", `
    align-items: flex-start;
    background-image: url("/home/tablet/image-hero-coffeepress.jpg");
    text-align: left;
  `)}

  ${breakpoint("desktop", `
    background-image: url("/home/desktop/image-hero-coffeepress.jpg");
  `)}
`

