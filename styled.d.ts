import "styled-components";


declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      darkCyan: string,
      darkGreyBlue: string,
      darkBlue: string,
      darkerBlue: string,
      paleOrange: string,
      lightCream: string,
      grey: string
    },
    fontSizes: {
      hSizeOne: number,
      hSizeTwo: number,
      hSizeThree: number,
      hSizeFour: number,
      hSizeFive: number,
      navSizeOne: number
    },
    breakpoints: {
      tablet: number,
      desktop: number
    }
  }
}