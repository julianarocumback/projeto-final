import React from 'react'
import Logo from './logo-painel.svg'
import {Link} from 'react-router-dom'
import Menu from './Menu'




export default function Cabecalho(){
    let barra = document.querySelector('.barra')   

    let mostrar = () => {
        // menu.hidden = 'true'
    }

    return (
        <div>
            <header className='header-pac'>
                <Link to='/painel-medico'><img className='logo-painel' src={Logo}/></Link>
                <div className='barra' onClick={mostrar}>
                    <i class="fa-solid fa-bars"></i>
                </div>
          

            </header>
        </div>
    )
}