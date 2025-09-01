import React, {useState} from 'react'
import { Link } from 'react-router-dom'


export default function Menu({visivel}){
    const classes = `menu ${visivel ? 'esconder' : ''}`
    const [estaVisivel, setEstaVisivel] = useState(false)
            
        const mostrar = () => {
            setEstaVisivel(!estaVisivel)
        }
    


    return (
        <div className={classes}>
            <Link to=''>Configurações</Link>
            <Link to='/painel-paciente/perfil'>Perfil</Link>
            <Link to='/'>Sair</Link>           
        </div>
    )
}