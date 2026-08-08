import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import AnnouncementMarquee from "./components/AnnouncementMarquee";
import MBA from "./pages/MBA";
import MCA from "./pages/MCA";
import BAIslamicStudies from "./pages/BAIslamicStudies";
import ProgrammeDetail from "./pages/ProgrammeDetail";
import ChatBot from "./components/ChatBot";

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
        </Route>
      </Routes>
    </div>
    </div>
  );
}