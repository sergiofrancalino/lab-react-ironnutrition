// Interation 2 e 3 - the FoodBox component and Render a List of FoodBox Components

import { Card, Col, Button } from 'antd';

function FoodBox(props) {
    return (
      <Col>
        <Card
          title={props.nome}
          style={{ width: 230, height: 300, margin: 10 }}
        >
          <img src={props.imagem} height={60} alt="Type of food"/>
          <p>Calories: {props.calorias} </p>
          <p>Servings: {props.porcoes} </p>
          <p>
            <b>Total Calories: {+props.calorias * +props.porcoes}</b> kcal
          </p>
          <Button type="primary"> Delete </Button>
        </Card>
      </Col>
    );
  }
  
  export default FoodBox;