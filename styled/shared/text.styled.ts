import styled from "styled-components";
import { fluid } from "../functions";


export const WhiteText = styled.p`
  color: ${({ theme }) => theme.colors.lightCream};
  font-size: ${fluid(15, 1.3, 16)};
`

export const DarkText = styled.p`
  color: ${({ theme }) => theme.colors.darkGreyBlue};
  font-size: ${fluid(15, 1.3, 16)};
`

export const HeroHeading = styled.h1`
  line-height: 1;
  max-width: 11ch;

  ${({ theme }) => `
  font-size: ${fluid(theme.fontSizes.hSizeThree, 6.4, theme.fontSizes.hSizeTwo)};
  `}
`

export const HeroText = styled.p`
  font-weight: 400;
  font-size: ${fluid(15, 1.3, 16)};
  max-width: 45ch;
  opacity: .8;
`