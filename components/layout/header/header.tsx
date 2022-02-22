import { 
  useState,
  useEffect } from "react";
import { 
  StyledHeader, 
  StyledHeaderLogo } from "./header.styled";
import { Navbar } from "./navbar";


const Header = () =>{
  const [ showHeaderSticky, setShowHeaderSticky ] = useState(false);
  const [ hideHeaderSticky, setHideHeaderSticky ] = useState(false);
  const [ windowHeight, setWindowHeight ] = useState(0);

  useEffect(() =>{
    if ( hideHeaderSticky ) {
      const stickyTimeout = setTimeout(() => {
        setHideHeaderSticky(false);
        setShowHeaderSticky(false);
      }, 500);

      return () => clearTimeout(stickyTimeout);
    }
  }, [ hideHeaderSticky ]);

  useEffect(() =>{
    if ( !hideHeaderSticky && windowHeight > 650 ) {
      setShowHeaderSticky(true);
    }

    else if ( showHeaderSticky && windowHeight <= 650 ) {
      setHideHeaderSticky(true);
    }
  }, [ windowHeight ]);

  useEffect(() =>{
    const handleHeightResize = () =>{
      setWindowHeight(window.scrollY);
    }

    window.addEventListener("scroll", handleHeightResize);
  }, [])

  return (
    <StyledHeader className={`${hideHeaderSticky? "scroll-in scroll-out" : 
                              showHeaderSticky? "scroll-in" : ""}`}>
      <div>
        <StyledHeaderLogo 
          src="/shared/logo.svg"
          alt="coffeeroasters" />
      </div>
      <Navbar />
    </StyledHeader>
  );
}

export default Header;