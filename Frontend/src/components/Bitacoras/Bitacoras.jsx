import React, { useState, useEffect } from "react";

const Bitacoras = () => {
  const [bitacorasData, setBitacorasData] = useState([]);
  const [usersData, setUsersData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [bitacorasPerPage] = useState(8);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchBitacorasData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/bitacoras");
        const data = await response.json();
        setBitacorasData(data);
      } catch (error) {
        console.error("Error al obtener datos de la API:", error);
      }
    };

    const fetchUsersData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/usuarios");
        const data = await response.json();
        setUsersData(data);
      } catch (error) {
        console.error("Error al obtener datos de la API de usuarios:", error);
      }
    };

    fetchBitacorasData();
    fetchUsersData();
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const indexOfLastUser = currentPage * bitacorasPerPage;
  const indexOfFirstUser = indexOfLastUser - bitacorasPerPage;
  const filteredBitacoras = bitacorasData.filter(
    (bitacora) =>
      bitacora &&
      bitacora.descripcion &&
      bitacora.descripcion.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const currentBitacoras = filteredBitacoras.slice(
    indexOfFirstUser,
    indexOfLastUser
  );

  const getUserNameById = (userId) => {
    const user = usersData.find((user) => user.id === userId);
    return user ? `${user.nombre} ${user.apellido}` : "Usuario desconocido";
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-8">Bitácoras</h2>
      <div className="flex justify-end w-full">
        <div className="mb-4 w-1/4">
          <input
            type="text"
            placeholder="Buscar descripción..."
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
              Fecha
            </th>
            <th className="py-2 px-4 border-b border-orange-500 text-center">
              Hora
            </th>
            <th className="py-2 px-4 border-b border-orange-500 text-center">
              Descripción
            </th>
            <th className="py-2 px-4 border-b border-orange-500 text-center">
              Usuario
            </th>
          </tr>
        </thead>
        <tbody>
          {currentBitacoras.map((bitacora) => (
            <tr key={bitacora.id}>
              <td className="py-2 px-4 border-b border-orange-500 text-center">
                {bitacora.id}
              </td>
              <td className="py-2 px-4 border-b border-orange-500 text-center">
                {bitacora.fecha}
              </td>
              <td className="py-2 px-4 border-b border-orange-500 text-center">
                {bitacora.hora}
              </td>
              <td className="py-2 px-4 border-b border-orange-500 text-center">
                {bitacora.descripcion}
              </td>
              <td className="py-2 px-4 border-b border-orange-500 text-center">
                {getUserNameById(bitacora.usuario)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
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
          disabled={indexOfLastUser >= filteredBitacoras.length}
          className="bg-green-500 text-white py-2 px-4 hover:bg-green-600"
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default Bitacoras;
