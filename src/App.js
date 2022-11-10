import './App.css';
import foodsObj from './foods.json';
import Lista from './components/lista';
import FoodBox from './components/foodbox';
import {useState} from "react"; 

// Array to render single element: Orange //
const food = [ {name: "Single Orange", calories: 85, image: "https://i.imgur.com/abKGOcv.jpg", servings: 1}]


function App() {
  
  const [allFoods, setFoods] = useState(foodsObj)

  return <div className='App'>

    {/* // Interation 1 - Render a Simple List */}
    {foodsObj.map((foodList) => {return(<Lista nome={foodList.name} imagem={foodList.image}/>)})}
  
    {/* Interation 2 - the FoodBox component */}
    {food.map((orangeBox) => {return(<FoodBox nome={orangeBox.name} calorias={orangeBox.calories} imagem={orangeBox.image} porcoes={orangeBox.servings}/>)})}
  
    {/* Interation 3 - Render a List of FoodBox Components */}
    <section className='foodbox'>    
       {allFoods.map((foodAllBox) => {return(<FoodBox nome={foodAllBox.name} calorias={foodAllBox.calories} imagem={foodAllBox.image} porcoes={foodAllBox.servings}/>)})}
    </section>

  </div>

}
export default App