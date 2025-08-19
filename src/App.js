import {Routes, Route} from 'react-router-dom'
import Login from './componentes/Login/Login.js'
import Paciente from './componentes/PainelPac/PainelPac.js'
import Profissional from './componentes/PainelPro/PainelPro.js'
import Admnistrador from './componentes/PainelAdm/PainelAdm.js'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/painel-paciente' element={<Paciente/>}/>
        <Route path='/painel-medico' element={<Profissional/>}/>
        <Route path='/painel-administrativo' element={<Admnistrador/>}/>
      </Routes>
    </div>
  )
}

export default App;
