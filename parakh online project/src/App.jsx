import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import data from "./data.json"
import Product from "./Product";

function App() {
  const ProductData = [...data.data];
  console.log(ProductData);
  return (
    <>
      <div className='fs-1 h2'>Parakh Online Assignment</div>
      {ProductData.map((item) => (
        <div className='container mt-5 h3'>{item.name}
          <div className='border border-dark border-2'>
          </div>
          <div className='d-flex gap-4 my-4'>
            {item.productList.map((product) => (
              <Product


              />
            ))}
          </div>
        </div>

      ))}
    </>
  )
}

export default App
