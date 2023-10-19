import React from "react"
import { useParams } from "react-router-dom"
import db from "../../Database"
import "./index.css"

function ModuleList () {
  const { courseId } = useParams()
  const modules = db.modules
  return (
    <ul className="list-group">
      {
        modules
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <li key={index} className="list-group-item">
              <h3 className="heading">Week {index}</h3>
              <h3>{module.name}</h3>
              <p>{module.description}</p>

              <ul>
                {modules
                  .filter((module) => module.course === courseId)
                  .map((module, index) => (
                    <li key={index} className="list-group-item">


                      <p>{module.description}</p> </li>))}
              </ul>



            </li>
          ))
      }
    </ul>

  )
}

export default ModuleList