import Header from "../../components/header/header"
import Footer from "../../components/footer/footer"
import Hero from "../../components/hero/hero"
import ProjectsList from "../../components/projectsList/projectsList"


function Home() {
    return (
        <>
            <Header />
            <div className="container">
                <Hero />
                <ProjectsList />
            </div>
            <Footer />
        </>
    )
}

export default Home