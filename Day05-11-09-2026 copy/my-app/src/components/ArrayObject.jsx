import { useState } from "react";

export default function ArrayObject() {
    const [student, setStudent] = useState([
        "Kamal",
        "Nimal",
        "Sunil"
    ]);

    const addStudent = () => {
        setStudent([
            ...student,
            "John"
        ]);
    };

    const removeStudent = () => {
        setStudent(
            student.filter(student => student !== "John")
        );
    };

    return (
        <div>
            <h2>Student List</h2>

            <button onClick={addStudent}>
                Add John
            </button>

            <button onClick={removeStudent}>
                Remove John
            </button>

            <ul>
                {student.map((student) => (
                    <li key={student}>{student}</li>
                ))}
            </ul>
        </div>
    );
}