import ModuleList from "./ModuleList"
import { AiOutlineCheckCircle, AiOutlinePlus } from "react-icons/ai"
import { FaEllipsisV } from 'react-icons/fa'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import './index.css'
function Modules () {
  return (
    <div className="module-home">
      <h2>Modules</h2>
      <div class="top-sec">
        <button className='btn btn-secondary'>Collapse All</button>
        <button className='btn btn-secondary'>View Progress</button>
        <DropdownButton id="dropdown-basic-button" variant="secondary" title={<span><AiOutlineCheckCircle style={{ color: "#90EE90" }} />Publish all</span>}
          className='dropdown'>
          <Dropdown.Item className="dropdown-item" href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item className="dropdown-item" href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item className="dropdown-item" href="#/action-3">Something else</Dropdown.Item>
        </DropdownButton>

        <button className="btn btn-danger"><AiOutlinePlus />Module</button>
        <button className='btn btn-secondary'><FaEllipsisV /></button>
        <hr />


      </div>
      <ModuleList />
    </div>
  )
}
export default Modules