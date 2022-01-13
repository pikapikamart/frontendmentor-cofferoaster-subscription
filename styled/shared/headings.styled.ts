import styled, { css } from "styled-components";
import { HeroContainer } from "./hero.styled";
import { rem, fluid } from "@/styled/functions";


export const Heading1 = styled.h1`
  line-height: 1;
  max-width: 11ch;

  ${HeroContainer} & {
    ${({theme}) => `
    font-size: ${fluid(theme.fontSizes.hSizeThree, 6.4, theme.fontSizes.hSizeTwo)};
    `}
  }
`