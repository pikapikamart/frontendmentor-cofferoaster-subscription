import styled from "styled-components";
import { rem, fluid, breakpoint } from "@/styled/functions";
import { 
  Fraunces, 
  FlexWrapCenter } from "@/styled/shared/extensions";


export const StyledOptionsForm = styled.form`

  ${breakpoint("desktop", `
    max-width: ${rem(730)};
    margin-bottom: ${rem(88)};
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