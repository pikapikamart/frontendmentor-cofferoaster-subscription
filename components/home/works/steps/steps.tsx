import {
  StyledStepsList,
  StyledStep,
  StyledStepNumber,
  StyledStepHeading
} from "./steps.styled";
import { StepsData } from "./stepsData";
import { SrOnly } from "@/styled/shared/helpers";
import { DarkText } from "@/styled/shared/text.styled";


const StepsList = () =>{

  const renderSteps = () =>{
    const steps = StepsData.map( ( step, index ) =>(
      <StyledStep key={step.id}>
        <StyledStepNumber>
          <span aria-hidden="true">0</span>
          {index+1}
          <SrOnly>!</SrOnly>
        </StyledStepNumber>
        <StyledStepHeading>{step.name}</StyledStepHeading>
        <DarkText>{step.description}</DarkText>
      </StyledStep>
    ));

    return steps;
  }

  return (
    <StyledStepsList>
      {renderSteps()}
    </StyledStepsList>
  );
}


export default StepsList;