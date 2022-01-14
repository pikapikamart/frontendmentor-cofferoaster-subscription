import { 
  StyledCollection,
  StyledCollectionHeading } from "./collection.styled";
import CoffeeList from "./coffee/coffee";


const Collection = () =>{

  return (
    <StyledCollection>
      <StyledCollectionHeading>our collection</StyledCollectionHeading>
      <CoffeeList />
    </StyledCollection>
  );
}

export default Collection;