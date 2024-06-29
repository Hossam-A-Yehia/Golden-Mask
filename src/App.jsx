import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/Home/About";
import Home from "./page/Home";
import Packages from "./page/Packages";
import PackageDetails from "./page/PackageDetails";
import Profile from "./page/Profile";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/packages/:id" element={<PackageDetails />} />
        <Route path="/profile/:id" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
