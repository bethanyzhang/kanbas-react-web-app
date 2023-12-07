
// import './App.css'
// import Labs from "./Labs"
// import Kanbas from "./Kanbas"
// import HelloWorld from "./Labs/a3/HelloWorld"
// import { HashRouter, Link, Route, Routes, Navigate } from "react-router-dom"

// function App () {
//   return (
//     <HashRouter>
//       <div>
//         {/* <Link to="/Hello">Hello World</Link>
//         <br />
//         <Link to="/Labs">Labs</Link>
//         <br />
//         <Link to="/Kanbas">Kanbas</Link> */}
//         <Routes>
//           <Route path="/" element={<Navigate to="/Labs" />} />
//           <Route path="/Hello" element={<HelloWorld />}></Route>
//           <Route path="/Labs/*" element={<Labs />}></Route>
//           <Route path="/Kanbas/*" element={<Kanbas />}></Route>
//         </Routes>
//       </div>
//     </HashRouter >


//   )
// }

// export default App






import './App.css'
import Labs from "./Labs"
import Kanbas from "./Kanbas"
import HelloWorld from "./Labs/a3/HelloWorld"
import { HashRouter, Link, Navigate, Route, Routes } from "react-router-dom"

import Project from "./project"

function App () {
  const screen = "Labs"
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="project" />} />
          <Route path="/project/*" element={<Project />} />
          <Route path="/Hello" element={<HelloWorld />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kanbas/*" element={<Kanbas />} />

        </Routes>
        {/* {screen === "Hello" && <HelloWorld />}
        {screen === "Labs" && <Labs />}
        {screen === "Kanbas" && <Kanbas />} */}
      </div>
    </HashRouter>
  )
}

export default App