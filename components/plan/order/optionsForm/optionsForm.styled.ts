import styled from "styled-components";
import { rem, fluid, breakpoint } from "@/styled/functions";
import { 
  Fraunces, 
  FlexWrapCenter } from "@/styled/shared/extensions";


export const StyledOptionsForm = styled.form`
  
  ${breakpoint("desktop", `
    max-width: ${rem(730)};
  `)}
`

export const StyledOptionList = styled.ol`
  ${FlexWrapCenter}

   & li {
     flex-basis: 100%;
   }
`