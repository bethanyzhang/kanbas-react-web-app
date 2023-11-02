import React, { useState } from "react"
import { useParams } from "react-router-dom"
import db from "../../Database"
import "./index.css"
import { useSelector, useDispatch } from "react-redux"
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer"

function ModuleList () {
  const { courseId } = useParams()
  const modules = useSelector((state) => state.modulesReducer.modules)
  const module = useSelector((state) => state.modulesReducer.module)
  const dispatch = useDispatch()
  // const [modules, setModules] = useState(db.modules)
  // const [module, setModule] = useState({
  //   name: "New Module",
  //   description: "New Description",
  //   course: courseId,
  // })
  // const addModule = (module) => {
  //   setModules([
  //     { ...module, _id: new Date().getTime().toString() },
  //     ...modules,
  //   ])
  // }
  // const deleteModule = (moduleId) => {
  //   setModules(modules.filter(
  //     (module) => module._id !== moduleId))
  // }
  // const updateModule = () => {
  //   setModules(
  //     modules.map((m) => {
  //       if (m._id === module._id) {
  //         return module
  //       } else {
  //         return m
  //       }
  //     })
  //   )
  // }




  return (
    <ul className="list-group">
      <li className="list-group-item">
        <button onClick={() => dispatch(addModule({ ...module, course: courseId }))} className="btn btn-success float-end">Add</button>
        <button onClick={() => dispatch(updateModule(module))} className="btn btn-primary float-end" style={{ marginRight: 10 }}>
          Update
        </button>

        <ul className="list-group" style={{ listStyle: "none" }}>
          <li><input value={module.name}
            onChange={(e) =>
              dispatch(setModule({ ...module, name: e.target.value }))
            }
            style={{ width: 500, height: 50 }}
          /></li>
          <li><textarea value={module.description}
            onChange={(e) =>
              dispatch(setModule({ ...module, description: e.target.value }))
            }
            style={{ width: 500, height: 100 }}
          /></li>
        </ul>
      </li>


      {
        modules
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <li key={index} className="list-group-item">
              <button
                onClick={() => dispatch(setModule(module))} className="btn btn-success float-end">
                Edit
              </button>

              <button
                onClick={() => dispatch(deleteModule(module._id))} className="btn btn-danger float-end" style={{ marginRight: 10 }}>
                Delete
              </button>

              <h3 className="heading">Week {index}</h3>
              <h3>{module.name}</h3>
              <p>{module.description}</p>


              {/* <ul>
                {modules
                  .filter((module) => module.course === courseId)
                  .map((module, index) => (
                    <li key={index} className="list-group-item">


                      <p>{module.description}</p> </li>))}
              </ul> */}



            </li>
          ))
      }
    </ul>

  )
}

export default ModuleList