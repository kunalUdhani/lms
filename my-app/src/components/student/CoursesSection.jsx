import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import CourseCard from "./CourseCard";
import { Link } from "react-router-dom";

const CoursesSection = () => {
  const { allCourses } = useContext(AppContext);

  if (!allCourses || allCourses.length === 0) return null;

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-16">
      
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Latest Courses
        </h2>
        <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
          Discover our top-rated courses across various categories.
        </p>
      </div>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {allCourses.slice(0, 4).map(course => (
          <CourseCard key={course._id} course={course} />
        ))}
      </div>

      <div className="flex justify-center mt-16">
        <Link
          to="/course-list"
          className="px-8 py-3 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-100 transition"
        >
          Show all courses
        </Link>
      </div>
    </section>
  );
};

export default CoursesSection;
