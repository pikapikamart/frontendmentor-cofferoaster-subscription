import styled from "styled-components";
import { rem, fluid, breakpoint } from "@/styled/functions";
import { FlexRowBetween } from "@/styled/shared/extensions";
import { WhiteText } from "@/styled/shared/text.styled";


export const StyledCommitment = styled.div`
  color: ${({ theme }) => theme.colors.darkGreyBlue};
  margin: 0 auto ${rem(198)};
  max-width: ${rem(450)};
  text-align: center;

  ${breakpoint("tablet", `
    ${FlexRowBetween}

    gap: 0 ${fluid(30, 9.5, 125)};
    max-width: ${rem(750)};
    margin-bottom: ${rem(304)};
    text-align: left;
  `)}

  ${breakpoint("desktop", `
    align-items: center;
    max-width: ${rem(1110)};
    margin-bottom: ${rem(256)};
  `)}
`

export const StyledCommitmentPicture = styled.picture`
  & img {
    border-radius: ${rem(8)};
    margin-bottom: ${rem(48)}; 
  }

  ${breakpoint("tablet", `
    flex: 1 0 ${rem(281)};
    transform: translateY(${rem(-8)});

    & img {
      margin-bottom: 0;
    }
  `)}

  ${breakpoint("desktop", `
    flex-basis: ${rem(445)};
    transform: translateY(0);
  `)}
`

export const StyledQuality = styled.div`
  background-color: ${({ theme }) => theme.colors.darkBlue};
  border-radius: ${rem(8)};
  color: ${({ theme }) => theme.colors.lightCream};
  margin-bottom: ${fluid(120, 20, 168)};
  padding: 0 ${fluid(24, 8, 74)} ${fluid(61, 6, 67)};
  text-align: center;

  ${breakpoint("desktop", `
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    padding: 0 ${rem(85)} 0;
    text-align: left;
  `)}
`

export const StyledQualityImage = styled.img`
  border-radius: ${rem(8)};
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);

  ${breakpoint("desktop", `
    position: static;
    transform: translateY(${rem(-88)});
  `)}
`

export const StyledQualityText = styled.div`
  padding-top: ${fluid(142, 30, 224)}  ;

  & ${WhiteText} {
    opacity: .8;
  }

  ${breakpoint("desktop", `
    max-width: ${rem(540)};
    padding-top: ${rem(88)};
  `)}
`
