import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
import Favstudentlist from "./Favstudentlist"
import Studentlist from "./Students"
import { useState } from "react"


function App(){

const [students,setstudents]=useState([{id:1,name:"Dharshan"},{id:2,name:"monisha"},{id:3,name:"venkat"},{id:4,name:"mithra "},{id:5,name:"prem"}])
const [favstudent,setfavstudent]=useState([])



  return(
    <>
    <BrowserRouter>
    <div className=" flex gap-5 text-3xl font-bold justify-around bg-red-300 p-5 text-white">
      <Link to={"/"}>Students list</Link>
      <Link to={"/fav"}>Favourite students list</Link>
      </div>
      <Routes>
        <Route path="/" element={<Studentlist students={students} setstudents={setstudents} favstudent={favstudent} setfavstudent={setfavstudent}></Studentlist>}></Route>
        <Route path="/fav" element={<Favstudentlist favstudent={favstudent} setfavstudent={setfavstudent} students={students}></Favstudentlist>}></Route>
      </Routes>
    
    </BrowserRouter>
    </>
  )
}
export default App
