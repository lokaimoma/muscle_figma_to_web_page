import AppLayout from "@/components/layout/AppLayout";
import Faq from "./Faq";
import Hero from "./Hero";
import LearnMore from "./LearnMore";
import Partner from "./Partner";

const HomePage = () => {
  return (
    <AppLayout>
      <Hero />
      <Partner />
      <Faq />
      <LearnMore />
    </AppLayout>
  );
};

export default HomePage;
