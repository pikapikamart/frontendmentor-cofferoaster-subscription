import Head from "next/head";
import { ReactNode } from "react";
import { GlobalStyles } from "@/styled/theme";


type LayoutChildren = {
  children: ReactNode
}

const Layout = ({ children } : LayoutChildren) =>{

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="description" content="Frontendmentor coffeeroaster subscription for people who likes coffee"/>
        <meta name="keywords" content="Coffee, Coffe Subscription" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;700&family=Fraunces:wght@600;700&display=swap" rel="stylesheet" />
        <title>CoffeeRoaster</title>
      </Head>
      <GlobalStyles />
      { children }
      {/* Header */}
      {/* Footer */}
    </>
  );
}

export default Layout;