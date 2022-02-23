import styled from "styled-components";
import { 
  rem, 
  breakpoint } from "@/styled/functions";
import { motion } from "framer-motion";


export const StyledLocationList = styled(motion.ul)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${rem(80)} ${rem(10)};

  ${breakpoint("tablet", `
    flex-wrap: nowrap;
  `)}

  ${breakpoint("desktop", `
    justify-content: space-between;
  `)}
`

export const StyledLocation = styled(motion.li)`
  color: ${({ theme }) => theme.colors.darkGreyBlue};
  flex-basis: 100%;
  max-width: ${rem(285)};
`

export const StyledLocationMap = styled(motion.img)`
  margin: 0 auto;

  ${breakpoint("tablet", `
    margin: 0;
  `)}
`

export const StyledLocationHeading = styled.h3`
  line-height: 1.125;
  margin: ${rem(48)} 0 ${rem(22)};

  ${({ theme }) =>`
    font-size: ${rem(28)};

    ${breakpoint("tablet", `
      font-size: ${rem(theme.fontSizes.hSizeFive)};
    `)}

    ${breakpoint("desktop", `
      font-size: ${rem(theme.fontSizes.hSizeFour)};
    `)}
  `}
`