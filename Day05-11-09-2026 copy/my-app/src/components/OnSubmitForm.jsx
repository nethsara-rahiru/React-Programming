import { useState } from "react";

export default function OnSubmitForm() {

    function handleSubmit(event){
        event.p
    }

    return (
        <div>
            <button onClick={() => setVisible(!visible)}>
                Show / Hide
            </button>

            visible && <p>Hello Students</p>
        </div>
    );
}