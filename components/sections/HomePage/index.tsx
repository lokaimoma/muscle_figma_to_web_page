import AppLayout from "@/components/layout/AppLayout";
import Cost from "./Cost";
import Faq from "./Faq";
import Hero from "./Hero";
import LearnMore from "./LearnMore";
import MarketCost from "./MarketCost";
import Partner from "./Partner";
import Service from "./Service";
import SiteMaintenance from "./SiteMaintenance";
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
      <SiteMaintenance />
      <Service />
      <MarketCost />
    </AppLayout>
  );
};

export default HomePage;
