import { Link } from 'react-router-dom'
import './hero.css'
import Button from '../button/button'


function Hero() {
    return (
        <div className='hero d-flex al-center'>
            <div className='hero-txt'>
                <h1>Let Your Home 
                Be Unique</h1>
                <p>There are many variations of the passages of
                lorem Ipsum fromavailable, majority.</p>
                <Link>
                <Button buttonStyle="secondary" arrow>Get Started</Button>
                </Link>
            </div>
        </div>
    )
}

export default Hero