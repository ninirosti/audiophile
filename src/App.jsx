import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import InfoSection from "./components/InfoSection"; // 👈 import it
import infoImg from "./assets/info.png"; // 👈 your PNG
import Home from "./pages/Home";

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add product pages later */}
      </Routes>

      {/* 👇 This will appear on EVERY page */}
      <InfoSection image={infoImg} />

      <Footer />
    </Router>
  );
}
