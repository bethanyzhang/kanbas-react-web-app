// import db from "../Database"
// import { React, useState, useEffect } from "react"
// import { Link } from "react-router-dom"
// import "./index.css"
// import axios from "axios"

// import * as client from "../Courses/client"
// function Dashboard () {

//   const [courses, setCourses] = useState([])
//   const [course, setCourse] = useState({})
//   const fetchCourses = async () => {
//     const courses = await client.fetchCourses()
//     setCourses(courses)
//   }

//   const deleteCourse = async (id) => {
//     try {
//       await client.deleteCourse(id)
//       setCourses(courses.filter((course) => course._id !== id))
//     } catch (error) {
//       console.log(error)
//     }
//   }

//   const updateCourse = async () => {
//     try {
//       await client.updateCourse(course)
//       setCourses(courses.map((c) => (c._id === course._id ? course : c)))
//     } catch (error) {
//       console.log(error)
//     }
//   }

//   const addCourse = async () => {
//     const newCourse = await client.addCourse(course)
//     setCourses([newCourse, ...courses])
//   }

//   useEffect(() => {
//     fetchCourses()
//   }, [])
//   // const [courses, setCourses] = useState(db.courses)
//   // const [course, setCourse] = useState({
//   //   name: "New Course", number: "New Number",
//   //   startDate: "2023-09-10", endDate: "2023-12-15",
//   // })

//   // const addNewCourse = () => {
//   //   setCourses([...courses,
//   //   {
//   //     ...course,
//   //     _id: new Date().getTime()
//   //   }])
//   // }
//   // const deleteCourse = (courseId) => {
//   //   setCourses(courses.filter((course) => course._id !== courseId))
//   // }
//   // const updateCourse = () => {
//   //   setCourses(
//   //     courses.map((c) => {
//   //       if (c._id === course._id) {
//   //         return course
//   //       } else {
//   //         return c
//   //       }
//   //     })
//   //   )
//   // }



//   return (
//     <div className="dashboard-main">
//       <h1>Dashboard</h1>
//       <hr />
//       <h2>Published Courses ({courses.length})</h2>
//       <h5>Course</h5>
//       <input value={course.name} className="form-control"
//         onChange={(e) => setCourse({ ...course, name: e.target.value })} />
//       <input value={course.number} className="form-control"
//         onChange={(e) => setCourse({ ...course, number: e.target.value })} />
//       <input value={course.startDate} className="form-control" type="date"
//         onChange={(e) => setCourse({ ...course, startDate: e.target.value })} />
//       <input value={course.endDate} className="form-control" type="date"
//         onChange={(e) => setCourse({ ...course, endDate: e.target.value })} />

//       <button onClick={addCourse} className="btn btn-success float-end" style={{ width: 80 }}>
//         Add
//       </button>
//       <button onClick={updateCourse} className="btn btn-primary float-end" style={{ marginRight: 10 }}>
//         Update
//       </button>

//       <div class="row row-cols-1 row-cols-md-3 g-4 cards">
//         {courses.map((course, index) => (
//           <div className="col">
//             <div class="card h-100">
//               <img src="/Kanbas/images/blue background.jpeg" class="card-img-top" alt="..." />
//               <div class="card-body">
//                 <h5 class="card-title">{course.name}</h5>

//                 <Link
//                   key={course._id}
//                   to={`/Kanbas/Courses/${course._id}`}
//                   className="btn btn-primary"
//                 >
//                   {course.name}
//                 </Link>
//                 <p class="card-text">
//                   This is a longer card with supporting text below as a natural
//                   lead-in to additional content. This content is a little bit
//                   longer.
//                 </p>
//                 <button
//                   onClick={(event) => {
//                     event.preventDefault()
//                     setCourse(course)
//                   }} className="btn btn-warning float-end" style={{ width: 60 }}>
//                   Edit
//                 </button>

//                 <button
//                   onClick={(event) => {
//                     event.preventDefault()
//                     deleteCourse(course._id)
//                   }} className="btn btn-danger float-end" style={{ marginRight: 10 }}>
//                   Delete
//                 </button>

//               </div>
//             </div>
//           </div>
//         ))}



//       </div>
//     </div>
//   )
// }

// export default Dashboard

import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
import * as client from "../Courses/client"

function Dashboard () {
  const [courses, setCourses] = useState([])
  const [course, setCourse] = useState({})
  const fetchCourses = async () => {
    const course = await axios.get("http://localhost:4000/api/courses")
    setCourses(course.data)
  }

  const deleteCourse = async (id) => {
    try {
      await client.deleteCourse(id)
      setCourses(courses.filter((course) => course._id !== id))
    } catch (error) {
      console.log(error)
    }
  }

  const updateCourse = async () => {
    try {
      await client.updateCourse(course)
      setCourses(courses.map((c) => (c._id === course._id ? course : c)))
    } catch (error) {
      console.log(error)
    }
  }

  const addCourse = async () => {
    const newCourse = await client.addCourse(course)
    setCourses([newCourse, ...courses])
  }

  useEffect(() => {
    fetchCourses()
  }, [])
  return (
    <div>
      <h1>Dashboard</h1>
      <hr />
      <h2>Published Courses ({courses.length})</h2>
      <input
        type="text"
        placeholder="Course Name"
        value={course.name}
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
      />
      <button onClick={updateCourse} className="btn btn-success">
        Update
      </button>
      <button onClick={addCourse} className="btn btn-success">
        Add
      </button>
      <div class="row">
        <div class="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course, index) => (
            <div class="col" style={{ width: 300 }}>
              <div class="card">
                <img src="/Kanbas/images/blue background.jpeg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <button
                    onClick={() => deleteCourse(course._id)}
                    className="btn btn-danger float-end"
                  >
                    Delete
                  </button>
                  <button onClick={() => setCourse(course)} className="btn btn-warning">Edit</button>
                  <h5 class="card-title">{course.name}</h5>

                  <Link
                    key={course._id}
                    to={`/Kanbas/Courses/${course._id}`}
                    className="btn btn-primary"
                  >
                    {course.name}
                  </Link>
                  <p class="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Dashboard