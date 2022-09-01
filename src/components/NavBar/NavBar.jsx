import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
import './styles.css'

const NavBar = () => {

    return (
        <nav className='navbar'>
            <div className='nav-left'>
                <div className='nav-left__items'>
                    <div className='menu-items'>
                        <GiHamburgerMenu size={30} /><span className='menu-text'>MENU</span>
                    </div>
                    <input className='search-input' type='text' placeholder='Buscar' />
                </div>
            </div>
            <div className='nav-center'>
                <h1 className='nav-center__title'>LA NACION</h1>
            </div>
            <div className='nav-right'>
                <div className='nav-right__items'>
                    <button>Subscribite</button>
                    <button>Ingresar</button>
                </div>
            </div>
            <hr />
        </nav>
    )
}

export default NavBar