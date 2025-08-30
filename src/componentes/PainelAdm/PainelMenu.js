import React from 'react'
import {Link, useNavigate} from 'react-router-dom'

export default function Painel() {
    let navigate = useNavigate()

    let acessarHome = () => {
        navigate('/painel-administrativo/')
    }

    let acessarLeitos = () => {
        navigate('/painel-administrativo/leitos')
    }

    let acessarSuprimentos = () => {
        navigate('/painel-administrativo/suprimentos')
    }
    let acessarFinanceiro = () => {
        navigate('/painel-administrativo/financeiro')
    }


    return(
        <div className='painel-menu'>
            <div onClick={acessarHome}>
                <i class="fa-solid fa-house"></i>
            </div>
            <div onClick={acessarLeitos}>
                <i  class="fa-solid fa-bed"></i>
            </div>
            <div onClick={acessarSuprimentos}>
                <i class="fa-solid fa-layer-group"></i>
            </div>
            <div onClick={acessarFinanceiro}>
                <i class="fa-solid fa-chart-line"></i>
            </div>
            <div>
                <i class="fa-solid fa-bars"></i>
            </div>
        </div>
    )
}