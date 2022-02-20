import styled from "styled-components";
import { rem, fluid, breakpoint } from "@/styled/functions";
import { StyledOrderStepList } from "@/components/shared/orderSteps/orderSteps.styled";


export const StyledSteps = styled.div`
  margin-bottom: ${fluid(120, 13, 168)};
  padding: ${rem(80 )} 0;
  position: relative;
  text-align: center;

  &::before {
    content: "";
    border-radius: ${rem(8)};
    background-color: ${({ theme }) => theme.colors.darkBlue};
    inset: 0 calc(${fluid(24, 5.8, 80)} * -1);
    position: absolute;
  }

  & ${StyledOrderStepList} {
    position: relative;
    z-index: 5;
  }

  ${breakpoint("tablet", `
    text-align: left;
  `)}

  ${({ theme }) =>`
    ${breakpoint("desktop", `
      background-color: ${theme.colors.darkBlue};
      border-radius: ${rem(8)};
      padding: ${rem(100)} ${rem(85)};
      
      &::before {
        display: none;
      }

      & ${StyledOrderStepList} {
        margin: 0;
      }
    `)}
  `}
`
