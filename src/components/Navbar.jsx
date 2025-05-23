import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

export default function Navbar() {
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
    window.location.reload();
  };

  return (
    <header className="bg-[#FFEBF1] py-4 px-6 md:px-12 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold font-serif text-gray-800">EmpoderArte</h1>

        <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <a href="#" className="hover:text-pink-600 transition">Nosotros</a>
          <a href="#" className="hover:text-pink-600 transition">Cursos</a>
          <a href="#" className="hover:text-pink-600 transition">Experiencias</a>
        </nav>

        {user ? (
          <div className="relative">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              <FaUserCircle size={28} className="text-pink-600" />
            </button>
            {menuOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white shadow-md rounded-md z-50">
                <button onClick={() => navigate("/perfil")} className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100">Mi perfil</button>
                <button onClick={logout} className="block w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-gray-100">Cerrar sesión</button>
              </div>
            )}
          </div>
        ) : (
          <button
            onClick={() => navigate("/registro")}
            className="border border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white transition rounded-full px-5 py-2 text-sm font-medium"
          >
            Regístrate ahora
          </button>
        )}
      </div>
    </header>
  );
}
