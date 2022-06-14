import { useState } from 'react';
import './App.css';
import DrinkDropdown from './DrinkDropdown';
import SideDropDown from './SideDropdown';
import FoodDropDown from './FoodDropdown';
import NameInput from './NameInput';
import InstructionForm from './IntructionForm';
import FoodImages from './FoodImages';

function App() {
  
  const [foodId, setFoodId] = useState(1);
  const [drinkId, setDrinkId] = useState(1);
  const [sideId, setSideId] = useState(1);
  const [orderName, setOrderName] = useState('_');
  const [extraInstructions, setExtraInstructions] = useState(['']); 
  
  return (
    <div style={{ backgroundImage:`url('../background.png')` }} className="App">

      <div className='timmydiv'>
        <h1>TIMMYS KITCHEN</h1>
        <img className='timmy' src='../timmy.png'/>
      </div>

      <div className='order-name1'>
        <NameInput setOrderName={setOrderName} />
        <h3> Order for {orderName}</h3>
      </div>

      <div>
        <FoodImages
          foodId={foodId}
          sideId={sideId}
          drinkId={drinkId} />
      </div>

      <div className='order-form'>
        <FoodDropDown setFoodId={setFoodId} />
        <DrinkDropdown setDrinkId={setDrinkId} />
        <SideDropDown setSideId={setSideId} />
      </div>

      <div className='instructions-list'>
        <InstructionForm
          extraInstructions={extraInstructions} setExtraInstructions={setExtraInstructions} />
        {
          extraInstructions.map((instruction, i) => <li key={`${instruction}=${i}`}>
            {instruction}
          </li>)
        }
      </div>
        
    </div>
  );
}

export default App;
