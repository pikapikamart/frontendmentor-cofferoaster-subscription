import { CoffeeData } from "./coffeeData";
import { 
  StyledCoffeeList,
  StyledCoffeeContainer,
  StyledCoffeeImage,
  StyledCoffeeHeading,
  StyledCoffeeText
 } from "./coffee.styled";


const CoffeeList = () =>{

  const renderCoffees = () =>{
    const coffees = CoffeeData.map(coffee =>(
      <StyledCoffeeContainer key={coffee.id}>
        <StyledCoffeeImage src={coffee.image} alt="" />
        <div>
          <StyledCoffeeHeading>{coffee.name}</StyledCoffeeHeading>
          <StyledCoffeeText>{coffee.description}</StyledCoffeeText>
        </div>
      </StyledCoffeeContainer>
      )
    )

    return coffees;
  }

  return (
    <StyledCoffeeList>
      {renderCoffees()}
    </StyledCoffeeList>
  );
}

export default CoffeeList;