import React, {createContext, useState} from "react";

export const CartContext = createContext("");

const Context = ({children}) => {

   const [cartData, setCartData] = useState(0);

	return (

		<> 
        <CartContext.Provider value = {{cartData, setCartData}}>
          {children}
        </CartContext.Provider>
		</>

		)
}

export default Context;