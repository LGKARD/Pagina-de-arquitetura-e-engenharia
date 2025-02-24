import { Link } from 'react-router-dom'
import './hero.css'
import Button from '../button/button'
import { useContext } from 'react'

//CONTEXT
import { AppContext } from "../contexts/appContext"
function Hero() {
    const appContext = useContext(AppContext);
    return (
        <div className='hero d-flex al-center'>
            <div className='hero-txt'>
                <h1>{appContext.languages[appContext.language].hero.title}</h1>
                <p>{appContext.languages[appContext.language].hero.subtitle}</p>
                <Link>
                <Button buttonStyle="secondary" arrow>{appContext.languages[appContext.language].hero.cta}</Button>
                </Link>
            </div>
        </div>
    )
}

export default Hero