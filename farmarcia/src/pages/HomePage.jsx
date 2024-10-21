import React from 'react'
import Camisas from '../assets/farmarcia-camisetas.png'
import Cartoes from '../assets/farmarcia-cartoes.png'
import Header from '../components/Header.jsx'
import Cards from '../components/Products.jsx'
import Camisa from '../assets/farmarcia-camiseta.png'

function HomePage() {


    
  return (
    <div>
            <Header/>
        <body>
            <div className="background">
                <div className="content">
                    <p>Após alguns contratempos nosso site estava fora do ar, mas agora, nossa farmarcia está aberta novamente!</p>

                    <p></p>
                </div>
                <div className="product-banner">
                    <h3>Conheça algum de nossos produtos para ajudar:</h3>
                    <img src={Camisas}/>
                    <img src={Cartoes}/>
                    <img scr={Camisa}/>
                </div>
            </div>
        </body>
    </div>
  )
}

export default HomePage
