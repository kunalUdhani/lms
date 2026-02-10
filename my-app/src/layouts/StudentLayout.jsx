import { Outlet } from "react-router-dom";
import Navbar from "../components/student/Navbar";

const StudentLayout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-100 via-cyan-50 to-white">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default StudentLayout;
