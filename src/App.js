import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Maladies from "./pages/Maladies";
import { Logout } from "./components/Logout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<Register as="patient" />} />
        <Route path="/doctor-register" element={<Register as="doctor" />} />
        <Route path="/maladies" element={<Maladies page="list" />} />
        <Route path="/maladies/id" element={<Maladies page="description" />} />
        <Route path="/maladies/add" element={<Maladies page="add" />} />
        <Route path="/maladies/modify" element={<Maladies page="modify" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
