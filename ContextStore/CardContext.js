import React, {useState} from 'react';

export const CartContext = React.createContext({price: 0, cartlen:0, add:()=>{},suv:()=>{} });

// export const CartProvider = (props) => {
//   const [cart, setCart] = useState(0);

//   return (
//     <CartContext.Provider value={{price: cart, add:add, sub:sub}}>
//       {props.children}
//     </CartContext.Provider>
//   )
// }