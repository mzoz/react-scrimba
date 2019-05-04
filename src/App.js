import React from "react"
import TodoItem from "./TodoItem"
import todosData from "./todosData"
import "./style.css"

// function App() {
//     const todosComponents = todosData.map(todo =>
//         <TodoItem key={todo.id} todo={todo} />
//     )

//     return (
//         <div className="todo-list">
//             {todosComponents}
//         </div>
//     )
// }

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: todosData
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id) {
        this.state.todos.forEach(item => {
            if (item.id === id) {
                item.completed = !item.completed
            }
        })
        this.setState(this.state)
    }

    render() {
        console.log('rendering...')
        const todoItems = this.state.todos.map(item => 
            <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>)
        return (
            <div className="todo-list">{todoItems}</div>
        )
    }
}

export default App