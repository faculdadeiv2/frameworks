import React, { useState } from 'react';

import List from './components/List';
import Form from './components/Form';

function Todo() {
    const [itemsList, setItemsList] = useState([]);

    return (
        <div>
            <h1>Lista de tarefas</h1>
            <Form handleAddItemToList={handleAddItemToList} /> { /* <------------ */}

            <List itemsList={itemsList} />
        </div>
    );

    function handleAddItemToList(newItem) {   // <------------ 
        setItemsList([...itemsList, newItem])
    }
}

export default Todo;