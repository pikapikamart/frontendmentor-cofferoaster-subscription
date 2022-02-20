import styled from "styled-components";
import { rem, breakpoint } from "@/styled/functions";


export const StyledOrderPlanning = styled.div`
  
  ${breakpoint("desktop", `
    align-items: flex-start;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    max-width: ${rem(1110)}; 
  `)}
`