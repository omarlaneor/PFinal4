// Dashboard.jsx
import React, { useState } from "react";
import Sidebar from "./Sidebar/Sidebar";
import NavBar from "./NavBar/NavBar";
import Bitacoras from "../Bitacoras/Bitacoras";
import Usuarios from "../Usuarios/Usuarios";
import Roles from "../Roles/Roles";
import Configuration from "../Configuration/Configuration";
import Welcome from "../Welcome/Welcome";
import Paginas from "../Paginas/Paginas";

const Dashboard = () => {
  const [content, setContent] = useState("welcome");

  const handleSidebarItemClick = (contentName) => {
    setContent(contentName);
  };

  return (
    <div className="bg-purple-100 h-screen flex">
      <Sidebar onItemClick={handleSidebarItemClick} />
      <div className="flex flex-col flex-1">
        <NavBar />
        <div className="ml-8 p-8">
          <h1 className="text-2xl font-bold mb-4">
            Gestión de Datos por Usuario
          </h1>
          <h1 className="text-2xl font-bold mb-4">Bienvenido</h1>
          <hr className="mb-4 w-full border-purple-200 border-2 rounded-full" />

          {content === "welcome" && <Welcome />}
          {content === "bitacoras" && <Bitacoras />}
          {content === "usuarios" && <Usuarios />}
          {content === "roles" && <Roles />}
          {content === "configuration" && <Configuration />}
          {content === "paginas" && <Paginas />}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
