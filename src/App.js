import React from "react"
import TodoItem from "./TodoItem"
import todosData from "./todosData"
import "./style.css"

function App() {
    const todosComponents = todosData.map(todo =>
        <TodoItem key={todo.id} todo={todo} />
    )

    return (
        <div className="todo-list">
            {todosComponents}
        </div>
    )
}

export default App