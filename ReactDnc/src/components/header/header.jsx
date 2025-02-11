import { Link } from "react-router-dom"

//ASSETS
import './header.css'
import Logo from '../../assets/dnc-logo 2.svg'

function Header() {
    return (
        <header>
            <div className="container">
                <div className="al-center d-flex jc-between">
                    <Link to="/"><img src={Logo} alt="" /></Link>
                    <nav>
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