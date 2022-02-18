import { useExpansion } from "@/lib/hooks";
import { 
  StyledHamburger,
  StyledNavMenu,
  StyledNavList } from "./navbar.styled";
import { SrOnly } from "@/styled/shared/helpers";
import { useRouter } from "next/router";
import { renderNavLinks } from "@/components/shared/functions";
import { useEffect } from "react";


const Navbar = () =>{
  const { isExpanded, handleExpansion } = useExpansion();
  const currentPath = useRouter().pathname;

  useEffect(() =>{
    if ( isExpanded ) {
      handleExpansion();
    }
  }, [ currentPath ])

  return (
    <div>
      <StyledHamburger 
        aria-expanded={isExpanded}
        onClick={handleExpansion}
        aria-controls="navMenu">
        <SrOnly>
          {`${isExpanded? "close" : "open"} menu navigation`}
        </SrOnly>
      </StyledHamburger>
      <StyledNavMenu
        aria-label="primary"
        id="navMenu">
        <StyledNavList>
          {renderNavLinks("header", currentPath)}
        </StyledNavList>
      </StyledNavMenu>
    </div>
  )
};

export default Navbar;