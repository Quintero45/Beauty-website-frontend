import React, { useState } from "react";

export default function MissionVisionToggle() {
  const [view, setView] = useState("mision");

  const handleToggle = (selectedView: string) => {
    setView(selectedView);
  };

  return (
    <section className="bg-[#FFEBF1] py-20 px-6 md:px-12">
      <div
        className={`max-w-7xl mx-auto flex flex-col ${
          view === "vision" ? "md:flex-row-reverse" : "md:flex-row"
        } items-center gap-12 transition-all duration-500`}
      >
        {/* Imagen redondeada */}
        <div className="flex-1">
          <img
            src="/certificadas.svg"
            alt="Certificadas"
            className="w-full rounded-t-[300px]"
          />
        </div>

        {/* Contenido textual */}
        <div className="flex-1 text-left relative">
          {/* Ilustración decorativa */}
          <img
            src="/ilustracion.svg"
            alt="Decoración"
            className="absolute -top-20 right-0 w-12 md:w-40"
          />

          {/* Título y línea */}
          <h1 className="text-pink-600 text-4xl md:text-8xl font-serif font-bold mb-2">
            Sobre <br /> Nosotros
          </h1>
          <div className="h-1 w- bg-pink-600 mb-6"></div>

          {/* Botones Misión / Visión */}
          <div className="flex gap-6 mb-6">
            <button
              onClick={() => handleToggle("mision")}
              className={`text-3xl md:text-4xl font-bold font-serif transition-colors duration-300 ${
                view === "mision" ? "text-[#1E1E1E]" : "text-gray-400"
              }`}
            >
              Misión
            </button>
            <button
              onClick={() => handleToggle("vision")}
              className={`text-3xl md:text-4xl font-bold font-serif transition-colors duration-300 ${
                view === "vision" ? "text-[#1E1E1E]" : "text-gray-400"
              }`}
            >
              Visión
            </button>
          </div>

          {/* Contenido con transición */}
          <div
            className="transition-opacity duration-1400 ease-in-out"
            key={view}
          >
            {view === "mision" ? (
              <p className="text-gray-700 leading-relaxed">
                Empoderar a mujeres de todas las edades a través de la educación
                en belleza, proporcionándoles conocimientos, habilidades y
                confianza para destacar su potencial. Creemos que la belleza no
                solo transforma la apariencia, sino también la autoestima y las
                oportunidades. Nuestro objetivo es inspirar crecimiento personal
                y profesional, convirtiendo la pasión por el cuidado personal en
                una herramienta de empoderamiento y cambio positivo.
              </p>
            ) : (
              <p className="text-gray-700 leading-relaxed">
                Ser una plataforma líder en educación de belleza, reconocida por
                transformar vidas a través del conocimiento y el empoderamiento
                femenino. Aspiramos a crear una comunidad donde cada mujer
                pueda descubrir su potencial, fortalecer su autoestima y
                convertir su pasión en una carrera exitosa, dejando una huella
                positiva en la industria de la belleza.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
