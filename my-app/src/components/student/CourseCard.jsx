
// import { useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { AppContext } from "../../context/AppContext";

// const CourseCard = ({ course }) => {
//   const { currency, calculateRating } = useContext(AppContext);
//   const navigate = useNavigate();

//   return (
//     <div
//       onClick={() => navigate(`/course/${course._id}`)}
//       className="bg-white rounded-xl border hover:shadow-lg transition overflow-hidden cursor-pointer"
//     >
//       <img
//         src={course.courseThumbnail}
//         alt={course.courseTitle}
//         className="w-full h-44 object-cover"
//       />

//       <div className="p-4">
//         <h3 className="font-semibold text-gray-900 text-base line-clamp-2">
//           {course.courseTitle}
//         </h3>

//         <p className="text-sm text-gray-500 mt-1">
//           GreatStack
//         </p>

//         <div className="flex items-center gap-1 mt-2">
//           <span className="text-sm font-medium">
//             {calculateRating(course).toFixed(1)}
//           </span>
//           <span className="text-orange-500">★★★★★</span>
//           <span className="text-sm text-gray-400">
//             ({course.courseRatings.length})
//           </span>
//         </div>

//         <p className="text-lg font-bold text-gray-900 mt-3">
//           {currency}
//           {course.coursePrice}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default CourseCard;
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext";

const CourseCard = ({ course }) => {
  const { currency, calculateRating } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/course/${course._id}`)}
      className="w-[280px] bg-white rounded-xl border border-gray-200 
                 hover:shadow-lg transition cursor-pointer overflow-hidden"
    >
      {/* IMAGE */}
      <div className="h-[160px] w-full overflow-hidden">
        <img
          src={course.courseThumbnail}
          alt={course.courseTitle}
          className="w-full h-full object-cover"
        />
      </div>

      {/* CONTENT */}
      <div className="p-4 flex flex-col justify-between h-[170px]">
        <div>
          <h3 className="font-semibold text-gray-900 text-sm line-clamp-2">
            {course.courseTitle}
          </h3>

          <p className="text-xs text-gray-500 mt-1">
            GreatStack
          </p>

          <div className="flex items-center gap-1 mt-2 text-sm">
            <span className="font-medium">
              {calculateRating(course).toFixed(1)}
            </span>
            <span className="text-orange-500">★★★★★</span>
            <span className="text-gray-400">
              ({course.courseRatings.length})
            </span>
          </div>
        </div>

        <p className="text-lg font-bold text-gray-900 mt-3">
          {currency}{course.coursePrice}
        </p>
      </div>
    </div>
  );
};

export default CourseCard;
