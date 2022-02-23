import styled from "styled-components";
import { fluid } from "../functions";
import { motion } from "framer-motion";


export const WhiteText = styled(motion.p)`
  color: ${({ theme }) => theme.colors.lightCream};
  font-size: ${fluid(15, 1.3, 16)};
`

export const DarkText = styled(motion.p)`
  color: ${({ theme }) => theme.colors.darkGreyBlue};
  font-size: ${fluid(15, 1.3, 16)};
`

export const HeroHeading = styled(motion.h1)`
  line-height: 1;
  max-width: 11ch;

  ${({ theme }) => `
    font-size: ${fluid(theme.fontSizes.hSizeThree, 6.4, theme.fontSizes.hSizeTwo)};
  `}
`

export const HeroText = styled(motion.p)`
  font-weight: 400;
  font-size: ${fluid(15, 1.3, 16)};
  max-width: 47ch;
  margin: ${fluid(24, 2.5, 32)} 0 ;
  opacity: .8;
`

export const Heading2 = styled(motion.h2)`
  line-height: 1.2;
  margin-bottom: ${fluid(24, 3, 32)};

  ${({ theme }) =>`
    font-size: ${fluid(28, 4, theme.fontSizes.hSizeThree)};
  `}
`

