import React, { useState } from "react";
import AddToDoComponent from "./AddBookComponent";
import SearchInput from "./SearchInput";
import ToDoTable from "./ToDoTable";
import Loading from "./Loading";

const ToDoContainer = () => {
  const [toDos, setToDos] = useState([]);
  const [newToDo, setNewToDo] = useState({ title: "" });
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function handleNewTitleChange(event) {
    setNewToDo({ ...newToDo, title: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (newToDo.title.trim()) {
      const newTodoWithId = { id: Date.now(), ...newToDo };
      setToDos([...toDos, newTodoWithId]);
      setNewToDo({ title: "" });
    } else {
      alert("ToDo title cannot be empty.");
    }
  }

  function handleDelete(id) {
    const updatedToDos = toDos.filter((toDo) => toDo.id !== id);
    setToDos(updatedToDos);
  }

  function handleEdit(id, newTitle) {
    const updatedToDos = toDos.map((toDo) =>
      toDo.id === id ? { ...toDo, title: newTitle } : toDo
    );
    setToDos(updatedToDos);
  }

  function handleSearchChange(event) {
    setSearchTerm(event.target.value);
  }

  const filteredToDos = toDos.filter((toDo) =>
    toDo.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Loading isLoading={isLoading}>
        <>
          <AddToDoComponent
            title={newToDo.title}
            onTitleChange={handleNewTitleChange}
            onSubmit={handleSubmit}
          />
          <SearchInput
            searchTerm={searchTerm}
            onSearchChange={handleSearchChange}
          />
          <ToDoTable
            toDos={filteredToDos}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        </>
      </Loading>
    </div>
  );
};

export default ToDoContainer;
