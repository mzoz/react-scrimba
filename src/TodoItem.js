import React from "react"

function TodoItem(props) {
    // function handleCheck() {
    //     console.log("checked!")
    // }

    return (
        <div className="todo-item">
            <input 
                type="checkbox" 
                checked={props.item.completed}
                onChange={() => props.handleChange(props.item.id)}/>
            <p className={props.item.completed ? "checked" : null}>{props.item.text}</p>
        </div>
    )
}

export default TodoItem