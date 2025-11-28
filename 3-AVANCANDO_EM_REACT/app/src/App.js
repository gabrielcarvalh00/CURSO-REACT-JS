import logo from "./logo.svg";
import "./App.css";
import city from "./assets/city.jpg";
import ManageData from "./components/ManageData";
import ListeRender from "./components/ListeRender";
import ConditionalRender from "./components/ConditionRender";
//import ShowUserName from './components/ShowUserName';
import { useState } from "react";
import CarDetails from "./components/CarDetails";
import Fragment from "./components/Fragments";
import Container from "./components/Container";
import ExecuteFunction from "./components/ExecuteFunction";
import Message from "./components/Message";
import ChangeMessageState from "./components/ChangeMessageState";

function App() {
  //const name="Gabriel"; const [userName]=useState("Maria");
  /*
function ShowMenssage(){
    alert("Gabriel");
  }

  const cars = [
  { id: 1, brand: "Ferrari", color: "Amarela", newCar: true, km: 0 },
  { id: 2, brand: "KIA", color: "Branco", newCar: false, km: 34343 },
  { id: 3, brand: "Renault", color: "Azul", newCar: false, km: 234 },
];
*/

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);// funcao do uso state
  };

  return (
    <div>
      <Message msg={message}></Message>{/* show mensagge */}
      <ChangeMessageState handleMessage={handleMessage}></ChangeMessageState>

      {/*



 <ExecuteFunction props={ShowMenssage} >

 </ExecuteFunction>
     <Container test="testando uma prop">
      <p>Gabriel do cavalo</p>
    </Container>
  
   <Container test2="testando segunda prop">
      <p>Gabriel da egua</p>
    </Container>

    <Fragment propFragment="Gabriel  do cavalo">

  </Fragment>
  

    {cars.map((car) => (
  <CarDetails
    brand={car.brand}
    color={car.color}
    km={car.km}
    newCar={car.newCar}
  />
))}

      <CarDetails brand="bmw" km={1000} color="azul" newCar={true}></CarDetails>

   <CarDetails brand="Gol Quadrado" km={1000} color="azul" newCar={false}></CarDetails>

    
    
    <ShowUserName name={userName}/>*/}

      {/*  <ManageData>
  
  </ManageData>*/}

      {/*   <ListeRender>

    </ListeRender>*/}

      {/*<ConditionalRender> */}

      {/* </ConditionalRender>*/}
    </div>

    /*}
  <div className="App">
    <div>
        <img src="/img1.jpg" alt='Paisagem'></img>
    </div> 
      <img src={city} alt="cidade"></img>
    </div> 
   {*/
  );
}

export default App;
