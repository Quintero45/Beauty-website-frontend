export default function Testimonials() {
  const testimonials = [
    {
      name: "Yissel Pertuz",
      image: "/yisell.svg",
      text: "Impartir los cursos me ha permitido aprender mucho más de lo que sabía, fortaleciendo mis habilidades y dándome la confianza para ser independiente. Esta experiencia ha mejorado mi capacidad de comunicación y resolución de problemas, preparándome para asumir nuevas responsabilidades en el futuro.",
    },
    {
      name: "Zarina Ortiz",
      image: "/zarina.svg",
      text: "Fue una experiencia muy enriquecedora y gratificante ya que no tenía las bases, conocimiento y demás. Teniendo en cuenta el taller brindado por las tutoras, tengo la capacidad de enseñar y aprender.",
    },
    {
      name: "Mariandrea Perez",
      image: "/mariandrea.svg",
      text: "Me siento agradecida por la experiencia que tuvimos. Aunque no la esperábamos, nos brindó una enseñanza valiosa que me ayudará a crecer como madre y a encontrar nuevas oportunidades de ingresos. Gracias por la oportunidad de participar y por el impacto positivo.",
    },
  ];

  return (
    <section className="bg-[#F8CAD7] py-20 px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-serif font-medium text-[#1E1E1E] mb-12">
        Conoce la experiencia de mujeres poderosas
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white rounded-t-[200px] px-6 py-10 shadow text-center flex flex-col items-center"
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-24 h-24 rounded-full object-cover mb-4"
            />
            <h3 className="font-semibold text-[#1E1E1E]">{testimonial.name}</h3>
            <div className="text-yellow-400 text-xl mb-2">★★★★★</div>
            <p className="text-sm text-[#4E515D]">{testimonial.text}</p>
            <div className="mt-6 flex justify-center gap-1">
              {/* Indicador visual solo decorativo */}
              <span className="w-6 h-2 bg-[#F79AC0] rounded-full"></span>
              <span className="w-2 h-2 bg-[#F79AC077] rounded-full"></span>
              <span className="w-2 h-2 bg-[#F79AC077] rounded-full"></span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
