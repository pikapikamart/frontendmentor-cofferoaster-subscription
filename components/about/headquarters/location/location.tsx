import { 
  StyledLocationList,
  StyledLocation,
  StyledLocationMap,
  StyledLocationHeading } from "./location.styled";
import { LocationsData } from "./locationData";
import { 
  staggerChildren,
  customSwipeUpVariant,
  squishedVariant } from "motion";


const LocationList = () =>{

  const renderLocations = () =>{
    const locations = LocationsData.map(( location, index ) =>(
      <StyledLocation 
        key={location.id}
        initial="initial"
        whileInView="visible"
        viewport={{once: true, amount: .5}}
        variants={customSwipeUpVariant("10%", .35, .35*( index+1 ))}>
        <StyledLocationMap 
          src={location.map} 
          alt="" 
          aria-hidden="true"
          whileInView="visible"
          viewport={{once: true, amount: 1}}
          variants={squishedVariant(1.4 * (( index+4 ) / 10))} />
        <StyledLocationHeading>{location.country}</StyledLocationHeading>
        <address>
          <p>{location.street}</p>
          <p>{location.city}</p>
          <p>{location.postcode}</p>
          <p>{location.tel}</p>
        </address>
      </StyledLocation>
    ));

    return locations;
  };

  return (
    <StyledLocationList>
      {renderLocations()}
    </StyledLocationList>  
  );
}


export default LocationList;