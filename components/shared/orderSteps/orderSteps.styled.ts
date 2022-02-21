import styled from "styled-components";
import { rem, fluid, breakpoint } from '@/styled/functions';
import { Fraunces, FlexRowBetween } from "@/styled/shared/extensions";


export const StyledOrderStepList = styled.ol`

  ${breakpoint("tablet", `
    ${FlexRowBetween}

    margin: ${fluid(40, 6, 80)} 0 ${fluid(44, 7, 64)};
    position: relative;

    &::before {
      content: "";
      background-color: #FDD6BA;
      height: ${rem(2)};
      inset: ${rem(15)} auto auto 0;
      position: absolute;
      width: 100%;
    }
  `)}
`

interface OrderStep {
  bgColor: "light" | "dark"
}

export const StyledOrderStep = styled.li<OrderStep>`

  &:not(:last-of-type) {
    margin-bottom: ${rem(56)};
  }
  
  ${({ theme, bgColor }) =>`
    ${breakpoint("tablet", `
      flex-basis: 100%;
      max-width: ${rem(285)};
      padding-top: ${fluid(79, 9, 98)};
      position: relative;

      &:not(:last-of-type) {
        margin-bottom: 0;
      }

      &:first-of-type {
          background-image: ${bgColor==="dark"? `linear-gradient(90deg, ${theme.colors.darkBlue} 0%, ${theme.colors.darkBlue} 15px, transparent 15px, transparent 100%)` : "none"};
      }

      &:nth-of-type(2) {
        margin: 0 ${rem(10)};
      }

      &:last-of-type {
        background-color: ${bgColor==="light"? "#FFFFFF" : "transparent"};
        z-index: 10;

        background-image: ${bgColor==="dark"? `linear-gradient(90deg, transparent 0%, transparent 15px, ${theme.colors.darkBlue} 15px, ${theme.colors.darkBlue} 100%)` : "none"};
      }

      &::before {
        content: "";
        background-color: ${bgColor==="light"? "#FFFFFF" : "transparent"};
        border-radius: 50%;
        border: 2px solid #0E8784;
        height: ${rem(31)};
        inset: 0 auto auto 0;
        position: absolute;
        width: ${rem(31)};
      }
    `)}
  `}
`

export const StyledOrderStepNumber = styled.p`
  ${Fraunces}
  
  line-height: 1;

  ${({ theme }) => `
    color: ${theme.colors.paleOrange};
    font-size: ${rem(theme.fontSizes.hSizeTwo)};
  `}
`

interface OderStepHeading {
  textColor: "light" | "dark"
}

export const StyledOrderStepHeading = styled.h3<OderStepHeading>`
  font-size: ${fluid(28, 3, 32)};
  line-height: 1.1428;
  margin: ${rem(24)} 0;

  ${({ theme, textColor }) =>`
    color: ${textColor==="light"? "#FFFFFF" : theme.colors.darkGreyBlue};
  `}

  ${breakpoint("tablet", `
    line-height: 1.125;
    max-width: 9ch;
  `)}

  ${breakpoint("desktop", `
    margin: ${rem(38)} 0 ${rem(42)};
  `)}
`