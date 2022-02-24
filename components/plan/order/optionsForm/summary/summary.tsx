import { 
  StyledSummary,
  StyledSummaryHeading,
  StyledSummaryInfo,
  StyledSummaryChoices } from "./summary.styled"
import { useTrackedState } from "@/store/tracked";


const Summary = () =>{
  const coffeeChoices = useTrackedState();

  return (
    <StyledSummary aria-hidden="true">
      <StyledSummaryHeading>order summary</StyledSummaryHeading>
      <StyledSummaryInfo>
        "I drink my coffee 
        <span>{coffeeChoices["coffee-drinking"]==="Capsule"? " using " : " as "}</span> 
        <StyledSummaryChoices>
          {coffeeChoices["coffee-drinking"]? ` ${coffeeChoices["coffee-drinking"]}` : " _____"}
        </StyledSummaryChoices>
        , with a 
        <StyledSummaryChoices>
          {coffeeChoices["coffee-type"]? ` ${coffeeChoices["coffee-type"]}` : " _____"}
        </StyledSummaryChoices>
        {` `}type of bean. 
        <StyledSummaryChoices>
          {coffeeChoices["coffee-quantity"]? ` ${coffeeChoices["coffee-quantity"]}` : " _____"}
        </StyledSummaryChoices>
        {` `}ground {coffeeChoices["coffee-drinking"]==="Capsule"? " " : " ala "}
        {coffeeChoices["coffee-drinking"]!=="Capsule" && (
          <StyledSummaryChoices>
          {coffeeChoices["coffee-grind"]? ` ${coffeeChoices["coffee-grind"]}` : " _____"}
          </StyledSummaryChoices>
        )}
        , sent to me 
        <StyledSummaryChoices>
          {coffeeChoices["coffee-delivery"]? ` ${coffeeChoices["coffee-delivery"]}` : " _____"}
        </StyledSummaryChoices>
        ."
      </StyledSummaryInfo>
    </StyledSummary>
  );
}


export default Summary;