import styled from "styled-components";
import { rem, fluid, breakpoint } from "@/styled/functions";
import { FlexColumnCenter } from "@/styled/shared/extensions";


export const StyledFooter = styled.footer`
  ${FlexColumnCenter}

  gap: ${rem(48.5)} 0;
  padding: ${rem(54)} 0;  

  ${({ theme }) =>`
    background-color: ${theme.colors.darkBlue};
    color: ${theme.colors.grey};
    font-size: ${rem(theme.fontSizes.navSizeOne)};
    font-weight: 700;
  `}

  ${breakpoint("desktop", `
    flex-direction: row;
    gap: 0 ${rem(102)};
    padding: ${rem(47)} ${rem(85)};
  `)}
`

export const StyledFooterLogo = styled.img`
  width: ${fluid(217.85, 18, 236)};
`

export const StyledNavList = styled.ul`
  ${FlexColumnCenter}

  gap: ${rem(24)} 0;
  text-align: center;
  text-transform: uppercase;

  ${breakpoint("tablet", `
    flex-direction: row;
    gap: 0 ${rem(32)};
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