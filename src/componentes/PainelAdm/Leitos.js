import React from 'react'
import Painel from './PainelMenu'

export default function Leitos(){
    return (
    <div className='painel-adm'>
        <div className='container-leitos'>
                <div className='container-leitos-menu'>
                    <h2>Leitos</h2>
                    <div className='adicionar-leitos'><i class="fa-solid fa-square-plus"></i></div>

                </div>
                <div>
                    <div className='leitos-menu'>
                        <p className='numero-leito'>Nº</p>
                        <p className='nome-leito'>Nome</p>
                        <p className='internacao-leito'>Internação</p>
                    </div>
                    <hr/>
                    <div className='lista-leitos'>
                        <div className='paciente'>
                            <p className='numero-leito'>01</p>
                            <p className='nome-leito'>Ana Beatriz da Silva</p>
                            <p className='internacao-leito'>05/08/2025</p>
                        </div>
                        <div className='paciente'>
                            <p className='numero-leito'>02</p>
                            <p className='nome-leito'>João Pedro Almeida</p>
                            <p className='internacao-leito'>01/08/2025</p>
                        </div>
                        <div className='paciente'>
                            <p className='numero-leito'>03</p>
                            <p className='nome-leito'>Mariana Oliveira Santos</p>
                            <p className='internacao-leito'>10/08/2025</p>
                        </div>
                        <div className='paciente'>
                            <p className='numero-leito'>04</p>
                            <p className='nome-leito'>Carlos Eduardo Pereira</p>
                            <p className='internacao-leito'>03/08/2025</p>
                        </div>
                        <div className='paciente'>
                            <p className='numero-leito'>05</p>
                            <p className='nome-leito'>Fernanda Gomes Rocha</p>
                            <p className='internacao-leito'>09/08/2025</p>
                        </div>
                        <div className='paciente'>
                            <p className='numero-leito'>06</p>
                            <p className='nome-leito'>Rafael Monteiro Lima</p>
                            <p className='internacao-leito'>15/08/2025</p>
                        </div>
                        <div  className='paciente paciente-selecionado-leito'>
                            <p className='numero-leito'>07</p>
                            <p className='nome-leito'>Camila Barbosa Nunes</p>
                            <p className='internacao-leito'>21/08/2025</p>
                        </div>
                        <div className='paciente'>
                            <p className='numero-leito'>08</p>
                            <p className='nome-leito'>Thiago Martins Costa</p>
                            <p className='internacao-leito'>15/07/2025</p>
                        </div>
                        <div className='paciente'>
                            <p className='numero-leito'>09</p>
                            <p className='nome-leito'>Larissa Mendes Faria</p>
                            <p className='internacao-leito'>07/08/2025</p>
                        </div>
                        <div className='paciente'>
                            <p className='numero-leito'>10</p>
                            <p className='nome-leito'>Felipe Cardoso Moura</p>
                            <p className='internacao-leito'>21/08/2025</p>
                        </div>
                        <div className='paciente'>
                            <p className='numero-leito'>11</p>
                            <p className='nome-leito'>Patrícia Alves Ramos</p>
                            <p className='internacao-leito'>28/08/2025</p>
                        </div>
                        <div className='paciente'>
                            <p className='numero-leito'>12</p>
                            <p className='nome-leito'>Guilherme Duarte Souza</p>
                            <p className='internacao-leito'>08/08/2025</p>
                        </div>
                        <div className='paciente'>
                            <p className='numero-leito'>13</p>
                            <p className='nome-leito'>Juliana Castro Pires</p>
                            <p className='internacao-leito'>05/08/2025</p>
                        </div>
                        <div className='paciente'>
                            <p className='numero-leito'>14</p>
                            <p className='nome-leito'>André Luiz Carvalho</p>
                            <p className='internacao-leito'>01/08/2025</p>
                        </div>
                        <div className='paciente'>
                            <p className='numero-leito'>15</p>
                            <p className='nome-leito'>Cláudia Regina Melo</p>
                            <p className='internacao-leito'>10/08/2025</p>
                        </div>
                        <div className='paciente'>
                            <p className='numero-leito'>16</p>
                            <p className='nome-leito'>Ricardo Fonseca Braga</p>
                            <p className='internacao-leito'>03/08/2025</p>
                        </div>
                        <div className='paciente'>
                            <p className='numero-leito'>17</p>
                            <p className='nome-leito'>Isabela Mourão Torres</p>
                            <p className='internacao-leito'>09/08/2025</p>
                        </div>
                        <div className='paciente'>
                            <p className='numero-leito'>18</p>
                            <p className='nome-leito'>Vinícius Rocha Santana</p>
                            <p className='internacao-leito'>15/08/2025</p>
                        </div>
                        <div className='paciente'>
                            <p className='numero-leito'>19</p>
                            <p className='nome-leito'>Aline Freitas Campos</p>
                            <p className='internacao-leito'>21/08/2025</p>
                        </div>
                        <div className='paciente'>
                            <p className='numero-leito'>20</p>
                            <p className='nome-leito'>Eduardo Vasconcelos Prado</p>
                            <p className='internacao-leito'>15/07/2025</p>
                        </div>
                        <div className='paciente'>
                            <p className='numero-leito'>21</p>
                            <p className='nome-leito'>Roberta Lima Guimarães</p>
                            <p className='internacao-leito'>07/08/2025</p>
                        </div>
                        <div className='paciente'>
                            <p className='numero-leito'>22</p>
                            <p className='nome-leito'>Bruno Henrique Moraes</p>
                            <p className='internacao-leito'>21/08/2025</p>
                        </div>
                        <div className='paciente'>
                            <p className='numero-leito'>23</p>
                            <p className='nome-leito'>Sofia Marques Bastos</p>
                            <p className='internacao-leito'>28/08/2025</p>
                        </div>
                        <div className='paciente'>
                            <p className='numero-leito'>24</p>
                            <p className='nome-leito'>Paulo Sérgio Moreira</p>
                            <p className='internacao-leito'>15/08/2025</p>
                        </div>
                        <div className='paciente'>
                            <p className='numero-leito'>25</p>
                            <p className='nome-leito'>Gustavo Azevedo Lopes</p>
                            <p className='internacao-leito'>21/08/2025</p>
                        </div>
                        <div className='paciente'>
                            <p className='numero-leito'>26</p>
                            <p className='nome-leito'>Tatiane Carvalho Moura</p>
                            <p className='internacao-leito'>15/07/2025</p>
                        </div>
                        <div className='paciente'>
                            <p className='numero-leito'>27</p>
                            <p className='nome-leito'>Marcelo Tavares Pinto</p>
                            <p className='internacao-leito'>07/08/2025</p>
                        </div>
                        <div className='paciente'>
                            <p className='numero-leito'>28</p>
                            <p className='nome-leito'>Carolina Dias Vasques</p>
                            <p className='internacao-leito'>21/08/2025</p>
                        </div>
                        <div className='paciente'>
                            <p className='numero-leito'>29</p>
                            <p className='nome-leito'>Cláudia Regina Melo</p>
                            <p className='internacao-leito'>28/08/2025</p>
                        </div>
                        <div className='paciente'>
                            <p className='numero-leito'>30</p>
                            <p className='nome-leito'>Rodrigo Nascimento Alves</p>
                            <p className='internacao-leito'>08/08/2025</p>
                        </div>
                    </div>
                </div>
            </div>
        <Painel/>
    </div>
    )
}