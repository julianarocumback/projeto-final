import React from 'react'
import CabecalhoPaciente from '../PainelPac/CabecalhoPaciente'
import MainPaciente from '../PainelPac/MainPaciente'
import Menu from '../PainelPac/Menu'


export default function PainelPac(){

    return(
        <div className='PainelPac container'>
            <CabecalhoPaciente/>
            <MainPaciente/>
            <Menu/>
        </div>
    )
}