import React from 'react'
import CabecalhoPaciente from '../PainelPac/CabecalhoPaciente'
import {useNavigate, Link} from 'react-router-dom'



export default function TelechamadaCodigo () {
    let navigate = useNavigate()
    let verificarCodigo = () => {
        navigate('/painel-paciente/telechamada')
    }

    return (
        <div className='telechamada'>
            <CabecalhoPaciente/>
            <div className='telechamada-codigo-corpo'>
                <div className='telechamada-container'>
                    <h3>Teleconsulta</h3>
                    <div className='teleconsulta-botoes'>
                        <input type='text' className='campo-login' placeholder='Digite o código'></input>
                        <button onClick={verificarCodigo} className='botao'>Verificar código</button>
                    </div>
                </div>
            </div>
        </div>
    )
}