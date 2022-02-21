import { 
  StyledOptionsForm,
  StyledOptionList } from "./optionsForm.styled";
import { OptionsData } from "./optionsData";
import { Option } from "./option";
import { Summary } from "../summary";
import { StyledCreatePlan } from "@/components/shared/createPlan/createPlan.styled";
import { useTrackedState } from "@/store/index";


const OptionsForm = () =>{
  const coffeeChoices = useTrackedState();

  const checkFormValidity = () =>{

    for ( const [_, val] of Object.entries(coffeeChoices)) {
      if ( !val ) {
        return false;
      }
    }

    return true;
  }

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) =>{
    event.preventDefault();

    if ( !checkFormValidity()) {
      return;
    }
  }

  const renderSelections = () => {
    const selections = OptionsData.map(option =>(
      <Option key={option.id} data={option} />
    ));

    return selections;
  }

  return (
    <StyledOptionsForm onSubmit={handleFormSubmit}>
      <StyledOptionList>
        {renderSelections()}
      </StyledOptionList>
      <Summary /> 
      <StyledCreatePlan  as="button" 
        type="submit"
        disabled={!checkFormValidity()}>
        Create my plan!
      </StyledCreatePlan>
    </StyledOptionsForm>
  );
}


export default OptionsForm;