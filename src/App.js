import { useState } from 'react';
import './App.css';
import DrinkDropdown from './DrinkDropdown';
import SideDropDown from './SideDropdown';
import FoodDropDown from './FoodDropdown';
import NameInput from './NameInput';
import InstructionsForm from './InstructionForm';
import FoodImages from './FoodImages';

function App() {

  const [foodId, setFoodId] = useState(1);
  const [drinkId, setDrinkId] = useState(1);
  const [sideId, setSideId] = useState(1);
  const [orderName, setOrderName] = useState('customer');
  const [extraInstructions, setExtraInstructions] = useState(['extra sauce']); 

  return (
    <div className="App">

      <div className='order-name'>
        <h3> Order for {orderName}</h3>
        <FoodImages
          foodId={foodId}
          sideId={sideId}
          drinkId={drinkId} />
      </div>

      <div className='order-form'>
        <FoodDropDown setFoodId={setFoodId} />
        <DrinkDropdown setDrinkId={setDrinkId} />
        <SideDropDown setSideId={setSideId} />
        <NameInput setOrderName={setOrderName} />
        <InstructionsForm
          extraInstructions={extraInstructions} setExtraInstructions={setExtraInstructions} />
      </div>
      
      <div className='instructions-list'>
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
