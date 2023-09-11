import { useState } from "react"

export function NewTodoForm() {
    const [newItem, setNewItem] = useState("")

    function handelSubmit(e) {
        e.preventDefault()

        setTodos(currentTodo => {
            return [
                ...currentTodo,
                {id: crypto.randomUUID(), title: newItem, completed: false },
            ]
        })

        setNewItem("")
    }


    return (
        <form onSubmit={handleSubmit} className="now-item-form">
          <div className="form-row">
            <label htmlFor="item">New Item</label>
            <input
              value = {newItem}
              onChange={e => setNewItem(e.target.value)}
              type="text"
              id ="item"
            />
          </div>
           <button className="btn">Add</button>
        </form>
    )
}