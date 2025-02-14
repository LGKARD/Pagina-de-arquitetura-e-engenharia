import Header from "../../components/header/header"
import Footer from "../../components/footer/footer"
import Button from "../../components/button/button"
import Banner from "../../components/banner/banner"
import Hero from "../../components/hero/hero"


function Home() {
    return (
        <>
            <Header />
            <h1>Home</h1>
            <p>Conteúdo</p>
            <Button buttonStyle="outline" arrow>Button</Button>
            <div className="container">
                <Hero />
            </div>
            <Footer />
        </>
    )
}

export default Home