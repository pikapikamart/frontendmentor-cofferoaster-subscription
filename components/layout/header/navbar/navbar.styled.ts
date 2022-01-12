import styled from "styled-components";
import { rem } from "@/styled/functions";


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

  @media (min-width: ${props => rem(props.theme.breakpoints.tablet)}) {
    display: none;
  }
`

export const StyledNavMenu = styled.nav`
  inset: ${rem(90)} 0 0 0;
  opacity: 0;
  padding-top: ${rem(40)};
  position: fixed;
  transition: opacity .3s ease,
            visibility .3s ease;
  visibility: hidden;

  ${StyledHamburger}[aria-expanded="true"] + && {
    opacity: 1;
    visibility: visible;
  }

  @media (min-width: ${props => rem(props.theme.breakpoints.tablet)}) {
    opacity: 1;
    padding-top: 0;
    position: static;
    visibility: visible;
  }
`

export const StyledNavList = styled.ul`
  align-items: center;
  color: ${props => props.theme.colors.darkGreyBlue};
  display: flex;
  flex-direction: column;
  font-family: 'Fraunces', serif;
  font-weight: 700;
  font-size: ${props => rem(props.theme.fontSizes.hSizeFive)};
  gap: ${rem(32)};

  @media (min-width: ${props => rem(props.theme.breakpoints.tablet)}) {
    color: ${props => props.theme.colors.grey};
    flex-direction: row;
    font-family: 'Barlow', sans-serif;
    font-size: ${props => rem(props.theme.fontSizes.navSizeOne)};
    font-weight: 700;
    gap: 0 ${rem(32)};
    letter-spacing: 1px;
    text-transform: uppercase;
  }
`