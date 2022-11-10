// Interation 3 - To render a List of All foods array components

import { Card, Row, Col, Divider, Input, Button } from 'antd';

function FoodBox(comida) {
    return (
        <Card
          title={comida.nome}
          style={{width: 230, height: 300, margin: 10}}>

          <img src={comida.imagem} height={60} alt="Type of food"/>
          <p>Calories: {comida.calorias} </p>
          <p>Servings: {comida.porcoes} </p>

          <p>
            <b>Total Calories: {comida.calorias * comida.porcoes}</b> kcal
          </p>
          <Button type="primary"> Delete </Button>
       </Card>  
    );
  }
  
  export default FoodBox;