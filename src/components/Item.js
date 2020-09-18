import React from 'react'

const Item = ({text, items, setItems, item}) => {
    const deleteHandler =() => {
        setItems(items.filter(el => el.id !== item.id))
    }
    const completeHandler = () => {
        setItems(items.map(el => {
            if(el.id === item.id){
                return {
                    ...el,
                    inBasket: !el.inBasket
                }
            }
            return el;
        }))
    }
    return (
        <div className='todo'>
            <li className={`todo-item ${item.inBasket ? "completed": ""}`} >{text}</li>
            <button onClick={completeHandler} className='complete-btn'>
                <i className='fas fa-check'></i>
            </button>
            <button onClick={deleteHandler} className='trash-btn'>
                <i className='fas fa-trash'></i>
            </button>
        </div>
    )
}

export default Item
