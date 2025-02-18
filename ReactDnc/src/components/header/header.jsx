import { useState } from "react"
import { Link } from "react-router-dom"

//ASSETS
import './header.css'
import Logo from '../../assets/dnc-logo 2.svg'

//COMPONENTS
import Button from "../button/button"

function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => setIsOpen(!isOpen)
    return (
        <header>
            <div className="container">
                <div className="al-center d-flex jc-between">
                    <Link to="/"><img src={Logo} alt="" /></Link>
                    <div className="mobile-menu">
                        <Button buttonStyle="secondary" onClick={toggleMenu}>Menu</Button>

                    </div>
                    <nav className={`${isOpen ? 'open' : ''}`}>
                        <Button buttonStyle="unstyled" className="mobile-menu close-btn" onClick={toggleMenu}>
                            X
                        </Button>
                        <ul className="d-flex">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/projects">Projects</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </nav>
                </div>

            </div>
        </header>
    )
}

export default Header