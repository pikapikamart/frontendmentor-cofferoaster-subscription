import { 
  StyledNavMenu, 
  StyledNavList } from "./navbar.styled";
import { LinksData } from "@/components/shared/linksData";
import Link from "next/link";
import { useRouter } from "next/router";


const NavMenu = () =>{
  const currentPath = useRouter().pathname;

  const renderLinks = () =>{

    const links = LinksData.map(link =>(
      <li key={link.id}>
        <Link href={link.link}>
          {currentPath===link.link ? <a aria-current="page">{link.name}</a>: <a>{link.name}</a>}
        </Link>
      </li>
    ));

    return links;
  }

  return (
    <StyledNavMenu
      aria-label="primary"
      id="navMenu">
      <StyledNavList>
        {renderLinks()}
      </StyledNavList>
    </StyledNavMenu>
  );
}

export default NavMenu;