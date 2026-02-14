// import React, { useContext, useEffect, useState } from "react";
// import { AppContext } from "../../context/AppContext";
// import CourseCard from "../../components/student/CourseCard";
// import Footer from "../../components/student/Footer";
// import { useNavigate, useParams } from "react-router-dom";

// const CourseList = () => {
//   const { allCourses } = useContext(AppContext);
//   const navigate = useNavigate();
//   const { keyword } = useParams();

//   const [searchInput, setSearchInput] = useState(keyword || "");

//   // 🔁 keep input in sync with URL
//   useEffect(() => {
//     setSearchInput(keyword || "");
//   }, [keyword]);

//   // 🔍 filter courses
//   const filteredCourses = keyword
//     ? allCourses.filter((course) =>
//         course.courseTitle
//           .toLowerCase()
//           .includes(keyword.toLowerCase())
//       )
//     : allCourses;

//   // 🔎 search handler
//   const handleSearch = () => {
//     if (searchInput.trim() === "") {
//       navigate("/course-list");
//     } else {
//       navigate(`/course-list/${searchInput.toLowerCase()}`);
//     }
//   };

//   // ❌ clear search
//   const clearSearch = () => {
//     setSearchInput("");
//     navigate("/course-list");
//   };

//   return (
//     <>
//       {/* COURSE LIST */}
//       <section className="max-w-7xl mx-auto px-4 md:px-6 py-16">

//         {/* HEADER + SEARCH */}
//         <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
//           <div>
//             <h1 className="text-3xl font-bold text-gray-900">
//               Course List
//             </h1>
//             <p className="text-gray-500 mt-2">
//               Browse all available courses
//             </p>
//           </div>

//           {/* SEARCH BAR */}
//           <div className="flex items-center gap-3 w-full md:w-[420px]">
//             <div className="relative flex-1">
//               <input
//                 type="text"
//                 value={searchInput}
//                 onChange={(e) => setSearchInput(e.target.value)}
//                 placeholder="Search courses"
//                 className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
//               />
//               <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
//                 🔍
//               </span>
//             </div>

//             <button
//               onClick={handleSearch}
//               className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
//             >
//               Search
//             </button>
//           </div>
//         </div>

//         {/* SEARCH CHIP */}
//         {keyword && (
//           <div className="mb-8">
//             <span className="inline-flex items-center gap-2 px-4 py-2 border rounded-lg text-gray-700">
//               {keyword}
//               <button
//                 onClick={clearSearch}
//                 className="text-gray-500 hover:text-red-500"
//               >
//                 ✕
//               </button>
//             </span>
//           </div>
//         )}

//         {/* COURSE GRID */}
//         {filteredCourses.length > 0 ? (
//           <div
//             className="
//               grid gap-8
//               grid-cols-1
//               sm:grid-cols-2
//               md:grid-cols-3
//               lg:grid-cols-4
//             "
//           >
//             {filteredCourses.map((course) => (
//               <CourseCard key={course._id} course={course} />
//             ))}
//           </div>
//         ) : (
//           <p className="text-center text-gray-500 mt-20">
//             No courses found
//           </p>
//         )}
//       </section>

//       {/* FOOTER */}
//       <Footer />
//     </>
//   );
// };

// export default CourseList;
import React, { useContext, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import CourseCard from "../../components/student/CourseCard";
import Footer from "../../components/student/Footer";

const CourseList = () => {
  const { keyword } = useParams(); // 👈 read URL param
  const navigate = useNavigate();
  const { allCourses } = useContext(AppContext);

  // 🔍 filter courses based on keyword
  const filteredCourses = useMemo(() => {
    if (!keyword) return allCourses;

    return allCourses.filter((course) =>
      course.courseTitle.toLowerCase().includes(keyword.toLowerCase())
    );
  }, [allCourses, keyword]);

  return (
    <>
      {/* COURSE LIST */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 gap-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Course List
            </h1>
            <p className="text-gray-500 mt-2">
              {keyword
                ? `Showing results for "${keyword}"`
                : "Browse all available courses"}
            </p>
          </div>

          {/* SEARCH BAR */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const value = e.target.search.value.trim();
              if (value) navigate(`/course-list/${value}`);
            }}
            className="flex gap-2"
          >
            <input
              name="search"
              defaultValue={keyword || ""}
              placeholder="Search courses..."
              className="border px-4 py-2 rounded-lg w-64 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-5 rounded-lg"
            >
              Search
            </button>
          </form>
        </div>

        {/* RESULTS */}
        {filteredCourses.length === 0 ? (
          <p className="text-gray-500 text-center mt-20">
            No courses found.
          </p>
        ) : (
          <div
            className="
              grid gap-8
              grid-cols-1
              sm:grid-cols-2
              md:grid-cols-3
              lg:grid-cols-4
            "
          >
            {filteredCourses.map((course) => (
              <CourseCard key={course._id} course={course} />
            ))}
          </div>
        )}
      </section>

      <Footer />
    </>
  );
};

export default CourseList;

