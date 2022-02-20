import styled, { css } from "styled-components";
import { rem } from "@/styled/functions";
import { Fraunces } from "@/styled/shared/extensions";


export const StyledJumplinks = styled.ol`
  flex: 1 0 100%;
  max-width: ${rem(255)};
  margin-right: ${rem(32)};
  position: sticky;
  top: ${rem(112)};
`

interface JumpLink {
  focus?: boolean
}

export const StyledJumplink = styled.li<JumpLink>`
  ${Fraunces}

  font-weight: 900;
  line-height: 1.3333;
  opacity: .4;
  padding-bottom: ${rem(24)};
  transition: opacity .3s linear;

  &:not(:last-of-type) {
    border-bottom: 1px solid rgba(151, 151, 151, .25);
  }

  &:focus-within {
    opacity: 1;
  }

  ${({ focus }) =>{
    switch (focus) {
      case true:
        return css`
          opacity: 1;
        `
    }
  }}

  ${({ theme }) =>`
    color: ${theme.colors.grey};
    font-size: ${rem(theme.fontSizes.hSizeFive)};

    &:first-of-type {
      color: ${theme.colors.darkCyan};
    }
  `}
` 

export const SyledJumpLinkText = styled.a`
  color: ${({ theme }) => theme.colors.darkGreyBlue};
  margin-left: ${rem(28)};

  &[data-focus="true"] {

  }
`