import Header from "../../components/header/header"
import Footer from "../../components/footer/footer"
import Banner from "../../components/banner/banner"
import ProjectsList from "../../components/projectsList/projectsList"

function Projects() {
    return (
        <>
            <Header />
            <Banner title="Projects" image="projects.jpg"/>
            <div className="container">
                <ProjectsList />
            </div>
            <Footer />
        </>
    )
}

export default Projects