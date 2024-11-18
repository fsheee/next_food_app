import Feature from "@/components/Feature";

import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import Services from "@/components/Services";
import Survey from "@/components/Survey";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Feature />
      <Services />
      <Menu />
      <Survey />
      
    </div>
  );
}
