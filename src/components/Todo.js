import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function Todo() {
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState("");

  const addTodo = (formData) => {
    if (formData.input !== "")
      setTodos((prevState) => {
        return [...prevState, { ...formData }];
      });
  };

  const removeTodo = (id) => {
    const removedArr = todos.filter((todo) => todo.id !== id);
    setTodos(removedArr);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <>
      <h1>Add Todo</h1>
      <hr></hr>
      <TodoForm
        onSubmit={addTodo}
        editId={editId}
        allFormData={todos}
        setTodos={setTodos}
        setEditId={setEditId}
      />
      <div>
        <h1 className="todo-list-heading">Todo list</h1>
        <TodoList
          todos={todos}
          completeTodo={completeTodo}
          setEditId={setEditId}
          removeTodo={removeTodo}
          editId={editId}
        />
      </div>
    </>
  );
}

export default Todo;
