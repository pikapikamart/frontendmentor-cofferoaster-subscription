import styled from "styled-components";
import { 
  rem, 
  fluid,
  breakpoint } from "../functions";
import { FlexCenter } from "./extensions";
import { motion } from "framer-motion";



export const HeroContainer = styled(motion.div)`
  ${FlexCenter}
  
  border-radius: ${rem(10)};
  background-size: 100% 100%;
  background-repeat: no-repeat;
  color: ${({ theme }) => theme.colors.lightCream};
  flex-direction: column;
  padding: 0 ${rem(24)};
  text-align: center;
  transition: background 1s ease;

  ${breakpoint("tablet", `
    align-items: flex-start;  
    padding: 0 0 0 ${fluid(60, 5, 85)};
    text-align: left;
  `)}
`