import styled from "styled-components";
import { rem, fluid, breakpoint } from "@/styled/functions";
import { 
  Fraunces,
  FlexWrapCenter } from "@/styled/shared/extensions";


export const StyledOptionButton = styled.button`
  ${Fraunces}

  line-height: 1.2;
  margin-bottom: ${fluid(30, 5, 56)};
  font-weight: 900;
  opacity: .5;
  padding-right: ${rem(96)};
  position: relative;
  text-align: left;
  transition: opacity .3s linear;
  width: 100%;

  &::after {
    content: "";
    background: url("/plan/desktop/icon-arrow.svg") no-repeat center center / 100% 100%;
    height: ${rem(12)};
    inset: 50% 0 auto auto;
    position: absolute;
    transform: translateY(-50%);
    transition: transform .3s linear;
    width: ${rem(18)};
  }

  &:focus-within {
    opacity: 1;
  }

  &[aria-expanded=true] {
    opacity: 1;

    &::after {
      transform: rotate(180deg);
    }
  }

  ${({ theme }) =>`
    color: ${theme.colors.grey};
    font-size: ${fluid(theme.fontSizes.hSizeFive, 4, theme.fontSizes.hSizeThree)};
  `}
`

export const StyledOptionField = styled.fieldset`
  ${FlexWrapCenter}

  border: none;
  gap: ${rem(16)};
  margin: 0 0 ${rem(110)};
  padding: 0;

  &:focus-within {
    outline: 3px dashed rgb(104, 190, 205);
    outline-offset: ${rem(3)};
  }

  ${breakpoint("tablet", `
    flex-wrap: nowrap;
    margin-bottom: ${rem(100)};
  `)}
`

export const StyledOptionRadioWrapper = styled.div`
  flex: 1 1 100%;
  max-width: ${rem(328)};
  position: relative;

  ${breakpoint("tablet", `
    min-height: ${rem(250)};
  `)}
`

export const StyledOptionRadio = styled.input`
  height: 100%;
  opacity: 0;
  position: absolute;
  pointer-events: none;
  width: 100%;

  &:checked + label {
    background-color: ${({ theme }) => theme.colors.darkCyan};
    color: #FFFFFF;
  }
`

export const StyledOptionLabel = styled.label`
  background-color: #F4F1EB;
  border-radius: ${rem(8)};
  color: ${({ theme }) => theme.colors.darkGreyBlue};
  display: flex;
  flex-direction: column;
  gap: ${fluid(8, 2, 24)};
  height: 100%;
  line-height: 1.625;
  padding: ${rem(24)};
  transition: background-color .3s linear,
              color .3s linear;

  ${breakpoint("tablet", `
    padding: ${rem(32)} ${rem(28)};
  `)}
`

export const StyledOptionLabelHeading = styled.span`
  ${Fraunces}

  font-weight: 900;
  line-height: 1.3333;

  ${({ theme }) =>`
    font-size: ${rem(theme.fontSizes.hSizeFive)};
  `}
`