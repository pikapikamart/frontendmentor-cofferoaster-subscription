import { StyledSteps } from "./steps.styled";
import { OrderStepsList } from "@/components/shared/orderSteps";
import { SrOnly } from "@/styled/shared/helpers";


const Steps = () =>{

  return (
    <StyledSteps>
      <h2>
        <SrOnly>How it works</SrOnly>
      </h2>
      <OrderStepsList bgColor="dark" textColor="light"/>
    </StyledSteps>
  );
}


export default Steps;