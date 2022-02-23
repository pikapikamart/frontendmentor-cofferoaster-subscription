import styled from "styled-components";
import { rem, fluid, breakpoint } from "@/styled/functions";
import { 
  StyledOrderStepList,
  StyledOrderStep } from "@/components/shared/orderSteps/orderSteps.styled";
import { StyledCreatePlan } from "@/components/shared/createPlan/createPlan.styled";


export const StyledWorks = styled.div`
  margin-bottom: ${fluid(120, 15, 200)};
  text-align: center;

  & ${StyledOrderStepList} {
    margin: ${rem(80)} 0;
  }

  & ${StyledOrderStep} {

    &::after {
      background-color: #FFFFFF;
    }
  }

  & ${StyledCreatePlan} {
    margin: 0 auto;
  }

  ${breakpoint("tablet", `
    display: block;
    text-align: left;

    & ${StyledCreatePlan} {
      margin: 0;
    }
    
  `)}

  ${breakpoint("desktop", `
    padding: 0 ${rem(85)};
  `)}
`

export const StyledWorksHeading = styled.h2`
  line-height: 1.33;
  
  ${({ theme }) =>`
    color: ${theme.colors.grey};
    font-size: ${rem(theme.fontSizes.hSizeFive)};
  `}
`