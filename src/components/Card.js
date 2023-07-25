import {useState, useContext} from "react";
import {CartContext} from "./ContextProvider/Context"

function Card({card}) {

  const [add, setAdd] = useState(true); // state to toggle the add to card button
  const{cartData, setCartData} = useContext(CartContext); //context api to update cart values

//func called on click of add to cart btn, increments cart value and changes the btn to remove from cart
  const addToCart = () => 
  {
     setCartData(cartData+1)
     setAdd(!add);
  }

//func called on remove from car btn, decrements cart value and changes the btn to add to cart
  const removeFromCart = () => 
  {
     setCartData(cartData-1)
     setAdd(!add);
  }

	return(
     <div className="col">
     <div className="card h-100 mx-4 my-5" style={{width: "18rem", height:"8rem"}}>
     {card.forSale ? (<div class="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}}>Sale</div>) : ""}
     <img src={card.image} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{card.name}</h5>
    <p className="card-text"> {card.rating ? "⭐⭐⭐⭐⭐" :""} </p>
    <p className="card-text"><s className="text-secondary"> {card.initialPrice} </s>  {card.finalPrice}</p>
    {add ? 
    <a href="#" className="btn btn-outline-dark" onClick = {addToCart}>Add to Cart</a> : <a href="#" className="btn btn-outline-dark" onClick = {removeFromCart}>Remove from Cart</a>
    }
  </div>
  </div>
    </div>
	);
}

export default Card;