import { NextPage } from "next";
import { Home } from "@/page-components/home";
import { useBodyFocus } from "@/lib/hooks";


const HomePage: NextPage = () =>{
  useBodyFocus();

  return (
    <Home />
  );
}

export default HomePage;