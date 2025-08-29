import React from 'react'
import Logo from './logo-painel.svg'
import {Link} from 'react-router-dom'
import ProximasConsultas from './ProximasConsultas'
import ServicosDisponiveis from './ServicosDisponiveis'



export default function MainPaciente(){
    return (
        <div className='MainPaciente'>
            <ProximasConsultas/>
            <ServicosDisponiveis/>
        </div>
    )
}