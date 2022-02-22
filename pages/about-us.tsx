import { NextPage } from "next";
import { AboutUs } from "@/page-components/about";
import { useBodyFocus } from "@/lib/hooks";


const AboutUsPage: NextPage = () =>{
  useBodyFocus();

  return (
    <AboutUs />
  );
}


export default AboutUsPage; 