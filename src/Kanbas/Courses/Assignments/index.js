import React, { useState } from 'react'
import { Link, useParams } from "react-router-dom"
import db from "../../Database"
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import { FaEllipsisV } from "react-icons/fa"
import { AiOutlinePlus } from "react-icons/ai"
import "./index.css"
import { useSelector, useDispatch } from "react-redux"
import {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  setAssignment,
} from "./assignmentReducer"


function Assignments () {
  const { courseId } = useParams()
  // const assignments = db.assignments
  // const courseAssignments = assignments.filter(
  //   (assignment) => assignment.course === courseId)

  const assignments = useSelector((state) => state.assignmentReducer.assignments.filter(
    (assignment) => assignment.course === courseId))
  const assignment = useSelector((state) => state.assignmentReducer.assignment)
  const dispatch = useDispatch()



  const handleDelete = (assignmentId) => {
    const isConfirmed = window.confirm(
      "Are you sure you want to remove the assignment?"
    )
    if (isConfirmed) {
      dispatch(deleteAssignment(assignmentId))
    }
  }

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
        <Link
          key={assignment._id}
          to={`/Kanbas/Courses/${courseId}/Assignments/addAssignment`} ><button
            className="btn btn-success" style={{ margin: 20 }}>
            + Add New Assignment
          </button></Link>


        {assignments.map((assignment) => (
          <div>
            <div className="list-group-item assign-list">
              <Link
                key={assignment._id}
                to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>
                <button
                  onClick={() => dispatch(setAssignment(assignment))} className="float-end btn btn-success">
                  Edit
                </button></Link>
              <button
                onClick={() => handleDelete(assignment._id)}
                className="float-end btn btn-danger" style={{ marginRight: 10 }}
              >
                Delete
              </button>

              <h5>{assignment._id}</h5>
              {assignment.title}
            </div>


          </div>




        ))}

      </div>
    </div>
  )
}
export default Assignments

{/* <button
                onClick={() => dispatch(deleteAssignment(assignment._id))} className="float-end">
                Delete
              </button> */}