import tenantshoutShowcaseImg from "./imgs/tenantshout-showcase.png";
import stlShowcaseImg from "./imgs/stl-showcase.png";
import reachoutShowcaseImg from "./imgs/reachout-showcase.png";
import tribunalShowcaseImg from "./imgs/tribunal-showcase.png";
import complaintsShowcaseImg from "./imgs/complaints-showcase.png";
import img5 from "./imgs/img5.jpg";
import bgImg from "./imgs/bg.jpeg";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import TenantShoutSection from "./components/TenantShoutSection";
import ToolsSection from "./components/ToolsSection";
import ReachoutSection from "./components/ReachoutSection";
import ComplaintsSection from "./components/ComplaintsSection";
import ContactSection from "./components/ContactSection";
import FooterSection from "./components/FooterSection";

const tools = [
  {
    title: "TenantShout",
    desc: "A platform for easily launching message-to-target campaigns.",
    link: "https://shout.tenantact.org/",
    img: tenantshoutShowcaseImg,
    categories: ["campaign"],
  },
  {
    title: "STL Objector",
    desc: "Mobilise objections to new short-term lets in our communities.",
    link: "http://stlobject.tenantact.org/",
    img: stlShowcaseImg,
    categories: ["campaign"],
  },
  {
    title: "ReachOut",
    desc: "Phone and text bank members to mobilise for actions, meetings, and more.",
    link: "https://reachout.tenantact.org/",
    img: reachoutShowcaseImg,
    categories: ["organise"],
  },
  {
    title: "Tribunal Scraper",
    desc: "Expose judgments against landlords from the housing tribunal.",
    link: "https://tribunal.tenantact.org/",
    img: tribunalShowcaseImg,
    categories: ["research"],
  },
  {
    title: "COMPLAINTS PORTAL",
    desc: "A platform to facilitate complaints to the City of Edinburgh Council.",
    link: "https://complaints.tenantact.org/",
    img: complaintsShowcaseImg,
    categories: ["campaign", "organise"],
  },
];

function App() {
  return (
    <div className="landing-root">
      <Header />
      <main className="snap-container">
        <HeroSection bgImg={bgImg} />
        <TenantShoutSection tsImg={tenantshoutShowcaseImg} />
        <ToolsSection tools={tools} />
        <ReachoutSection reachoutImg={reachoutShowcaseImg} />
        <ComplaintsSection complaintsImg={complaintsShowcaseImg} />
        <ContactSection img5={img5} footer={<FooterSection />} />
      </main>
    </div>
  );
}

export default App;
