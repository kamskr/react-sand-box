import React, { useReducer, useState } from "react";

const Components = () => {
  const [inputContent, setInputContent] = useReducer(
    (state, newState) => ({
      ...state,
      ...newState,
    }),
    {
      searchInputContent: "",
      itemInputContent: "",
    }
  );

  const [toDoItems, setToDoItems] = useState([]);

  const handleInputchange = (e) => {
    setInputContent({
      [e.target.name]: e.target.value,
    });
  };

  const addNewItem = () => {
    const newElement = {
      content: inputContent.itemInputContent,
      id: toDoItems.length + 1,
    };

    setToDoItems([...toDoItems, newElement]);
  };

  const deleteItem = (id) => {
    const newItemsList = toDoItems.filter((item) => item.id !== id);
    setToDoItems(newItemsList);
  };

  return (
    <div>
      <h2 className="title is-3">Components</h2>
      <input
        autoComplete="off"
        className="input"
        name="searchInputContent"
        type="text"
        value={inputContent.searchInputContent}
        onChange={handleInputchange}
        placeholder="Filter items"
      />
      <input
        autoComplete="off"
        className="input"
        name="itemInputContent"
        type="text"
        value={inputContent.itemInputContent}
        onChange={handleInputchange}
        placeholder="Add item"
      />
      <button className="button is-warning" onClick={addNewItem}>
        Add item
      </button>
      {toDoItems
        .filter(({ content }) =>
          content
            .toLowerCase()
            .includes(inputContent.searchInputContent.toLowerCase())
        )
        .map(({ id, content }) => (
          <div key={id} className="notification is-info">
            <button className="delete" onClick={() => deleteItem(id)} />
            {content}
          </div>
        ))}
    </div>
  );
};

export default Components;
