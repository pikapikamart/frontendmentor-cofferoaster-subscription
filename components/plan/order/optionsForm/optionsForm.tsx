import { useState } from "react";
import { 
  StyledOptionsForm,
  StyledOptionList } from "./optionsForm.styled";
import { OptionsData } from "./optionsData";
import { Option } from "./option";
import { Summary } from "./summary";
import { StyledCreatePlan } from "@/components/shared/createPlan/createPlan.styled";
import { useTrackedState } from "@/store/index";
import { Checkout } from "./checkout";


const OptionsForm = () =>{
  const coffeeChoices = useTrackedState();
  const [ showModal, setShowModal ] = useState(false);

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
  }

  const handleShowModal = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
    if ( !checkFormValidity()) {
      return;
    }

    setShowModal(true);
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
        type="button"
        disabled={!checkFormValidity()}
        onClick={handleShowModal}>
        Create my plan!
      </StyledCreatePlan>
      {showModal && <Checkout hideModal={setShowModal}/>}
    </StyledOptionsForm>
  );
}


export default OptionsForm;