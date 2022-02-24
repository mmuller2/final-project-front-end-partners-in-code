import Homepage from '../Homepage/Homepage.js';
import ContactPage from '../ContactPage/ContactPage';

import { Routes, Route, Link } from 'react-router-dom';
import '../css/app.css';

import React, { useState } from 'react';

import ItemsDisplay from '../ItemsDisplay/ItemsDisplay.js';
import items from '../../libs/items.js';

import AddItemPopUp from '../AddNewItem/AddNewItem';

function App() {
  //this state keeps whole array of items
  const [updatedListItems, setupdatedListItems] = useState(items);

  //this function on click of the button, adds new item to the old item array
  function handleClick(newItem) {
    console.log(`handleClick run!`);
    console.log(updatedListItems);
    setupdatedListItems([newItem, ...updatedListItems]);
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route
          path="/items"
          element={
            <ItemsDisplay items={updatedListItems} onAddNewItem={handleClick} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
