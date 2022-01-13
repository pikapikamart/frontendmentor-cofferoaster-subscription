import styled, { css } from "styled-components";
import { rem, fluid } from "@/styled/functions";
import { FlexCenter } from "./extensions";


export const HeroContainer = styled.div`
  ${FlexCenter}
  border-radius: ${rem(10)};
  background-size: 100% 100%;
  background-repeat: no-repeat;
  color: ${props => props.theme.colors.lightCream};
  flex-direction: column;
  gap: ${fluid(24, 2.5, 32)} 0;
  padding: 0 ${rem(24)};
  text-align: center;

  @media (min-width: ${props => rem(props.theme.breakpoints.tablet)}) {
    padding: 0 0 0 ${fluid(60, 5, 85)};
  }
`

export const StyledHeroText = styled.p`
  font-size: ${fluid(15, 1.3, 16)};
  max-width: 45ch;
  opacity: .8;
`