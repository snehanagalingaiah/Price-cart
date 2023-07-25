import { CartFill } from 'react-bootstrap-icons';
import {useState, useContext} from "react"
import {CartContext} from "./ContextProvider/Context"

function Cart()
{
	const{cartData, setCartData} = useContext(CartContext); //contex api to display cart value

	return(
		<div className="App-cart">
		<button type="button" className="btn btn-outline-dark"><CartFill /> Cart <span className="badge bg-dark text-white">{cartData}</span></button>
		</div>
		);
}

export default Cart