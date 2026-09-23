import FunctionalCom from "./components/FunctionalCom"
import GreetClass from "./components/GreetClass"
import "./App.css"
import Student from "./components/Student"
import StudentClass from "./components/StudentClass"

function App() {
  return(
    //<FunctionalCom name = "Nethsara"/>
    //<GreetClass/>
    <>
    <Student name="Nethsara" course="Mobile Computing"/>
    <Student name="Arun" course="Computer Graphics"/>
    <StudentClass name="Sukela" course="Python"/>
    <StudentClass name="Ama" course="HTML"/>
    </> 
  )
}

export default App
