import { FactorsData } from "./factorsData";
import { 
  StyledFactorsList,
  StyledFactor,
  StyledFactorImage,
  StyledFactorHeading,
 } from "./factors.styled";
import { WhiteText } from "@/styled/shared/text.styled";


const FactorsList = () =>{

  const renderFactors = () =>{
    const factors = FactorsData.map( factor => (
      <StyledFactor key={factor.id}>
        <StyledFactorImage src={factor.image} alt="" />
        <div>
          <StyledFactorHeading>{factor.name}</StyledFactorHeading>
          <WhiteText>{factor.description}</WhiteText>
        </div>
      </StyledFactor>
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