import { Hero } from "@/components/plan/hero";
import { Steps } from "@/components/plan/steps";
import { OrderPlanning } from "@/components/plan/order";
import { withPageTransition } from "@/components/shared/motions";


const Plan = () =>{

  return (
    <main>
      <Hero />
      <Steps />
      <OrderPlanning />
    </main>
  );
}


// export default withPageTransition(Plan);
export default Plan;