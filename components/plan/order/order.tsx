import { StyledOrderPlanning } from "./order.styled"
import { SrOnly } from "@/styled/shared/helpers";
import { OptionsForm } from "./optionsForm";


const OrderPlanning = () =>{
  
  return (
    <StyledOrderPlanning>
      <h2>
        <SrOnly>Create your coffee plan</SrOnly>
      </h2>
      <OptionsForm />
    </StyledOrderPlanning>
  );
}


export default OrderPlanning;