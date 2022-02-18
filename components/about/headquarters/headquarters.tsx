import { 
  StyledHQ,
  StyledHQHeading } from "./headquarters.styled"
import { LocationList } from "./location";


const Headquarters = () =>{

  return (
    <StyledHQ>
      <StyledHQHeading>Our headquarters</StyledHQHeading>
      <LocationList />
    </StyledHQ>  
  );
}


export default Headquarters;