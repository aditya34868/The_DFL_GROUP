import { Routes, Route } from "react-router-dom";
import { TalkModalProvider } from "./context/TalkModalContext";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Nav";
import Footer from "./components/Footer";
import TalkToUsModal from "./components/TalkToUsModal";
import FloatingTalkButton from "../src/drawer/FloatingTalkButton";
import Home from "./pages/Home";
import About from "./pages/About";
import Team from "./components/Team";
import OurPresence from './pages/OurPresence';
import Dfl_It from "./pages/Dfl_It";
import AirFreightForwarding from "./pages/AirFreightForwarding";
import Transportation from "./pages/Transportation";
import Ocean_Freight_Forwarding from "./pages/Ocean_Freight_Forwarding";
import Customer_Clearance from "./pages/Customer_Clearance";
import Warehousing from "./pages/Warehousing";
import AirFreight from "./pages/AirFreight";
import InlandTransport from "./pages/InlandTransport";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermAndCondition from "./pages/TermAndCondition";

export default function App() {
  return (
  
    <TalkModalProvider>
      <div className="min-h-screen bg-[#F8FAFC] font-sans text-[#0B132A] antialiased selection:bg-[#E66E19]/20 selection:text-[#E66E19]">
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team/>}/>
          <Route path='/ourPresence' element={<OurPresence/>}/>
          <Route path='/dflit' element={<Dfl_It/>}/>
          <Route path='/services/freight-forwarding' element={<AirFreightForwarding/>}/>
          <Route path='/services/transportation' element={<Transportation/>}/>
          <Route path='/services/ocean-freight' element={<Ocean_Freight_Forwarding/>}/>
          <Route path='/services/custom-clearance' element={<Customer_Clearance/>}/>
          <Route path='/services/warehousing' element={<Warehousing/>}/>
          <Route path='/inland-transport' element={<InlandTransport/>}/>
          <Route path='/air-freight-forwarding' element={<AirFreight/>}/>
          <Route path='/privacy-policy' element={<PrivacyPolicy/>}/>
          <Route path='/terms-conditions' element={<TermAndCondition/>}/>

        </Routes>
        <Footer/>
        <TalkToUsModal />
        <FloatingTalkButton />
      </div>
    </TalkModalProvider>
  );
}