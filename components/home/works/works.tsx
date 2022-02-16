import {
  StyledWorks,
  StyledWorksHeading
} from "./works.styled";
import { StepsList } from "./steps";
import { CreatePlan } from "@/components/shared/createPlan";


const Works = () =>{

  return (
    <StyledWorks>
      <StyledWorksHeading>
        How it works
      </StyledWorksHeading>
      <StepsList />
      <CreatePlan/>
    </StyledWorks> 
  );
}


export default Works;