import db from "../../Kanbas/Database"
import { Navigate, Route, Routes, useParams, useLocation } from "react-router-dom"
import CourseNavigation from "./CourseNavigation"
import Modules from "./Modules"
import Home from "./Home"
import Assignments from "./Assignments"
import AssignmentEditor from "./Assignments/AssignmentEditor"
import Grades from "./Grades"
import { AiOutlineRight } from 'react-icons/ai'
import AssignmentAdd from "./Assignments/AssignmentEditor/AssignmentAdd"


function Courses ({ courses }) {
  const { courseId } = useParams()
  const { pathname } = useLocation()
  const [empty, kanbas, coursePath, id, screen, assignment] = pathname.split("/")
  const course = courses.find((course) => course._id === courseId)
  return (
    <div>
      <h1> {course.name} <AiOutlineRight /> {screen} {assignment ? <span><AiOutlineRight /> {assignment}</span> : ""} </h1>
      <CourseNavigation />
      <div>
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{
            left: "320px",
            top: "50px",
          }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route
              path="Assignments/:assignmentId"
              element={<AssignmentEditor />}
            />
            <Route
              path="Assignments/addAssignment"
              element={<AssignmentAdd />}
            />
            <Route path="Grades" element={<Grades />} />
          </Routes>
        </div>
      </div>

    </div>
  )
}

export default Courses