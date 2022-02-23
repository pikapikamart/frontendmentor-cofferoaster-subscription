import { 
  memo, 
  MutableRefObject } from "react";
import { navLinksData } from "./navlinksData";
import Link from "next/link";


interface NavlinkShape {
  navLabel: string,
  currentPath: string,
  lastRef?: MutableRefObject<HTMLElement | null>
}

const Navlinks = ({ navLabel, currentPath, lastRef }: NavlinkShape) =>{

  const renderNavlinks = () =>{
    const length = navLinksData.length;
    const links = navLinksData.map(( link, index ) =>(
      <li key={navLabel + link.id}>
        <Link href={link.link}>
          <a aria-current={currentPath===link.link? "page" : undefined}
            ref={element => {
              if ( lastRef && index===length-1) {
                lastRef.current = element;
              }
            }}>
            {link.name}
          </a>
        </Link>
      </li>
    ))

    return links;
  }

  return (
    <>
      {renderNavlinks()}
    </>
  );
}


export default memo(Navlinks);