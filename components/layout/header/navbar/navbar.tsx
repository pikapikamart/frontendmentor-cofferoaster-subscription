import { useExpansion } from "@/lib/hooks";
import { StyledHamburger } from "./navbar.styled";
import { SrOnly } from "@/styled/shared/helpers";
import NavMenu from "./navMenu";


const Navbar = () =>{
  const { isExpanded, handleExpansion } = useExpansion();

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
      {/* Framer */}
      <NavMenu />
    </div>
  )
};

export default Navbar;