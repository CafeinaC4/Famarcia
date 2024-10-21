import React from 'react'
import Camisa from '../assets/farmarcia-camiseta.png'
import Cartoes from '../assets/farmarcia-cartoes.png'
import Camisas from '../assets/farmarcia-camisetas.png'

function Products() {

    const data = [
        {
            img: Camisas
        },
        {
            img: Camisa
        }, 
        {
            img: Cartoes
        }
    ]

  return (
    <div className="w-3/4 m-auto">
        <div className="mt-20"></div>

    </div>
  )
}

export default Products
