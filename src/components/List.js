import React from 'react'
import Item from './Item'
const List = ({items, setItems, filteredItems}) => {
    return (
        <div className='todo-container'>
            <ul className='todo-list'>
                {filteredItems.map(item => (<Item key={item.id} text={item.text} items={items} item={item} setItems={setItems} />))}
            </ul>
        </div>
    )
}

export default List
