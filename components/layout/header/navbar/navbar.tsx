import React, { useEffect } from "react";
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

  return (
    <div onKeyDown={registerTrap}>
      <StyledHamburger 
        aria-expanded={isExpanded}
        onClick={handleExpansion}
        aria-controls="navMenu"
        ref={firstControl}>
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

export default Navbar;