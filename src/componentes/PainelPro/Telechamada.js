import React from 'react'
import Cabecalho from './Cabecalho'
import { Link } from 'react-router-dom'



export default function TelechamadaCodigo () {
    return (
        <div className='telechamada'>
            <Cabecalho/>
            <div className='telechamada-corpo'>
                <div className='telechamada-principal'>
                    <h3>Teleconsulta</h3>
                    <div className='teleconsulta-botoes'>
                        <div className='video'></div>
                    </div>
                    <div></div>
                    <div className='telechamada-botao'>
                        <button className='tele-botao'><i class="fa-solid fa-microphone-lines"></i></button>
                        <button className='tele-botao'><i class="fa-solid fa-camera"></i></button>
                        <button className='tele-botao'><i class="fa-solid fa-clipboard"></i></button>
                        <button className='tele-botao'><i class="fa-solid fa-square-xmark"></i></button>
                    </div>
                </div>
            </div>
        </div>
    )
}