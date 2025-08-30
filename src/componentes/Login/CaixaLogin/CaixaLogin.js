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

    return(
        <div className='CaixaLogin'>
            <img className='Logo' src={Logo} alt='aa'/>
            <div className='campo'>
                <div className='campos'>
                    <input className='Usuario campo-login'  type='text' placeholder='Usuário: PAC-001 ou PRO-001 ou ADM-001'></input>
                    <input className='Senha campo-login'  type='password' placeholder='Senha: 123'></input>
                </div>
                    <button className='botao' onClick={fazerLogin}>Entrar</button>

                <Link to='/enviar-codigo'>Esqueceu a senha?</Link>
            </div>
      
        </div>
    )
}