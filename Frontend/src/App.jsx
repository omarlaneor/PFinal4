import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Bitacoras from "./components/Bitacoras/Bitacoras";
import Dashboard from "./components/Dashboard/Dashboard";
import Usuarios from "./components/Usuarios/Usuarios";
import Roles from "./components/Roles/Roles";
import Configuration from "./components/Configuration/Configuration";
import Welcome from "./components/Welcome/Welcome";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login onLogin={handleLogin} />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />{" "}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/app/welcome" element={<Welcome />} />
        <Route path="/app/bitacoras" element={<Bitacoras />} />
        <Route path="/app/usuarios" element={<Usuarios />} />
        <Route path="/app/roles" element={<Roles />} />
        <Route path="/app/configuration" element={<Configuration />} />
        {/* Agrega más rutas según sea necesario */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
