import { motion } from "framer-motion"
import { 
  PageVariants,
  PageTransition } from "motion"
import React, { FunctionComponent } from "react";


export const withPageTransition = ( Component: FunctionComponent) =>{
  
  return () => (
    <motion.main
      initial="initial"
      animate="visible"
      exit="hidden"
      variants={PageVariants}
      transition={PageTransition}
    >
     <Component />
    </motion.main>
  );
}