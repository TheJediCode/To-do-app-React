import React from 'react'

export default function ToDo({ item, toggleItem }) {
    function handleTodoClick() {
        toggleItem(item.id);
    }
    return (
        <div>
            <label>
                <input type="checkbox" checked={item.complete} onChange={handleTodoClick} />
                {item.name}
            </label>
        </div>
    )
}
