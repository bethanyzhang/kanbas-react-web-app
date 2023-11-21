// import React, { useState } from "react"
// import { useParams } from "react-router-dom"
// import db from "../../Database"
// import "./index.css"
// import { useSelector, useDispatch } from "react-redux"
// import {
//   addModule,
//   deleteModule,
//   updateModule,
//   setModule,
// } from "./modulesReducer"

// function ModuleList () {
//   const { courseId } = useParams()
//   const modules = useSelector((state) => state.modulesReducer.modules)
//   const module = useSelector((state) => state.modulesReducer.module)
//   const dispatch = useDispatch()





//   return (
//     <ul className="list-group">
//       <li className="list-group-item">
//         <button onClick={() => dispatch(addModule({ ...module, course: courseId }))} className="btn btn-success float-end">Add</button>
//         <button onClick={() => dispatch(updateModule(module))} className="btn btn-primary float-end" style={{ marginRight: 10 }}>
//           Update
//         </button>

//         <ul className="list-group" style={{ listStyle: "none" }}>
//           <li><input value={module.name}
//             onChange={(e) =>
//               dispatch(setModule({ ...module, name: e.target.value }))
//             }
//             style={{ width: 500, height: 50 }}
//           /></li>
//           <li><textarea value={module.description}
//             onChange={(e) =>
//               dispatch(setModule({ ...module, description: e.target.value }))
//             }
//             style={{ width: 500, height: 100 }}
//           /></li>
//         </ul>
//       </li>


//       {
//         modules
//           .filter((module) => module.course === courseId)
//           .map((module, index) => (
//             <li key={index} className="list-group-item">
//               <button
//                 onClick={() => dispatch(setModule(module))} className="btn btn-success float-end">
//                 Edit
//               </button>

//               <button
//                 onClick={() => dispatch(deleteModule(module._id))} className="btn btn-danger float-end" style={{ marginRight: 10 }}>
//                 Delete
//               </button>

//               <h3 className="heading">Week {index}</h3>
//               <h3>{module.name}</h3>
//               <p>{module.description}</p>






//             </li>
//           ))
//       }
//     </ul>

//   )
// }

// export default ModuleList

import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import * as client from "./client"

function ModuleList () {
  const { courseId } = useParams()
  const [modules, setModules] = useState([])
  const [module, setModule] = useState({})
  // const modules = db.modules;

  const addModule = async () => {
    const newModule = await client.addModule(courseId, module)
    setModules([newModule, ...modules])
  }


  const deleteModule = async (moduleId) => {
    try {
      await client.deleteModule(moduleId)
      setModules(module.filter((module) => module._id == moduleId))
    }
    catch (error) {
      console.log(error)
    }
  }
  const updateModule = async (moduleId, module) => {
    try {
      await client.updateModule(moduleId, module)
      setModules(module.map((c) => (c._id === module._id ? module : c)))
    } catch (error) {
      console.log(error)
    }
  }



  const fetchModules = async () => {
    const modules = await client.findModulesForCourse(courseId)
    setModules(modules)
  }

  useEffect(() => {
    fetchModules()
  }, [])

  return (
    <ul className="list-group">
      <li className="list-group-item">
        <button onClick={updateModule} className="btn btn-success">
          Update
        </button>
        <button onClick={addModule} className="btn btn-warning">Add</button>
        <input
          value={module.name}
          onChange={(e) => setModule({ ...module, name: e.target.value })}
          className="form-control"
          placeholder="Module Name"
        />
      </li>
      {modules
        .filter((module) => module.course === courseId)
        .map((module, index) => (
          <li key={index} className="list-group-item">
            <h3>{module.name}</h3>
            <button
              onClick={() => deleteModule(module._id)}
              className="btn btn-danger float-end"
            >
              Delete
            </button>
            <p>{module.description}</p>
            {module.lessons && (
              <ul className="list-group">
                {module.lessons.map((lesson, index) => (
                  <li key={index} className="list-group-item">

                    <h4>{lesson.name}</h4>
                    <p>{lesson.description}</p>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
    </ul>
  )
}
export default ModuleList