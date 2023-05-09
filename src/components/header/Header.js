import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'
import '../../assets/simply-recipes-logo-vector.svg'
import Menu from './Menu/Menu'

const Header = () => {
    return (
        <div>
            <div className="header">
                <div className="header-logo">
                    {/* Link to home page */}
                    <Link to="/">
                        <img
                            src={require('../../assets/simply-recipes-logo-vector.svg').default}
                            alt="Simply Recipes Logo"
                        />
                    </Link>
                </div>
                <div className="header-menu">
                    <Menu />
                </div>
            </div>
        </div>
    )
}

export default Header
