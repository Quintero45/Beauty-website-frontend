import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function InstructorForm() {
  const [form, setForm] = useState({
    name: "", email: "", password: "", birthDate: "",
    hasCertification: false, specialization: "", experience: "", teachingApproach: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("https://beauty-website-backend.onrender.com/auth/register/instructor", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    localStorage.setItem("user", JSON.stringify({ role: "INSTRUCTOR", name: form.name }));
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input name="name" placeholder="Nombre" onChange={handleChange} required />
      <input name="email" type="email" placeholder="Correo" onChange={handleChange} required />
      <input name="password" type="password" placeholder="Contraseña" onChange={handleChange} required />
      <input name="birthDate" type="date" onChange={handleChange} required />

      <label className="mt-2 font-semibold">¿Tienes certificación?</label>
      <div className="flex gap-4">
        <label><input type="radio" name="hasCertification" value={true} onChange={() => setForm({ ...form, hasCertification: true })} /> Sí</label>
        <label><input type="radio" name="hasCertification" value={false} onChange={() => setForm({ ...form, hasCertification: false })} /> No</label>
      </div>

      <input name="specialization" placeholder="Especialización" onChange={handleChange} />
      <input name="experience" placeholder="Años de experiencia" onChange={handleChange} />
      <input name="teachingApproach" placeholder="Enfoque: práctico, teórico o ambos" onChange={handleChange} />

      <button className="bg-pink-500 text-white py-2 rounded-full mt-4">Regístrate ➤</button>
    </form>
  );
}
