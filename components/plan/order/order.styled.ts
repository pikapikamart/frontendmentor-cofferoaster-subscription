import styled from "styled-components";
import { 
  rem, 
  fluid, 
  breakpoint } from "@/styled/functions";


export const StyledOrderPlanning = styled.div`
  margin-bottom: ${fluid(120, 20, 168)};

  ${breakpoint("desktop", `
    align-items: flex-start;
    display: flex;
    justify-content: space-between;
    margin: 0 auto ${rem(168)};
    max-width: ${rem(1110)}; 
  `)}
`