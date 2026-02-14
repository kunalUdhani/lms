
// import { useParams } from "react-router-dom";
// import { useContext, useState } from "react";
// import { AppContext } from "../../context/AppContext";
// import Footer from "../../components/student/Footer";
// import { assets } from "../../assets/assets";

// const CourseDetails = () => {
//   const { id } = useParams();
//   const { allCourses, calculateRating } = useContext(AppContext);

//   // ✅ THIS WAS MISSING
//   const [openChapters, setOpenChapters] = useState([]);

//   const toggleChapter = (chapterId) => {
//     setOpenChapters((prev) =>
//       prev.includes(chapterId)
//         ? prev.filter((id) => id !== chapterId)
//         : [...prev, chapterId]
//     );
//   };

//   if (!allCourses || allCourses.length === 0) {
//     return <p className="text-center mt-20">Loading course...</p>;
//   }

//   const course = allCourses.find((c) => c._id === id);
//   if (!course) {
//     return <p className="text-center mt-20">Course not found</p>;
//   }

//   return (
//     <>
//       <div className="bg-gradient-to-b from-[#e8fbff] to-white">
//         <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">

//           {/* LEFT */}
//           <div className="lg:col-span-2">
//             <h1 className="text-3xl font-bold text-gray-900">
//               {course.courseTitle}
//             </h1>

//             <div className="flex items-center gap-3 mt-4">
//               <span className="text-orange-500">
//                 {"★".repeat(Math.round(calculateRating(course)))}
//               </span>
//               <span className="text-sm text-gray-500">
//                 ({course.courseRatings.length} ratings)
//               </span>
//             </div>

//             <h2 className="text-xl font-semibold mt-10 mb-4">
//               Course Structure
//             </h2>

//             {course.courseContent.map((chapter) => {
//               const isOpen = openChapters.includes(chapter.chapterId);

//               return (
//                 <div
//                   key={chapter.chapterId}
//                   className="border rounded-xl mb-4 bg-white overflow-hidden"
//                 >
//                   {/* HEADER */}
//                   <button
//                     onClick={() => toggleChapter(chapter.chapterId)}
//                     className="w-full flex items-center justify-between px-5 py-4 text-left"
//                   >
//                     <div className="flex items-center gap-3">
//                       <img
//                         src={assets.down_arrow_icon}
//                         className={`w-4 transition-transform ${
//                           isOpen ? "rotate-180" : ""
//                         }`}
//                       />
//                       <h3 className="font-semibold">
//                         {chapter.chapterTitle}
//                       </h3>
//                     </div>

//                     <span className="text-sm text-gray-500">
//                       {chapter.chapterContent.length} lectures
//                     </span>
//                   </button>

//                   {/* CONTENT */}
//                   {isOpen && (
//                     <div className="border-t px-5 py-4 space-y-3">
//                       {chapter.chapterContent.map((lecture) => (
//                         <div
//                           key={lecture.lectureId}
//                           className="flex items-center justify-between text-sm"
//                         >
//                           <div className="flex items-center gap-3">
//                             <img src={assets.play_icon} className="w-4" />
//                             <span>{lecture.lectureTitle}</span>

//                             {lecture.isPreviewFree && (
//                               <span className="text-blue-600 text-xs font-medium">
//                                 Preview
//                               </span>
//                             )}
//                           </div>

//                           <span className="text-gray-500">
//                             {lecture.lectureDuration} min
//                           </span>
//                         </div>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               );
//             })}
//           </div>

//           {/* RIGHT CARD */}
//           <div className="bg-white rounded-3xl shadow-xl p-6 h-fit">
//             <div className="-mx-6 -mt-6 mb-5 h-[240px] overflow-hidden rounded-t-3xl">
//               <img
//                 src={course.courseThumbnail}
//                 className="w-full h-full object-cover"
//               />
//             </div>

//             <p className="text-3xl font-bold">${course.coursePrice}</p>

//             <button className="w-full mt-4 bg-blue-600 text-white py-3 rounded-lg">
//               Enroll Now
//             </button>
//           </div>

//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// };

// export default CourseDetails;
import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import Footer from "../../components/student/Footer";
import { assets } from "../../assets/assets";

const CourseDetails = () => {
    const { id } = useParams();
    const { allCourses, calculateRating } = useContext(AppContext);

    const [openChapters, setOpenChapters] = useState([]);

    if (!allCourses || allCourses.length === 0) {
        return <p className="text-center mt-20">Loading course...</p>;
    }

    const course = allCourses.find((c) => c._id === id);
    if (!course) {
        return <p className="text-center mt-20">Course not found</p>;
    }

    const toggleChapter = (chapterId) => {
        setOpenChapters((prev) =>
            prev.includes(chapterId)
                ? prev.filter((id) => id !== chapterId)
                : [...prev, chapterId]
        );
    };

    return (
        <>
            {/* TOP SECTION */}
            <div className="bg-gradient-to-b from-[#e8fbff] to-white">
                <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-3 gap-14">

                    {/* LEFT CONTENT */}
                    <div className="lg:col-span-2">
                        <h1 className="text-4xl font-bold text-gray-900">
                            {course.courseTitle}
                        </h1>

                        <p className="text-gray-600 mt-4 max-w-3xl">
                            {course.courseDescription.replace(/<[^>]+>/g, "").slice(0, 200)}...
                        </p>

                        <div className="flex items-center gap-3 mt-4">
                            <span className="text-orange-500">
                                {"★".repeat(Math.round(calculateRating(course)))}
                            </span>
                            <span className="text-sm text-gray-500">
                                ({course.courseRatings.length} ratings)
                            </span>
                        </div>

                        {/* COURSE STRUCTURE */}
                        <h2 className="text-2xl font-semibold mt-12 mb-6">
                            Course Structure
                        </h2>

                        <div className="space-y-4">
                            {course.courseContent.map((chapter) => {
                                const isOpen = openChapters.includes(chapter.chapterId);

                                return (
                                    <div
                                        key={chapter.chapterId}
                                        className="border rounded-xl bg-white overflow-hidden"
                                    >
                                        {/* CHAPTER HEADER */}
                                        <button
                                            onClick={() => toggleChapter(chapter.chapterId)}
                                            className="w-full flex items-center justify-between px-5 py-4 text-left"
                                        >
                                            <div className="flex items-center gap-3">
                                                <img
                                                    src={assets.down_arrow_icon}
                                                    className={`w-4 transition ${isOpen ? "rotate-180" : ""
                                                        }`}
                                                />
                                                <span className="font-semibold text-gray-900">
                                                    {chapter.chapterTitle}
                                                </span>
                                            </div>

                                            <span className="text-sm text-gray-500">
                                                {chapter.chapterContent.length} lectures
                                            </span>
                                        </button>

                                        {/* LECTURES */}
                                        {isOpen && (
                                            <div className="border-t px-6 py-4 space-y-4">
                                                {chapter.chapterContent.map((lecture) => (
                                                    <div
                                                        key={lecture.lectureId}
                                                        className="flex items-center justify-between text-sm"
                                                    >
                                                        <div className="flex items-center gap-3">
                                                            <img
                                                                src={assets.play_icon}
                                                                className="w-4"
                                                            />
                                                            <span className="text-gray-800">
                                                                {lecture.lectureTitle}
                                                            </span>

                                                            {lecture.isPreviewFree && (
                                                                <span className="text-blue-600 font-medium ml-2">
                                                                    Preview
                                                                </span>
                                                            )}
                                                        </div>

                                                        <span className="text-gray-500">
                                                            {Math.floor(lecture.lectureDuration / 60)} min
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>

                        {/* COURSE DESCRIPTION */}
                        <h2 className="text-2xl font-semibold mt-14 mb-4">
                            Course Description
                        </h2>

                        <div
                            className="prose max-w-none text-gray-700"
                            dangerouslySetInnerHTML={{ __html: course.courseDescription }}
                        />
                    </div>

                    {/* RIGHT SIDE FIXED CARD */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24">
                            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">

                                {/* IMAGE */}
                                <div className="h-[240px] overflow-hidden">
                                    <img
                                        src={course.courseThumbnail}
                                        alt={course.courseTitle}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* CONTENT */}
                                <div className="p-6">
                                    {/* TIMER */}
                                    <p className="text-red-500 text-sm flex items-center gap-2 mb-2">
                                        ⏱️ 5 days left at this price!
                                    </p>

                                    {/* PRICE */}
                                    <div className="flex items-end gap-3 mb-4">
                                        <span className="text-4xl font-bold text-gray-900">
                                            ${course.coursePrice}
                                        </span>
                                        <span className="line-through text-gray-400 text-lg">
                                            $79.99
                                        </span>
                                        <span className="text-gray-600 font-medium">
                                            15% off
                                        </span>
                                    </div>

                                    {/* META INFO */}
                                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
                                        <span className="flex items-center gap-1">
                                            ⭐ 4
                                        </span>
                                        <span className="flex items-center gap-1">
                                            ⏱ 57 hours
                                        </span>
                                        <span className="flex items-center gap-1">
                                            📘 4 lessons
                                        </span>
                                    </div>

                                    {/* BUTTON */}
                                    <button className="w-full bg-blue-600 text-white py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 transition">
                                        Enroll Now
                                    </button>

                                    {/* WHAT'S INCLUDED */}
                                    <h3 className="text-xl font-semibold mt-8 mb-4">
                                        What's in the course?
                                    </h3>

                                    <ul className="space-y-3 text-gray-600 text-sm">
                                        <li>• Lifetime access with free updates.</li>
                                        <li>• Step-by-step, hands-on project guidance.</li>
                                        <li>• Downloadable resources and source code.</li>
                                        <li>• Quizzes to test your knowledge.</li>
                                        <li>• Certificate of completion.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>






                </div>
            </div>
            <Footer />
        </>
    );
};

export default CourseDetails;
