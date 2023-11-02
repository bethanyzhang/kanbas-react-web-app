import db from "../Database"
import { React, useState } from "react"
import { Link } from "react-router-dom"
import "./index.css"
function Dashboard ({ courses, course, setCourse, addNewCourse, deleteCourse, updateCourse }
) {
  // const [courses, setCourses] = useState(db.courses)
  // const [course, setCourse] = useState({
  //   name: "New Course", number: "New Number",
  //   startDate: "2023-09-10", endDate: "2023-12-15",
  // })

  // const addNewCourse = () => {
  //   setCourses([...courses,
  //   {
  //     ...course,
  //     _id: new Date().getTime()
  //   }])
  // }
  // const deleteCourse = (courseId) => {
  //   setCourses(courses.filter((course) => course._id !== courseId))
  // }
  // const updateCourse = () => {
  //   setCourses(
  //     courses.map((c) => {
  //       if (c._id === course._id) {
  //         return course
  //       } else {
  //         return c
  //       }
  //     })
  //   )
  // }



  return (
    <div className="dashboard-main">
      <h1>Dashboard</h1>
      <hr />
      <h2>Published Courses ({courses.length})</h2>
      <h5>Course</h5>
      <input value={course.name} className="form-control"
        onChange={(e) => setCourse({ ...course, name: e.target.value })} />
      <input value={course.number} className="form-control"
        onChange={(e) => setCourse({ ...course, number: e.target.value })} />
      <input value={course.startDate} className="form-control" type="date"
        onChange={(e) => setCourse({ ...course, startDate: e.target.value })} />
      <input value={course.endDate} className="form-control" type="date"
        onChange={(e) => setCourse({ ...course, endDate: e.target.value })} />

      <button onClick={addNewCourse} className="btn btn-success float-end" style={{ width: 80 }}>
        Add
      </button>
      <button onClick={updateCourse} className="btn btn-primary float-end" style={{ marginRight: 10 }}>
        Update
      </button>

      <div class="row row-cols-1 row-cols-md-3 g-4 cards">
        {courses.map((course, index) => (
          <div className="col">
            <div class="card h-100">
              <img src="/Kanbas/images/blue background.jpeg" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">{course.name}</h5>

                <Link
                  key={course._id}
                  to={`/Kanbas/Courses/${course._id}`}
                  className="btn btn-primary"
                >
                  {course.name}
                </Link>
                <p class="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <button
                  onClick={(event) => {
                    event.preventDefault()
                    setCourse(course)
                  }} className="btn btn-warning float-end" style={{ width: 60 }}>
                  Edit
                </button>

                <button
                  onClick={(event) => {
                    event.preventDefault()
                    deleteCourse(course._id)
                  }} className="btn btn-danger float-end" style={{ marginRight: 10 }}>
                  Delete
                </button>

              </div>
            </div>
          </div>
        ))}



      </div>
    </div>
  )
}

export default Dashboard