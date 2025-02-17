import Header from "../../components/header/header"
import Footer from "../../components/footer/footer"
import Banner from "../../components/banner/banner"
import AboutText from "../../components/aboutText/aboutText"

function About() {
    return (
        <>
            <Header />
            <Banner title="About" image="about.jpg"/>
            <div className="container">
                <AboutText/>
            </div>
            <Footer />
        </>
    )
}

export default About