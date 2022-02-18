import { CoffeeData } from "./coffeeData";
import { 
  StyledCoffeesList,
  StyledCoffee,
  StyledCoffeeHeading,
  StyledCoffeeText
 } from "./coffee.styled";
 

const CoffeeList = () =>{

  const renderCoffees = () =>{
    const coffees = CoffeeData.map(coffee =>(
      <StyledCoffee key={coffee.id}>
        <img src={coffee.image} alt="" aria-hidden="true"/>
        <div>
          <StyledCoffeeHeading>{coffee.name}</StyledCoffeeHeading>
          <StyledCoffeeText>{coffee.description}</StyledCoffeeText>
        </div>
      </StyledCoffee>
      )
    )

    return coffees;
  }

  return (
    <StyledCoffeesList>
      {renderCoffees()}
    </StyledCoffeesList>
  );
}

export default CoffeeList;