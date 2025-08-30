import React from 'react'
import { Link } from 'react-router-dom'

export default function ServicosDisponiveis(){
    return (
        <div className='servicos-disponiveis'>
            <h2>Serviços disponiveis</h2>
            <div className='container-consultas'>
                <div className='consulta'>
                    <div className='servicos-imagem1'>
                        <h3>Consultas</h3>
                        <p>- Agendar</p>
                        <p>- Cancelar </p>
                        <p>- Visualizar</p>
                    </div>
                    <div className='consulta-botao'>
                        <Link to='/'>Participar da telechamada</Link>
                    </div>
                </div>
                <div className='consulta consulta2'>
                    <div className='servicos-imagem2'>
                        <h3>Histórico Clínico</h3>
                        <p>- Visualizar</p>
   
                    </div>
                    <div className='consulta-botao'>
                        <Link to='/'>Participar da telechamada</Link>
                    </div>

                </div>
            </div>
        </div>
    )
}