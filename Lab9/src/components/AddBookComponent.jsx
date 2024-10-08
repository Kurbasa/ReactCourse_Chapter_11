import React, { useState } from "react";

const AddBookComponent = ({ newBook, onInputChange, onSubmit, isEdit }) => (
  <form onSubmit={onSubmit}>
    <div>
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={newBook.firstName}
        onChange={onInputChange}
        style={{ borderColor: !newBook.firstName && "red" }}
      />
      {!newBook.firstName && (
        <p style={{ color: "red" }}>The first name is required</p>
      )}
    </div>
    <div>
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={newBook.lastName}
        onChange={onInputChange}
        style={{ borderColor: !newBook.lastName && "red" }}
      />
      {!newBook.lastName && (
        <p style={{ color: "red" }}>The last name is required</p>
      )}
    </div>
    <div>
      <input
        type="text"
        name="phone"
        placeholder="Phone"
        value={newBook.phone}
        onChange={onInputChange}
        style={{ borderColor: !newBook.phone && "red" }}
      />
      {!newBook.phone && <p style={{ color: "red" }}>The phone is required</p>}
    </div>
    <button type="submit">{isEdit ? "Save Changes" : "Add Contact"}</button>
  </form>
);

const SearchInput = ({ searchTerm, onSearchChange }) => (
  <input
    type="text"
    placeholder="Search..."
    value={searchTerm}
    onChange={onSearchChange}
  />
);

const BookTable = ({ books, onEdit, onDelete }) => (
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Phone</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {books.map((book) => (
        <tr key={book.id}>
          <td>{book.id}</td>
          <td>{book.firstName}</td>
          <td>{book.lastName}</td>
          <td>{book.phone}</td>
          <td>
            <button onClick={() => onEdit(book)}>Edit</button>
            <button onClick={() => onDelete(book.id)}>Delete</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

const AddressBook = () => {
  const [newBook, setNewBook] = useState({
    firstName: "",
    lastName: "",
    phone: "",
  });
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [editingId, setEditingId] = useState(null);

  function handleInputChange(event) {
    const { name, value } = event.target;
    setNewBook({ ...newBook, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const { firstName, lastName, phone } = newBook;

    if (!firstName.trim() || !lastName.trim() || !phone.trim()) {
      alert("All fields are required.");
      return;
    }

    if (isEdit) {
      setBooks(
        books.map((book) =>
          book.id === editingId ? { id: editingId, ...newBook } : book
        )
      );
      setIsEdit(false);
      setEditingId(null);
    } else {
      const newBookWithId = { id: Date.now(), ...newBook };
      setBooks([...books, newBookWithId]);
    }

    setNewBook({ firstName: "", lastName: "", phone: "" });
  }

  function handleDelete(id) {
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
  }

  function handleEdit(book) {
    setNewBook({
      firstName: book.firstName,
      lastName: book.lastName,
      phone: book.phone,
    });
    setIsEdit(true);
    setEditingId(book.id);
  }

  function handleSearchChange(event) {
    setSearchTerm(event.target.value);
  }

  const filteredBooks = books.filter((book) =>
    `${book.firstName} ${book.lastName} ${book.phone}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <AddBookComponent
        newBook={newBook}
        onInputChange={handleInputChange}
        onSubmit={handleSubmit}
        isEdit={isEdit}
      />
      <SearchInput
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
      />
      {filteredBooks.length > 0 ? (
        <BookTable
          books={filteredBooks}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      ) : (
        <p>No data to display</p>
      )}
    </div>
  );
};

export default AddressBook;
