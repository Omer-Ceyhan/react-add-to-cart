import { useState } from "react"
import Card from "./components/Card"
import Header from "./components/Header"
import Products from "./components/Products"
import './app.css'


export default function App() {
  const [cart, setcart]= useState([]);
  const emptyCart = () => {
    setcart([])
  }
  return (
    <div className=" mx-auto  "> 

    <Header cart={cart}/>
    <Products cart={cart} setcart={setcart} />
    <Card cart={cart} emptyCart={emptyCart}/> 

    </div>
  )
}