import { StyledHeader, StyledHeaderLogo } from "./header.styled";
import Navbar from "./navbar/navbar";


const Header = () =>{

  return (
    <StyledHeader>
      <div>
        <StyledHeaderLogo 
          src="/shared/logo.svg"
          alt="coffeeroasters" />
      </div>
      <Navbar />
    </StyledHeader>
  );
}

export default Header;