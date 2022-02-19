import {
  StyledOrderStepList,
  StyledOrderStep,
  StyledOrderStepNumber,
  StyledOrderStepHeading
 } from "./orderSteps.styled";
import { OrderStepsData } from "./orderStepsData";
import { SrOnly } from "@/styled/shared/helpers";
import { DarkText, WhiteText } from "@/styled/shared/text.styled";


interface OrderStepsShape {
  textColor: "light" | "dark",
  bgColor: "light" | "dark"
}

const OrderStepsList = ({ textColor, bgColor } : OrderStepsShape) =>{

  const renderSteps = () =>{
    const steps = OrderStepsData.map( ( step, index ) =>(
      <StyledOrderStep bgColor={bgColor} key={step.id}>
        <StyledOrderStepNumber>
          <span aria-hidden="true">0</span>
          {index+1}
          <SrOnly>!</SrOnly>
        </StyledOrderStepNumber>
        <StyledOrderStepHeading textColor={textColor}>{step.name}</StyledOrderStepHeading>
        {textColor==="light"? 
          <WhiteText>{step.description}</WhiteText> :
          <DarkText>{step.description}</DarkText>
        }
      </StyledOrderStep>
    ));

    return steps;
  }

  return (
    <StyledOrderStepList>
      {renderSteps()}
    </StyledOrderStepList>
  );
}


export default OrderStepsList;