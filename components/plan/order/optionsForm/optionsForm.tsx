import { 
  useState,
  useEffect } from "react";
import { 
  StyledOptionsForm,
  StyledOptionList } from "./optionsForm.styled";
import { OptionsData } from "./optionsData";
import { Option } from "./option";
import { Summary } from "./summary";
import { StyledCreatePlan } from "@/components/shared/createPlan/createPlan.styled";
import { useTrackedState } from "@/store/tracked";
import { Checkout } from "./checkout";
import { AnimatePresence } from "framer-motion";


const OptionsForm = () =>{
  const coffeeChoices = useTrackedState();
  const [ showModal, setShowModal ] = useState(false);

  const checkFormValidity = () =>{

    for ( const [_, val] of Object.entries(coffeeChoices)) {
      if ( !val ) {
        if ( coffeeChoices["coffee-drinking"]==="Capsule" ) {
          continue;
        }
        else {
          return false;
        }
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

  useEffect(() =>{
    if ( showModal ) {
      document.body.classList.add("no-scroll");
    }

    else {
      document.body.classList.remove("no-scroll");
    }
  }, [ showModal ])

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
      <AnimatePresence>
        {showModal && <Checkout hideModal={setShowModal}/>}
      </AnimatePresence>
    </StyledOptionsForm>
  );
}


export default OptionsForm;