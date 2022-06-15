import React from 'react';

export default function SideDropDown({ setSideId }) {
  function handleChange(e) {
    setSideId(e.target.value);
  }

  return <select onChange={handleChange}>
    <option value='1'>Magic Muffin</option>
    <option value='2'>Birthday Cake</option>
    <option value='3'>Brocolli and Brussels Sprout Sundae</option>
  </select>;
}