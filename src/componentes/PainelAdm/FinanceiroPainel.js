import React from 'react'
import {Link, useNavigate} from 'react-router-dom'


export default function FinanceiroPainel() {
    let navigate = useNavigate()

    let acessarLeitos = () => {
        navigate('/painel-administrativo/financeiro')
    }

    return(
        <div onClick={acessarLeitos} className='financeiro-painel'>
            <p>547.329,50</p>
            <h3>Faturamento mensal</h3>
        </div>
    )
}