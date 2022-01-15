import { FactorsData } from "./factorsData";
import { 
  StyledFactorsList,
  StyledFactorContainer,
  StyledFactorImage,
  StyledFactorHeading,
 } from "./factors.styled";
import { WhiteText } from "@/styled/shared/text.styled";


const FactorsList = () =>{

  const renderFactors = () =>{
    const factors = FactorsData.map( factor => (
      <StyledFactorContainer key={factor.id}>
        <StyledFactorImage src={factor.image} alt="" />
        <div>
          <StyledFactorHeading>{factor.name}</StyledFactorHeading>
          <WhiteText>{factor.description}</WhiteText>
        </div>
      </StyledFactorContainer>
    ));

    return factors;
  }

  return (
    <StyledFactorsList>
      {renderFactors()}
    </StyledFactorsList>
  );
}

export default FactorsList;