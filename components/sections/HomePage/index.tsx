import AppLayout from "@/components/layout/AppLayout";
import Cost from "./Cost";
import Faq from "./Faq";
import Hero from "./Hero";
import LearnMore from "./LearnMore";
import Partner from "./Partner";
import Trial from "./Trial";

const HomePage = () => {
  return (
    <AppLayout>
      <Hero />
      <Partner />
      <Faq />
      <LearnMore />
      <Cost />
      <Trial />
    </AppLayout>
  );
};

export default HomePage;
