import { Link } from "react-router-dom"

//ASSETS
import './footer.css'
import BrasilIcon from '../../assets/brazil-icon.svg'
import UsaIcon from '../../assets/usa-icon.svg'
import FacebookIcon from '../../assets/facebook-icon.svg'
import TwitterIcon from '../../assets/twitter-icon.svg'
import LinkedinIcon from '../../assets/linkedin-icon.svg'
import InstagramIcon from '../../assets/instagram-icon.svg'
import Logo from '../../assets/dnc-logo 2.svg'

function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="d-flex jc-between">
                    <div className="footer-logo-col">
                        <img src={Logo} alt="" />
                        <p className="grey-1-color">A escola que prepara você para as profissões em alta no mercado de trabalho.</p>
                        <div className="d-flex social-links">
                            <a href="#" target="_blank">
                                <img src={FacebookIcon} />
                            </a>
                            <a href="#" target="_blank">
                                <img src={TwitterIcon} />
                            </a>
                            <a href="#" target="_blank">
                                <img src={LinkedinIcon} />
                            </a>
                            <a href="#" target="_blank">
                                <img src={InstagramIcon} />
                            </a>
                        </div>
                    </div>

                </div>

            </div>
        </footer>
    )
}

export default Footer