import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUsers,
  faUser,
  faClipboard,
  faCog,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import logoImage from "../../../../public/Logo.png";

const Sidebar = ({ onItemClick }) => {
  return (
    <aside className="bg-gradient-to-b from-orange-500 to-orange-900 text-white p-4 h-full">
      <div className="mb-4">
        <img src={logoImage} alt="Logo" className="w-74 h-44" />
      </div>

      <div className="mb-4 flex items-center mt-8">
        <div className="rounded-full overflow-hidden mr-2">
          <FontAwesomeIcon icon={faUserCircle} className="w-12 h-12" />
        </div>
        <p className="text-lg font-semibold">Administrador</p>
      </div>

      <hr className="mb-4 border-t border-orange-400" />
      <ul>
        <li className="mb-2 font-semibold text-lg">
          <a
            href="#"
            className="hover:bg-green-700 p-2 rounded block w-full"
            onClick={() => onItemClick("welcome")}
          >
            <FontAwesomeIcon icon={faHome} className="mr-2" />
            Dashboard
          </a>
        </li>

        <hr className="mb-4 border-t border-orange-400" />

        <li className="mb-2 font-semibold text-lg">
          <a
            href="#"
            className="hover:bg-green-700 p-2 rounded block w-full"
            onClick={() => onItemClick("usuarios")}
          >
            <FontAwesomeIcon icon={faUsers} className="mr-2" />
            Usuarios
          </a>
        </li>

        <hr className="mb-4 border-t border-orange-400" />

        <li className="mb-2 font-semibold text-lg">
          <a
            href="#"
            className="hover:bg-green-700 p-2 rounded block w-full"
            onClick={() => onItemClick("roles")}
          >
            <FontAwesomeIcon icon={faUser} className="mr-2" />
            Roles
          </a>
        </li>

        <hr className="mb-4 border-t border-orange-400" />

        <li className="mb-2 font-semibold text-lg">
          <a
            href="#"
            className="hover:bg-green-700 p-2 rounded block w-full"
            onClick={() => onItemClick("paginas")}
          >
            <FontAwesomeIcon icon={faUser} className="mr-2" />
            Páginas
          </a>
        </li>

        <hr className="mb-4 border-t border-orange-400" />

        <li className="mb-2 font-semibold text-lg">
          <a
            href="#"
            className="hover:bg-green-700 p-2 rounded block w-full"
            onClick={() => onItemClick("bitacoras")}
          >
            <FontAwesomeIcon icon={faUser} className="mr-2" />
            Bitácoras
          </a>
        </li>

        <hr className="mb-4 border-t border-orange-400" />

        <li className="mb-2 font-semibold text-lg">
          <a
            href="#"
            className="hover:bg-green-700 p-2 rounded block w-full"
            onClick={() => onItemClick("configuration")}
          >
            <FontAwesomeIcon icon={faUser} className="mr-2" />
            Configuración
          </a>
        </li>

        <hr className="mb-4 border-t border-orange-400" />
      </ul>
    </aside>
  );
};

export default Sidebar;
