import styled from "styled-components";
import { rem, fluid, breakpoint } from "@/styled/functions";
import { 
  FlexCenter, 
  FlexColumnCenter } from "@/styled/shared/extensions";
import { DarkText } from "@/styled/shared/text.styled";


export const StyledCoffeeList = styled.ul`
  ${FlexCenter}
  align-items: flex-start;
  color: ${({ theme }) => theme.colors.darkGreyBlue};
  flex-wrap: wrap;

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

export const StyledCoffeeContainer = styled.li`
  ${FlexColumnCenter}
  gap: ${rem(24)};

  &:not(:last-of-type) {
    margin-bottom: ${rem(48)};
  }

  ${breakpoint("tablet", `
    flex-direction: row;
  `)}

  ${breakpoint("desktop", `
    flex-direction: column;
    gap: ${rem(71.55)} 0;
    max-width: ${rem(256)};
    
    &:not(:last-of-type) {
      margin-bottom: 0;
    }
  `)}
`

export const StyledCoffeeImage = styled.img`
  height: ${fluid(151, 28, 193)};
  width: ${fluid(200, 36, 256)};
`

export const StyledCoffeeHeading = styled.h3`
  font-weight: 900;
  margin-bottom: ${rem(16)};
  font-size: ${({ theme }) => rem(theme.fontSizes.hSizeFive)};

  ${breakpoint("desktop", `
    margin-bottom: ${rem(24)};
  `)}

`

export const StyledCoffeeText = styled(DarkText)`
  max-width: ${rem(282)};
`