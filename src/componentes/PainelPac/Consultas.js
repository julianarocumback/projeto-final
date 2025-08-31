import React from 'react'
import Cabecalho from '../Cabecalho/Cabecalho'

export default function Consultas() {
    return (
        <div className='consultas'>
            <Cabecalho/>
            <div className='consultas-container'>
                <h3 className='consultas-titulo'>Consultas</h3>
                <div className='container-consultas-item'>
                    <div className='consultas-item'>
                        <p className='consultas-item-data'>02/07/2025</p>
                        <p className='consultas-item-nome'>Cardiologista</p>
                        <p className='consultas-item-modalidade'>A distância</p>
                    </div>
                    <div className='consultas-item'>
                        <p className='consultas-item-data'>07/08/2025</p>
                        <p className='consultas-item-nome'>Nutricionista</p>
                        <p className='consultas-item-modalidade'>A distância</p>
                    </div>
                    <div className='consultas-item'>
                        <p className='consultas-item-data'>15/08/2025</p>
                        <p className='consultas-item-nome'>Psicólogo</p>
                        <p className='consultas-item-modalidade'>A distância</p>
                    </div>
                    <div className='consultas-item'>
                        <p className='consultas-item-data'>17/01/2025</p>
                        <p className='consultas-item-nome'>Otorrinolaringologista</p>
                        <p className='consultas-item-modalidade'>Presencial</p>
                    </div>
                 
                </div>
            </div>
        </div>
    )
    
}