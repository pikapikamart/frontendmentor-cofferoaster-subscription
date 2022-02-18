import { 
  StyledLocationList,
  StyledLocation,
  StyledLocationMap,
  StyledLocationHeading } from "./location.styled";
import { LocationsData } from "./locationData";


const LocationList = () =>{

  const renderLocations = () =>{
    const locations = LocationsData.map(location =>(
      <StyledLocation key={location.id}>
        <StyledLocationMap src={location.map} alt="" aria-hidden="true" />
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