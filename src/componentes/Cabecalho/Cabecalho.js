import React, {useState} from 'react'
import Logo from './logo-painel.svg'
import {Link} from 'react-router-dom'
import Menu from './Menu'

export default function Cabecalho(){
    const [estaVisivel, setEstaVisivel] = useState(false)
        
    const mostrar = () => {
        setEstaVisivel(!estaVisivel)
    }

    

    return (
        <div>
            <header className='header-pac'>
                <Link to='/painel-paciente'><img className='logo-painel' src={Logo} alt=''/></Link>
                <div className='barra' onClick={mostrar}>
                    <i class="fa-solid fa-bars"></i>
                </div>

                {/* <div className={classes}></div> */}
                <Menu visivel={estaVisivel}/>
            </header>
        </div>
    )
}