import styled from "styled-components";
import { rem, fluid } from "@/styled/functions";
import { Fraunces, FlexCenter } from "../../styled/shared/extensions"; 
import { StyledHomeHero } from "../home/hero/hero.styled";


export const StyledCreatePlan = styled.a`
  ${Fraunces}
  ${FlexCenter}
  ${({ theme }) => `
    background-color: ${theme.colors.darkCyan};
    color: ${theme.colors.lightCream};
  `}
  border-radius: ${rem(6)};
  font-size: ${rem(18)};
  height: ${rem(56)};
  line-height: 1.34;
  width: ${rem(218)};

  ${StyledHomeHero} & {
    margin-top: ${fluid(16, 2, 24)};
  }
`