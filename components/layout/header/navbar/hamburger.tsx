import { useExpansion } from "@/lib/hooks";
import { StyledHamburger } from "./navbar.styled";
import { SrOnly } from "@/components/shared/sr-only.styled";


const Hamburger = () =>{
  const { isExpanded, handleExpansion } = useExpansion();

  return (
    <StyledHamburger 
      aria-expanded={isExpanded}
      onClick={handleExpansion}
      aria-controls="navMenu"
    >
      <SrOnly>
        {`${isExpanded? "close" : "open"} menu navigation`}
      </SrOnly>
    </StyledHamburger>
  );
}

export default Hamburger;