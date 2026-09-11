import React from "react";


export default class StudentClass extends React.Component{
    render(){
        return(
            <>
                <hr></hr>
                <h1>Student Info</h1>
                <h2>Name  : {this.props.name}</h2>
                <p>Course : {this.props.course}</p>
            </>
        );
    }
}