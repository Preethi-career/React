import React, { useState, useEffect } from "react";

let initialData = {
  input: "",
  estimate: "",
  desc: "",
};

function TodoForm(props) {
  const { allFormData, editId, setEditId, setTodos } = props;
  const [formData, setFormData] = useState({ ...initialData });

  useEffect(() => {
    if (editId) {
      let foundData = allFormData.find(({ id }) => id === editId);
      setFormData(foundData);
    }
  }, [editId, allFormData]);

  const handleonchange = (event, name) => {
    setFormData((prevState) => {
      return { ...prevState, [name]: event.target.value };
    });
  };

  const handleSubmit = (e) => {
    if (editId) {
      let copyAllFormData = [...allFormData];
      copyAllFormData = copyAllFormData.map((item) => {
        if (item.id === editId) {
          return formData;
        }
        return item;
      });
      setTodos(copyAllFormData);
      setEditId("");
    } else {
      props.onSubmit({
        id: Math.floor(Math.random() * 100),
        ...formData,
      });
    }
    setFormData({ ...initialData });
  };

  return (
    <>
      <input
        placeholder="Title"
        value={formData.input}
        onChange={(event) => handleonchange(event, "input")}
        name="text"
        className="todo-input"
      />

      <input
        type="number"
        className="todo-input"
        placeholder="Estimate(hrs)"
        value={formData.estimate}
        name="estimate"
        id="estimate"
        onChange={(event) => handleonchange(event, "estimate")}
      />

      <input
        type="text"
        className="todo-input"
        value={formData.desc}
        name="desc"
        id="desc"
        onChange={(event) => handleonchange(event, "desc")}
      />
      <button onClick={handleSubmit} className="todo-button">
        {editId ? "Update" : "Add"}
      </button>
      <br></br>
    </>
  );
}

export default TodoForm;
