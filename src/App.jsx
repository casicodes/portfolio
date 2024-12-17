import "./App.css";
import Home from "./pages/home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Motion from "./pages/motion";

function App() {
  return (
    <main className="py-24 max-w-[550px] mx-auto">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/motion" element={<Motion />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
