import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Navbar from "./assets/Components/Navbar";
import Footer from "./assets/Components/Footer";

function App() {
  return (
    <>
      <div
        id="Navbar-container"
        className="flex flex-col justify-center items-center w-full h-[12vh] max-md:h-[7vh]"
      >
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/events" element={<Events />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/team" element={<OurTeam />} /> */}
        
      </Routes>
      <Footer />
    </>
  );
}

export default App;
