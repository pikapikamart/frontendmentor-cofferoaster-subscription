import styled from "styled-components";
import { rem, breakpoint } from "@/styled/functions";
import { Fraunces, Barlow, FlexCenter } from "@/styled/shared/extensions";


export const StyledHamburger = styled.button`
  background: no-repeat center center/100%;
  background-image: url("/shared/mobile/icon-hamburger.svg");
  display: block;
  height: ${rem(16)};
  transition: background .3s ease;
  width: ${rem(16)};

  &[aria-expanded="true"] {
    background-image: url("/shared/mobile/icon-close.svg");
  }

  ${breakpoint("tablet", `
    display: none;
  `)}
`

export const StyledNavMenu = styled.nav`
  background-image: linear-gradient(0deg, rgba(254, 252, 247, .5), rgba(254, 252, 247) 60%);
  inset: ${rem(90)} 0 0 0;
  opacity: 0;
  padding-top: ${rem(40)};
  position: fixed;
  transition: opacity .3s ease,
            visibility .3s ease;
  visibility: hidden;
  z-index: 5;

  ${StyledHamburger}[aria-expanded="true"] + && {
    opacity: 1;
    visibility: visible;
  }

  ${breakpoint("tablet", `
    background-image: none;
    opacity: 1;
    padding-top: 0;
    position: static;
    visibility: visible;
  `)}
`

export const StyledNavList = styled.ul`
  ${Fraunces}
  ${FlexCenter}

  color: ${({ theme }) => theme.colors.darkGreyBlue};
  flex-direction: column;
  font-weight: 700;
  font-size: ${({ theme }) => rem(theme.fontSizes.hSizeFive)};
  gap: ${rem(32)};

  ${({ theme }) => `
    ${breakpoint("tablet", `
      color: ${theme.colors.grey};
      flex-direction: row;
      ${Barlow}
      font-size: ${rem(theme.fontSizes.navSizeOne)};
      font-weight: 700;
      gap: 0 ${rem(32)};
      letter-spacing: 1px;
      text-transform: uppercase;
    `)}
  `}
`