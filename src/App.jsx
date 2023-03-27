import { useState } from "react";
import Footer from "./components/Footer";
import NeedHelp from "./components/NeedHelp";
import Hotel from "./components/Hotel";
import FeatureDestination from "./components/FeatureDestination";
import PlanTrip from "./components/PlanTrip";
function App() {
  return (
    <div className="main">
      <PlanTrip />
      <FeatureDestination />
      <Hotel />
      <NeedHelp />
      <Footer />
    </div>
  );
}

export default App;
