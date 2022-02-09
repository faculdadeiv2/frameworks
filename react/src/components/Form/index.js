import React, { useState } from 'react';

function Form(props) {
    const [task, setTask] = useState("");

    function handleChangeInput(event) {
        let inputTask = event.target.value;

        setTask(inputTask);
    }

    function handleAddItemToList(event) {
        event.preventDefault();

        if (task) {
            props.handleAddItemToList(task) // <-----------

            setTask("");
        }
    }

    return (
        <form >
            <input type="text" onChange={handleChangeInput} value={task} />
            <button type="submit" onClick={handleAddItemToList}>Adiciona</button>
        </form>
    )
}

export default Form;