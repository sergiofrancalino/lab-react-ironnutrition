import './App.css';
import foodsObj from './foods.json';
import Lista from './components/lista';
import FoodBox from './components/foodbox';

import {useState} from "react"; 

function App() {
  
  const [allFoods, setFoods] = useState(foodsObj)

  /* console.log(foods) */

  return <div className="App">

    {/* // Interation 1 - Render a Simple List */}
    {allFoods.map((food) => {return(<Lista nome={food.name} imagem={food.image}/>)})}

    {/* Interation 2 - the FoodBox component */}
    <FoodBox food={{name: "Orange", calories: 85, image: "https://i.imgur.com/abKGOcv.jpg", servings: 1}} />

    {/* Interation 3 - Render a List of FoodBox Components */}
    {allFoods.map((food) => {return(<FoodBox nome={food.name} calorias={food.calories} imagem={food.image} porcoes={food.servings}/>)})}
  
  </div>
}
export default App