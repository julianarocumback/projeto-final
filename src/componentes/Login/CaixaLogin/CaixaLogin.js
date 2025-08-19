import React, { use } from 'react'
import Logo from './Logo.svg'
import { useNavigate } from 'react-router-dom'

export default function CaixaLogin(){
    const navigate = useNavigate()

    const fazerLogin = () => {
        const loginSucesso = true
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

    return(
        <div className='CaixaLogin'>
            <img className='Logo' src={Logo} alt='aa'/>
            <div className='campo'>
            <div className='campos'>
                <input className='Usuario campo-login'  type='text'></input>
                <input className='Senha campo-login'  type='text'></input>
            </div>
                <button className='Entrar' onClick={fazerLogin}>Entrar</button>

            <a href='https://google.com'>Esqueceu a senha?</a>
            </div>
      
        </div>
    )
}