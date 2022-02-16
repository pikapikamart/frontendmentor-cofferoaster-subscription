import styled from "styled-components";
import { rem, fluid, breakpoint } from '@/styled/functions';
import { Fraunces, FlexRowBetween } from "@/styled/shared/extensions";


export const StyledStepsList = styled.ol`

  ${breakpoint("tablet", `
    ${FlexRowBetween}

    gap: 0 ${rem(10)};
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

export const StyledStep = styled.li`


  &:not(:last-of-type) {
    margin-bottom: ${rem(56)};
  }

  ${breakpoint("tablet", `
    flex-basis: 100%;
    max-width: ${rem(285)};
    padding-top: ${fluid(79, 9, 98)};
    position: relative;

    &:not(:last-of-type) {
      margin-bottom: 0;
    }

    &:last-of-type {
      background-color: #FFFFFF;
      z-index: 10;
    }

    &::before {
      content: "";
      background-color: #FFFFFF;
      border-radius: 50%;
      border: 2px solid #0E8784;
      height: ${rem(31)};
      inset: 0 auto auto 0;
      position: absolute;
      width: ${rem(31)};
    }

  `)}
`

export const StyledStepNumber = styled.p`
  ${Fraunces}
  line-height: 1;

  ${({ theme }) => `
    color: ${theme.colors.paleOrange};
    font-size: ${rem(theme.fontSizes.hSizeTwo)};
  `}
`

export const StyledStepHeading = styled.h3`
  font-size: ${fluid(28, 3, 32)};
  line-height: 1.1428;
  margin: ${rem(24)} 0;

  ${({ theme }) =>`
    color: ${theme.colors.darkGreyBlue};
  `}

  ${breakpoint("tablet", `
    line-height: 1.125;
    max-width: 9ch;
  `)}

  ${breakpoint("desktop", `
    margin: ${rem(38)} 0 ${rem(42)};
  `)}
`