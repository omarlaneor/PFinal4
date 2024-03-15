import React, { useState, useEffect } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const Roles = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    rol: "",
    fechacreacion: "",
    fechamodificacion: "",
    estado: "",
    cambiar_estado: "",
  });
  const [rolsData, setRolsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [rolsPerPage] = useState(8);
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
    setCurrentPage(1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = formData;

    try {
      const response = await fetch("http://127.0.0.1:8000/api/rols", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Error al registrar el rol");
      }

      const responseData = await response.json();
      // Agregar el nuevo rol a los datos existentes
      setRolsData([...rolsData, responseData]);

      // Obtener los datos actualizados de la API
      const updatedRolsResponse = await fetch("http://127.0.0.1:8000/api/rols");
      const updatedRolsData = await updatedRolsResponse.json();
      // Actualizar el estado con los datos actualizados
      setRolsData(updatedRolsData);

      closeModal();
      setFormData({
        rol: "",
        fechacreacion: "",
        fechamodificacion: "",
        estado: "",
        cambiar_estado: "",
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
    const fetchRolsData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/rols");
        const data = await response.json();
        setRolsData(data);
      } catch (error) {
        console.error("Error al obtener datos de la API:", error);
      }
    };

    fetchRolsData();
  }, []);

  const indexOfLastUser = currentPage * rolsPerPage;
  const indexOfFirstUser = indexOfLastUser - rolsPerPage;
  const filteredRols = rolsData.filter(
    (rol) =>
      rol && rol.rol && rol.rol.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const currentRols = filteredRols.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-8">Información de Roles</h2>

      <div className="mb-4 flex justify-between">
        <button
          onClick={openModal}
          className="bg-green-500 text-white py-2 px-4 mb-4"
        >
          Agregar Rol
        </button>

        <div className="mb-4 w-1/4">
          <input
            type="text"
            placeholder="Buscar rol..."
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
              Rol
            </th>
            <th className="py-2 px-4 border-b border-orange-500 text-center">
              Fecha de Creación
            </th>
            <th className="py-2 px-4 border-b border-orange-500 text-center">
              Fecha de Modificación
            </th>
            <th className="py-2 px-4 border-b border-orange-500 text-center">
              Estado
            </th>
            <th className="py-2 px-4 border-b border-orange-500 text-center">
              Cambiar Estado
            </th>
          </tr>
        </thead>
        <tbody>
          {currentRols.map((rols) => (
            <tr key={rols.id}>
              <td className="py-2 px-4 border-b border-orange-500 text-center">
                {rols.id}
              </td>
              <td className="py-2 px-4 border-b border-orange-500 text-center">
                {rols.rol}
              </td>
              <td className="py-2 px-4 border-b border-orange-500 text-center">
                {rols.fechacreacion}
              </td>
              <td className="py-2 px-4 border-b border-orange-500 text-center">
                {rols.fechamodificacion}
              </td>
              <td className="py-2 px-4 border-b border-orange-500 text-center">
                {rols.estado}
              </td>
              <td className="py-2 px-4 border-b border-orange-500 text-center">
                {rols.cambiar_estado}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {filteredRols.length > rolsPerPage && (
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
            disabled={indexOfLastUser >= filteredRols.length}
            className="bg-green-500 text-white py-2 px-4 hover:bg-green-600"
          >
            Siguiente
          </button>
        </div>
      )}

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Agregar Rol"
        style={{
          content: {
            width: "600px",
            height: "650px",
            margin: "auto",
            backgroundColor: "#fff",
          },
        }}
      >
        <h2 className="mb-2 text-lg">Agregar Rol</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Rol:
            </label>
            <input
              type="text"
              name="rol"
              value={formData.rol}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Fecha de Creación:
            </label>
            <input
              type="date"
              name="fechacreacion"
              value={formData.fechacreacion}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Fecha de Modificación:
            </label>
            <input
              type="date"
              name="fechamodificacion"
              value={formData.fechamodificacion}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Estado:
            </label>
            <input
              type="text"
              name="estado"
              value={formData.estado}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Cambiar Estado:
            </label>
            <input
              type="text"
              name="cambiar_estado"
              value={formData.cambiar_estado}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-green-500 text-white py-2 px-4 rounded"
          >
            Agregar
          </button>
        </form>
      </Modal>
    </div>
  );
};
export default Roles;
