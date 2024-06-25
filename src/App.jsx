import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/Home/About";
import Home from "./page/Home";
import Packages from "./page/Packages";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/packages/:id" element={<Packages />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
