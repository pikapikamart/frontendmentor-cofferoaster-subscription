import { StyledFooter } from "./footer.styled";
import { LinksData } from "@/components/shared/data/linksData";
import Link from "next/link";


const Footer = () =>{

  const renderNavlinks = () =>{
    const links = LinksData.map(link =>(
      <li key={link.id}>
        <Link href={link.link}>
          {/* {currentPath===link.link ? <a aria-current="page">{link.name}</a>: <a>{link.name}</a>} */}
        </Link>
      </li>
    ))

  }

  return (
    <StyledFooter>
      
    </StyledFooter>
  );
}


export default Footer;