import "./App.css";
import Home from "./pages/home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Motion from "./pages/motion";
import AmrMobile from "./pages/amr-mobile";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <main className="px-4 py-24 max-w-[620px] mx-auto">
      {/* <div className="noise-bg"></div> */}
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/motion" element={<Motion />} />
          <Route path="/amr-mobile" element={<AmrMobile />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
