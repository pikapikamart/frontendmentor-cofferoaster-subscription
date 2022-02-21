import styled from "styled-components";
import { rem, fluid, breakpoint } from "@/styled/functions";
import { Fraunces } from "@/styled/shared/extensions";


export const StyledSummary = styled.div`
  background-color: ${({ theme }) => theme.colors.darkBlue};
  border-radius: ${rem(10)};
  margin-bottom: ${rem(56)};
  padding: ${rem(32)} ${rem(24)};

  ${breakpoint("tablet", `
    margin-bottom: ${rem(40)};
    padding: ${rem(28)} ${fluid(44, 7, 64)};
  `)}
`

export const StyledSummaryHeading = styled.p`
  color: rgba(255, 255, 255, .5);
  line-height: 1.625;
  margin-bottom: ${rem(8)};
  text-transform: uppercase;
`

export const StyledSummaryInfo = styled.p`
  ${Fraunces}

  color: #FFFFFF;
  font-weight: 900;
  font-size: ${({ theme }) => rem(theme.fontSizes.hSizeFive)};
  line-height: 1.6666;
`

export const StyledSummaryChoices = styled.span`
  color: ${({ theme }) => theme.colors.darkCyan};
`