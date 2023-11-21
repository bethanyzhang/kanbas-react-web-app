import ModuleList from "../Modules/ModuleList"
import './index.css'

function Home () {
  return (
    <div className="row">
      <div className="col-9
       module">
        <h2>Home</h2>
        <ModuleList />
      </div>
      <div className="col-2 status">

        <h3>Course Status</h3>
        <button className="btn btn-light"><i class="far fa-circle-xmark"></i>Unpublish</button>
        <button className="btn btn-success"><i class="fas fa-check"></i>Published</button>

        <div className="d-flex flex-column">
          <div className="p-2"><button className="btn btn-light">Import Existing
            Content</button></div>
          <div className="p-2"><button className="btn btn-light">Import From
            Commons</button></div>
          <div className="p-2"><button className="btn btn-light">Choose Home
            Page</button></div>
          <div className="p-2"><button className="btn btn-light">View Course
            Stream</button></div>
          <div className="p-2"><button className="btn btn-light">New
            Announcement</button></div>
          <div className="p-2">
            <button className="btn btn-light">New Analytics</button>
          </div>

          <div className="p-2"><button className="btn btn-light"><a href="#">View Couese
            Notifications</a></button></div>
        </div>

        <div className="to-do">
          <h4>To Do</h4>
          <hr />
          <i className="fas fa-circle-exclamation"></i>
          <h6><a href="#">Grade A1 + ENV + HTML</a></h6>
          <p>100 points Sep 18 at 11:59pm</p>
        </div>
        <div className="coming-up">
          <h4>Comming Up</h4>
          <a href="#"><i class="far fa-calendar-days"></i>View Calendar</a>
          <hr />
          <ul>
            <li><i class="far fa-calendar-days"></i><a href="#">Lecture</a><br />CS4550 SEP 11 at 11:45am</li>
            <li><i class="far fa-calendar-days"></i><a href="#">Lecture</a><br />CS4550 SEP 11 at 11:45am</li>
            <li><i class="far fa-calendar-days"></i><a href="#">Lecture</a><br />CS4550 SEP 11 at 11:45am</li>

          </ul>
        </div>

      </div>
    </div>

  )
}
export default Home