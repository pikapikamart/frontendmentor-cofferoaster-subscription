import styled from "styled-components";
import { rem, fluid, breakpoint } from "@/styled/functions";
import { FlexCenter } from "@/styled/shared/extensions";


export const StyledCoffeeList = styled.ul`
  color: ${({ theme }) => theme.colors.darkGreyBlue};

  ${breakpoint("tablet", `
    gap: 0 ${rem(36)};
    text-align: left;
    transform: translateY(-${rem(40)});
  `)}

  ${breakpoint("desktop", `
    ${FlexCenter}
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 0 ${rem(29)};
    text-align: center;
    transform: translateY(-${rem(54)});
  `)}
`

export const StyledCoffeeContainer = styled.li`
  ${FlexCenter}
  flex-direction: column;
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
  margin-bottom: ${rem(16)};

  ${({ theme }) => `
    color: ${theme.colors.darkGreyBlue};
    font-size: ${rem(theme.fontSizes.hSizeFive)};
  `}

  ${breakpoint("desktop", `
    margin-bottom: ${rem(24)};
  `)}

`

export const StyledCoffeeText = styled.p`
  max-width: ${rem(282)};
`