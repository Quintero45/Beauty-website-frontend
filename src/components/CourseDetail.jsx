import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function CourseDetail() {
  const { id } = useParams();
  const [curso, setCurso] = useState(null);
  const [comentarios, setComentarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_BASE = "https://beauty-website-backend.onrender.com";

  useEffect(() => {
    const fetchCurso = fetch(`${API_BASE}/courses/getCourseById/${id}`).then((res) => {
      if (!res.ok) throw new Error("Curso no encontrado");
      return res.json();
    });

    const fetchReviews = fetch(`${API_BASE}/reviews/course/${id}`).then((res) => {
      if (!res.ok) throw new Error("Error al cargar reseñas");
      return res.json();
    });

    Promise.all([fetchCurso, fetchReviews])
      .then(([cursoData, reviewsData]) => {
        setCurso(cursoData);
        setComentarios(reviewsData);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="text-center py-10">Cargando curso...</p>;
  if (error) return <p className="text-center text-red-500 py-10">{error}</p>;

  return (
    <section className="bg-pink-50 py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        <img
          src={curso.imageUrl}
          alt={curso.title}
          className="w-full h-96 object-cover rounded-xl shadow"
        />

        <div className="bg-white p-6 rounded-xl shadow flex flex-col justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-pink-600 mb-2">
              {curso.title}
            </h2>
            <p className="text-sm text-gray-600 mb-1">
              Instructora: <span className="font-semibold">{curso.instructor?.name}</span>
            </p>
            <p className="text-gray-700 mt-4">{curso.description}</p>

            <div className="mt-6 space-y-2">
              <p className="text-sm">1. Estudiante</p>
              <p className="text-xl font-bold text-pink-600">${curso.priceForStudent.toFixed(2)}</p>
              <p className="text-sm">Grupos de 5 estudiantes</p>
              <p className="text-xl font-bold text-pink-600">${curso.priceForGroup.toFixed(2)}</p>
            </div>
          </div>

          <button className="mt-6 bg-pink-600 text-white rounded-full px-6 py-2 hover:bg-pink-700 transition w-full">
            Inscribirme
          </button>
        </div>
      </div>

      {/* Opiniones reales */}
      <div className="mt-16">
        <h3 className="text-2xl font-serif mb-6 text-gray-800">Opiniones del curso</h3>
        {comentarios.length === 0 ? (
          <p className="text-gray-500">Este curso aún no tiene reseñas.</p>
        ) : (
          <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-700">
            {comentarios.map((comentario) => (
              <div key={comentario.id} className="bg-white p-4 rounded-xl shadow space-y-2">
                <p className="font-bold">{comentario.userName ?? "Anónimo"}</p>
                <p>{comentario.rating ? "⭐".repeat(comentario.rating) : "⭐⭐⭐⭐⭐"}</p>
                <p>{comentario.comment}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
