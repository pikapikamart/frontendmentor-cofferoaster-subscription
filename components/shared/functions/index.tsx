import Link from "next/link";
import { navLinksData } from "../data/linksData";


export const renderNavLinks = (navLabel: string, currentPath: string) =>{
  const links = navLinksData.map(link =>(
    <li key={navLabel + link.id}>
      <Link href={link.link} > 
        {currentPath===link.link? <a aria-current="page">{link.name}</a> : <a>{link.name}</a>}
      </Link>
    </li>
  ))

  return links;
};

interface NavlinkShape {
  navLabel: string,
  currentPath: string
}


const Navlinks = ({ navLabel, currentPath }: NavlinkShape) =>{

  const renderNavlinks = () =>{
    const length = navLinksData.length;
    const links = navLinksData.map(( link, index ) =>(
      <li key={navLabel + link.id}>
        <Link href={link.link}>
          <a aria-current={currentPath===link.link? "page" : false}
            ref={element => {
              if ( index===length-1) {
                
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
  )
}