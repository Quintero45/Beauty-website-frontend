import { useState } from "react";
import StudentForm from "./StudentForm";
import InstructorForm from "./InstructorForm";

export default function Registro() {
  const [role, setRole] = useState("STUDENT");

  return (
    <section className="bg-[#FADBEF] min-h-screen flex items-center justify-center px-4 py-10">
      <div className="bg-white shadow-md rounded-xl w-full max-w-5xl p-8 flex flex-col md:flex-row gap-10">
        {/* Imagen lateral */}
        <div className="md:w-1/2 flex items-center justify-center">
          <img
            src="/maquillaje.svg"
            alt="Maquillaje"
            className="rounded-[250px]"
          />
        </div>

        {/* Formulario */}
        <div className="md:w-1/2">
          <h2 className="text-pink-600 text-2xl font-semibold mb-2">
            Resalta tu belleza, transforma tu futuro.
          </h2>
          <p className="text-pink-600 mb-6 font-medium">
            ¡Regístrate y haz brillar tu talento!
          </p>

          {/* Selector de rol */}
          <div className="flex gap-4 mb-6">
            <button
              className={`px-4 py-2 rounded-full font-semibold ${
                role === "STUDENT" ? "bg-pink-500 text-white" : "bg-gray-200"
              }`}
              onClick={() => setRole("STUDENT")}
            >
              Quiero aprender
            </button>
            <button
              className={`px-4 py-2 rounded-full font-semibold ${
                role === "INSTRUCTOR" ? "bg-pink-500 text-white" : "bg-gray-200"
              }`}
              onClick={() => setRole("INSTRUCTOR")}
            >
              Quiero enseñar
            </button>
          </div>

          {role === "STUDENT" ? <StudentForm /> : <InstructorForm />}
          <p className="mt-6 text-center text-sm">
            ¿Ya tienes una cuenta?{" "}
            <button
              onClick={() => (window.location.href = "/login")}
              className="text-pink-600 font-semibold underline"
            >
              Inicia sesión
            </button>
          </p>
        </div>
      </div>
    </section>
  );
}
