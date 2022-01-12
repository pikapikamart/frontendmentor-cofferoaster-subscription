import { useState } from "react";


export const useExpansion = () =>{
  const [ isExpanded, setIsExpanded ] = useState(false);

  const handleExpansion = () => setIsExpanded(prev => !prev);

  return {
    isExpanded,
    handleExpansion
  }
}