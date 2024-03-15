import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faCalendar,
  faCog,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [planningOpen, setPlanningOpen] = useState(false);
  const [myPlaceOpen, setMyPlaceOpen] = useState(false);
  const handleLogout = () => {
    fetch("http://127.0.0.1:8000/api/auth/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({}),
    }).then((response) => {
      if (!response.ok) {
        window.location.href = "/login";
      } else {
        console.log("¡Error al cerrar la sesión!");
      }
    });

    // Limpiar historial de navegación
    window.history.replaceState({}, document.title, "/login");
    window.location.href = "/login";
  };

  const handleNotificationsToggle = () => {
    setNotificationsOpen(!notificationsOpen);
    setPlanningOpen(false);
    setMyPlaceOpen(false);
  };

  const handlePlanningToggle = () => {
    setPlanningOpen(!planningOpen);
    setNotificationsOpen(false);
    setMyPlaceOpen(false);
  };

  const handleMyPlaceToggle = () => {
    setMyPlaceOpen(!myPlaceOpen);
    setNotificationsOpen(false);
    setPlanningOpen(false);
  };

  return (
    <nav className="bg-orange-950 p-4 flex justify-between items-center">
      <div className="flex items-center ml-auto">
        <div className="mr-6 relative">
          <button
            className="text-white p-2 rounded text-lg font-bold flex items-center transition-transform transform-gpu hover:scale-110"
            onClick={handleNotificationsToggle}
          >
            <FontAwesomeIcon icon={faBell} className="mr-2" /> Notificaciones
          </button>
          {notificationsOpen && (
            <div className="absolute bg-white-200 border border-orange-950 text-gray-800 rounded mt-6 right-0 w-40 h-30">
              <ul>
                <li className="hover:bg-green-600 p-2">
                  <a href="#">Mensajes nuevos</a>
                </li>
                <li className="hover:bg-green-600 p-2">
                  <a href="#">Buzón de entrada</a>
                </li>
                <li className="hover:bg-green-600 p-2">
                  <a href="#">Buzón de salida</a>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="mr-6 relative">
          <button
            className="text-white p-2 rounded text-lg font-bold flex items-center transition-transform transform-gpu hover:scale-110"
            onClick={handlePlanningToggle}
          >
            <FontAwesomeIcon icon={faCalendar} className="mr-2" /> Planeación
          </button>
          {planningOpen && (
            <div className="absolute bg-white-200 border border-orange-950 text-gray-800 rounded mt-6 right-0 w-40 h-30">
              <ul>
                <li className="hover:bg-green-600 p-2">
                  <a
                    href="https://www.festivos.com.co/calendario"
                    target="_blank"
                  >
                    Calendario
                  </a>
                </li>
                <li className="hover:bg-green-600 p-2">
                  <a href="#">Descargar PDF</a>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="mr-6 relative">
          <button
            className="text-white p-2 rounded text-lg font-bold flex items-center transition-transform transform-gpu hover:scale-110"
            onClick={handleMyPlaceToggle}
          >
            <FontAwesomeIcon icon={faCog} className="mr-2" /> My Place
          </button>
          {myPlaceOpen && (
            <div className="absolute bg-white-200 border border-orange-950 text-gray-800 rounded mt-6 right-0 w-40 h-30">
              <ul>
                <li className="hover:bg-green-600 p-2">
                  <a href="https://github.com/omarlaneor" target="_blank">
                    GitHub
                  </a>
                </li>
                <li className="hover:bg-green-600 p-2">
                  <a href="https://www.estudiantefunval.org/" target="_blank">
                    Funval Internacional
                  </a>
                </li>
                <hr className="border-t border-orange-950" />
                <div className="mr-6 ">
                  <button
                    className="hover:bg-green-600 p-2 w-40 text-left"
                    onClick={handleLogout}
                  >
                    <FontAwesomeIcon icon={faSignOutAlt} /> Cerrar Sesión
                  </button>
                </div>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
