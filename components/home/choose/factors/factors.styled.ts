import styled from "styled-components";
import { rem, fluid, breakpoint } from "@/styled/functions";
import { 
  FlexColumnCenter } from "@/styled/shared/extensions";


export const StyledFactorsList = styled.ul`
  color: ${({ theme }) => theme.colors.lightCream};
  margin-top: ${fluid(64, 9, 86)};

  ${breakpoint("tablet", `
    text-align: left;
  `)}

  ${breakpoint("desktop", `
    display: flex;
    justify-content: center;
    text-align: center;
  `)}
`

export const StyledFactor = styled.li`
  ${FlexColumnCenter}

  background-color: ${({ theme }) => theme.colors.darkCyan};
  border-radius: ${rem(8)};
  min-height: ${rem(382)};
  max-width: ${rem(388)};
  margin: 0 auto;
  padding: ${rem(72)} ${rem(12)} 0;

  &:not(:last-of-type) {
    margin-bottom: ${rem(24)};
  }

  &:last-of-type img {
    height: ${rem(50)};
  }

  ${breakpoint("tablet", `
    align-items: center;
    flex-direction: row;
    max-width: ${rem(573)};
    min-height: ${rem(180)};
    padding: 0 ${rem(48)} 0 ${rem(70)};
  `)}

  ${breakpoint("desktop", `
    flex-direction: column;
    margin: 0;
    max-width: ${rem(350)};
    min-height: ${rem(382)};
    padding: ${rem(72)} ${rem(48)} 0;

    &:not(:last-of-type) {
      margin-bottom: 0;
    }

    &:nth-of-type(2) {
      margin: 0 ${rem(30)};
    }

    &:last-of-type{
      padding-top: ${rem(83)};

      img {
        margin-bottom: ${rem(67)};
      }
    }
  `)}
`

export const StyledFactorImage = styled.img`
  height: ${rem(72)};
  margin: 0 0 ${rem(56)};
  width: ${rem(72)};

  ${breakpoint("tablet", `
    height: ${rem(56)};
    margin: 0 ${rem(50)} 0 0;
    width: ${rem(56)};
  `)}

  ${breakpoint("desktop", `
    height: ${rem(72)};
    margin: 0 0 ${rem(56)};
    width: ${rem(72)};
  `)}
`

export const StyledFactorHeading = styled.h3`
  font-size: ${({ theme }) => rem(theme.fontSizes.hSizeFive)};
  line-height: 1.33;
  margin-bottom: ${rem(24)};

  ${breakpoint("tablet", `
    margin-bottom: ${rem(16)};
  `)}

  ${breakpoint("desktop", `
    margin-bottom: ${rem(24)};
  `)}
`