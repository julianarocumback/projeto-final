import React from 'react'
import Logo from './logo-painel.svg'
import {Link} from 'react-router-dom'
import Menu from '../PainelPac/Menu'




export default function CabecalhoPaciente(){
    let barra = document.querySelector('.barra')
    let menu = document.querySelector('.Menu')
   

    let mostrar = () => {
        menu.hidden = 'true'
    }

    return (
        <div>
            <header className='header-pac'>
                <Link to='/painel-paciente'><img className='logo-painel' src={Logo}/>
                </Link>
                <div className='barra' onClick={mostrar}>
                    <i class="fa-solid fa-bars"></i>
                </div>
          

            </header>
        </div>
    )
}