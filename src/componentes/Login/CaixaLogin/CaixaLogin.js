import React, { use } from 'react'
import Logo from './Logo.svg'
import { useNavigate, Link } from 'react-router-dom'

export default function CaixaLogin(){
    const navigate = useNavigate()

    const fazerLogin = () => {
        let loginSucesso = false
        const usuario = document.querySelector('.Usuario').value
        const senha = document.querySelector('.Senha').value
        console.log(usuario)

        if(usuario === 'PAC-001' && senha === '123'){
            navigate('/painel-paciente')
        } else if (usuario === 'PRO-001' && senha === '123'){
            navigate('/painel-medico')
        } else if (usuario === 'ADM-001' && senha === '123'){
            navigate('/painel-administrativo')
        }
    }

    const alterarSenha = () => {
        const alterar = document.querySelector('.Alterar')
        navigate('/painel-administrativo')
    }

    return(
        <div className='CaixaLogin'>
            <img className='Logo' src={Logo} alt='aa'/>
            <div className='campo'>
            <div className='campos'>
                <input className='Usuario campo-login'  type='text'></input>
                <input className='Senha campo-login'  type='password'></input>
            </div>
                <button className='Entrar' onClick={fazerLogin}>Entrar</button>

            <Link to='/alterar-senha'>Esqueceu a senha?</Link>
            </div>
      
        </div>
    )
}