import React from 'react'
import './Login.css'
import Banner from './Banner/Banner'
import CaixaLogin from './CaixaLogin/CaixaLogin'

export default function Login(){
    return (
        <div className='Login container'>
            <Banner/>
            <CaixaLogin/>
        </div>
    )
}