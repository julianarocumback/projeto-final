import React from 'react'
import { Link } from 'react-router-dom'


export default function Menu({visivel}){

    const classes = `menu ${visivel ? 'esconder' : ''}`

    return (
        <div className={classes}>
            <div>
                <i class="fa-solid fa-xmark"></i>
            </div>
            <Link to=''>Configurações</Link>
            <Link to='/painel-paciente/perfil'>Perfil</Link>
            <Link to='/'>Sair</Link>

                {/* <Link to='/painel-paciente'><img className='logo-painel' src={Logo}/></Link> */}
           
        </div>
    )
}