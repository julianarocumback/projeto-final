import React from 'react'
import { Link } from 'react-router-dom'

export default function ProximasConsultas(){
    return (
        <div className='proximas-consultas'>
            <h2>Próximas consultas</h2>
            <div className='container-consultas'>
                <div className='consulta'>
                    <div className='consulta-imagem1'>
                        <h3>Cardiologista</h3>
                        <h4>A distância</h4>
                        <p>02/08/2025<br/>às 09:00</p>
                    </div>
                    <div className='consulta-botao'>
                        <Link to='/'>Participar da telechamada</Link>
                    </div>
                </div>
                <div className='consulta consulta2'>
                    <div className='consulta-imagem2'>
                        <h3>Cardiologista</h3>
                        <h4>A distância</h4>
                        <p>02/08/2025<br/>às 09:00</p>
                    </div>
                    <div className='consulta-botao'>
                        <Link to='/'>Participar da telechamada</Link>
                    </div>

                </div>
            </div>
        </div>
    )
}