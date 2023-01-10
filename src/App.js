import "./App.css";
import Aboutpage from "./pages/Aboutpage";
import Homepage from "./pages/Homepage";
import Loginpage from "./pages/Loginpage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Loginpage />} />
        <Route path="/about" element={<Aboutpage />} />
      </Routes>
    </>
  );
}

export default App;
