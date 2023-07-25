// import { useReducer } from "react"
// import { store } from "../../store";

// let allProducts = [...store];


// const reducer = (cart, action) => {
  
//   switch(action.type) {
//     case "addToCart":
//     let item = allProducts.filter((prod)=> {
//       return prod.id === action.id;
//     })
//     cart.push(item)
//   }

//   return cart;
// }

// const CartContext = () => {
//   const [cart, dispatch] = useReducer(reducer, []);

//   return (
//     // <div onClick={dispatch({type: "addToCart", id: 1})}>CartContext</div>
//     <div></div>
//   )
// }

// export default CartContext
