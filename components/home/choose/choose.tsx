import { 
  StyledChoose,
  StyledChooseIntro } from "./choose.styled"
import { Heading2 } from "@/styled/shared/text.styled";
import { FactorsList } from "./factors";


const Choose = () =>{

  return (
    <StyledChoose>
      <Heading2>Why choose us?</Heading2>
      <StyledChooseIntro>
        A large part of our role is choosing which particular coffees will be featured  in our range. 
        This means working closely with the best coffee growers to give you a more impactful experience on every level.
      </StyledChooseIntro>
      <FactorsList />
    </StyledChoose>
  )
}

export default Choose;