import React from "react"
import { useNavigate, useParams, Link } from "react-router-dom"
import db from "../../../Database"
import { AiOutlineCheckCircle } from "react-icons/ai"
import { FaEllipsisV } from 'react-icons/fa'
import './index.css'



function AssignmentEditor () {
  const { assignmentId } = useParams()
  const assignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId)


  const { courseId } = useParams()
  const navigate = useNavigate()
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments")
    navigate(`/Kanbas/Courses/${courseId}/Assignments`)
  }
  return (
    <div className="assign-edit">
      <div class="top-sec">

        <div class="right-side">
          <AiOutlineCheckCircle style={{ color: "green" }} /><span class="text-success">Published</span>
          <button class='btn ms-4' style={{ backgroundColor: "	#F0F0F0" }}><FaEllipsisV /></button>
        </div>

      </div>
      <hr />
      <h2>Assignment Name</h2>
      <input value={assignment.title}
        className="form-control mb-2" />
      <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
        className="btn btn-secondary">
        Cancel
      </Link>
      <button onClick={handleSave} className="btn btn-danger me-2 ms-4">
        Save
      </button>
    </div>
  )
}


export default AssignmentEditor