import { useState } from "react";

export default function CategoriaItem({
  categoria,
  handleEditar,
  handleExcluir,
}) {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <>
      <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded shadow-sm flex justify-between items-center">
        <p className="text-black dark:text-white font-medium">
          {categoria.nome}
        </p>

        <div className="flex gap-2">
          <button
            onClick={openModal}
            className="px-3 py-1 bg-green-500 hover:bg-green-600 text-white text-sm rounded"
          >
            <i className="bx bx-info-circle"></i>
          </button>
          <button
            onClick={() => handleEditar(categoria)}
            className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white text-sm rounded"
          >
            <i className="bx bx-edit"></i>
          </button>
          <button
            onClick={() => handleExcluir(categoria._id)}
            className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white text-sm rounded"
          >
            <i className="bx bx-trash"></i>
          </button>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-6 w-full max-w-md mx-4 relative">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 border-b pb-2">
              Detalhes da Categoria
            </h2>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
              <li>
                <span className="font-medium">Nome:</span> {categoria.nome}
              </li>
              {/* Adicione outros dados se tiver, como descrição, data de criação, etc. */}
            </ul>

            <div className="mt-6 flex justify-end">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-purple-700 hover:bg-purple-800 text-white rounded-lg"
              >
                Fechar
              </button>
            </div>

            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-200"
              aria-label="Fechar"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
