import React from 'react'
import ToDo from "./ToDo"

export default function ToDoList({ items, toggleItem }) {
    return (
        items.map(item => {
            return <ToDo key={item.id} toggleItem={toggleItem} item={item} />
        })
    )
}
