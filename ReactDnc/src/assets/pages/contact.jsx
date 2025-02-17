import Header from "../../components/header/header"
import Footer from "../../components/footer/footer"
import Banner from "../../components/banner/banner"
import ContactForm from "../../components/contactForm/contactForm"

function Contact() {
    return (
        <>
            <Header />
            <Banner title="Contact" image="contact.jpg" />
            <div className="container">
                <ContactForm />
            </div>
            <Footer />
        </>
    )
}

export default Contact