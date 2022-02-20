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
  useTrackedState} from "@/store/index";


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
          checked={coffeeChoice[data.radioGroup] === choice.label}
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
      <StyledOptionButton id={data.id}
        aria-expanded={isExpanded}
        aria-controls={data.radioGroup}
        onClick={handleExpansion}>
          {data.question}
      </StyledOptionButton>
      {isExpanded && (
        <StyledOptionField>
          <legend>
            <SrOnly>{data.legend}</SrOnly>
          </legend>
          {renderChoices()}
        </StyledOptionField>
      )}
    </li>
  );
}


export default Option;