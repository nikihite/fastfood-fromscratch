export default function FoodDropDown({ setFoodId }) {
  function handleChange(e) {
    setFoodId(e.target.value);
  }

  return <select onChange={handleChange}>
    <option value="1">Blubber Nuggets</option>
    <option value="2">Pancakes</option>
    <option value="3">Sandwhich</option>
  </select>;
}