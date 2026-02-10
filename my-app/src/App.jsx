
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/student/Navbar";
import Home from "./pages/student/Home";
import CourseList from "./pages/student/CourseList";
const App = () => {
  return (
    <>

      <Navbar />

     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course-list" element={<CourseList />} />
      </Routes>
    </>
  );
};

export default App;

