import React, { 
  useState, 
  useRef, 
  MutableRefObject } from "react";


export const useExpansion = () =>{
  const [ isExpanded, setIsExpanded ] = useState(false);

  const handleExpansion = () => setIsExpanded(prev => !prev);

  return {
    isExpanded,
    handleExpansion
  }
}

interface RegisterTrap {
  (event : React.KeyboardEvent<HTMLElement>) : void
}

type Control<Type> =  MutableRefObject<Type | null>;

export function useTrapFocus<F extends HTMLElement, L extends HTMLElement>(): [Control<F>, Control<L>, RegisterTrap]  {
  const firstControl = useRef<F | null>(null);
  const lastControl = useRef<L | null>(null);

  const registerTrap = ( event: React.KeyboardEvent<HTMLElement>) =>{
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

  return [firstControl, lastControl, registerTrap];
}
