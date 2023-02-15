import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import Aboutpage from "./components/Aboutpage";
import Servicespage from "./components/Servicespage";
import Productspage from "./components/Productspage";
import Contactpage from "./components/Contactpage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="About" element={<Aboutpage />} />
        <Route path="Services" element={<Servicespage />} />
        <Route path="Product" element={<Productspage />} />
        <Route path="Contact" element={<Contactpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
