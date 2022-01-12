import { StyledHeader } from "./header.styled";
import HeaderLogo from "./headerLogo";
import Navbar from "./navbar"


const Header = () =>{

  return (
    <StyledHeader>
      <HeaderLogo />
      <Navbar />
    </StyledHeader>
  );
}

export default Header;