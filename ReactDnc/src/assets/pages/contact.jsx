import Header from "../../components/header/header"
import Footer from "../../components/footer/footer"
import Banner from "../../components/banner/banner"
import ContactForm from "../../components/contactForm/contactForm"
import { useContext } from 'react'

//CONTEXT
import { AppContext } from "../../components/contexts/appContext"

function Contact() {
    const appContext = useContext(AppContext);
    return (
        <>
            <Header />
            <Banner title={appContext.languages[appContext.language].menu.contact}  image="contact.jpg" />
            <div className="container">
                <ContactForm />
            </div>
            <Footer />
        </>
    )
}

export default Contact