import './App.css';
import foodsObj from './foods.json';
import Lista from './components/lista';
import {useState} from "react"; 

function App() {
  
  const [foods, setFoods] = useState(foodsObj)

  /* console.log(foods) */

  return <div className="App">
    {foods.map((food) => {return(<Lista nome={food.name} calorias={food.calories} imagem={food.image}/>)})}
  </div>
}
export default App