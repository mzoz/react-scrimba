import React from "react"

function TodoItem(props) {
    function handleCheck() {
        console.log("checked!")
    }

    return (
        <div className="todo-item">
            <input type="checkbox" onChange={handleCheck}/>
            <p>{props.todo.text}</p>
        </div>
    )
}

export default TodoItem