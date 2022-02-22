import styled from "styled-components";
import { 
  rem, 
  fluid,
  breakpoint } from "@/styled/functions";
import { 
  Fraunces, 
  FlexCenter } from "@/styled/shared/extensions";
import { StyledHero } from "@/components/home/hero/hero.styled";


export const StyledCreatePlan = styled.a`
  ${Fraunces}
  ${FlexCenter}

  border-radius: ${rem(6)};
  font-size: ${rem(18)};
  font-weight: 900;
  height: ${rem(56)};
  line-height: 1.34;
  width: ${rem(218)};

  ${({ theme }) => `
    background-color: ${theme.colors.darkCyan};
    color: ${theme.colors.lightCream};
  `}

  ${StyledHero} & {
    margin-top: ${fluid(16, 2, 24)};
  }

  ${breakpoint("desktop", `
    transition: background-color .3s ease;

    &:hover {
      background-color: #66D2CF;
    }
  `)}
`