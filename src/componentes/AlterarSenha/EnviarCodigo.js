import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Logo from '../../componentes/Login/CaixaLogin/Logo.svg'


export default function EnviarCodigo(){

    return(
        <div className='container AlterarSenha'>
            <img className='Logo' src={Logo}/>
            <div className='campo'>
                <div className='campos'>                
                    <input className='campo-login' type='email' placeholder='Email'/>
                    <Link to='/verificar-codigo' className='botao'>Enviar código</Link>
            </div>
                <Link to='/'>Voltar a tela inicial</Link>
            </div>
        </div>
    )
}