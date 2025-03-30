import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Search from './component/Search'
import FoodList from './component/FoodList';
import "./App.css"
import Nav from './component/Nav';
import Container from './component/Container';
import InnerOne from './component/InnerOne';
import FoodDetails from './component/FoodDetails';

function App() {
  const [foodData, setFoodData]=useState([]);
  const [foodId, setFoodId]=useState("658615");
  
  return (
    <div className="App">
      <Nav />
      <Search key={foodData} foodData={foodData} setFoodData={setFoodData}/>
      <Container>
        <InnerOne>
          <FoodList setFoodId={setFoodId} foodData={foodData} setFoodData={setFoodData} />
        </InnerOne>
        <InnerOne> <FoodDetails foodId={foodId} /></InnerOne>
      </Container>
    </div>
  )
}

export default App
