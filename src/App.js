import React, { useState, useRef, useEffect } from 'react';
import ToDoList from "./ToDoList";
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = "itemApp.items";

function App() {
  const [items, setItems] = useState([]);
  const itemNameRef = useRef();

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(storedItems) setItems(storedItems);
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(items))
  }, [items])

  function toggleItem(id) {
    const newItems = [...items];
    const item = newItems.find(item => item.id === id);
    item.complete = !item.complete;
    setItems(newItems);
  }

  function handleAddItem(e) {
    const name = itemNameRef.current.value;
    if (name === '') return;
    setItems(prevItems => {
        return [...prevItems, {id: uuidv4(), name: name, complete: false}]
    })
    itemNameRef.current.value = null;
  }

  function handleClearItems() {
    const newItems = items.filter(item => !item.complete)
    setItems(newItems);
  }

  return (
    <>
      <ToDoList className="toDoItems" items={items} toggleItem={toggleItem}/>
      <input className="field" ref={itemNameRef} type="text" />
      <button className="button" onClick={handleAddItem}>Add Task</button>
      <button className="button" onClick={handleClearItems}>Erase finished tasks</button>
      <div className="output">{items.filter(item => !item.complete).length} items remaining</div>
    </>
  );
}

export default App;
