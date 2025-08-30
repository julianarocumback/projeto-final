import React from 'react'
import Cabecalho from '../Cabecalho/Cabecalho'
import MainPaciente from '../PainelPac/MainPaciente'

export default function PainelPac(){

    return(
        <div className='PainelPac'>
            <Cabecalho/>
            <MainPaciente/>
        </div>
    )
}