const students = [
    { id: 1, name: "Kamal"},
    { id: 2, name: "Nimal"},
    { id: 3, name: "Sunil"}
];

export default function RenderingListWithKey() {
    return (
        <ul>
            {students.map( => (
                <li key={students.id}>
                    {student.name}
                </li>
            ))};
        </ul>
    )
}