import styled from "styled-components";
import { rem, fluid, breakpoint } from "@/styled/functions";
import { WhiteText } from "@/styled/shared/text.styled";


export const StyledChoose = styled.div`
  color: ${({ theme }) => theme.colors.lightCream};
  margin-bottom: ${fluid(120, 18.5, 200)};
  padding: ${fluid(64, 8, 100)} ${rem(24)} 0;
  position: relative;
  text-align: center;

  &::before{
    content: "";
    background-color: ${({ theme }) => theme.colors.darkerBlue};
    border-radius: ${rem(10)};
    height: ${rem(900)};
    inset: 0 0 auto 0;
    position: absolute;
    z-index: -1;
  }

  ${breakpoint("tablet", `
    &::before {
      height: ${rem(577)};
    }
  `)}
`

export const StyledChooseIntro = styled(WhiteText)`
  max-width: 58.5ch;
  margin: 0 auto;
  opacity: .8;
`