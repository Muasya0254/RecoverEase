import {Routes, Route, Navigate} from "react-router-dom";
import Home from "./components/Home"
import LogIn from "./components/LogIn";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<LogIn/>} />
    </Routes>
  );
};

export default Routers;
