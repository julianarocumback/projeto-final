import React, { use } from 'react'
import Cabecalho from './Cabecalho'
import { Link, useNavigate } from 'react-router-dom'


export default function Pacientes (){
    let navigate = useNavigate()

    let menu_paciente = () => {
        navigate('/')
    }


    return (
        <div className='pacientes'>
            <Cabecalho/>
            <div className='container-pacientes'>
                <h2>Pacientes</h2>
                <div>
                    <div className='pacientes-menu'>
                        <p className='id'>ID</p>
                        <p className='nome'>Nome</p>
                        <p className='cpf'>CPF</p>
                    </div>
                    <hr/>
                    <div className='lista-pacientes'>
                        <div className='paciente'>
                            <p className='id'>0001</p>
                            <p className='nome'>Mariana Duarte</p>
                            <p className='cpf'>111.222.333-00</p>
                        </div>
                        <div className='paciente'>
                            <p className='id'>0002</p>
                            <p className='nome'>Lucas Ferraz</p>
                            <p className='cpf'>222.444.888-00</p>
                        </div>
                        <div className='paciente'>
                            <p className='id'>0003</p>
                            <p className='nome'>Ana Beatriz Lemos</p>
                            <p className='cpf'>111.111.111-11</p>
                        </div>
                        <div className='paciente'>
                            <p className='id'>0004</p>
                            <p className='nome'>Ricardo Salles</p>
                            <p className='cpf'>555.999.333-00</p>
                        </div>
                        <div className='paciente'>
                            <p className='id'>0005</p>
                            <p className='nome'>Camila Monteiro</p>
                            <p className='cpf'>999.111.888-00</p>
                        </div>
                        <div className='paciente'>
                            <p className='id'>0006</p>
                            <p className='nome'>Thiago Carvalho</p>
                            <p className='cpf'>777.111.333-00</p>
                        </div>
                        <div onClick={menu_paciente}  className='paciente paciente-selecionado'>
                            <p className='id'>0007</p>
                            <p className='nome'> Maria da Silva</p>
                            <p className='cpf'>123.456.789-00</p>
                        </div>
                        <div className='paciente'>
                            <p className='id'>0008</p>
                            <p className='nome'>Fernanda Nogueira</p>
                            <p className='cpf'>444.333.222-00</p>
                        </div>
                        <div className='paciente'>
                            <p className='id'>0009</p>
                            <p className='nome'>Pedro Alencar</p>
                            <p className='cpf'>777.555.222-00</p>
                        </div>
                        <div className='paciente'>
                            <p className='id'>0010</p>
                            <p className='nome'>Isabela Moura</p>
                            <p className='cpf'>333.222.444-00</p>
                        </div>
                        <div className='paciente'>
                            <p className='id'>0011</p>
                            <p className='nome'>Rafael Coutinho</p>
                            <p className='cpf'>555.333.222-00</p>
                        </div>
                        <div className='paciente'>
                            <p className='id'>0012</p>
                            <p className='nome'>Larissa Prado</p>
                            <p className='cpf'>111.222.333-00</p>
                        </div>
                        <div className='paciente'>
                            <p className='id'>0013</p>
                            <p className='nome'>André Martins</p>
                            <p className='cpf'>444.555.777-00</p>
                        </div>
                        <div className='paciente'>
                            <p className='id'>0014</p>
                            <p className='nome'>Júlia Tavares</p>
                            <p className='cpf'>777.888.999-00</p>
                        </div>
                        <div className='paciente'>
                            <p className='id'>0015</p>
                            <p className='nome'>Clara Mendonça</p>
                            <p className='cpf'>999.888.777-00</p>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}