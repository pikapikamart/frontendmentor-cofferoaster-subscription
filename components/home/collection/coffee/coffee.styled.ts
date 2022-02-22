import styled from "styled-components";
import { 
  rem, 
  breakpoint } from "@/styled/functions";
import { 
  FlexWrapCenter, 
  FlexColumnCenter } from "@/styled/shared/extensions";
import { DarkText } from "@/styled/shared/text.styled";


export const StyledCoffeesList = styled.ul`
  ${FlexWrapCenter}

  align-items: flex-start;
  color: ${({ theme }) => theme.colors.darkGreyBlue};

  ${breakpoint("tablet", `
    gap: 0 ${rem(36)};
    text-align: left;
    transform: translateY(-${rem(40)});
  `)}

  ${breakpoint("desktop", `
    gap: 0 ${rem(29)};
    text-align: center;
    transform: translateY(-${rem(54)});
  `)}
`

export const StyledCoffee = styled.li`
  ${FlexColumnCenter}

  &:not(:last-of-type) {
    margin-bottom: ${rem(48)};
  }

  ${breakpoint("tablet", `
    flex-direction: row;
  `)}

  ${breakpoint("desktop", `
    flex-direction: column;
    max-width: ${rem(256)};
    
    &:not(:last-of-type) {
      margin-bottom: 0;
    }
  `)}
`

export const StyledCoffeeImage = styled.img`
  margin-bottom: ${rem(24)};

  ${breakpoint("tablet", `
    margin-bottom: 0;
  `)}

  ${breakpoint("desktop", `
    margin-bottom: ${rem(71.55)};
  `)}
`

export const StyledCoffeeHeading = styled.h3`
  margin-bottom: ${rem(16)};
  font-size: ${({ theme }) => rem(theme.fontSizes.hSizeFive)};

  ${breakpoint("desktop", `
    line-height: 1.333;
    margin-bottom: ${rem(24)};
  `)}

`

export const StyledCoffeeText = styled(DarkText)`
  max-width: ${rem(282)};
`