import styled from "styled-components";
import { rem, fluid, breakpoint } from "@/styled/functions";
import { FlexColumnCenter } from "@/styled/shared/extensions";


export const StyledWorks = styled.div`
  ${FlexColumnCenter}
  
  gap: ${rem(80)} 0;
  margin-bottom: ${fluid(120, 15, 200)};
  text-align: center;

  ${breakpoint("tablet", `
    display: block;
    text-align: left;
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