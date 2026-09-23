import { useState } from "react";
import "../App";

export default function Student(props){
    const [studentName,setStudentName] = useState("");

    const showName = ()=>{
        setStudentName("Registered");
    }

    return(
        <div>
            <hr></hr>
            <h1>Student Info</h1>
            <h2>Name  : {props.name}</h2>
            <p>Course : {props.course}</p>
            <p>Register : {studentName}</p>

            <button onClick={showName}>Register Now</button>
        </div>
    );
}

