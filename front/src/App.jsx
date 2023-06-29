import { Route, Routes, Outlet } from "react-router-dom";
import "./App.scss";
import Homepage from "./components/Homepage.jsx/Homepage";
import Contact from "./components/Contact/Contact";
import Seniors from "./components/Seniors/Seniors";
import Cyberpro from "./components/Cyberpro/Cyberpro";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Fixed from "./components/Fixed/Fixed";
import { useState } from "react";
import TermsOfUse from "./components/TermsOfUse/TermsOfUse.JSX";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";

function App() {
  const [isNavigating, setIsNavigating] = useState(false);

  return (
    <div id="app-container">
      <Routes>
        <Route
          path="/"
          element={
            <div id="outlet-container">
              <Header />
              <Fixed setIsNavigating={setIsNavigating} />
              <div style={{ top: "10vh", position: "absolute" }}>
                <Outlet />
                <Footer />
              </div>
            </div>
          }
        >
          <Route
            index
            element={
              <Homepage
                isNavigating={isNavigating}
                setIsNavigating={setIsNavigating}
              />
            }
          />
          <Route path="/cyberpro" element={<Cyberpro />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/seniors" element={<Seniors />} />
          <Route path="/termsOfUse" element={<TermsOfUse />} />
          <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
