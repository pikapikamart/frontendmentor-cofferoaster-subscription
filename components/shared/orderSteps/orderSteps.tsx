import {
  StyledOrderStepList,
  StyledOrderStep,
  StyledOrderStepNumber,
  StyledOrderStepHeading
 } from "./orderSteps.styled";
import { OrderStepsData } from "./orderStepsData";
import { SrOnly } from "@/styled/shared/helpers";
import { DarkText, WhiteText } from "@/styled/shared/text.styled";
import { 
  workLineVariant,
  workVariant,
  swirlSquishedVariant } from "@/motion";
import { useCheckVisibility } from "@/lib/hooks";


interface OrderStepsShape {
  textColor: "light" | "dark",
  bgColor: "light" | "dark"
}

const OrderStepsList = ({ textColor, bgColor } : OrderStepsShape) =>{
  const { ref, isSeen } = useCheckVisibility(.5);

  const renderSteps = () =>{
    const steps = OrderStepsData.map(( step, index ) =>(
      <StyledOrderStep 
        $orderBackground={bgColor}
        key={step.id}
        initial="initial"
        whileInView="visible"
        viewport={{once: true, amount: .5}}
        variants={workVariant(.5 * index)}>
        <StyledOrderStepNumber
          variants={swirlSquishedVariant(.3 *( index+1 ))}>
          <span aria-hidden="true">0</span>
          {index+1}
          <SrOnly>!</SrOnly>
        </StyledOrderStepNumber>
        <StyledOrderStepHeading textColor={textColor}>{step.name}</StyledOrderStepHeading>
        {textColor==="light"? 
          <WhiteText>{step.description}</WhiteText> : <DarkText>{step.description}</DarkText>
        }
      </StyledOrderStep>
    ));

    return steps;
  }

  return (
    <StyledOrderStepList
      ref={ref}
      initial="initial"
      animate={isSeen? "visible" : "initial"}
      variants={workLineVariant}>
      {renderSteps()}
    </StyledOrderStepList>
  );
}


export default OrderStepsList;