import {Routes, Route} from 'react-router-dom'
import Login from './componentes/Login/Login.js'
import Paciente from './componentes/PainelPac/PainelPac.js'
import Profissional from './componentes/PainelPro/PainelPro.js'
import Admnistrador from './componentes/PainelAdm/PainelAdm.js'
import AlterarSenha from './componentes/AlterarSenha/EnviarCodigo.js'
import Email from './componentes/AlterarSenha/VerificarCodigo.js'
import NovaSenha from './componentes/AlterarSenha/NovaSenha.js'
import SenhaAlterada from './componentes/AlterarSenha/SenhaAlterada.js'
import TelechamadaCodigo from './componentes/PainelPac/TelechamadaCodigo.js'
import Telechamada from './componentes/PainelPac/Telechamada.js'
import TelechamadaMedico from './componentes/PainelPro/Telechamada.js'
import Pacientes from './componentes/PainelPro/Pacientes.js'
import Leitos from './componentes/PainelAdm/Leitos.js'
import Financeiro from './componentes/PainelAdm/Financeiro.js'
import Suprimentos from './componentes/PainelAdm/Suprimentos.js'
import HistoricoClinico from './componentes/PainelPac/HistoricoClinico.js'
import Consultas from './componentes/PainelPac/Consultas.js'
import PacientePerfil from './componentes/PainelPac/PacientePerfil.js'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/painel-paciente' element={<Paciente/>}/>
        <Route path='/enviar-codigo' element={<AlterarSenha/>}/>
        <Route path='/verificar-codigo' element={<Email/>}/>
        <Route path='/nova-senha' element={<NovaSenha/>}/>
        <Route path='/senha-alterada' element={<SenhaAlterada/>}/>
        <Route path='/painel-paciente/telechamada-codigo' element={<TelechamadaCodigo/>}/>
        <Route path='/painel-paciente/telechamada' element={<Telechamada/>}/>
        <Route path='/painel-paciente/historico-clinico' element={<HistoricoClinico/>}/>
        <Route path='/painel-paciente/consultas' element={<Consultas/>}/>
        <Route path='/painel-paciente/perfil' element={<PacientePerfil/>}/>
        
        <Route path='/painel-medico' element={<Profissional/>}/>
        <Route path='/painel-medico/telechamada' element={<TelechamadaMedico/>}/>
        <Route path='/painel-medico/pacientes' element={<Pacientes/>}/>

        <Route path='/painel-administrativo' element={<Admnistrador/>}/>
        <Route path='/painel-administrativo/leitos' element={<Leitos/>}/>
        <Route path='/painel-administrativo/suprimentos' element={<Suprimentos/>}/>
        <Route path='/painel-administrativo/financeiro' element={<Financeiro/>}/>
      </Routes>
    </div>
  )
}

export default App;
