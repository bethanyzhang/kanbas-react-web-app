import db from "../../Database"
import { useParams } from "react-router-dom"
import './index.css'
import { BsFillGearFill } from 'react-icons/bs'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'

function Grades () {
  const { courseId } = useParams()
  const assignments = db.assignments.filter((assignment) => assignment.course === courseId)
  const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId)
  return (
    <div className="grade-main">
      <h1>Grades</h1>
      <div class="top">
        <div className="float-end">
          <button class="btn btn-secondary mr-3 import">Import</button>
          <DropdownButton id="dropdown-basic-button" title="Export" variant="secondary" className="grade-export">
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </DropdownButton>
          <button class='btn btn-secondary mr-3 gear'><BsFillGearFill /></button>



        </div></div>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <th>Student Name</th>
            {assignments.map((assignment) => (<th>{assignment.title}</th>))}
          </thead>
          <tbody>
            {enrollments.map((enrollment) => {
              const user = db.users.find((user) => user._id === enrollment.user)
              return (
                <tr>
                  <td>{user.firstName} {user.lastName}</td>
                  {assignments.map((assignment) => {
                    const grade = db.grades.find(
                      (grade) => grade.student === enrollment.user && grade.assignment === assignment._id)
                    return (<td>{grade?.grade || ""}</td>)
                  })}
                </tr>)
            })}
          </tbody></table>
      </div></div>)
}
export default Grades