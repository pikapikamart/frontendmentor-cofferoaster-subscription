import "styled-components";


declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      darkCyan: string,
      darkGreyBlue: string,
      paleOrange: string,
      lightCream: string,
      grey: String
    },
    fontSizes: {
      hSizeOne: string,
      hSizeTwo: string,
      hSizeThree: string,
      hSizeFour: string,
      hSizeFive: string,
      navSizeOne: string
    }
  }
}