import React from 'react'
import { LuShoppingCart } from "react-icons/lu";

function CardIcon({cart}) {
  return (
    <div className='relative'>
    <LuShoppingCart className='text-2xl justify-center items-center rounded-full absolute '/>
    {cart.length > 0 && (<span className='bg-red-500 text-white flex w-5 h-5  justify-center items-center rounded-full absolute -top-2 -right-9 text-xs'>{cart.length}</span>)}
    </div>
  )
}

export default CardIcon