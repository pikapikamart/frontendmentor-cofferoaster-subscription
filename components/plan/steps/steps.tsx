import { StyledSteps } from "./steps.styled";
import { OrderStepsList } from "@/components/shared/orderSteps";
import { SrOnly } from "@/styled/shared/helpers";


const Steps = () =>{

  return (
    <StyledSteps>
      <SrOnly as="h2">How it works</SrOnly>
      <OrderStepsList bgColor="dark" textColor="light"/>
    </StyledSteps>
  );
}


export default Steps;