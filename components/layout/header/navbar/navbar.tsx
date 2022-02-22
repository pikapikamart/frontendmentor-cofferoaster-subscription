import React, { 
  useState,
  useEffect,
  memo } from "react";
import { 
  useExpansion,
  useTrapFocus } from "@/lib/hooks";
import { 
  StyledHamburger,
  StyledNavMenu,
  StyledNavList } from "./navbar.styled";
import { SrOnly } from "@/styled/shared/helpers";
import { useRouter } from "next/router";
import { Navlinks } from "@/components/shared/navlinks";


const Navbar = () =>{
  const { isExpanded, handleExpansion } = useExpansion();
  const [ firstControl, lastControl, registerTrap ] = useTrapFocus<HTMLButtonElement, HTMLAnchorElement>();
  const [ windowWidth, setWindowWidth ] = useState(0);
  const currentPath = useRouter().pathname;

  useEffect(() =>{
    if ( isExpanded ) {
      handleExpansion();
    }
  }, [ currentPath ])

  useEffect(() =>{
    if ( isExpanded ) {
      document.body.classList.add("no-scroll");
    }
    else {
      document.body.classList.remove("no-scroll");
    }
  }, [ isExpanded])

  useEffect(() =>{

  },[ windowWidth ])

  useEffect(() =>{
    const handleWidthResize = () =>{
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleWidthResize);
  }, [ ])

  return (
    <div onKeyDown={event => registerTrap(event, 768)}>
      <StyledHamburger 
        aria-expanded={isExpanded}
        onClick={handleExpansion}
        aria-controls="navMenu"
        ref={element => {
          if ( isExpanded ) {
            firstControl.current = element
          }
           else {
             firstControl.current = null;
           }
        }}>
        <SrOnly>
          {`${isExpanded? "close" : "open"} menu navigation`}
        </SrOnly>
      </StyledHamburger>
      <StyledNavMenu
        aria-label="primary"
        id="navMenu">
        <StyledNavList>
          <Navlinks navLabel="header" 
            currentPath={currentPath} 
            lastRef={lastControl}/>
        </StyledNavList>
      </StyledNavMenu>
    </div>
  )
};

export default memo(Navbar);