import { useNavigate } from "react-router-dom";

export default function CourseCard({ title, description, imageUrl, courseId }) {
  const navigate = useNavigate();

  return (
    <div
      className="w-[380px] h-[570px] bg-[#F8CAD7] rounded-t-[190px] flex flex-col items-center justify-center text-center p-4 transition-transform duration-300 ease-in-out hover:scale-[1.01] shadow"
    >
      <div className="w-[360px] h-[360px] rounded-full overflow-hidden mb-6">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      <h3 className="text-[24px] font-abhaya font-bold text-[#191D2D] mb-1">
        {title}
      </h3>
      <p className="text-sm text-[#4E515D] px-4">{description}</p>

      <button
        onClick={() => navigate(`/cursos/${courseId}`)}
        className="mt-4 px-20 py-2 border border-[#191D2D] rounded-full text-[#191D2D] font-abhaya text-[24px] hover:bg-[#191D2D] hover:text-white transition"
      >
        Inscribirme
      </button>
    </div>
  );
}
