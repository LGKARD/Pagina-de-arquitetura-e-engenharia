import Header from "../../components/header/header"
import Footer from "../../components/footer/footer"
import Button from "../../components/button/button"


function Home() {
    return (
        <>
            <Header />
            <h1>Home</h1>
            <p>Conteúdo</p>
            <Button buttonStyle="outline" arrow>Button</Button>
            <Footer />
        </>
    )
}

export default Home