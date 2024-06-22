import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/Home/About";
import Home from "./page/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
