import { useState } from "react";

export default function RenderingList() {
    const student = [
        "Kamal",
        "Nimal",
        "Sunil"
    ];

export default function RenderingList() {
    return(
        <ul>
            {student.map(student => (
                <li>{student}</li>
            ))}
        </ul>
    );
}