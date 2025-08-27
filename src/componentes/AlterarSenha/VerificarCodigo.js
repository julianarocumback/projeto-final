import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Logo from '../../componentes/Login/CaixaLogin/Logo.svg'


export default function VerificarCodigo(){

    return(
        <div>
            <div className='container AlterarSenha'>
                <img className='Logo' src={Logo}/>
                <div className='campo'>
                    <div className='campos'>                
                        <input className='campo-login' type='text' placeholder='Digite o código'/>
                        {/* <button className='botao'>Redefinir senha</button> */}
                        <Link to='/nova-senha' className='botao'>Verificar código</Link>
                </div>
                    <Link to='/'>Voltar a tela inicial</Link>
                </div>
            </div>
        </div>
    )
}