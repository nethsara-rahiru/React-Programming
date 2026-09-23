import { useState } from "react";
import Student from "./Student";

export default function ObjectState() {
    const [student, setStudent] = useState({
        name: "Kamal",
        course: "IT",
        age: 22
    });
    
    function increaseAge(){
        setStudent({
            ...student,
            age: student.age + 1
        });
    }

    function changeCourse(){
        setStudent({
            ...student,
            course: "CSC"
        });
    }

    return (
        <div>
            <h2>{student.name}</h2>
            <p>Course: {student.course}</p>
            <p>Age   : {student.age}</p>

            <button onClick={increaseAge}>
                Increase Age
            </button>

            <button onClick={changeCourse}>
                Change Course
            </button>
        </div>
    );
}