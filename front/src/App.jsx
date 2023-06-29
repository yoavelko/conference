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
          <Route path="/admin" element={<Admin/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
