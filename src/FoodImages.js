export default function FoodImages({ foodId, drinkId, sideId }) {
  return <div className='image-display'>
    <img className="food-img" src={`food-${foodId}.png`} />
    <img className="food-img" src={`drink-${drinkId}.png`} />
    <img className="food-img" src={`side-${sideId}.png`} />
  </div>;
}