import React from 'react';

const AddToDOComponent = ({ title = '', onTitleChange, onSubmit }) => {
    return (
        <form>
            <input value={title} onChange={onTitleChange} />
            <button type="submit" onClick={onSubmit}>
                Add
            </button>
        </form>
    );
};

export default AddToDOComponent;
