import { useState } from 'react';
import './App.css';
import ToDoTable from '../../lab4/src/src/components/ToDoTable';
import AddToDOComponent from '../components/AddToDOComponent';
import SearchInput from '../../lab4/src/src/components/SearchInput';

function App() {
    const [toDos, setToDos] = useState([]);
    const [newToDo, setNewToDo] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    function handleNewTitleChange(event) {
        setNewToDo({ id: Math.random(), title: event.target.value });
    }

    function handleSubmit(event) {
        event.preventDefault();
        setToDos([...toDos, newToDo]);
    }

    function handleDelete(id) {
        setToDos(toDos.filter((toDo) => toDo.id !== id));
    }

    function handleSearchChange(event) {
        setSearchTerm(event.target.value);
    }

    const filteredToDos = toDos.filter((toDo) =>
        toDo.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <SearchInput
                searchTerm={searchTerm}
                onSearchChange={handleSearchChange}
            />
            <AddToDOComponent
                title={newToDo?.title}
                onTitleChange={handleNewTitleChange}
                onSubmit={handleSubmit}
            />
            <ToDoTable toDos={filteredToDos} onDelete={handleDelete} />
        </>
    );
}

export default App;
