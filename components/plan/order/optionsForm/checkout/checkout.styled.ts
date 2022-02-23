import styled from "styled-components";
import { 
  rem, 
  fluid, 
  breakpoint } from "@/styled/functions";
import { 
  Fraunces,
  FlexRowBetween } from "@/styled/shared/extensions";
import { 
  StyledSummary,
  StyledSummaryInfo } from "../summary/summary.styled";
import { DarkText } from "@/styled/shared/text.styled";
import { StyledCreatePlan } from "@/components/shared/createPlan/createPlan.styled";
import { motion } from "framer-motion";


export const StyledCheckoutContainer = styled(motion.div)`
  background-color: rgba(0, 0, 0, .4);
  inset: 0;
  min-height: 100vh;
  overflow-y: scroll;
  padding: ${rem(20)} ${rem(24)};
  position: fixed;
  width: 100%;
  z-index: 150;

  ${breakpoint("tablet", `
    padding: ${rem(64)};
  `)}
`

export const StyledCheckout = styled(motion.div)`
  background-color: #FFFFFF;
  border-radius: ${rem(8)};
  max-width: ${rem(540)};
  margin: ${rem(16)} auto;
  overflow: hidden;
  outline: none;

  ${StyledSummaryInfo} {
    color: ${({ theme }) => theme.colors.grey};
  }

  ${DarkText} {
    margin-top: ${rem(8)};
  }
  
  & ${StyledCreatePlan} {
    width: 100%;
  }

  ${breakpoint("tablet", `

    ${StyledCreatePlan} {
      max-width: ${rem(217)};

      span {
        display: none;
      }
    }
  `)}
`

export const StyledCheckoutHeading = styled.h3`
  background-color: ${({ theme }) => theme.colors.darkGreyBlue};
  color: #FFFFFF;
  font-size: ${({ theme }) => fluid(28, 4, theme.fontSizes.hSizeThree)};
  line-height: 1.2;
  padding: ${fluid(28, 6.3, 48)} ${fluid(24, 8, 56)};
`

export const StyledCheckoutBlock = styled.div`
  padding: 0 ${fluid(24, 8, 56)} ${fluid(24, 8, 56)};

  & ${StyledSummary} {
    background-color: transparent;
    margin-bottom: 0;
    padding: 0;
  }
`

export const StyledCheckoutPriceContainer = styled.div`
  margin-top: ${fluid(24, 7, 48)};

  ${breakpoint("tablet", `
    ${FlexRowBetween}

    align-items: center;
  `)}
`

export const StyledCheckoutPrice = styled.p`
  display: none;

  ${({ theme }) =>`

    ${breakpoint("tablet", `
      ${Fraunces}

      color: ${theme.colors.darkGreyBlue};
      display: block;
      font-size: ${rem(theme.fontSizes.hSizeFour)};
      line-height: 1.125;
      font-weight: 900;
      margin-right: ${rem(19)};
    `)}
  `}
`

export const StyledCheckoutGoBack = styled.button`
  background-color: ${({ theme }) => theme.colors.darkGreyBlue};
  border-radius: ${rem(8)};
  color: #FFFFFF;
  font-weight: 900;
  margin-top: ${rem(20)};
  padding: ${rem(10)} ${rem(14)};

  ${breakpoint("desktop", `
    transition: background-color .3s ease;

    &:hover {
      background-color: #2C343E;
    }
  `)}
`