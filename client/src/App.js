import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Info from "./pages/info/Info";
import Farming from "./pages/farming/Farming";
import Sensor from "./pages/sensor/Sensor";
import './App.css';
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";
// import AboutUs from "./components/aboutUs/AboutUs";
// import ContactUs from "./components/contactUs/ContactUs";

function App() {
  
  return (
    <BrowserRouter>
       <Routes>
          <Route path="/" element = {<ProtectedRoute><Home /></ProtectedRoute>}  />
          <Route path = "/login" element = {<ProtectedRoute><Login /></ProtectedRoute>} />
          <Route path = "/info" element = {<ProtectedRoute><Info /></ProtectedRoute>} />
          <Route path = "/farming" element = {<ProtectedRoute><Farming /></ProtectedRoute>} />
          <Route path = "/sensor" element = {<Sensor />} />
       </Routes>
    </BrowserRouter>
  
  );
}

export default App;
