import { Outlet } from "react-router-dom";
import Navbar from "../components/student/Navbar";
import Footer from "../components/student/Footer";

const StudentLayout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-100 via-cyan-50 to-white">
      <Navbar />

      <main className="pt-16">
        <Outlet />
      </main>
      
    </div>
  );
};


export default StudentLayout;
