import React from "react";
import Cabecalho from '../Cabecalho/Cabecalho'

export default function PacientePerfil(){
    return (
        <div className="paciente-perfil">
            <Cabecalho/>
            <div className="paciente-perfil-container">
                <h3 className="titulo-perfil-paciente">Perfil do paciente</h3>
                <div className="dados-perfil-paciente">

                    <div className="info-perfil-paciente">
                        <div className="info-perfil-paciente-container">
                            <input className="nome-perfil-paciente dado-paciente" placeholder='Maria'></input>
                            <input className="sobrenome-perfil-paciente dado-paciente" placeholder='da Silva'></input>
                        </div>

                        <div className="info-perfil-paciente-container">
                            <input className="cpf-perfil-paciente dado-paciente" placeholder='123.456.789-99'></input>
                            <input className="nascimento-perfil-paciente dado-paciente" placeholder='01/01/2000'></input>
                            <input className="genero-perfil-paciente dado-paciente" placeholder='F'></input>
                        </div>
                    </div>

                    <h3 className="titulo-perfil-paciente">Endereço</h3>
                    <div className="info-perfil-paciente">
                        <div className="info-perfil-paciente-container">
                            <input className="nome-perfil-paciente dado-paciente " placeholder='Rua das Flores, 123'></input>
                            <input className="sobrenome-perfil-paciente dado-paciente" placeholder='Jardim Primavera'></input>
                        </div>

                        <div className="info-perfil-paciente-container">
                            <input type="text" className="cpf-perfil-paciente dado-paciente" placeholder="12345-678"></input>
                            <input className="nascimento-perfil-paciente dado-paciente" placeholder="São Paulo"></input>
                            <input className="genero-perfil-paciente dado-paciente" placeholder='SP'></input>
                        </div>
                    </div>
                    <h3 className="titulo-perfil-paciente">Contato</h3>
                    <div className="info-perfil-paciente">
                        <div className="info-perfil-paciente-container">

                            <input className="nome-perfil-paciente dado-paciente" placeholder='+55'></input>
                            <input className="sobrenome-perfil-paciente dado-paciente" placeholder='11'></input>
                            <input className="sobrenome-perfil-paciente dado-paciente" placeholder='9 1234-5678'></input>
                        </div>

                        <div className="info-perfil-paciente-container">
                            <input className="cpf-perfil-paciente dado-paciente" placeholder='exemplo@email.com'></input>
                        </div>
                    </div>
                </div>
            <div className="botao botao-info-perfil">Atualizar</div>
            </div>


        </div>
    )
}