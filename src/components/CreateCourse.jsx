import { useState } from "react";

export default function CreateCourse() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    if (file) {
      formData.append("file", file);
    }

    try {
      const response = await fetch("https://beauty-website-backend.onrender.com/courses/create", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      alert("Curso creado con éxito");
      // redireccionar si es necesario
    } catch (error) {
      console.error("Error al crear curso", error);
    }
  };

  return (
    <section className="min-h-screen bg-[#FDEAF3] p-8">
      <div className="max-w-5xl mx-auto bg-white rounded-xl p-8 flex flex-col md:flex-row gap-10 items-center shadow-lg">
        {/* Subida de archivo */}
        <div className="w-full md:w-1/2 text-center border-2 border-dashed border-purple-300 p-6 rounded-lg">
          <label className="block text-purple-600 font-semibold mb-2">
            Upload File
          </label>
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            className="w-full"
          />
          {file && (
            <p className="mt-4 text-purple-500 font-medium">
              {file.name}
            </p>
          )}
        </div>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="w-full md:w-1/2 space-y-4">
          <div>
            <label className="block text-pink-600 font-bold mb-1">Nombre del curso</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border-b border-gray-400 outline-none p-1"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm">Descripción del curso</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border rounded p-2"
              rows={4}
              required
            />
          </div>

          <div className="flex gap-4 mt-4">
            <button
              type="submit"
              className="bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition"
            >
              Crear Curso
            </button>
            <button
              type="button"
              onClick={() => window.history.back()}
              className="border border-pink-500 text-pink-500 px-6 py-2 rounded-full hover:bg-pink-100 transition"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
