# Beauty-website-frontend

# EmpoderArte - Frontend

Este es el frontend de **EmpoderArte**, una plataforma web educativa centrada en el empoderamiento de mujeres a través de cursos de belleza. Está desarrollado con React, Vite y TailwindCSS, y conectado a un backend en Spring Boot.

---

## 🌐 Tecnologías

- React
- Vite
- TailwindCSS
- React Router
- Context API + localStorage (autenticación)
- Fetch API (conexión con backend)

---

## 🎯 Funcionalidades

- Registro de estudiantes e instructores con formularios diferenciados
- Inicio de sesión y cierre de sesión con navbar dinámico
- Perfil editable según el rol (estudiante o instructor)
- Creación de cursos (solo instructores)
- Inscripción a cursos (solo estudiantes)
- Carrousel de cursos y testimonios adaptados a dispositivos móviles
- Página de inicio, experiencia, contacto y footer funcional
- Diseño responsive con fidelidad al mockup original en Figma

---

## 🧩 Estructura del proyecto

```bash
src/
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── CourseCard.jsx
│   ├── StudentForm.jsx
│   ├── InstructorForm.jsx
│   ├── InstructorProfile.jsx
│   ├── StudentProfile.jsx
│   ├── ProtectedRoute.jsx
├── pages/
│   ├── Home.jsx
│   ├── Registro.jsx
│   ├── Login.jsx
│   ├── Perfil.jsx
│   ├── CrearCurso.jsx
├── App.jsx
├── main.jsx
└── index.css

```

