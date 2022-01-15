import { css } from "styled-components";
import { rem, fluid, breakpoint } from "../functions";


export const Fraunces = css`
  font-family: 'Fraunces', serif;
`;

export const Barlow = css`
  font-family: 'Barlow', sans-serif;
`

export const FlexCenter = css`
  align-items: center;
  display: flex;
  justify-content: center;
`

export const FlexColumnCenter = css`
  align-items: center;
  display: flex;
  flex-direction: column;
`

export const HeroContainer = css`
  ${FlexCenter}
  border-radius: ${rem(10)};
  background-size: 100% 100%;
  background-repeat: no-repeat;
  color: ${props => props.theme.colors.lightCream};
  flex-direction: column;
  gap: ${fluid(24, 2.5, 32)} 0;
  padding: 0 ${rem(24)};
  text-align: center;

  ${breakpoint("tablet", `
    padding: 0 0 0 ${fluid(60, 5, 85)};
  `)}
`