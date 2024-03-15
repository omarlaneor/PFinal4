import React, { useState } from "react";

const Configuration = ({ onConfigurationChange }) => {
  const [configuration, setConfiguration] = useState({
    tamanoTexto: 16,
    idioma: "Español",
    color: "#FFA500",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setConfiguration({ ...configuration, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onConfigurationChange(configuration);
  };

  return (
    <div className="p-4 w-full flex justify-center items-center h-full">
      <div className="w-2/4">
        <h2 className="text-3xl font-semibold mb-8 mt-12">Configuración</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="tamanoTexto" className="block mb-2">
              Tamaño de texto:
            </label>
            <select
              id="tamanoTexto"
              name="tamanoTexto"
              value={configuration.tamanoTexto}
              onChange={handleChange}
              className="w-full"
            >
              {[12, 14, 16, 18, 20, 22, 24, 26, 28, 30].map((size) => (
                <option key={size} value={size}>{`${size}px`}</option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="idioma" className="block mb-2">
              Idioma:
            </label>
            <select
              id="idioma"
              name="idioma"
              value={configuration.idioma}
              onChange={handleChange}
              className="w-full"
            >
              <option value="Español">Español</option>
              <option value="Inglés">Inglés</option>
              <option value="Francés">Francés</option>
              <option value="Alemán">Alemán</option>
              <option value="Italiano">Italiano</option>
              <option value="Portugués">Portugués</option>
              <option value="Chino">Chino</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="color" className="block mb-2">
              Color:
            </label>
            <select
              id="color"
              name="color"
              value={configuration.color}
              onChange={handleChange}
              className="w-full"
            >
              <option value="#FFA500">Naranja</option>
              <option value="#007BFF">Azul</option>
              <option value="#28A745">Verde</option>
              <option value="#DC3545">Rojo</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="tipoFuente" className="block mb-2">
              Tipo de fuente:
            </label>
            <select
              id="tipoFuente"
              name="tipoFuente"
              value={configuration.tipoFuente}
              onChange={handleChange}
              className="w-full"
            >
              <option value="Arial">Arial</option>
              <option value="Verdana">Verdana</option>
              <option value="Helvetica">Helvetica</option>
              <option value="Times New Roman">Times New Roman</option>
              <option value="Courier New">Courier New</option>
              <option value="Georgia">Georgia</option>
            </select>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700 flex justify-end mt-3"
            >
              Aplicar cambios
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Configuration;
