import {
  StyledWorks,
  StyledWorksHeading
} from "./works.styled";
import { OrderStepsList } from "@/components/shared/orderSteps";
import { CreatePlan } from "@/components/shared/createPlan";


const Works = () =>{

  return (
    <StyledWorks>
      <StyledWorksHeading>
        How it works
      </StyledWorksHeading>
      <OrderStepsList bgColor="light" textColor="dark" />
      <CreatePlan/>
    </StyledWorks> 
  );
}


export default Works;