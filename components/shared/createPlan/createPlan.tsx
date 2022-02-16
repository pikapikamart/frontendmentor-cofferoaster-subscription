import Link from "next/link";
import React from "react";
import { StyledCreatePlan } from "./createPlan.styled";


const CreatePlan = () =>{
  
  return (
    <Link href="/create-plan" passHref>
      <StyledCreatePlan>
        Create your plan
      </StyledCreatePlan>
    </Link>
  )
}

export default CreatePlan;