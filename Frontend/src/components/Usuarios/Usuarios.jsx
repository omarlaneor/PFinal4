import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

Modal.setAppElement("#root");

const Usuarios = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    usuario: "",
    nombre: "",
    apellido: "",
    email: "",
    fecha: "",
    idrol: "",
  });
  const [usuariosData, setUsuariosData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(8);
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = formData;

    try {
      const response = await fetch("http://127.0.0.1:8000/api/usuarios", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Error al registrar el usuario");
      }

      const responseData = await response.json();
      setUsuariosData([...usuariosData, responseData]);
      const updatedUsuariosResponse = await fetch(
        "http://127.0.0.1:8000/api/usuarios"
      );
      const updatedUsuariosData = await updatedUsuariosResponse.json();
      setUsuariosData(updatedUsuariosData);

      closeModal();
      setFormData({
        usuario: "",
        nombre: "",
        apellido: "",
        email: "",
        fecha: "",
        idrol: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const fetchUsuariosData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/usuarios");
        const data = await response.json();
        setUsuariosData(data);
      } catch (error) {
        console.error("Error al obtener datos de la API:", error);
      }
    };

    fetchUsuariosData();
  }, []);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const filteredUsers = usuariosData.filter(
    (user) =>
      user.usuario &&
      user.usuario.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-8">Información de usuarios</h2>

      <div className="mb-4 flex justify-between">
        <button
          onClick={openModal}
          className="bg-green-500 text-white py-2 px-4 mb-4"
        >
          Agregar Usuario
        </button>

        <div className="mb-4 w-1/4">
          <input
            type="text"
            placeholder="Buscar usuario..."
            value={searchTerm}
            onChange={handleSearch}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
      </div>

      <table className="min-w-full bg-orange-300 border border-collapse border-orange-500">
        <thead className="bg-orange-500">
          <tr>
            <th className="py-2 px-4 border-b border-orange-500 text-center">
              Id
            </th>
            <th className="py-2 px-4 border-b border-orange-500 text-center">
              Usuario
            </th>
            <th className="py-2 px-4 border-b border-orange-500 text-center">
              Nombre
            </th>
            <th className="py-2 px-4 border-b border-orange-500 text-center">
              Apellido
            </th>
            <th className="py-2 px-4 border-b border-orange-500 text-center">
              E-mail
            </th>
            <th className="py-2 px-4 border-b border-orange-500 text-center">
              Fecha
            </th>
            <th className="py-2 px-4 border-b border-orange-500 text-center">
              Rol_Id
            </th>
            <th className="py-2 px-4 border-b border-orange-500 text-center">
              Acciones
            </th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((usuario) => (
            <tr key={usuario.id}>
              <td className="py-2 px-4 border-b border-orange-500 text-center">
                {usuario.id}
              </td>
              <td className="py-2 px-4 border-b border-orange-500 text-center">
                {usuario.usuario}
              </td>
              <td className="py-2 px-4 border-b border-orange-500 text-center">
                {usuario.nombre}
              </td>
              <td className="py-2 px-4 border-b border-orange-500 text-center">
                {usuario.apellido}
              </td>
              <td className="py-2 px-4 border-b border-orange-500 text-center">
                {usuario.email}
              </td>
              <td className="py-2 px-4 border-b border-orange-500 text-center">
                {usuario.fecha}
              </td>
              <td className="py-2 px-4 border-b border-orange-500 text-center">
                {usuario.idrol}
              </td>
              <td className="py-2 px-4 border-b border-orange-500 text-center">
                <FontAwesomeIcon
                  icon={faEdit}
                  className="text-blue-500 mr-2 cursor-pointer"
                />
                <FontAwesomeIcon
                  icon={faTrash}
                  className="text-red-500 cursor-pointer"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {filteredUsers.length > usersPerPage && (
        <div className="flex justify-center mt-4">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className="bg-green-500 text-white py-2 px-4 mr-2 hover:bg-green-600"
          >
            Anterior
          </button>
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={indexOfLastUser >= filteredUsers.length}
            className="bg-green-500 text-white py-2 px-4 hover:bg-green-600"
          >
            Siguiente
          </button>
        </div>
      )}

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Agregar Usuario"
        style={{
          content: {
            width: "600px",
            height: "650px",
            margin: "auto",
            backgroundColor: "#fff",
          },
        }}
      >
        <h2 className="mb-2 text-lg">Agregar Usuario</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Usuario:
            </label>
            <input
              type="text"
              name="usuario"
              value={formData.usuario}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Nombre:
            </label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Apellido:
            </label>
            <input
              type="text"
              name="apellido"
              value={formData.apellido}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email:
            </label>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Fecha:
            </label>
            <input
              type="date"
              name="fecha"
              value={formData.fecha}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Rol Id:
            </label>
            <input
              type="text"
              name="idrol"
              value={formData.idrol}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md"
          >
            Agregar
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default Usuarios;
