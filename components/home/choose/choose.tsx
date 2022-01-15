import { 
  StyledChoose,
  StyledChooseHeading,
  StyledChooseIntro } from "./choose.styled"
import FactorsList from "./factors/factors";


const Choose = () =>{

  return (
    <StyledChoose>
      <StyledChooseHeading>Why choose us?</StyledChooseHeading>
      <StyledChooseIntro>
        A large part of our role is choosing which particular coffees will be featured  in our range. 
        This means working closely with the best coffee growers to give you a more impactful experience on every level.
      </StyledChooseIntro>
      <FactorsList />
    </StyledChoose>
  )
}

export default Choose;