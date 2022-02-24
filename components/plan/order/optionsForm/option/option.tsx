import { Option as OptionShape } from "../optionsData";
import { useExpansion } from "@/lib/hooks";
import { 
  StyledOptionButton,
  StyledOptionField,
  StyledOptionRadioWrapper,
  StyledOptionRadio,
  StyledOptionLabel,
  StyledOptionLabelHeading } from "./option.styled";
import { SrOnly } from "@/styled/shared/helpers";
import { 
  useSetState, 
  useTrackedState} from "@/store/tracked";
import { AnimatePresence } from "framer-motion";
import { optionFormVariant } from "@/motion";


interface Option {
  data: OptionShape
}

const Option = ({data}: Option) =>{
  const { isExpanded, handleExpansion } = useExpansion();
  const setCoffeeChoice = useSetState();
  const coffeeChoice = useTrackedState();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
    const { value } = event.target;

    setCoffeeChoice(prev => (
      {...prev, [data.radioGroup]: value}
    ));
  }
  
  const renderChoices = () =>{
    const choices = data.choices.map(choice =>(
      <StyledOptionRadioWrapper key={choice.id}>
        <StyledOptionRadio type="radio" 
          id={choice.id}
          value={choice.label}
          onChange={handleChange}
          checked={coffeeChoice[data.radioGroup]===choice.label}
           />
        <StyledOptionLabel htmlFor={choice.id}>
          <StyledOptionLabelHeading>
            {choice.label}
          </StyledOptionLabelHeading>
          <span>{choice.text}</span>
        </StyledOptionLabel>
      </StyledOptionRadioWrapper>
    ));


    return choices;
  }

  return (
    <li>
      <StyledOptionButton 
        id={data.id}
        aria-expanded={isExpanded}
        aria-controls={data.radioGroup}
        onClick={handleExpansion}
        disabled={data.id==="order-grind" && coffeeChoice["coffee-drinking"]==="Capsule"? true : false}>
          {data.question}
      </StyledOptionButton>
      <AnimatePresence>
        {isExpanded && (
          <StyledOptionField
            initial="initial"
            animate="visible"
            exit="initial"
            variants={optionFormVariant}>
            <legend>
              <SrOnly>{data.legend}</SrOnly>
            </legend>
            {renderChoices()}
        </StyledOptionField>
      )}
      </AnimatePresence>
    </li>
  );
}


export default Option;