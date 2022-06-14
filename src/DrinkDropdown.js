import React from 'react';

export default function DrinkDropdown({ setDrinkId }) {
  function handleChange(e) {
    setDrinkId(e.target.value);
  }
  return <select onChange={handleChange}>
    <option value="1">Lemonade</option>
    <option value="2">Guava Juice</option>
    <option value="3">Chocolate Shake</option>
  </select>;
}