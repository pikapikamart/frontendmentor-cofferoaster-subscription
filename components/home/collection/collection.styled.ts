import styled from "styled-components";
import { rem, fluid, breakpoint } from "@/styled/functions";


export const StyledCollection = styled.div`
  margin-bottom: ${fluid(120, 15, 200)};
  text-align: center;
`

export const StyledCollectionHeading = styled.h2`
  line-height: 1.82;
  letter-spacing: .37px;
  margin-bottom: ${rem(13)};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  ${({ theme }) => `
    background-image: linear-gradient(0deg, #FFFFFF, ${theme.colors.grey});
    color: ${theme.colors.grey};
    font-size: ${fluid(theme.fontSizes.hSizeThree, 11, theme.fontSizes.hSizeOne)};
  `};

  ${breakpoint("tablet", `
  background-image: linear-gradient(0deg, #f5f5f5, #d4d4d4);
  line-height: .75;
  margin-bottom: 0;
  `)}

  ${breakpoint("desktop", `
    padding-top: ${rem(13.5)};
  `)}
`
