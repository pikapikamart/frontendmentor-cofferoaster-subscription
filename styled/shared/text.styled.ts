import styled from "styled-components";
import { fluid } from "../functions";


export const WhiteText = styled.p`
  color: ${({ theme }) => theme.colors.lightCream};
  font-size: ${fluid(15, 1.3, 16)};
`

export const DarkText = styled.p`
  color: ${({ theme }) => theme.colors.darkGreyBlue};
  font-size: ${fluid(15, 1.3, 16)};
`