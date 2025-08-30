import React from 'react'
import {Link, useNavigate} from 'react-router-dom'


export default function LeitosPainel() {
    let navigate = useNavigate()

    let acessarLeitos = () => {
        navigate('/painel-administrativo/leitos')
    }

    return(
        <div onClick={acessarLeitos} className='leitos-painel'>
            <p>5/50</p>
            <h3>Leitos disponíveis</h3>
        </div>
    )
}