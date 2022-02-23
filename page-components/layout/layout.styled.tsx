import styled from "styled-components";
import { fluid } from "@/styled/functions";


export const MainWrapper = styled.div`
  padding: 0 ${fluid(24, 5.8, 80)} 0;

  // Preload
  &::after {
    height: 0;
    overflow: hidden;
    position: absolute;
    width: 0;
    z-index: -1;
    content: url("/home/mobile/image-hero-coffeepress.jpg")
              url("/home/tablet/image-hero-coffeepress.jpg")
              url("/home/desktop/image-hero-coffeepress.jpg")
              url("/about/mobile/image-hero-whitecup.jpg")
              url("/about/tablet/image-hero-whitecup.jpg")
              url("/about/desktop/image-hero-whitecup.jpg")
              url("/plan/mobile/image-hero-blackcup.jpg")
              url("/plan/tablet/image-hero-blackcup.jpg")
              url("/plan/desktop/image-hero-blackcup.jpg")
  }
`