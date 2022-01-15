import { Hero } from "@/components/home/hero";
import { Collection } from "@/components/home/collection";
import { Choose } from "@/components/home/choose";


const Home = () =>{

  return (
    <main>
      <Hero />
      <Collection />
      <Choose />
    </main>
  );
}

export default Home;