import './App.css';
import {cardData} from "./components/cardData";
import Card from "./components/Card";
import Banner from "./components/Banner";
import Cart from "./components/Cart";

function App() {

 return (
  <>
    <div className="App">   
     <Cart />
     <Banner /> 
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
       {
         cardData.map(card => <Card card={card} />)
       } 
       </div>    
    </div>
    </>
  );
}

export default App;
