import "./App.css";
import "./style/layout.css";
import "./style/banner.css";
import "./style/hereSec.css";
import "./style/aboutSec.css";
import "./style/accodingSec.css";
import "./style/aprSec.css";
import "./style/overSec.css";
import "./style/footer.css";
import Banner from "./components/Banner";
import HereSection from "./components/sections/HereSection";
import AboutSection from "./components/sections/AboutSection";
import AccodingSection from "./components/sections/AccodingSection";
import APRSection from "./components/sections/APRSection";
import OverSection from "./components/sections/OverSection";
function App() {
  return (
    <div>
      <Banner />
      <HereSection />
      <AboutSection />
      <AccodingSection />
      <APRSection />
      <OverSection />
    </div>
  );
}

export default App;
