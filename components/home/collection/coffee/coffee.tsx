import { CoffeeData } from "./coffeeData";
import { 
  StyledCoffeesList,
  StyledCoffee,
  StyledCoffeeImage,
  StyledCoffeeHeading,
  StyledCoffeeText
 } from "./coffee.styled";
import { 
  customSwipeUpVariant,
  squishedVariant } from "motion";


const CoffeeList = () =>{
  
  const renderCoffees = () =>{
    const coffees = CoffeeData.map(( coffee, index) =>(
      <StyledCoffee 
        key={coffee.id}
        initial="initial"
        whileInView="visible"
        viewport={{once: true, amount: .5}}
        variants={customSwipeUpVariant("10%", .35)}>
        <StyledCoffeeImage 
          src={coffee.image} 
          alt="" 
          aria-hidden="true"
          variants={squishedVariant(1.2 * ((index+1) / 10))}/>
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