import { 
  useState, 
  useEffect } from "react";
import { StyledOrderPlanning } from "./order.styled"
import { SrOnly } from "@/styled/shared/helpers";
import { JumpLinks } from "./jumplinks";
import { OptionsForm } from "./optionsForm";


const OrderPlanning = () =>{
  const [ showJumplink, setShowJumplink ] = useState(false);

  useEffect(() =>{
    const handleResize = () =>{
      const width = window.innerWidth;

      if ( !showJumplink && width >= 1000) {
        setShowJumplink(true);
      }

      else if ( showJumplink && width < 1000) {
        setShowJumplink(false);
      }
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  })

  useEffect(() =>{
    window.innerWidth >= 1000? setShowJumplink(true) : setShowJumplink(false);
  }, [])

  return (
    <StyledOrderPlanning>
      <SrOnly as="h2">Create your coffee plan</SrOnly>
      {showJumplink && <JumpLinks />}
      <OptionsForm />
    </StyledOrderPlanning>
  );
}


export default OrderPlanning;