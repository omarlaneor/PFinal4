import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

Modal.setAppElement("#root");

const Paginas = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    descripcion: "",
    url: "",
    usuario_creacion: "",
    fecha_creacion: "",
    fecha_modificacion: "",
  });
  const [paginasData, setPaginasData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pagesPerPage] = useState(8);
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
      const response = await fetch("http://127.0.0.1:8000/api/paginas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Error al registrar la página");
      }

      const responseData = await response.json();
      setPaginasData([...paginasData, responseData]);
      const updatedPaginasResponse = await fetch(
        "http://127.0.0.1:8000/api/paginas"
      );
      const updatedPaginasData = await updatedPaginasResponse.json();
      setPaginasData(updatedPaginasData);

      closeModal();
      setFormData({
        nombre: "",
        descripcion: "",
        url: "",
        usuario_creacion: "",
        fecha_creacion: "",
        fecha_modificacion: "",
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
    const fetchPaginasData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/paginas");
        const data = await response.json();
        setPaginasData(data);
      } catch (error) {
        console.error("Error al obtener datos de la API:", error);
      }
    };

    fetchPaginasData();
  }, []);

  const indexOfLastUser = currentPage * pagesPerPage;
  const indexOfFirstUser = indexOfLastUser - pagesPerPage;
  const filteredPaginas = paginasData.filter(
    (pagina) =>
      pagina.nombre &&
      pagina.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const currentPaginas = filteredPaginas.slice(
    indexOfFirstUser,
    indexOfLastUser
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-8">Información de páginas</h2>

      <div className="mb-4 flex justify-between">
        <button
          onClick={openModal}
          className="bg-green-500 text-white py-2 px-4 mb-4"
        >
          Agregar Página
        </button>

        <div className="mb-4 w-1/4">
          <input
            type="text"
            placeholder="Buscar página..."
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
              Nombre
            </th>
            <th className="py-2 px-4 border-b border-orange-500 text-center">
              Descripción de la Página
            </th>
            <th className="py-2 px-4 border-b border-orange-500 text-center">
              URL
            </th>
            <th className="py-2 px-4 border-b border-orange-500 text-center">
              Usuario Creador
            </th>
            <th className="py-2 px-4 border-b border-orange-500 text-center">
              Fecha Creación
            </th>
            <th className="py-2 px-4 border-b border-orange-500 text-center">
              Fecha Modificación
            </th>
          </tr>
        </thead>
        <tbody>
          {currentPaginas.map((pagina) => (
            <tr key={pagina.id}>
              <td className="py-2 px-4 border-b border-orange-500 text-center">
                {pagina.id}
              </td>
              <td className="py-2 px-4 border-b border-orange-500 text-center">
                {pagina.nombre}
              </td>
              <td className="py-2 px-4 border-b border-orange-500 text-center">
                {pagina.descripcion}
              </td>
              <td className="py-2 px-4 border-b border-orange-500 text-center">
                {pagina.url}
              </td>
              <td className="py-2 px-4 border-b border-orange-500 text-center">
                {pagina.usuario_creacion}
              </td>
              <td className="py-2 px-4 border-b border-orange-500 text-center">
                {pagina.fecha_creacion}
              </td>
              <td className="py-2 px-4 border-b border-orange-500 text-center">
                {pagina.fecha_modificacion}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {filteredPaginas.length > pagesPerPage && (
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
            disabled={indexOfLastUser >= filteredPaginas.length}
            className="bg-green-500 text-white py-2 px-4 hover:bg-green-600"
          >
            Siguiente
          </button>
        </div>
      )}

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Agregar Página"
        style={{
          content: {
            width: "600px",
            height: "650px",
            margin: "auto",
            backgroundColor: "#fff",
          },
        }}
      >
        <h2 className="mb-2 text-lg">Agregar Página</h2>
        <form onSubmit={handleSubmit}>
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
              Descripción:
            </label>
            <input
              type="text"
              name="descripcion"
              value={formData.descripcion}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              URL:
            </label>
            <input
              type="text"
              name="url"
              value={formData.url}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Usuario Creador:
            </label>
            <input
              type="text"
              name="usuario_creacion"
              value={formData.usuario_creacion}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Fecha creación:
            </label>
            <input
              type="date"
              name="fecha_creacion"
              value={formData.fecha_creacion}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Fecha Modificación:
            </label>
            <input
              type="date"
              name="fecha_modificacion"
              value={formData.fecha_modificacion}
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

export default Paginas;
