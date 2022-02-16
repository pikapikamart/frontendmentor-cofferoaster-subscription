import { 
  StyledFooter,
  StyledFooterLogo,
  StyledNavList,
  StyledSocialMedias } from "./footer.styled";
import { useRouter } from "next/router";
import { renderNavLinks } from "@/components/shared/functions";
import { socialMedias } from "@/components/shared/data/socialMedias";
import { SrOnly } from "@/styled/shared/helpers";
import { css } from "styled-components";


const Footer = () =>{
  const currentPath = useRouter().pathname;

  const renderSocialMedias = () =>{
    const links = socialMedias.map(link =>(
      <li key={link.id}>
        <a href={link.url}>
          <SrOnly>{link.name}</SrOnly>
          <img src={link.image} alt="" aria-hidden="true" />
        </a>
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
      <nav>
        <StyledNavList>
          {renderNavLinks("footer", currentPath)}
        </StyledNavList>
      </nav>
      <StyledSocialMedias>
        {renderSocialMedias()}
      </StyledSocialMedias>
    </StyledFooter>
  );
}


export default Footer;