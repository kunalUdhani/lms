
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const CourseCard = ({ course }) => {
  const { currency, calculateRating } = useContext(AppContext);

  return (
    <div className="bg-white rounded-xl border hover:shadow-lg transition overflow-hidden">
      
     
      <img
        src={course.courseThumbnail}
        alt={course.courseTitle}
        className="w-full h-44 object-cover"
      />

     
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 text-base line-clamp-2">
          {course.courseTitle}
        </h3>

        <p className="text-sm text-gray-500 mt-1">
          GreatStack
        </p>

     
        <div className="flex items-center gap-1 mt-2">
          <span className="text-sm font-medium">
            {calculateRating(course).toFixed(1)}
          </span>
          <span className="text-orange-500">★★★★★</span>
          <span className="text-sm text-gray-400">
            ({course.courseRatings.length})
          </span>
        </div>

    
        <p className="text-lg font-bold text-gray-900 mt-3">
          {currency}
          {course.coursePrice}
        </p>
      </div>
    </div>
  );
};

export default CourseCard;
