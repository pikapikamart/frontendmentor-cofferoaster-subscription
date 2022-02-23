import { FactorsData } from "./factorsData";
import { 
  StyledFactorsList,
  StyledFactor,
  StyledFactorImage,
  StyledFactorHeading,
 } from "./factors.styled";
import { WhiteText } from "@/styled/shared/text.styled";
import { customSwipeUpVariant } from "motion";


const FactorsList = () =>{

  const renderFactors = () =>{
    const factors = FactorsData.map( factor => (
      <StyledFactor 
        key={factor.id}
        initial="initial"
        whileInView="visible"
        viewport={{once: true,amount: .5}}
        variants={customSwipeUpVariant("15%", .55)}>
        <StyledFactorImage 
          src={factor.image} 
          alt="" 
          aria-hidden="true" />
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