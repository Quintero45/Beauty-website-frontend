import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Perfil() {
  const [usuario, setUsuario] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUsuario(JSON.parse(storedUser));
    }
  }, []);

  if (!user) {
    return <p className="text-center mt-10">Cargando perfil...</p>;
  }

  return (
    <section className="bg-[#FFEEF5] min-h-screen px-6 py-10">
      <div className="max-w-5xl mx-auto">
        {/* Datos personales */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-10">
          <h2 className="text-pink-700 text-xl font-semibold mb-2">
            {user.name}
          </h2>
          <p className="text-gray-600 mb-4 capitalize">{user.role === "INSTRUCTOR" ? "Instructora" : "Estudiante"}</p>

          {user.role === "INSTRUCTOR" && (
            <>
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-10 mb-4">
                <p className="text-sm">¿Tienes algún título?:</p>
                <p>{user.hasCertification ? "Sí" : "No"}</p>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-10 mb-4">
                <p className="text-sm">Enfoque de enseñanza:</p>
                <p>{user.teachingApproach}</p>
              </div>
            </>
          )}

          <label className="block mt-4 text-sm text-gray-500">Contraseña</label>
          <input
            type="password"
            className="border-b border-gray-300 outline-none w-full sm:w-96 mb-4"
            placeholder="••••••••"
          />

          <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full font-medium transition">
            Editar Perfil
          </button>
        </div>

        {/* Cursos */}
        <div>
          <h3 className="text-2xl font-serif text-[#1E1E1E] mb-6">
            {user.role === "INSTRUCTOR" ? "Mis Cursos" : "Mi Aprendizaje"}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {user.courses?.map((curso) => (
              <div
                key={curso.id}
                className="bg-[#F8CAD7] rounded-t-[190px] flex flex-col items-center text-center p-4"
              >
                <div className="w-[220px] h-[220px] rounded-full overflow-hidden mb-4">
                  <img src={curso.imageUrl} alt={curso.title} className="w-full h-full object-cover" />
                </div>
                <h4 className="text-lg font-bold text-[#1E1E1E]">{curso.title}</h4>
                <p className="text-sm text-gray-700 mb-4">{curso.description}</p>
                <button className="px-6 py-2 border border-[#1E1E1E] rounded-full font-medium text-[#1E1E1E] hover:bg-[#1E1E1E] hover:text-white transition">
                  Inscrito
                </button>
              </div>
            ))}
          </div>

          {user.role === "INSTRUCTOR" && (
            <div className="mt-8">
              <button
                onClick={() => navigate("/crear-curso")}
                className="bg-[#E33664] hover:bg-[#c12b56] text-white px-6 py-3 rounded-full font-medium transition"
              >
                Crear un curso
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
