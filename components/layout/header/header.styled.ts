import styled from "styled-components";
import { rem, fluid } from "@/styled/functions";


export const StyledHeader = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: ${fluid(32, 5.2, 43.56)} 0 ${fluid(40, 6, 43)};
`

export const StyledHeaderLogo = styled.img`
  max-height: ${rem(26)};
  position: relative;
  width: ${fluid(163, 32, 236)};
  z-index: 10;
`