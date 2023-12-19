import React from 'react'
import './style.css'
import { BsPersonAdd, BsListUl  } from "react-icons/bs";
import logo from '../../assets/logo_senai.png'


function Menu(props) {
    return (
        <div className='side-menu-container'>
            <img src={logo} alt="logotipo do senai" className='img-logo'/>
            <div className="menu-row" onClick={() => props.setFunction(true)}>
            <BsPersonAdd color='#fff' />
                <p>Cadastrar Professor</p>
            </div>
            <div className="menu-row" onClick={() => props.setFunction(false)}>
            <BsListUl color='#fff'/>
                <p>Visualizar Professores</p>
            </div>
        </div>
    )
}

export default Menu