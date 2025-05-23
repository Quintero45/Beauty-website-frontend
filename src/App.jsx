import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Courses from './components/Courses';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import MisionVision from './components/MissionVision';
import CourseDetail from './components/CourseDetail';
import Registro from './components/Register';
import Login from './components/login';
import Perfil from './components/Perfil';
import CreateCourse from './components/CreateCourse';

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Courses />
              <MisionVision />
              <Testimonials />
              <Footer />
            </>
          }
        />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/crear-curso" element={<CreateCourse />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/cursos/:id" element={<CourseDetail />} />
      </Routes>
    </>
  );
}
