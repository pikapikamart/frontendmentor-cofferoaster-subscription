import { CoffeeData } from "./coffeeData";
import { 
  StyledCoffeesList,
  StyledCoffee,
  StyledCoffeeImage,
  StyledCoffeeHeading,
  StyledCoffeeText
 } from "./coffee.styled";
import { useCheckVisibility } from "@/lib/hooks";
import { 
  staggerChildren,
  customSwipeUpVariant,
  squishedVariant } from "motion";


const CoffeeList = () =>{
  const { ref, isSeen } = useCheckVisibility(.35);
  
  const renderCoffees = () =>{
    const coffees = CoffeeData.map(( coffee, index) =>(
      <StyledCoffee 
        key={coffee.id}
        variants={customSwipeUpVariant("10%", .35)}>
        <StyledCoffeeImage 
          src={coffee.image} 
          alt="" 
          aria-hidden="true"
          variants={squishedVariant(1.4 * ((index+1) / 10))}/>
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
    <StyledCoffeesList
      variants={staggerChildren(.30)}
      initial="initial"
      animate={isSeen? "visible": "initial"}
      ref={ref}>
      {renderCoffees()}
    </StyledCoffeesList>
  );
}

export default CoffeeList;