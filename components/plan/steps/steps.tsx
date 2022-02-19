import { StyledSteps } from "./steps.styled";
import { OrderStepsList } from "@/components/shared/orderSteps";

const Steps = () =>{

  return (
    <StyledSteps>
      <OrderStepsList bgColor="dark" textColor="light"/>
    </StyledSteps>
  );
}


export default Steps;