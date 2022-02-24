import React, { 
  useState, 
  useRef, 
  useEffect,
  MutableRefObject } from "react";
import { useInView } from "react-intersection-observer";


export const useExpansion = () =>{
  const [ isExpanded, setIsExpanded ] = useState(false);

  const handleExpansion = () => setIsExpanded(prev => !prev);

  return {
    isExpanded,
    handleExpansion
  }
}

interface RegisterTrap {
  (event : React.KeyboardEvent<HTMLElement>, width: number) : void
}

type Control<Type> =  MutableRefObject<Type | null>;

export function useTrapFocus<F extends HTMLElement, L extends HTMLElement>(): [Control<F>, Control<L>, RegisterTrap]  {
  const firstControl = useRef<F | null>(null);
  const lastControl = useRef<L | null>(null);
  const [ controlTrapWidth, setControlTrapWidth ] = useState(0);
  const [ shouldTrap, setShouldTrap ] = useState(false);

  const registerTrap = ( event: React.KeyboardEvent<HTMLElement>, width: number = 0) =>{

    if ( width ) {
      setControlTrapWidth(width);
    }
    
    if ( !shouldTrap && controlTrapWidth ) {
      return;
    }

    if ( !firstControl.current || !lastControl.current ) {
      return;
    }

    if ( document.activeElement===firstControl.current && event.shiftKey && event.key==="Tab") {
      event.preventDefault();
      lastControl.current.focus();
    }

    else if ( document.activeElement===lastControl.current && !event.shiftKey && event.key==="Tab") {
      event.preventDefault();
      firstControl.current.focus();
    }
  }

  const handleChangeWidth = () =>{
    if ( window.innerWidth < controlTrapWidth ) {
      setShouldTrap(true);
    }

    else if ( window.innerWidth >= controlTrapWidth ) {
      setShouldTrap(false)
    }
  }
  
  useEffect(() =>{
    if ( controlTrapWidth ) {
      const handleWidthResize = () =>{
        handleChangeWidth();
      }
      handleChangeWidth();
      window.addEventListener("resize", handleWidthResize);
    }

  }, [ controlTrapWidth ])

  useEffect(() =>{
    
    const widthTimeout = setTimeout( () =>{
      if ( controlTrapWidth ) {
        handleChangeWidth();
      }
    }, 100)

    return () => clearTimeout(widthTimeout);
  }, [])


  return [firstControl, lastControl, registerTrap];
}

export const useBodyFocus = () =>{
  useEffect(() =>{
    document.body.setAttribute("tabindex", "0");
    document.body.focus();
    document.body.removeAttribute("tabindex");
  }, [])
}

export const useCheckVisibility = ( threshold: number ) =>{
  const [ isSeen, setIsSeen ] = useState(false);
  const { ref, inView } = useInView({ threshold });

  useEffect(() =>{
    if ( !isSeen && inView ) {
      setIsSeen(true);
    }
  }, [ inView ]);

  return { ref, inView, isSeen };}