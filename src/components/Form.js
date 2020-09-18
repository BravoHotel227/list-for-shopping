import React from 'react'

const Form = ({inputText, setInputText, setItems, items, setStatus}) => {
    const inputTextHandler = (e) => {
        // when you type into the input and onchagne event class this 
        // function which sends that data back the the state 
        setInputText(e.target.value)
    }
    const submitItemHandler = (e) => {
        e.preventDefault();
        setItems([
            ...items,
            {text: inputText, inBasket: false, id: Math.random()*1000}
        ])
        setInputText('');
    }
    const statusHandler = (e) => {
        setStatus(e.target.value);
    }
    
    return (
        <form>
            <input 
                value={inputText} 
                onChange={inputTextHandler} 
                type="text" 
                className="todo-input"
            />
            <button onClick={submitItemHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square" />
            </button>
            <div className="select">
                <select onChange={statusHandler} name="items" id="" className="filter-todo">
                    <option value="all">All</option>
                    <option value="inBasket">In Basket</option>
                    <option value="notInBasket">Not In Basket</option>
                </select>
            </div>
        </form>
    )
}

export default Form
