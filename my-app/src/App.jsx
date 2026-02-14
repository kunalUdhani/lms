
import { Routes, Route, Navigate } from "react-router-dom";

import StudentLayout from "./layouts/StudentLayout";

import Home from "./pages/student/Home";
import CourseList from "./pages/student/CourseList";
import CourseDetails from "./pages/student/CourseDetails";

function App() {
  return (
    <Routes>

      {/* STUDENT LAYOUT */}
      <Route element={<StudentLayout />}>
        
        {/* HOME */}
        <Route path="/" element={<Home />} />

        {/* COURSE LIST */}
        <Route path="/course-list" element={<CourseList />} />
        <Route path="/course-list/:keyword" element={<CourseList />} />

        {/* COURSE DETAILS */}
        <Route path="/course/:id" element={<CourseDetails />} />

      </Route>

      {/* FALLBACK */}
      <Route path="*" element={<Navigate to="/" />} />

    </Routes>
  );
}

export default App;
