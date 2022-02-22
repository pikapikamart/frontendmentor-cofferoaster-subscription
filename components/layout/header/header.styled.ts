import styled, { keyframes } from "styled-components";
import { 
  rem, 
  fluid } from "@/styled/functions";


const scrollIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`

const scrollOut = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(-100%);
  }
`

export const StyledHeader = styled.header`
  align-items: center;
  background-color: #FFFFFF;
  display: flex;
  justify-content: space-between;
  padding: ${fluid(32, 5.2, 43.56)} ${fluid(24, 5.8, 80)} ${fluid(40, 6, 43)};

  &.scroll-in {
    animation: ${scrollIn} 1s ease forwards;
    box-shadow: 0 0 ${rem(16)} 0 rgba(0, 0, 0, .2);
    position: sticky;
    top: 0;
    width: 100%;
    z-index: 100;
  }

  &.scroll-out {
    animation: ${scrollOut} .45s ease forwards;
  }
`

export const StyledHeaderLogo = styled.img`
  position: relative;
  z-index: 10;
`

