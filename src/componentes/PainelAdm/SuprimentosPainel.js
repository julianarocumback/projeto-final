import React from 'react'
import {Link, useNavigate} from 'react-router-dom'


export default function SuprimentosPainel() {
    let navigate = useNavigate()

    let acessarSuprimentos = () => {
        navigate('/painel-administrativo/suprimentos')
    }

    return(
        <div onClick={acessarSuprimentos} className='suprimentos-painel'>
            <h3>Suprimentos acabando</h3>
            <div className='suprimentos-painel-info'>
                <div className='p-nome-produto'>Nome</div>
                <div className='p-quantidade-produto'>Quantidade</div>
            </div>
            <hr></hr>

            <div className='suprimentos-painel-info-produto'>
                <div className='painel-info-produto'>
                    <div className='p-nome-produto'>Luvas</div>
                    <div className='p-quantidade-produto pouco'>10</div>
                </div>
                <div className='painel-info-produto' >
                    <div className='p-nome-produto' >Agulhas</div>
                    <div className='p-quantidade-produto pouco'>8</div>
                </div>
                <div className='painel-info-produto'>
                    <div className='p-nome-produto'>Toucas</div>
                    <div className='p-quantidade-produto pouco'>3</div>
                </div>
            </div>
           
        </div>
    )
}