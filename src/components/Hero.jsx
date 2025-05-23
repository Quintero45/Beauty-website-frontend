export default function Hero() {
  return (
    <section className="bg-[#F8CAD7] py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Texto */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-6xl font-serif font-semibold text-[#1E1E1E] leading-snug">
            La belleza es tu poder.
            <br />
            <span className="text-[#E81E76]">Hazlo brillar sin límites.</span>
          </h1>
          <p className="text-[#4E515D] text-base md:text-lg mt-4">
            Aprende, transforma y brilla. Descubre nuestros cursos de belleza y
            potencia tu talento.
          </p>

          <button className="mt-6 border border-[#1E1E1E] text-[#1E1E1E] font-semibold rounded-full px-8 py-3 hover:bg-[#1E1E1E] hover:text-white transition">
            Inscríbete ahora
          </button>

          {/* Píldoras */}
          <div className="mt-10 flex flex-wrap gap-4">
            <span className="flex items-center gap-2 bg-[#FFE1EA] text-[#1E1E1E] rounded-full px-5 py-2 border border-[#1E1E1E] text-sm">
              🧪 Método 100% práctico
            </span>
            <span className="flex items-center gap-2 bg-[#FFE1EA] text-[#1E1E1E] rounded-full px-5 py-2 border border-[#1E1E1E] text-sm">
              👩‍🏫 Soporte personalizado
            </span>
            <span className="flex items-center gap-2 bg-[#FFE1EA] text-[#1E1E1E] rounded-full px-5 py-2 border border-[#1E1E1E] text-sm">
              <span className="bg-[#FFE1EA] px-2 py-1 rounded-full font-bold">50+</span> Mujeres certificadas
            </span>
          </div>
        </div>

        {/* Ilustración */}
        <div className="flex-1 text-center">
          <img
            src="/ilustracion.svg"
            alt="Hero"
            className="w-full max-w-lg mx-auto md:mx-0"
          />
        </div>
      </div>
    </section>
  );
}
