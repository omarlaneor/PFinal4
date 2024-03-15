import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Realizar la solicitud de inicio de sesión al servidor
      const response = await fetch("http://127.0.0.1:8000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.access_token);
        onLogin();
        navigate("/dashboard");
      } else {
        console.error("Error al iniciar sesión:", data.error);
      }
    } catch (error) {
      console.error(
        "Error al procesar la solicitud de inicio de sesión:",
        error
      );
    }
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();

    try {
      // Realizar la solicitud de registro al servidor
      const response = await fetch("http://127.0.0.1:8000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }), // Incluir el nombre en la solicitud de registro
      });

      const data = await response.json();

      if (response.ok) {
        // Si el registro es exitoso, también iniciar sesión
        localStorage.setItem("token", data.access_token);
        onLogin();
      } else {
        console.error("Error al registrar usuario:", data.error);
      }
    } catch (error) {
      console.error("Error al procesar la solicitud de registro:", error);
    }
  };

  return (
    <div className="flex bg-gray-600 h-screen">
      <div className="logo flex items-center justify-center w-3/4">
        <img src="/Logo.png" alt="Logo de la empresa" className="w-96" />
      </div>

      <div className="absolute top-0 right-0 w-1/4 flex flex-col items-center bg-gradient-to-b from-orange-400 to-orange-800 p-4 h-screen">
        <h1 className="mt-20 text-3xl">Iniciar sesión</h1>
        <form
          className="flex-1 flex flex-col justify-center px-4"
          onSubmit={handleSubmit}
        >
          <label className="mb-4">
            E-mail:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </label>
          <label className="mb-4">
            Contraseña:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </label>
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-300 text-white py-2 px-4 rounded-md transition-colors duration-300"
          >
            Ingresar
          </button>
        </form>
        <p className="mb-2">
          <a href="#">¿Olvidó su contraseña?</a>
        </p>
        <p>
          <span>¿Usuario nuevo? </span>
          <a
            href="#"
            className="text-white"
            onClick={() => setShowRegisterModal(true)}
          >
            ¡Regístrese aquí!
          </a>
        </p>
      </div>

      {/* Modal de registro */}
      {showRegisterModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-2xl font-semibold mb-4">Registro</h2>
            <form onSubmit={handleRegisterSubmit}>
              <label className="mb-6">
                Nombre:
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-80 px-3 py-2 border rounded-md mb-4 mt-2"
                  required
                />
              </label>
              <label className="mb-6">
                E-mail:
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-80 px-3 py-2 border rounded-md mb-4 mt-2"
                  required
                />
              </label>
              <label className="mt-6">
                Contraseña:
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-80 px-3 py-2 border rounded-md mb-4 mt-2"
                  required
                />
              </label>

              <div className="flex justify-end mt-6">
                <button
                  type="submit"
                  className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded-md transition-colors duration-300"
                >
                  Registrar
                </button>
                <button
                  className="bg-gray-400 hover:bg-purple-500 text-gray-800 py-2 px-4 rounded-md ml-2"
                  onClick={() => setShowRegisterModal(false)}
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
