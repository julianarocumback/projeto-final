import {Routes, Route} from 'react-router-dom'
import Login from './componentes/Login/Login.js'
import Paciente from './componentes/PainelPac/PainelPac.js'
import Profissional from './componentes/PainelPro/PainelPro.js'
import Admnistrador from './componentes/PainelAdm/PainelAdm.js'
import AlterarSenha from './componentes/AlterarSenha/EnviarCodigo.js'
import Email from './componentes/AlterarSenha/VerificarCodigo.js'
import NovaSenha from './componentes/AlterarSenha/NovaSenha.js'
import SenhaAlterada from './componentes/AlterarSenha/SenhaAlterada.js'
import Telechamada from './componentes/PainelPac/Telechamada.js'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/painel-paciente' element={<Paciente/>}/>
        <Route path='/painel-medico' element={<Profissional/>}/>
        <Route path='/painel-administrativo' element={<Admnistrador/>}/>
        <Route path='/enviar-codigo' element={<AlterarSenha/>}/>
        <Route path='/verificar-codigo' element={<Email/>}/>
        <Route path='/nova-senha' element={<NovaSenha/>}/>
        <Route path='/senha-alterada' element={<SenhaAlterada/>}/>
        <Route path='/painel-paciente/telechamada' element={<Telechamada/>}/>
      </Routes>
    </div>
  )
}

export default App;
