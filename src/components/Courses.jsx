import { useEffect, useState } from "react";
import CourseCard from "./CourseCard";
import { useNavigate } from "react-router-dom";

export default function Courses() {
  const [cursos, setCursos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://beauty-website-backend.onrender.com/courses/getAllCourses")
      .then((res) => res.json())
      .then((data) => setCursos(data));
  }, []);

  return (
    <section className="bg-[#F8CAD7] py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        {/* Contenedor blanco que incluye todo */}
        <div className="bg-[#FFEBF1]  rounded-[50px] p-10 shadow-md">
          <h2 className="text-4xl font-serif font-semibold text-[#1E1E1E] mb-2">
            Perfecciona tus habilidades en belleza
          </h2>
          <p className="text-gray-600 mb-10 text-sm">
            Cursos prácticos, actualizados y certificados para llevar tu pasión al siguiente nivel.
          </p>

          {/* Scroll horizontal en móviles */}
          <div className="overflow-x-auto md:overflow-visible">
            <div className="flex md:justify-between gap-24 md:gap-6 max-w-[1240px] mx-auto px-2 md:px-0 flex-nowrap md:flex-wrap">
              {cursos.slice(0, 3).map((curso) => (
                <div className="min-w-[300px] md:min-w-0" key={curso.id}>
                  <CourseCard
                    courseId={curso.id}
                    title={curso.title}
                    description={curso.description}
                    imageUrl={curso.imageUrl}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Botón Más Cursos */}
        {cursos.length > 0 && (
          <div className="mt-12">
            <button
              onClick={() => navigate("/cursos")}
              className="bg-[#FFE1EA] text-[#1E1E1E] border border-[#1E1E1E] px-6 py-3 rounded-full text-base font-medium shadow hover:bg-gray-100 transition-all"
            >
              <span className="mr-2">🔍</span> Más Cursos
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
