import styled from "styled-components";
import { rem, fluid, breakpoint } from "@/styled/functions";
import { 
  FlexCenter,
  FlexColumnCenter } from "@/styled/shared/extensions";


export const StyledFactorsList = styled.ul`
  color: ${({ theme }) => theme.colors.lightCream};
  margin-top: ${fluid(64, 9, 86)};

  ${breakpoint("tablet", `
    text-align: left;
  `)}

  ${breakpoint("desktop", `
    align-items: flex-start;
    display: flex;
    justify-content: center;
    gap: ${rem(30)};
    text-align: center;
  `)}
`

export const StyledFactorContainer = styled.li`
  ${FlexColumnCenter}
  background-color: ${({ theme }) => theme.colors.darkCyan};
  border-radius: ${rem(8)};
  gap: ${rem(56)} 0;
  min-height: ${rem(382)};
  max-width: ${fluid(279, 54, 573)};
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
    gap: 0 ${rem(50)};
    max-width: ${rem(573)};
    min-height: ${rem(180)};
    padding: 0 ${rem(48)} 0 ${rem(70)};
  `)}

  ${breakpoint("desktop", `
    flex-direction: column;
    gap: ${rem(56)} 0;
    margin: 0;
    max-width: ${rem(350)};
    min-height: ${rem(382)};
    padding: ${rem(72)} ${rem(48)} 0;

    &:not(:last-of-type) {
      margin-bottom: 0;
    }

    &:last-of-type{
      padding-top: ${rem(83)};

      img {
        margin-bottom: ${rem(11)};
      }
    }
  `)}
`

export const StyledFactorImage = styled.img`
  height: ${rem(72)};
  width: ${rem(72)};

  ${breakpoint("tablet", `
    height: ${rem(56)};
    width: ${rem(56)};
  `)}

  ${breakpoint("desktop", `
    height: ${rem(72)};
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