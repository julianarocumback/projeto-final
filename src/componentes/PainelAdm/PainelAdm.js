import React from 'react'
import Cabecalho from '../Cabecalho/Cabecalho'
import Painel from './PainelMenu'
import LeitosPainel from './LeitosPainel'
import SuprimentosPainel from './SuprimentosPainel'
import FinanceiroPainel from './FinanceiroPainel'

export default function PainelaDM(){

    return(
        <div className='painel-adm'>
            <div className='paineis'>
                <LeitosPainel/>
                <SuprimentosPainel/>
                <FinanceiroPainel/>
            </div>
            <Painel/>
        </div>
    )
}