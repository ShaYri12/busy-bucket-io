import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsofService from "./pages/TermsofService";
import CookiePolicy from "./pages/CookiePolicy";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsofService />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
