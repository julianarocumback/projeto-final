import React from 'react'
import Cabecalho from '../Cabecalho/Cabecalho'

export default function HistoricoClinico() {
    return (
        <div className='historico-clinico'>
            <Cabecalho/>
            <div className='historico-container'>
                <h3 className='historico-titulo'>Histórico clínico</h3>
                <div className='container-item'>
                    <div className='historico-item'>
                        <p className='historico-item-data'>12/05/2025</p>
                        <p className='historico-item-nome'>Cardiologista</p>
                        <p className='historico-item-modalidade'>Presencial</p>
                    </div>
                    <div className='historico-item'>
                        <p className='historico-item-data'>10/03/2025</p>
                        <p className='historico-item-nome'>Otorrinolaringologista</p>
                        <p className='historico-item-modalidade'>Presencial</p>
                    </div>
                    <div className='historico-item'>
                        <p className='historico-item-data'>28/02/2025</p>
                        <p className='historico-item-nome'>Dermatologista</p>
                        <p className='historico-item-modalidade'>Presencial</p>
                    </div>
                    <div className='historico-item'>
                        <p className='historico-item-data'>17/01/2025</p>
                        <p className='historico-item-nome'>Psicólogo</p>
                        <p className='historico-item-modalidade'>A distância</p>
                    </div>
                 
                </div>
            </div>
        </div>
    )
    
}