

import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import AnnouncementMarquee from "./components/AnnouncementMarquee";
import About from "./pages/About";
import VisionMission from "./pages/VisionMission";
import ChancellorMessage from "./pages/ChancellorMessage";
import MBA from "./pages/MBA";
import MCA from "./pages/MCA";
import BAIslamicStudies from "./pages/BAIslamicStudies";
import ProgrammeDetail from "./pages/ProgrammeDetail";
import ProgrammesOffered from "./pages/ProgrammesOffered";
import UGProgrammes from "./pages/UGProgrammes";
import PGProgrammes from "./pages/PGProgrammes";
import FAQPage from "./pages/FAQPage";
import ChatBot from "./components/ChatBot";
import CDOEteam from "./pages/CDOEteam.jsx";

export default function App() {
  return (
     <div className="min-h-screen relative">
      {/* SVG filter that gives the glass real optical refraction/distortion */}
      <svg style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }} aria-hidden="true">
        <filter id="lg-distort" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence type="fractalNoise" baseFrequency="0.008 0.012" numOctaves="2" seed="7" result="noise" />
          <feGaussianBlur in="noise" stdDeviation="2" result="blurredNoise" />
          <feDisplacementMap in="SourceGraphic" in2="blurredNoise" scale="18" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>

      {/* Ambient colour orbs — the light source the glass refracts */}
       <div className="lg-orbs" aria-hidden="true">
        <span className="lg-orb lg-orb1" />
        <span className="lg-orb lg-orb2" />
        <span className="lg-orb lg-orb3" />
        <span className="lg-orb lg-orb4" />
       </div>

    <AnnouncementMarquee />
    <ChatBot />

    <div className="min-h-screen relative">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/vision-mission" element={<VisionMission />} />
          <Route path="/about/chancellor-message" element={<ChancellorMessage />} />
          <Route path="/about/cdoe-team" element={<CDOEteam />} />
          <Route path="/programmes" element={<ProgrammesOffered />} />
          <Route path="/programmes/ug" element={<UGProgrammes />} />
          <Route path="/programmes/pg" element={<PGProgrammes />} />
          <Route path="/programmes/mba" element={<MBA />} />
          <Route path="/programmes/mca" element={<MCA />} />
          <Route
            path="/programmes/ba-islamic-studies"
            element={<BAIslamicStudies />}
          />
          <Route
            path="/programmes/:id"
            element={<ProgrammeDetail />}
          />
          <Route path="/faq" element={<FAQPage />} />
        </Route>
      </Routes>
    </div>
    </div>
  );
}
