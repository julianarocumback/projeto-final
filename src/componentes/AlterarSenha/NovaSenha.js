import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Logo from '../../componentes/Login/CaixaLogin/Logo.svg'


export default function NovaSenha(){

    return(
        <div>
            <div className='container AlterarSenha'>
            <img className='Logo' src={Logo}/>
            <div className='campo'>
                <div className='campos'>                
                    <input className='campo-login' type='password' placeholder='Digite a nova senha'/>
                    <input className='campo-login' type='password' placeholder='Digite a nova senha novamente'/>
                    <Link to='/senha-alterada' className='botao'>Confirmar</Link>
            </div>
                <Link to='/'>Voltar a tela inicial</Link>
            </div>
        </div>
            <Link to='/alterar-senha'>ewaea</Link>
        </div>
    )
}