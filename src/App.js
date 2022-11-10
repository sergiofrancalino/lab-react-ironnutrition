import 'antd/dist/antd.min.css'; // To make the Ant Design styles available to all project.//
import './App.css';
import foods from './foods.json'; //importa os elementos da array foods.json//
import Lista from './components/lista';
import FoodBox from './components/foodbox/FoodBox';
import {useState} from "react"; 
import { Row, Col } from 'antd';

// Array to render single element: Orange //
const food = [ {name: "Single Orange", calories: 85, image: "https://i.imgur.com/abKGOcv.jpg", servings: 1}]


function App() {
  
  const [allFoods, setAllFoods] = useState(foods)

  return (<div className='App'>
          
      {/* // Interation 1 - Render a Simple List */}
     
      {allFoods.map((foodList) => {
        return(<Lista nome={foodList.name} imagem={foodList.image}/>)})}

      {/* Interation 2 - the FoodBox component */}

     
      {food.map((orange) => {
        return(<FoodBox nome={orange.name} calorias={orange.calories}
                        imagem={orange.image} porcoes={orange.servings}/>)})}
  
      
      {/* Interation 3 - Render a List of FoodBox Components */}
      <Row>
        {allFoods.map((foodAllBox) => {
          return(<FoodBox nome={foodAllBox.name} calorias={foodAllBox.calories}
                          imagem={foodAllBox.image} porcoes={foodAllBox.servings}/>)})}
      </Row>
     

    </div>)

}
export default App