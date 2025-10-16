import React from "react";
import { Routes, Route, Link } from "react-router-dom";
/* import Home from "./components/Home"; */
import Register from "./pages/RegisterPage";
import PersonalInfo from "./components/PersonalInfo";
import ContactInfo from "./components/ContactInfo";
import Confirmation from "./components/Confirmation";
import './App.css'

function App() {
  return (
      <div className="app">
        <nav style={{ padding: "20px", borderBottom: "1px solid #ccc" }}>
          <Link to="/" style={{ marginRight: "15px" }}>Inicio</Link>
          <Link to="/register/personal"  >Registrarse</Link>

        </nav>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
            <Route path="/register" element={<Register />}>
            <Route path="personal" element={<PersonalInfo />} />
            <Route path="contact" element={<ContactInfo />} />
            <Route path="confirmation" element={<Confirmation />} />
          </Route>
        </Routes>
      </div>
  );
}
export default App;
