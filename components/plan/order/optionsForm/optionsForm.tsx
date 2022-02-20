import { 
  StyledOptionsForm,
  StyledOptionList } from "./optionsForm.styled";
import { OptionsData } from "./optionsData";
import { Option } from "./option";


const OptionsForm = () =>{

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) =>{
    event.preventDefault();
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
    </StyledOptionsForm>
  );
}


export default OptionsForm;