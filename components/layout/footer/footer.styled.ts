import styled from "styled-components";
import { rem, fluid } from "@/styled/functions";
import { FlexColumnCenter } from "@/styled/shared/extensions";


export const StyledFooter = styled.footer`
  ${FlexColumnCenter}
  gap: ${rem(48.5)} 0;
  padding: ${fluid(54, 5, 54)} 0;  

  ${({ theme }) =>`
    background-color: ${theme.colors.darkBlue};
    color: ${theme.colors.grey};
    font-size: ${theme.fontSizes.navSizeOne};
  `}
`

export const StyledFooterLogo = styled.img`
  width: ${fluid(217.85, 10, 236)};
`

export const StyledNavList = styled.ul`
  ${FlexColumnCenter}
  gap: ${rem(24)} 0;
  text-align: center;
  text-transform: uppercase;
`