import React, { 
  useRef,
  useEffect } from "react";
import { useExpansion } from "@/lib/hooks";
import { 
  StyledHamburger,
  StyledNavMenu,
  StyledNavList } from "./navbar.styled";
import { SrOnly } from "@/styled/shared/helpers";
import { useRouter } from "next/router";
import { Navlinks } from "@/components/shared/navlinks";


const Navbar = () =>{
  const { isExpanded, handleExpansion } = useExpansion();
  const firstNavControl = useRef<HTMLButtonElement | null>(null);
  const lastNavControl = useRef<HTMLAnchorElement | null>(null);
  const currentPath = useRouter().pathname;

  const handleTrapFocus = ( event: React.KeyboardEvent<HTMLDivElement>) =>{
    if ( !firstNavControl.current || !lastNavControl.current ) {
      return;
    }

    if ( document.activeElement===firstNavControl.current && event.shiftKey && event.key==="Tab") {
      event.preventDefault();
      lastNavControl.current.focus();
    }

    else if ( document.activeElement===lastNavControl.current && !event.shiftKey && event.key==="Tab") {
      event.preventDefault();
      firstNavControl.current.focus();
    }
  }

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
    <div onKeyDown={handleTrapFocus}>
      <StyledHamburger 
        aria-expanded={isExpanded}
        onClick={handleExpansion}
        aria-controls="navMenu"
        ref={firstNavControl}>
        <SrOnly>
          {`${isExpanded? "close" : "open"} menu navigation`}
        </SrOnly>
      </StyledHamburger>
      <StyledNavMenu
        aria-label="primary"
        id="navMenu">
        <StyledNavList>
          <Navlinks navLabel="header" currentPath={currentPath} lastRef={lastNavControl}/>
        </StyledNavList>
      </StyledNavMenu>
    </div>
  )
};

export default Navbar;