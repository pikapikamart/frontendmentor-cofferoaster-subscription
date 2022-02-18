import styled from "styled-components";
import { rem, fluid, breakpoint } from "@/styled/functions";


export const StyledHQ = styled.div`
  margin-bottom: ${fluid(120, 20, 168)};
  text-align: center;

  ${breakpoint("tablet", `
    text-align: left;
  `)}

  ${breakpoint("desktop", `
    margin-left: ${rem(85)};
  `)}
`;

export const StyledHQHeading = styled.h2`
  line-height: 1.3333;
  margin-bottom: ${rem(72)}; 
  
  ${({ theme }) => `
    color: ${theme.colors.grey};
    font-size: ${rem(theme.fontSizes.hSizeFive)};
  `}
`