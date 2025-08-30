import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Logo from '../../componentes/Login/CaixaLogin/Logo.svg'


export default function SenhaAlterada(){

    return(
        <div>
            <div className='container AlterarSenha'>
                <img className='Logo' src={Logo}/>
                <div className='campo'>
                    <div className='campos'>                
                        <p><i class="fa-solid fa-circle-check"></i> Senha alterada com sucesso!</p>
                        <Link to='/' className='botao'>Voltar a página inicial</Link>
                </div>
                </div>
            </div>
        </div>
    )
}