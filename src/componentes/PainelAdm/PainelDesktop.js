import React from 'react'
import Logo from '../Cabecalho/logo-painel.svg'
import { useNavigate } from 'react-router-dom'

export default function PainelDesktop(){
    const navigate = useNavigate()

    const sair = () => {
        navigate('/')
    }

    return (
    <div className='painel-desktop'>
        <div className=''>
           <img src='/Logo.svg'></img>
        </div>
        <div>Geral</div>
        <div>Unidades</div>
        <div>Profissionais</div>
        <div>Pacientes</div>
        <div onClick={sair} className='adm-perfil'>
            <div className='perfil-adm'><i class="fa-solid fa-circle-user"></i> 
            ADM-001
            <div className='paciente-separador'></div>
            <i class="fa-solid fa-power-off"></i>
            </div>
        </div>
    </div>
    )
}