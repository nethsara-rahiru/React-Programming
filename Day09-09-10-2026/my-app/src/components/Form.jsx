import React from "react";

export default class Form extends React.Component{

    submit = (event) => {
        event.preventDefault();
        //console.log(event);
        //console.log(event.type);
        //console.log(event.target);

        const form = event.target;

        const student = {
            name: form.name.value,
            age: form.age.value,
            email: form.email.value,
            course: form.course.value
        };

        

    }

    render(){
        return(
            <div>
                <form onSubmit={this.submit}>
                    <h1>Student Registration Form</h1>
                    
                    <br></br>
                    <label>Name</label>
                    <br></br>
                    <input type="text" name="name"></input>
                    <br></br>

                    <br></br>
                    <label>Age</label>
                    <br></br>
                    <input type="number" name="age"></input>
                    <br></br>

                    <br></br>
                    <label>Email</label>
                    <br></br>
                    <input type="email" name="email"></input>
                    <br></br>

                    <br></br>
                    <label>Course</label>
                    <br></br>
                    <input type="text" name="course"></input>
                    <br></br>

                    <button type="submit">Register Student</button>
                </form>
            </div>
        );
    }
}