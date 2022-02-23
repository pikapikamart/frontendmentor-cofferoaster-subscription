import { 
  StyledFooter,
  StyledFooterLogo,
  StyledNavList,
  StyledSocialMedias,
  StyledSocialLink } from "./footer.styled";
import { useRouter } from "next/router";
import { Navlinks } from "@/components/shared/navlinks";
import { socialMedias } from "@/components/shared/data/socialMedias";
import { SrOnly } from "@/styled/shared/helpers";


const Footer = () =>{
  const currentPath = useRouter().pathname;

  const renderSocialMedias = () =>{
    const links = socialMedias.map(link =>(
      <li key={link.id}>
        <StyledSocialLink href={link.url}>
          <SrOnly>{link.name}</SrOnly>
          <img src={link.image} alt="" aria-hidden="true" />
        </StyledSocialLink>
      </li>
    ));

    return links;
  }

  return (
    <StyledFooter>
      <div>
        <StyledFooterLogo 
          src="/shared/logo-footer.svg"
          alt="coffeeroasters" />
      </div>
      <nav aria-label="footer">
        <StyledNavList>
          <Navlinks navLabel="footer" currentPath={currentPath}/>
        </StyledNavList>
      </nav>
      <StyledSocialMedias>
        {renderSocialMedias()}
      </StyledSocialMedias>
    </StyledFooter>
  );
}


export default Footer;