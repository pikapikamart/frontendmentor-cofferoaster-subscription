import Link from "next/link";
import { LinksData } from "../data/linksData";


export const renderNavLinks = (navLabel: string, currentPath: string) =>{
  const links = LinksData.map(link =>(
    <li key={navLabel + link.id}>
      <Link href={link.link}>
        {currentPath===link.link? <a aria-current="page">{link.name}</a> : <a>{link.name}</a>}
      </Link>
    </li>
  ))

  return links;
};

