// import { Route, Routes, Navigate } from "react-router"
// import KanbasNavigation from "./KanbasNavigation"
// import Courses from "./Courses"
// import Account from "./Account"
// import Dashboard from "./Dashboard"
// import '../App.css'
// import db from "./Database"
// import { useState, useEffect } from "react"
// import store from "./store"
// import { Provider } from "react-redux"
// import axios from "axios"

// function Kanbas () {
//   // const [courses, setCourses] = useState(db.courses)
//   const [courses, setCourses] = useState([])
//   const URL = "http://localhost:4000/api/courses"
//   const findAllCourses = async () => {
//     const response = await axios.get(URL)
//     setCourses(response.data)
//   }
//   useEffect(() => {
//     findAllCourses()
//   }, [])


//   const [course, setCourse] = useState({
//     name: "New Course", number: "New Number",
//     startDate: "2023-09-10", endDate: "2023-12-15",
//   })

//   const addNewCourse = async () => {
//     const response = await axios.post(URL, course)
//     setCourses([
//       response.data,
//       ...courses,
//     ])
//     setCourse({ name: "" })
//   }
//   const deleteCourse = async (course) => {
//     const response = await axios.delete(
//       `${URL}/${course._id}`
//     )
//     setCourses(courses.filter(
//       (c) => c._id !== course._id))
//   }
//   const updateCourse = async (course) => {
//     const response = await axios.put(
//       `${URL}/${course._id}`,
//       course
//     )
//     setCourses(
//       courses.map((c) => {
//         if (c._id === course._id) {
//           return course
//         }
//         return c
//       })
//     )
//     setCourse({ name: "" })
//   }




//   // const addNewCourse = () => {
//   //   setCourses([...courses, { ...course, _id: new Date().getTime().toString() }])
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


//   return (
//     <Provider store={store}>
//       <div className="d-flex">
//         <KanbasNavigation />
//         <div>
//           <Routes>
//             <Route path="/" element={<Navigate to="Dashboard" />} />
//             <Route path="Account" element={<Account />} />
//             <Route path="Dashboard" element={<Dashboard
//               courses={courses}
//               course={course}
//               setCourse={setCourse}
//               addNewCourse={addNewCourse}
//               deleteCourse={deleteCourse}
//               updateCourse={updateCourse} />
//             }
//             />
//             <Route path="Courses/:courseId/*" element={<Courses courses={courses} />} />

//             <Route path="Calendar" element={<h1>Calendar</h1>} />
//           </Routes>
//         </div>
//       </div>
//     </Provider>
//   )
// }
// export default Kanbas

import { Route, Routes, Navigate } from "react-router"
import KanbasNavigation from "./KanbasNavigation"
import Courses from "./Courses"
import Account from "./Account"
import Dashboard from "./Dashboard"
import Signin from "./Signin"
import store from "../project/store"
import { Provider } from "react-redux"
import CurrentUser from "../project/users/currentUser"
import ProtectedRoute from "./ProtectedRoute"

function Kanbas () {
  return (
    <Provider store={store}>
      <CurrentUser>
        <div className="d-flex">
          <KanbasNavigation />
          <div>
            <Routes>
              <Route path="/" element={<Navigate to="Dashboard" />} />
              <Route
                path="Account"
                element={
                  <ProtectedRoute>
                    <Account />
                  </ProtectedRoute>
                }
              />
              <Route
                path="Dashboard"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="Courses/:courseId/*"
                element={
                  <ProtectedRoute show={true}>
                    <Courses />
                  </ProtectedRoute>
                }
              />
              <Route path="Calendar" element={<h1>Calendar</h1>} />
              <Route path="Signin" element={<Signin />} />
            </Routes>
          </div>
        </div>
      </CurrentUser>
    </Provider>
  )
}
export default Kanbas