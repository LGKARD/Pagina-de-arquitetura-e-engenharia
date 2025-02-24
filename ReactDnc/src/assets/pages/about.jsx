import Header from "../../components/header/header"
import Footer from "../../components/footer/footer"
import Banner from "../../components/banner/banner"
import AboutText from "../../components/aboutText/aboutText"

import { useContext } from 'react'

//CONTEXT
import { AppContext } from "../../components/contexts/appContext"

function About() {
    const appContext = useContext(AppContext);
    return (
        <>
            <Header />
            <Banner title={appContext.languages[appContext.language].menu.about} image="about.jpg"/>
            <div className="container">
                <AboutText/>
            </div>
            <Footer />
        </>
    )
}

export default About