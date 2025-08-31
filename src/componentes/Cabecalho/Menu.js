import React from 'react'



export default function Menu({visivel}){

    const classes = `menu ${visivel ? 'esconder' : ''}`

    return (
        <div className={classes}>
            <p>sdada</p>

                {/* <Link to='/painel-paciente'><img className='logo-painel' src={Logo}/></Link> */}
           
        </div>
    )
}