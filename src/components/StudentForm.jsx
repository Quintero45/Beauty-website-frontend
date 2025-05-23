import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function StudentForm() {
  const [form, setForm] = useState({ name: "", email: "", password: "", birthDate: "" });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("https://beauty-website-backend.onrender.com/auth/register/student", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    localStorage.setItem("user", JSON.stringify({ role: "STUDENT", name: form.name }));
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input type="text" name="name" placeholder="Nombre" onChange={handleChange} required />
      <input type="email" name="email" placeholder="Correo" onChange={handleChange} required />
      <input type="password" name="password" placeholder="Contraseña" onChange={handleChange} required />
      <input type="date" name="birthDate" onChange={handleChange} required />
      <button className="bg-pink-500 text-white py-2 rounded-full mt-4">Regístrate ➤</button>
    </form>
  );
}
