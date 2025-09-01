import React, {useState} from 'react'
import Logo from './logo-painel.svg'
import {Link, useNavigate} from 'react-router-dom'
import Menu from '../Cabecalho/Menu'

export default function Cabecalho(){
    const navigate = useNavigate()
    const [estaVisivel, setEstaVisivel] = useState(false)
        
    const mostrar = () => {
        setEstaVisivel(!estaVisivel)
    }

    const sair = () => {
        navigate('/')
    }

    return (
        <div>
            <header className='header-pac'>
                <Link to='/painel-medico'><img className='logo-painel' src={Logo} alt=''/></Link>
                <div className='barra' onClick={mostrar}>
                    <i class="fa-solid fa-bars"></i>
                </div>
                <Menu visivel={estaVisivel}/>
                <div className='menu-paciente'>
                    <div className='menu-perfil-paciente'>
                        <i class="fa-solid fa-circle-user"></i>
                        <div>ADM-001</div>
                    </div>
                    <div className='paciente-separador'></div>
                    <div onClick={sair} className='sair'><i class="fa-solid fa-power-off"></i></div>
                </div>
            </header>
        </div>
    )
}