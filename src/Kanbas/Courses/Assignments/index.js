import React from "react"
import { Link, useParams } from "react-router-dom"
import db from "../../Database"
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import { FaEllipsisV } from "react-icons/fa"
import { AiOutlinePlus } from "react-icons/ai"
import "./index.css"


function Assignments () {
  const { courseId } = useParams()
  const assignments = db.assignments
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId)
  return (
    <div>
      <div class="top-sec">
        <div class="left-side">

          <InputGroup>
            <Form.Control
              placeholder="Search for Assignment"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
          </InputGroup>

        </div>
        <div class="right-side">
          <button class="btn btn-secondary"><AiOutlinePlus />Group</button>
          <button class="btn btn-danger"><AiOutlinePlus />Assignment</button>
          <button class='btn btn-secondary'><FaEllipsisV /></button>
        </div>

      </div>

      <div className="list-group main">
        <h2 className="list-group-item assign-head">Assignments for course {courseId}</h2>
        {courseAssignments.map((assignment) => (
          <Link
            key={assignment._id}
            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
            className="list-group-item assign-list">
            <h5>{assignment._id}</h5>
            {assignment.title}
          </Link>
        ))}

      </div>
    </div>
  )
}
export default Assignments