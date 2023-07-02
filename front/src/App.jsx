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
import Admin from "./components/Admin/Admin";
import { FixedContext } from "./contexts/FixedContext";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";
import TermsOfUse from "./components/TermsOfUse/TemrsOfUse";
import AdminLogin from "./components/AdminLogin/AdminLogin";

function App() {

  const [isNavigating, setIsNavigating] = useState(false);
  const [fix, setFix] = useState(true)

  return (
    <div id="app-container">
      <FixedContext.Provider value={{ fix, setFix }}>
        <Routes>
          <Route
            path="/"
            element={
              <div id="outlet-container">
                <Header />
                <Fixed setIsNavigating={setIsNavigating} />
                <div id="outlet-inner">
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
            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/jk2l3s4j52da12a57lk9jf" element={<Admin />} />
            <Route path="/termsOfUse" element={<TermsOfUse />} />
            <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
          </Route>
        </Routes>
      </FixedContext.Provider>
    </div>
  );
}

export default App;
