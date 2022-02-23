import { Hero } from "@/components/home/hero";
import { Collection } from "@/components/home/collection";
import { Choose } from "@/components/home/choose";
import { Works } from "@/components/home/works";


const Home = () =>{

  return (
    <main>
      <Hero />
      <Collection />
      <Choose />
      <Works />
    </main>
  );
}


export default Home;