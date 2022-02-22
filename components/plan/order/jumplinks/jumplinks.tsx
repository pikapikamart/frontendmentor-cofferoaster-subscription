import { 
  StyledJumplinks,
  StyledJumplink,
  StyledJumpLinkText } from "./jumplinks.styled";
import { JumplinksData } from "./jumplinksData";
import { SrOnly } from "@/styled/shared/helpers";
import { useState } from "react";


const JumpLinks = () =>{
  const [ currentLink, setCurrentLink ] = useState<HTMLAnchorElement>();

  const handleToggleLink = ( event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) =>{
    setCurrentLink(event.target as HTMLAnchorElement);
  }

  const renderLinks = () =>{
    const links = JumplinksData.map((link, index) =>(
      <StyledJumplink key={link.name}
        focus={currentLink?.textContent===link.name}>
        <span aria-hidden="true">0</span>
        {index+1}
        <SrOnly>!</SrOnly>
        <StyledJumpLinkText href={`#${link.linkTo}`}
          onClick={handleToggleLink}>
          {link.name}
        </StyledJumpLinkText>
      </StyledJumplink>
    ));

    return links;
  }

  return (
    <StyledJumplinks>
      {renderLinks()}
    </StyledJumplinks>
  );
}


export default JumpLinks;