import styled from "styled-components";
import { rem, fluid, breakpoint } from "@/styled/functions";
import { FlexWrapCenter } from "@/styled/shared/extensions";
import { StyledCreatePlan } from "@/components/shared/createPlan/createPlan.styled";


export const StyledOptionsForm = styled.form`

  & ${StyledCreatePlan} {
    margin: 0 auto;
  }

  ${breakpoint("desktop", `
    max-width: ${rem(730)};
    margin-bottom: ${rem(88)};

    & ${StyledCreatePlan} {
      margin-left: auto;
    }
  `)}
`

export const StyledOptionList = styled.ol`
  ${FlexWrapCenter}

  margin-bottom: ${fluid(120, 12, 144)};

  & li {
     flex-basis: 100%;
   }

  ${breakpoint("desktop", `
   margin-bottom: ${rem(88)};
  `)}
`