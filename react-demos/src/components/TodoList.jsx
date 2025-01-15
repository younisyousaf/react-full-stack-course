import React from "react";
import { createPortal } from "react-dom";
const TodoList = () => {
  const [todos, setTodos] = React.useState([]);
  const handleTodos = (e) => {
    e.preventDefault();
    const todo = e.currentTarget.elements.namedItem("todo").value;
    setTodos([...todos, { id: Date.now(), text: todo }]);
    e.currentTarget.reset();
  };
  return (
    <>
      <h1 className="text-center mt-3">Todo List</h1>
      <form onSubmit={handleTodos} className="w-50 mx-auto">
        <div className="mb-3">
          <label htmlFor="todo" className="form-label">
            Todo
          </label>
          <input
            type="text"
            className="form-control"
            id="todo"
            name="todo"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>

        <ul className="list-group mt-3">
          {todos.map((todo) => (
            <li key={todo.id} className="list-group-item">
              {todo.text}
            </li>
          ))}
        </ul>
      </form>
      <div>
        <p>This child is placed in the parent div.</p>
        {createPortal(
          <p>This child is placed in the document body.</p>,
          document.body
        )}
      </div>
    </>
  );
};

export default TodoList;
