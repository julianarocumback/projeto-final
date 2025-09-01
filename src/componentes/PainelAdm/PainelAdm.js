import React from 'react'
import Painel from './PainelMenu'
import LeitosPainel from './LeitosPainel'
import SuprimentosPainel from './SuprimentosPainel'
import FinanceiroPainel from './FinanceiroPainel'
import PainelDesktop from './PainelDesktop'

export default function PainelaDM(){

    return(
        <div className='painel-adm'>
            <div className='paineis'>
                <PainelDesktop/>
                <div className='todos-paineis'>
                    <LeitosPainel/>
                    <SuprimentosPainel/>
                    <FinanceiroPainel/>
                </div>
            </div>
            <Painel/>
        </div>
    )
}