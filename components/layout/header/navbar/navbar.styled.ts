import styled from "styled-components";
import { rem, breakpoint } from "@/styled/functions";
import { Fraunces, Barlow, FlexColumnCenter } from "@/styled/shared/extensions";


export const StyledHamburger = styled.button`
  background: url("/shared/mobile/icon-hamburger.svg") no-repeat center center/100%;
  display: block;
  height: ${rem(16)};
  position: relative;
  transition: background .3s ease;
  width: ${rem(16)};
  z-index: 10;

  &[aria-expanded="true"] {
    background-image: url("/shared/mobile/icon-close.svg");
  }

  ${breakpoint("tablet", `
    display: none;
  `)}
`

export const StyledNavMenu = styled.nav`
  background-image: linear-gradient(0deg, rgba(254, 252, 247, .5), rgba(254, 252, 247) 60%);
  inset: 0 0 0 0;
  opacity: 0;
  padding-top: ${rem(130)};
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
    all: revert;
  `)}
`

export const StyledNavList = styled.ul`
  ${Fraunces}
  ${FlexColumnCenter}

  ${({ theme }) => `
    color: ${theme.colors.darkGreyBlue};
    font-weight: 700;
    font-size: ${rem(theme.fontSizes.hSizeFive)};

    & li {

      &:not(:last-of-type) {
        margin-bottom: ${rem(32)}
      }
    }

    ${breakpoint("tablet", `
      color: ${theme.colors.grey};
      flex-direction: row;
      ${Barlow}
      font-size: ${rem(theme.fontSizes.navSizeOne)};
      font-weight: 700;
      gap: 0 ${rem(32)};
      letter-spacing: 1px;
      text-transform: uppercase;

      & li {

        &:not(:last-of-type) {
          margin-bottom: 0;
        }
      }
    `)}
  `}
`