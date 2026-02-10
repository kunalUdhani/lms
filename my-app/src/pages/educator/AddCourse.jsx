import { useEffect, useRef, useState } from "react";
import { assets } from "../../assets/assets";
import Quill from "quill";
import uniqid from "uniqid";

const AddCourse = () => {
  const editorRef = useRef(null);
  const quillRef = useRef(null);
  const [showPopup, setShowPopup] = useState(false);
  const [currentChapterId, setCurrentChapterId] = useState(null);

  const [courseTitle, setCourseTitle] = useState("");
  const [coursePrice, setCoursePrice] = useState("");
  const [discount, setDiscount] = useState(0);
  const [image, setImage] = useState(null);

  const [chapters, setChapters] = useState([
    {
      chapterTitle: "Chapter 1",
      collapsed: false,
      chapterContent: []
    }
  ]);


  const [activeChapterIndex, setActiveChapterIndex] = useState(null);

  const [lectureDetails, setLectureDetails] = useState({
    lectureTitle: "",
    lectureDuration: "",
    lectureUrl: "",
    isPreviewFree: false
  });
  const handleChapter = (action, chapterId) => {
  if (action === "add") {
    const title = prompt("Enter Chapter Name:");
    if (title) {
      const newChapter = {
        chapterId: uniqid(),
        chapterTitle: title,
        chapterContent: [],
        collapsed: false,
        chapterOrder:
          chapters.length > 0
            ? chapters.slice(-1)[0].chapterOrder + 1
            : 1,
      };
      setChapters([...chapters, newChapter]);
    }
  } else if (action === "remove") {
    setChapters(
      chapters.filter(
        (chapter) => chapter.chapterId !== chapterId
      )
    );
  } else if (action === "toggle") {
    setChapters(
      chapters.map((chapter) =>
        chapter.chapterId === chapterId
          ? { ...chapter, collapsed: !chapter.collapsed }
          : chapter
      )
    );
  }
};
const handleLecture = (action, chapterId, lectureIndex) => {
  if (action === "add") {
    setCurrentChapterId(chapterId);
    setShowPopup(true);
  } else if (action === "remove") {
    setChapters(
      chapters.map((chapter) => {
        if (chapter.chapterId === chapterId) {
          chapter.chapterContent.splice(lectureIndex, 1);
        }
        return chapter;
      })
    );
  }
};
const addLecture = () => {
  setChapters(
    chapters.map((chapter) => {
      if (chapter.chapterId === currentChapterId) {
        const newLecture = {
          ...lectureDetails,
          lectureOrder:
            chapter.chapterContent.length > 0
              ? chapter.chapterContent.slice(-1)[0].lectureOrder + 1
              : 1,
          lectureId: uniqid(),
        };
        chapter.chapterContent.push(newLecture);
      }
      return chapter;
    })
  );
  setShowPopup(false);
  setLectureDetails({
    lectureTitle: "",
    lectureDuration: "",
    lectureUrl: "",
    isPreviewFree: false,
  });
};

const handleSubmit = async (e) => {
  e.preventDefault();
};




useEffect(() => {

  if (!quillRef.current && editorRef.current) {
    quillRef.current = new Quill(editorRef.current, {
      theme: "snow",
    });
  }
}, []);


  return (
    <div className="h-screen overflow-scroll flex flex-col items-start md:p-8 p-4 pt-8">
      <form onSubmit ={handleSubmit} className="w-full">

   
        <div className="flex flex-col gap-1 mb-6">
          <p className="font-medium">Course Title</p>
          <input
            type="text"
            placeholder="Type here"
            value={courseTitle}
            onChange={(e) => setCourseTitle(e.target.value)}
            className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500"
            required
          />
        </div>

        
        <div className="flex flex-col gap-1 mb-6">
          <p className="font-medium">Course Description</p>
          <div
            ref={editorRef}
            className="border border-gray-500 rounded p-3 min-h-[120px]"
          />
        </div>


        <div className="flex items-center justify-between flex-wrap gap-6 mb-8">
          <div className="flex flex-col gap-1">
            <p className="font-medium">Course Price</p>
            <input
              type="number"
              placeholder="0"
              value={coursePrice}
              onChange={(e) => setCoursePrice(e.target.value)}
              className="outline-none md:py-2.5 py-2 px-3 w-28 rounded border border-gray-500"
              required
            />
          </div>

          <div className="flex md:flex-row flex-col items-center gap-3">
            <p className="font-medium">Course Thumbnail</p>
            <label className="flex items-center gap-3 cursor-pointer">
              <img
                src={assets.file_upload_icon}
                alt=""
                className="p-3 bg-blue-600 rounded"
              />
              <input
                type="file"
                hidden
                accept="image/*"
                onChange={(e) => setImage(e.target.files[0])}
              />
              {image && (
                <img
                  src={URL.createObjectURL(image)}
                  alt=""
                  className="max-h-10"
                />
              )}
            </label>
          </div>
        </div>

        
        <div className="flex flex-col gap-1 mb-6">
          <p>Discount %</p>
          <input
            type="number"
            min={0}
            max={100}
            value={discount}
            onChange={(e) => setDiscount(e.target.value)}
            className="outline-none md:py-2.5 py-2 w-28 px-3 rounded border border-gray-500"
            required
          />
        </div>


        <div className="mb-6">
          {chapters.map((chapter, chapterIndex) => (
            <div key={chapterIndex} className="bg-white border rounded-lg mb-4">

            
              <div className="flex justify-between items-center p-4 border-b">
                <div className="flex items-center gap-2">
                  <img onClick={()=>handleLecture('toggle',chapter.chapterId)}
                    src={assets.dropdown_icon}
                    className={`w-4 cursor-pointer transition ${
                      chapter.collapsed && "-rotate-90" 
                    }`}

                  />
                  <span className="font-semibold">
                    {chapterIndex + 1}. {chapter.chapterTitle}
                  </span>
                </div>

                <span className="text-gray-500">
                  {chapter.chapterContent.length} Lectures
                </span>
                <img    onClick={()=>handleLecture('remove',chapter.chapterId)}
                        src={assets.cross_icon} alt=""
                        className="cursor-pointer"

                      />
              </div>

          
              {!chapter.collapsed && (
                <div className="p-4">
                  {chapter.chapterContent.map((lecture, lectureIndex) => (
                    <div
                      key={lectureIndex}
                      className="flex justify-between items-center mb-2"
                    >
                      <span>
                        {lectureIndex + 1}. {lecture.lectureTitle} –{" "}
                        {lecture.lectureDuration} mins –{" "}
                        <a
                          href={lecture.lectureUrl}
                          target="_blank"
                          className="text-blue-500"
                        >
                          Link
                        </a>{" "}
                        – {lecture.isPreviewFree ? "Free Preview" : "Paid"}
                      </span>

                      <img
                        src={assets.cross_icon}
                        className="cursor-pointer"
                        onClick={()=>handleLecture('remove',chapter.chapterId,lectureIndex)}
                      />
                    </div>
                  ))}

                  <div
                    className="inline-flex bg-gray-100 p-2 rounded cursor-pointer mt-2"
                    onClick={() => {
                    handleLecture('add',chapter.chapterid)
                    }}
                  >
                    + Add Lecture
                  </div>
                </div>
              )}
            </div>
          ))}

          <div className="flex justify-center bg-blue-100 p-2 rounded-lg cursor-pointer">
            onClick={()=> handleChapter('add')}
            + Add Chapter
          </div>
        </div>

      
        {showPopup && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-4 rounded w-full max-w-80 relative">

              <h2 className="text-lg font-semibold mb-4">Add Lecture</h2>

              <input
                type="text"
                placeholder="Lecture Title"
                className="w-full border rounded px-2 py-1 mb-2"
                value={lectureDetails.lectureTitle}
                onChange={(e) =>
                  setLectureDetails({
                    ...lectureDetails,
                    lectureTitle: e.target.value
                  })
                }
              />

              <input
                type="number"
                placeholder="Duration (mins)"
                className="w-full border rounded px-2 py-1 mb-2"
                value={lectureDetails.lectureDuration}
                onChange={(e) =>
                  setLectureDetails({
                    ...lectureDetails,
                    lectureDuration: e.target.value
                  })
                }
              />

              <input
                type="text"
                placeholder="Lecture URL"
                className="w-full border rounded px-2 py-1 mb-2"
                value={lectureDetails.lectureUrl}
                onChange={(e) =>
                  setLectureDetails({
                    ...lectureDetails,
                    lectureUrl: e.target.value
                  })
                }
              />

              <label className="flex gap-2 items-center mb-4">
                <input
                  type="checkbox"
                  checked={lectureDetails.isPreviewFree}
                  onChange={(e) =>
                    setLectureDetails({
                      ...lectureDetails,
                      isPreviewFree: e.target.checked
                    })
                  }
                />
                Free Preview
              </label>

              <button
                type="button"
                className="w-full bg-blue-500 text-white py-2 rounded"
                onClick={addLecture}
              >
                Add
              </button>

              <img onClick={() => setShowPopup(false)}
                src={assets.cross_icon}
                className="absolute top-4 right-4 w-4 cursor-pointer"
                
              />
            </div>
          </div>
        )}

      
        <button
          type="submit"
          className="bg-blue-600 text-white px-8 py-2 rounded-full"
        >
          ADD COURSE
        </button>
      </form>
    </div>
  );
};

export default AddCourse;
