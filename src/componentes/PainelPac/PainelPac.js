import React from 'react'
import CabecalhoPaciente from '../PainelPac/CabecalhoPaciente'
import MainPaciente from '../PainelPac/MainPaciente'

export default function PainelPac(){

    return(
        <div className='PainelPac'>
            <CabecalhoPaciente/>
            <MainPaciente/>
        </div>
    )
}