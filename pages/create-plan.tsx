import { NextPage } from "next";
import { Plan } from "@/page-components/plan";
import { useBodyFocus } from "@/lib/hooks";


const CreatePlanPage: NextPage = () =>{
  useBodyFocus();

  return (
    <Plan />
  );
}


export default CreatePlanPage;