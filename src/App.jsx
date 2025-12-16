import FeatureSection from "./components/FeatureSection";
import FooterSection from "./components/FooterSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import WorkflowSection from "./components/WorkflowSection";

function App() {
  return (
    <>
      <Navbar />
      <div className="max-w-5xl mx-auto pt-20 px-6">
        <HeroSection />
        <FeatureSection />
        <WorkflowSection />
      </div>
      <FooterSection />
    </>
  );
}

export default App;
