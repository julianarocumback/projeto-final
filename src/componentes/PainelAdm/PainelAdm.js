import React from 'react'
import Cabecalho from '../Cabecalho/Cabecalho'
import Painel from './PainelMenu'
import LeitosPainel from './LeitosPainel'

export default function PainelaDM(){

    return(
        <div className='painel-adm'>
            <div className='paineis'>
                <LeitosPainel/>
                <LeitosPainel/>
                <LeitosPainel/>
            </div>
            <Painel/>
        </div>
    )
}