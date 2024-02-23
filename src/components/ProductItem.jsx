import React from 'react'
const ProductItem = ({product ,  setcart}) => {

  const addToCart = (product)=>{
    setcart((prevState) => [...prevState , product])
  }
  return (
    
<div className='border p-4 m-2 rounded-lg shadow-lg '>
      
      <img className='w-full h-60 object-scale-down rounded-t-lg ' src={product.image} alt="product image" />



<div className='p-4'>
      <h2 className='text-xl font-semibold mb-2'>{product.name}</h2>
      <p className='text-gray-500 my-2'>{product.price}</p>
      <button className='transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ... rounded-lg text-white w-52 mx-40 py-2' onClick={() => addToCart(product)}>Sepete Ekle</button>
      </div>


      

    </div>
        
    
      
    


    
    
  )
}

export default ProductItem