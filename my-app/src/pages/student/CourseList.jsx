import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import CourseCard from "../../components/student/CourseCard";

const CourseList = () => {
  const { allCourses } = useContext(AppContext);

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-16">
      
     
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Course List
          </h1>
          <p className="text-gray-500 mt-2">
            Browse all available courses
          </p>
        </div>
      </div>

      
      <div
        className="
          grid gap-8
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
        "
      >
        {allCourses?.map((course) => (
          <CourseCard key={course._id} course={course} />
        ))}
      </div>

    </section>
  );
};

export default CourseList;
