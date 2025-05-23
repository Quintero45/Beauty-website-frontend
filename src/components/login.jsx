import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch("https://beauty-website-backend.onrender.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) throw new Error("Credenciales incorrectas");

      const data = await response.json();
      localStorage.setItem("user", JSON.stringify(data));
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <section className="bg-[#FADBEF] min-h-screen flex items-center justify-center px-4 py-10">
      <div className="bg-white rounded-xl shadow-md w-full max-w-4xl flex flex-col md:flex-row overflow-hidden">
        {/* Imagen lateral */}
        <div className="md:w-1/2 flex items-center justify-center p-6">
          <img src="/maquillaje.svg" alt="Login visual" className="rounded-[200px]" />
        </div>

        {/* Formulario */}
        <div className="md:w-1/2 p-8">
          <h2 className="text-pink-600 text-2xl font-semibold mb-2">
            Resalta tu belleza, transforma tu futuro.
          </h2>
          <p className="text-pink-600 mb-6 font-medium">
            ¡Inicia sesión y sigue aprendiendo!
          </p>

          <input
            type="email"
            placeholder="Correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mb-4 border-b border-gray-400 focus:outline-none bg-transparent py-2"
          />

          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mb-6 border-b border-gray-400 focus:outline-none bg-transparent py-2"
          />

          <button
            onClick={handleLogin}
            className="w-full bg-pink-500 text-white py-3 rounded-full font-medium hover:bg-pink-600 transition"
          >
            Iniciar Sesión
          </button>

          <p className="text-center mt-4 text-sm">
            ¿No tienes cuenta?{" "}
            <button
              onClick={() => navigate("/registro")}
              className="text-pink-600 underline"
            >
              Regístrate
            </button>
          </p>
        </div>
      </div>
    </section>
  );
}
