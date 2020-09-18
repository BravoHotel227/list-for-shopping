import React, { useState, useEffect} from 'react';
import './App.css';

// Import Components 
import Form from './components/Form';
import List from './components/List';

function App() {
  // States
  const [inputText, setInputText] = useState('');
  const [items, setItems] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredItems, setFilteredItems] = useState([]);

  // Run once
  useEffect(() => {
    getLocalItems()
  }, [])

  // UseEffect
  useEffect(() => {
    filterHandler()
    saveLocalItems()
  }, [items, status])

  // Functions
  const filterHandler = () => {
    switch(status){
      case 'inBasket':
        setFilteredItems(items.filter(item => item.inBasket === true));
        break;
      case 'notInBasket':
        setFilteredItems(items.filter(item => item.inBasket === false));
        break;
      default:
        setFilteredItems(items);
        break;
    }
  }

  // Save to local
  const saveLocalItems = () => {
    localStorage.setItem('list', JSON.stringify(items))
  }
  const getLocalItems = () => {
    if(localStorage.getItem('list') === null) {
      localStorage.setItem('list', JSON.stringify([]));
    }else{
      const listLocal = JSON.parse(localStorage.getItem('list'));
      setItems(listLocal);
    }
  }

  return (
    <div className="App">
      <header>
        <h1>Shopping List</h1>
      </header>
      <Form 
        inputText={inputText} 
        items={items} 
        setItems={setItems} 
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <List items={items} setItems={setItems} filteredItems={filteredItems}/>
    </div>
  );
}

export default App;
