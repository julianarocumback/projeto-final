import React from 'react'
import Logo from './logo-painel.svg'
import { useNavigate, Link } from 'react-router-dom'



export default function CabecalhoPaciente(){
    return (
        <div>
            <header className='header-pac'>
                <Link to='/painel-paciente'><img className='logo-painel' src={Logo}/>
                </Link>
                <div>
                    <i class="fa-solid fa-bars"></i>
                </div>
            </header>
        </div>
    )
}