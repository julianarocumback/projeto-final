import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function ServicosDisponiveis(){
    let navigate = useNavigate()

    let consultas = () => {
        navigate('/')
    }

    let servicos = () => {
        navigate('/')
    }

    return (
        <div className='servicos-disponiveis'>
            <h2>Serviços disponiveis</h2>
            <div className='container-consultas'>
                <div on onClick={consultas} className='consulta'>
                    <div className='servicos-imagem1'>
                        <h3>Consultas</h3>
                        <p>- Agendar</p>
                        <p>- Cancelar </p>
                        <p>- Visualizar</p>
                    </div>
                </div>
                <div on onClick={consultas} className='consulta consulta2'>
                    <div className='servicos-imagem2'>
                        <h3>Histórico Clínico</h3>
                        <p>- Visualizar</p>
                    </div>
                </div>
            </div>
        </div>
    )
}