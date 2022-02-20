import styled from "styled-components";
import { rem, fluid, breakpoint } from "@/styled/functions";
import { FlexColumnCenter } from "@/styled/shared/extensions";


export const StyledFooter = styled.footer`
  ${FlexColumnCenter}

  padding: ${rem(54)} 0;  

  ${({ theme }) =>`
    background-color: ${theme.colors.darkBlue};
    color: ${theme.colors.grey};
    font-size: ${rem(theme.fontSizes.navSizeOne)};
    font-weight: 700;
  `}

  ${breakpoint("desktop", `
    flex-direction: row;
    padding: ${rem(47)} ${rem(85)};
  `)}
`

export const StyledFooterLogo = styled.img`
  width: ${fluid(217.85, 18, 236)};
`

export const StyledNavList = styled.ul`
  ${FlexColumnCenter}

  gap: ${rem(24)} 0;
  margin: ${rem(48.5)} 0;
  text-align: center;
  text-transform: uppercase;

  ${breakpoint("tablet", `
    flex-direction: row;
    gap: 0 ${rem(32)};
  `)}

  ${breakpoint("desktop", `
    margin: 0 0 0 ${fluid(32, 6.6, 102)};
  `)}
`

export const StyledSocialMedias = styled.ul`
  display: flex;
  gap: 0 ${rem(24)};

  ${breakpoint("desktop", `
    margin-left: auto;
  `)}

  a {
    display: block;
  }
`