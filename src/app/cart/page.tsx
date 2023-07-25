"use client"
import { Container } from "@mui/material"
import React, { useEffect } from 'react'
import { useReducer } from "react"
import { store } from "../../../store";

let allProducts = [...store];


const reducer = (cart, action) => {
  switch (action.type) {
    case "addToCart":
      let item = allProducts.find((prod) => {
        return prod.id === action.id;
      })
      cart.push(item)
      return cart;
    default:
      return cart;
  }
}

const Cart = () => {
  const [cart, dispatch] = useReducer(reducer, [{
    "id": 1,
    "title": "iPhone 9",
    "price": 549,
    "description": "An apple mobile which is nothing like apple",
    "rating": 4.69,
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
  }]);
  

  return (
    <>
      <div style={{ marginTop: '100px' }}>
        {/* <button onClick={() => dispatch({ type: "addToCart", id: 3 })}>Add</button> */}
        <ol>
          {cart.map((item) => {
            return <li key={item.id}>{item.title}</li>
          })}
        </ol>
      </div>
    </>
  )
}

export default Cart
