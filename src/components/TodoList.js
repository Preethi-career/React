import React from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

const TodoList = ({
  todos,
  completeTodo,
  removeTodo,
  updateTodo,
  setEditId,
  editId,
}) => {
  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.input}
        {/* {todo.estimate} {todo.desc} */}
      </div>
      <div className="icons">
        {editId !== todo.id && (
          <RiCloseCircleLine
            onClick={() => removeTodo(todo.id)}
            className="delete-icon"
          />
        )}
        <TiEdit onClick={() => setEditId(todo.id)} className="edit-icon" />
      </div>
    </div>
  ));
};

export default TodoList;
